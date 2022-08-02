import React from 'react'
import { Fragment } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Cards from './Cards';
import Paginate from './Paginate';
import { getRecipes, getTypes,alphabeticalSort,filterByDietType, scoreSort } from '../actions/index';
import Filters from './Filters';
import Loading from './loading';
import '../Styles/Home.css'

export default function Home({setOrder}) {
  const dispatch = useDispatch();
    const recipes = useSelector((state) => state.recipes);
    const allTypes = useSelector((state)=> state.types)
    const loading = useSelector(state => state.loading )
    // const sortScore = useSelector((state)=> state.recipes)
    console.log(recipes)

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
