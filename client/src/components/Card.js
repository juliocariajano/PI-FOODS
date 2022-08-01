import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Card.css'
export default function Card({id, name, image ,dietTypes, summary}) {
  return (
    
    <div className='card'>
      <div className='face front'>
      <img src={image} alt="img not found" />
      <h3>{name}</h3>
        
        
        {/* <h5>{dietTypes.map(e=>{return <div>{e}</div>})}</h5> */}
        {/* <h4>{score}</h4>
        <h4>{steps}</h4> */}
      </div>
      <div className='face back'>
      <h3>{name}</h3>
      {/* <p>{summary}</p> */}
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
