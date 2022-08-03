import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import {getRecipes, onSearchName} from "../actions/index"
import "../Styles/OnSearch.css"
import { Link } from 'react-router-dom';

function validate(name){
  let error = {};
  if(!name || isNaN(name) !== true){
   error.name = 'Require a Recipe'                             
  }
  return error;
};

export default function OnSearch({setCurrentPage}) {
const [error, setError] = useState({})
const [name, setName] = useState("");
const dispatch = useDispatch();

function handleInputChange(e){
    e.preventDefault()
    setName(e.target.value)
}



function handleSubmit(e){
  e.preventDefault()
  setError()
  setError(validate(name))
  const validateError= validate(name)
  if(Object.values(validateError).length !== 0){
      alert('Please, require recipe')
  }else{
      dispatch(onSearchName(name))}
      setCurrentPage(1); 
      setName("");                                                                       
};


function handleReset(e){
e.preventDefault();
dispatch(getRecipes());
}

    return (
    <div className='input'>
      <input
        type = 'text'
        placeholder='Search Recipe'
        value={name}
        onChange={(e)=>{handleInputChange(e)}}
        />
        {<button className='btn' type='submit' onClick={(e)=>handleSubmit(e)}>Search</button>}
        <Link to="/recipe" >
      <button className='btn'>CREATE RECIPE</button>
      </Link> 
      <br/>
    <button className='btn' onClick={(e)=>handleReset(e)}>Reset</button>  
    
    </div>
    
  )
}
