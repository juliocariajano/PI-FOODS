import React from 'react'
import {useSelector} from 'react-redux';
import { useState } from 'react';
import Navbar from './Navbar';
import Cards from './Cards';

import Loading from './loading';
import '../Styles/Home.css'

export default function Home() {
  
    const recipes = useSelector((state) => state.recipes);
    
    const loading = useSelector(state => state.loading )
    const[currentPage, setCurrentPage]= useState(1);
    const[recipeByPage]=useState(9);
    const [filter, setFilter]= useState('');
    let indexLastRecipe = currentPage * recipeByPage;
    let indexFirstRecipe = indexLastRecipe - recipeByPage;
    let currentRecipe = recipes.slice(indexFirstRecipe,indexLastRecipe);

    const paginate= (pageNumber) =>{
        setCurrentPage(pageNumber);
    }

   
  return (
    <div className='general'>
    <Navbar
    setCurrentPage={setCurrentPage}
    setFilter={setFilter}
    />
     {loading && <Loading/>} 
    <Cards
    recipeByPage={recipeByPage}
    recipes={recipes}
    paginate={paginate}
    currentRecipe={currentRecipe}
    currentPage={currentPage}
    setCurrentPage={setCurrentPage}
    />
   
    </div> 
  
  )
}
