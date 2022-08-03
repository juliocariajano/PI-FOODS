import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Card.css'
export default function Card({id, name, image ,dietTypes}) {
  
  return (
    
    <div className='card'>
      <div className='face front'>
      <img src={image} alt="img not found" />
      <h3>{name}</h3>
                
       
      </div>
      <div className='face back'>
      <h3>{name}</h3>
      <p>Diets:{dietTypes.map(e=>{return <div>{e}</div>})}</p> 

      <div className='link'>
      <Link to={`/home/${id}`}>
      <a> View Details</a>
      </Link>
      </div>
      </div>  
    </div>
    
  )
}
