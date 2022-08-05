import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { addRecipes, getTypes } from '../actions';
import "../Styles/CreateRecipe.css"


export default function CreateRecipe() {
const dispatch = useDispatch();
const history = useNavigate();
const type= useSelector(state => state.types);
const [input, setInput] = useState({
    name:'',
    summary:'',
    healthScore:'',
    steps:[],
    dietTypes: []
});

function handleChange(e){
    setInput({
        ...input,
        [e.target.name]:e.target.value
    })

};

function handleSelect(e){
    if(!input.dietTypes.includes(e.target.value))//evita que se duplique la eleccion tipo de dietas
    {
        setInput({
        ...input,
        dietTypes:[...input.dietTypes, e.target.value]
    })}
};

function handleSubmit(e){
    e.preventDefault()
 
    dispatch(addRecipes(input))
    alert('created')
    setInput({
        name:'',
        summary:'',
        healthScore: '',
        steps: [],
        dietTypes: []
    })
    setTimeout(function(){
    history('/home')
}, 5000)

}

function handleDelete(e){
    setInput({
        ...input,
        dietTypes: input.dietTypes.filter(t => t !== e)
    })
}

useEffect(()=>{
    dispatch(getTypes());
}, [dispatch]);

const alert = function(error){
    if (error !== 'undefined') {
      const mod = document.getElementById('alert')
      const modText = document.getElementById('content-text')
      if (error === 'created') {
        mod.style.cssText = 'display: flex; background-color: rgba(79, 240, 10, 0.87); min-height: 40px; width: 430px; border-radius: 50px; margin-top: 7px; padding: 20px;'
        modText.innerHTML = '<strong>¡Congratulations!</strong>. You created ' + `<strong>${input.name}</strong>`
        setTimeout(function(){
          mod.style.display='none'
        }, 5000)
      }else {
        mod.style.cssText = 'display: flex; background-color: rgba(240, 10, 10, 0.87); min-height: 40px; width: 430px; border-radius: 50px; margin-top: 7px; padding: 20px;'
        modText.innerHTML = '<strong>¡Stop!</strong>. No puedes dejar el ' + `${error}` + ' vacio. Por favor completa todas las campos'
        setTimeout(function(){
          mod.style.display='none'
        }, 3000)
      }
    }
  }

  const funcion = function(){
    let f = input;
    for(const e in f) {
      if (!f[e] || !f[e].length) {
        alert(e)
      }else {
        continue
      }break
    }
  }

return(
    <div className='general'>
    <div className='container'>
        <div className='box'>
            <div className='left'></div>
                <div className='right'>
        <h2>Creá tu receta</h2>
        <div className="content__alert" id='alert' style={{display: "none"}}>
         <div id='content-text' ></div>
      </div>
        <form onSubmit={(e)=>handleSubmit(e)}>
            
                <input
                className='field'
                type="text"
                placeholder="Nombre"
                value={input.name}
                name= "name"
                onChange={(e)=>handleChange(e)}
                />
                         
                <input
                className='field'
                type="text"
                placeholder="Resumen"
                value={input.summary}
                name= "summary"
                onChange={(e)=>handleChange(e)}
                />
                               
              <input
                className='field'
                 max={100}
                 min={0}
                
                type="number"
                placeholder="Valor saludable"
                value={input.healthScore}
                name= "healthScore"
                onChange={(e)=>handleChange(e)}
                />
                           
                <textarea
                className='field area'
                type="text"
                placeholder="Pasos"
                value={input.steps}
                name= "steps"
                onChange={(e)=>handleChange(e)}
                />
               
            <label>Agrega dieta(s) a la receta</label>
            <select onChange={(e)=>handleSelect(e)}>
                <option hidden>Seleccionar una o varios Tipos de Dieta</option>
                
                                    
                    {type.map((typ)=>(
                        <option value={typ.name}>{typ.name}</option>
                    ))}
               
            </select>
             {input.dietTypes.map(e=>
            <div>
                <spam onClick={()=>handleDelete(e)} >{e}{" "}</spam>
                <button key={e} className="textdelete" onClick={()=> handleDelete(e)}>{'==> X'}</button>
            </div>
            )}
        <div className='button-div' onMouseEnter={funcion}>
        <button 
        className='btnt' 
        type="submit"
        value= 'create'
        id="form-button"
        onClick={handleSubmit}
        disabled={
            !input.name ||
            !input.summary ||
            !input.healthScore ||
            !input.steps||
            !input.dietTypes.length    
        }
        >Crear receta</button>
        </div><br/>
        <></>
        <Link to='/home'><button className='btnt' >Volver</button></Link>
        </form>


        
        </div>
        </div>
        </div>
        </div>
)


}

