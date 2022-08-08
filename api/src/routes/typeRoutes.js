const axios = require ('axios')
const {getAllRecipes} = require ('../controllers/recipeController')
const express = require('express')
const router = express.Router();
const {API_KEY} = process.env;

const {Recipe, Type} = require ('../db')

router.get('/', async(req,res)=>{

    const apiEndPoint = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=ba9d5abd92d14d288e629a337d8157d0&addRecipeInformation=true&number=100`);
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

router.get('/:name', async(req,res)=>{
   try{
    const {name} = req.params
    const a = await Type.findOne({
        where:{name}
    })
    
    console.log(a)  
    res.send(a)
   }
    catch(error){
        console.log(error)
    }
})
    module.exports= router

