const axios = require ('axios')
const {getAllRecipes} = require ('../controllers/recipeController')
const express = require('express')
const router = express.Router();
const {API_KEY} = process.env;

const {Recipe, Type} = require ('../db')

router.get('/', async(req,res)=>{

    const apiEndPoint = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=c64e0e0fb5cd436ca2be7d3bb7a0c352&addRecipeInformation=true&number=100`);
    const infoApiEndPoint = await apiEndPoint.data.results.map(e => e.diets).flat(Infinity)
    infoApiEndPoint.forEach(e=>{
        Type.findOrCreate({
            where: {name: e}
        })
    })
    const allTypes= await Type.findAll()
    res.send(allTypes)
    
    
    } 
)
    module.exports= router