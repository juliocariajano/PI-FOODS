import React from 'react'
import "../Styles/Paginate.css"
export default function Paginate(
    {recipeByPage, 
    recipes, 
    paginate, 
    setCurrentPage, 
    currentPage,
    }
) {
  const PageNumber=[];
  let numPage = Math.ceil(recipes/recipeByPage );
  for(let i=1; i <= numPage; i++){
    PageNumber.push(i)
  }

    return (
    <div >
        <ul>
            <button onClick={()=>
            setCurrentPage(currentPage ===1 ? currentPage: currentPage-1)}>
            Prev</button>
            {PageNumber && PageNumber.map((number)=>(
            <button 
            key={number}
            onClick={()=> paginate(number)}>
                {number}
            </button>
            ))}
            <button onClick={()=> setCurrentPage(currentPage ===numPage? currentPage: currentPage + 1)}> Next</button>
        </ul>
    </div>
  )
}