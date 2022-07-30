import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/LandingPage.css"
export default function LandingPage() {
  return (
    <div className='contain'>
           
    <Link to="/home">
    <button className='learn-more'>
       <span className='circle' arial-hidden='true'>
        <span className='icon arrow'></span>
        </span> 
        <span className='button-text'> Recetario</span>  
       </button>
    </Link>
    </div>
    
    );

}
