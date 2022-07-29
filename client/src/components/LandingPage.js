import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/LandingPage.css"
export default function LandingPage() {
  return (
    <div className='contain'>
        <h1 className='titulo'>Bienvenidos a mi Recetario</h1>
    
    <Link to="/home">
    <button className='button'> Recetario </button>
    </Link>
    </div>
    
    );

}
