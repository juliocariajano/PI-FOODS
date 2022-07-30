import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRecipes, getTypes, alphabeticalSort, filterByDietType, scoreSort } from '../actions/index.js'
import {Link} from "react-router-dom"
import'../Styles/Filters.css'
export default function Filters({setFilter, setCurrentPage, allTypes}) {
  const dispatch =useDispatch();
 const [order, setOrder] = useState('');
const allType = useSelector((state)=>state.types)
  // const filterScore = useSelector((state)=>state.recipes)
  // console.log(allTypes)
  console.log(allType[0])
  function handleFilterByDietType(e){
    dispatch(filterByDietType(e.target.value))
    setCurrentPage(1)
   }
  function handleOrderBy(e){
    e.preventDefault()
      if(e.target.value !== 'all'){
        dispatch(alphabeticalSort(e.target.value))
        setCurrentPage(1)
        setFilter(e.target.value)
      }else{
        dispatch(getRecipes())
        setCurrentPage(1)
        setFilter(`Ordenado ${e.target.value}`);
      }
    }
    function handleScoreSort(e){
     // dispatch(scoreSort(e.target.value))
      e.preventDefault()
      // if(e.target.value !=='all'){
        //setOrder(e.target.value)
        //setCurrentPage(1)
        // setFilter(e.target.value)
      // }else{
        dispatch(scoreSort(e.target.value))
        setCurrentPage(1)
        // setFilter(`Ordenado ${e.target.value}`)
      }

    
     
  useEffect(()=>{
    dispatch(getRecipes())
    dispatch(getTypes())
  //  dispatch(scoreSort())

  },[dispatch])

  return (
    <div className='content'>
      {/* <label> By Score</label> */}
      <select 
      onChange={(e)=>handleScoreSort(e)}
       >
      <option hidden> Ordenado Comida Saludable</option>
      {/* <option value='all' key='all'>All</option> */}
        <option value="scoremin">Menor Nivel de comida Saludable</option>
        <option value="scoremax">Mayor Nivel de comida Saludable</option>
      
      </select>

      {/* <label>By Type</label> */}
      <select 
      onChange={e=> handleFilterByDietType(e)}
      >
      <option hidden > Ordenado Tipos de comida</option>
      <option value="all">All</option>
       {allType.map((e)=>{
        return <option key={e.name} value={e.name}>{e.name}</option>
      })} 
      
      </select> 

      {/* <label>Order By</label> */}
      <select onChange={(e)=>handleOrderBy(e)}>
      <option hidden>Ordenado Alfabeticamente</option>
      <option value='all' key='all'>All</option>
      <option value="ascendente" key='ascendente'>Ascendente A-Z</option>
      <option value="descendente" key='descendente'>Descendente Z-A</option>

      <option value=""></option>
      </select> 
     
   
      
    <hr/>
    
    
    </div>
  )
}
