import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { addRecipes, getTypes } from '../actions';
import "../Styles/CreateRecipe.css"
function validate(input){
    let errors = {};
    if (!input.name || isNaN(input.name) === false) errors.name = 'Por favor complete el nombre de la receta';
    if (!input.summary) errors.summary = 'Por favor agregue algun comentrio ';
    if (input.score < 1 || input.score > 100) errors.score = 'El puntaje debe ser un valor entre 1 y 100';
    if (input.healthScore < 1 || input.healthScore > 100) errors.healthScore = 'El valor saludable debe ser un numero entre 1 y 100';
    if (!input.steps.length) errors.steps = 'Por favor, detalle los pasos a seguir de su receta';
    return errors;
}

export default function CreateRecipe() {
const dispatch = useDispatch();
const history = useNavigate();
const type= useSelector(state => state.types);
const [errors, setErrors] = useState({})
const [input, setInput] = useState({
    name:'',
    summary:'',
    score:'',
    healthScore:'',
    steps:[],
    dietTypes: []
});

function handleChange(e){
    setInput({
        ...input,
        [e.target.name]:e.target.value
    })
    setErrors(validate({
        ...input,
        [e.target.name]:e.target.value
    }))
};

function handleSelect(e){
    if(!input.dietTypes.includes(e.target.value)){
        setInput({
        ...input,
        dietTypes:[...input.dietTypes, e.target.value]
    })}
};

function handleSubmit(e){
    e.preventDefault()
    setErrors(validate(
        input
    ))
    const recotraError = validate(input)
    if(Object.values(recotraError).length !== 0 || !input.dietTypes.length){
        alert("Todos los campos deben estar llenos")
    }else{
    dispatch(addRecipes(input))
    alert("Receta creada correctamente!")
    setInput({
        name:'',
        summary:'',
        score: '',
        healthScore: '',
        steps: [],
        dietTypes: []
    })
    history('/home')
}
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

return(
    <div className='general'>
    <div className='container'>
        <div className='box'>
            <div className='left'></div>
                <div className='right'>
        <h2>Creá tu receta</h2>
        <form onSubmit={(e)=>handleSubmit(e)}>
            
                <input
                className='field'
                type="text"
                placeholder="Nombre"
                value={input.name}
                name= "name"
                onChange={(e)=>handleChange(e)}
                />
                {errors.name && (
                    <p >{errors.name}</p>
                )}
            
                <input
                className='field'
                type="text"
                placeholder="Resumen"
                value={input.summary}
                name= "summary"
                onChange={(e)=>handleChange(e)}
                />
                {errors.summary && (
                    <p >{errors.summary}</p>
                )}
                <input
                className='field'
                max={100}
                min={0}
            
                type="number"
                placeholder="Puntaje"
                value={input.score}
                name= "score"
                onChange={(e)=>handleChange(e)}
                />
                {errors.score && (
                    <p>{errors.score}</p>
                )}
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
                 {errors.healthScore && (
                    <p >{errors.healthScore}</p>
                )}
            
                <textarea
                className='field area'
                type="text"
                placeholder="Pasos"
                value={input.steps}
                name= "steps"
                onChange={(e)=>handleChange(e)}
                />
                {errors.steps && (
                    <p >{errors.steps}</p>
                )}
            <label>Agrega dieta(s) a la receta</label>
            <select onChange={(e)=>handleSelect(e)}>
                <option hidden>Seleccionar una o varios Tipos de Dieta</option>
                
                {!input.dietTypes.length && (
                    <p>{errors.dietTypes}</p>)}
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
        <div>
        <button className='btnt' type="submit">Crear receta</button>
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

