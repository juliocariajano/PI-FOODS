import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import {detailRecipe, setDetailRecipe} from "../actions/index"
import { Link } from 'react-router-dom';
import Loading from './loading';
import "../Styles/DetailRecipe.css"
export default function DetailRecipe() {
const dispatch = useDispatch();

const {id} = useParams();
const [loading, setLoading]= useState(true);

const recipeDetail = useSelector((state)=>state.stateDetailRecipe);
console.log(recipeDetail)

useEffect(()=>{
    dispatch(detailRecipe(id))
    return ()=> {dispatch(setDetailRecipe())}
},[dispatch, id]);
 
    return (
        <div className='general'>   
        <div className='container'>
            {
                setTimeout(() =>{
                 setLoading(false)
                 }, 5000)
             } 
        { loading === true? (<Loading setLoading= {setLoading}/>):
        <div className='box'>
        <div className='left'></div>
                <div className='right'>
        <h2>DETAIL</h2>
    
        <img src= {recipeDetail.length ? recipeDetail[0].image:"Imagen no encontrada"}/>
        <h2> Receta:{recipeDetail.length? recipeDetail[0].name:"Cargando"}</h2>
        <h5>Types:{recipeDetail.length? recipeDetail[0].dishTypes:"Cargando"}</h5> 
        <h5>Dietas:{recipeDetail.length? recipeDetail[0].dietTypes:"Tipos Dietas"}</h5>
        <h5>summary:{recipeDetail.length? recipeDetail[0].summary.replace(/<[^>]*>/g, ''):"Cargando"}</h5>
        <h5>Score:{recipeDetail.length? recipeDetail[0].score:"Cargando"}</h5>
        <h5>healthScore:{recipeDetail.length? recipeDetail[0].healthScore:"Cargando"} </h5>
        <h5>Pasos:{recipeDetail.length? recipeDetail[0].steps[0].step?recipeDetail[0].steps.map(e=>e.step):recipeDetail[0].steps:"Cargando"}</h5>  
        <Link to="/home"><button className='btnt' >Volver a recetas</button></Link> 
    
    </div>
    </div>
}
    </div>
    </div>
  )
}
