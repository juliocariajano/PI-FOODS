import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import {onSearchName} from "../actions/index"
import "../Styles/OnSearch.css"
export default function OnSearch({setCurrentPage}) {
// const [msg, setMsg]= useState();
// const[currentPage, setCurrentPage]= useState();
const [name, setName] = useState("");
const dispatch = useDispatch();

function handleInputChange(e){
    e.preventDefault()
    setName(e.target.value)
    // setMsg('')
}
function handleSubmit(e){
    e.preventDefault()
    if(name){
        dispatch(onSearchName(name))
        setName('')
        // setMsg('')
        setCurrentPage(1)
    }else{
        alert('Please write a name');
    }
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
        {/* {msg.length > 0 && (<div> <p>{msg}</p></div>)} */}
    </div>
    
  )
}
