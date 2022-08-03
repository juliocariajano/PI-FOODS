const axios = require ('axios');
const {Recipe,Type}= require ('../db');
const {v4:UUIDV4} = require('uuid');
require ('dotenv').config();
const {API_KEY} = process.env;


const getInfoApi = async ()=>{
    const apiEndPoint = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=c64e0e0fb5cd436ca2be7d3bb7a0c352&addRecipeInformation=true&number=100`)
    const infoApiEndPoint = await apiEndPoint.data.results.map((e)=>{
        return {
            id:e.id,
            image:e.image,
            name:e.title,
            dietTypes: e.diets,
            summary: e.summary,
            score:('hola'),
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
            score:e.score,
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