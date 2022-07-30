const axios = require ('axios');
const {Recipe,Type}= require ('../db');
const {v4:UUIDV4} = require('uuid');
require ('dotenv').config();
const {API_KEY} = process.env;


const getInfoApi = async ()=>{
    const apiEndPoint = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=b7b0dae11a5a4bf3875f9ad5d94f82a5&addRecipeInformation=true&number=100`)
    const infoApiEndPoint = await apiEndPoint.data.results.map((e)=>{
        return {
            id:e.id,
            image:e.image,
            name:e.title,
            dietTypes: e.diets,
            summary: e.summary,
            // score:e.spoonacularScore,
            healthScore:e.healthScore,
            dishTypes:e.dishTypes,
            steps:e.analyzedInstructions[0]? e.analyzedInstructions[0].steps.map((e)=>{
                return {
                    number: e.number,
                    step:e.step,
                };
            }): "No existen pasos registrados" 
        };
    }) ;
    return infoApiEndPoint
};

const getDbInfo= async ()=>{
    const recipeDb= await Recipe.findAll({include:Type});
    const res =  recipeDb.map(e=>{
        return {
            id:e.id,
            name:e.name,
            summary:e.summary,
            image: e.image,
            // score:e.spoonacularScore,
            healthScore: e.healthScore,
            dietTypes: e.Types?.map(e=>e.name),
            steps: e.steps
           
        }
    })
    return res
};

const getAllRecipes = async ()=>{
    const infoApi = await getInfoApi();
    const dbInfo = await getDbInfo();
    const allInfoApiDb = await infoApi.concat(dbInfo);
    // console.log(allInfoApiDb)
    return allInfoApiDb;
};



module.exports={getAllRecipes}