import React from 'react'
import Card from './Card'
import Paginate from './Paginate'
import "../Styles/Paginate.css"
import  "../Styles/Cards.css"
export default function Cards({ recipeByPage, recipes, paginate, currentRecipe, setCurrentPage,currentPage}) {
return (
    <div >
    <Paginate
    recipeByPage={recipeByPage}
    recipes={recipes.length}
    paginate={paginate}
    currentPage={currentPage}
    setCurrentPage={setCurrentPage}

    />
    <div className='gallery'>
    {currentRecipe.map((e)=>{
        return (
            
            <Card
            id={e.id}
            name={e.name}
            image={e.image}
            // summary={e.summary}
            dietTypes={e.dietTypes}
            // score={e.score}
            // steps={e.steps}
            />
            
            

        )
    })
    }
    
    </div>
    
    </div>
  )
}
