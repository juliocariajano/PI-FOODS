import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRecipes, getTypes, alphabeticalSort, filterByDietType, scoreSort } from '../actions/index.js'
import {Link} from "react-router-dom"
import'../Styles/Filters.css'
export default function Filters({setFilter, setCurrentPage, allTypes}) {
  const dispatch =useDispatch();
  const allType = useSelector((state)=>state.types)
  
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
      e.preventDefault()
        dispatch(scoreSort(e.target.value))
        setCurrentPage(1)
      }

  
  useEffect(()=>{
    dispatch(getRecipes())
    dispatch(getTypes())
  },[dispatch])

  return (
    <div className='content'>
      <select 
      onChange={(e)=>handleScoreSort(e)}
       >
      <option hidden> Healthy Food         </option>
      {/* <option value='all' key='all'>All</option> */}
        <option value="scoremin">Less healthy</option>
        <option value="scoremax">Healthy Mus</option>
      
      </select>

      {/* <label>By Type</label> */}
      <select 
      onChange={e=> handleFilterByDietType(e)}
      >
      <option hidden > Types of Diet    </option>
      {/* <option value="all">All</option> */}
       {allType.map((e)=>{
        return <option key={e.name} value={e.name}>{e.name}</option>
      })} 
      
      </select> 

      {/* <label>Order By</label> */}
      <select onChange={(e)=>handleOrderBy(e)}>
      <option hidden>Alphabetical Order</option>
      {/* <option value='all' key='all'>All</option> */}
      <option value="ascendente" key='ascendente'>Ascendent A-Z</option>
      <option value="descendente" key='descendente'>Descendent Z-A</option>
      
      </select> 
     
   
      
    <hr/>
    
    
    </div>
  )
}
