const axios = require ('axios');
const {Recipe,Type}= require ('../db');
const {v4:UUIDV4} = require('uuid');
require ('dotenv').config();
const {API_KEY} = process.env;


// const getInfoApi = ()=>{
//     fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=c64e0e0fb5cd436ca2be7d3bb7a0c352&addRecipeInformation=true&number=100`)


//     .then((response)=>{apiEndPoint.data.results.map((e)=>{
//         return {
//             id:e.id,
//             image:e.image,
//             name:e.title,
//             dietTypes: e.diets,
//             summary: e.summary,
//             healthScore:e.healthScore,
//             dishTypes:e.dishTypes,
//             steps:e.analyzedInstructions[0]? e.analyzedInstructions[0].steps.map((e)=>{
//                 return {
//                     number: e.number,
//                     step:e.step,
//                 };
//             }): "No existen pasos registrados" 
//         };
//     }) ;
//     return infoApiEndPoint
// };

// function onSearch(ciudad) {
//     fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
//       .then(r => r.json())
//       .then((recurso) => {
//         if(recurso.main !== undefined){
//           const ciudad = {
//             min: Math.round(recurso.main.temp_min),
//             max: Math.round(recurso.main.temp_max),
//             img: recurso.weather[0].icon,
//             id: recurso.id,
//             wind: recurso.wind.speed,
//             temp: recurso.main.temp,
//             name: recurso.name,
//             weather: recurso.weather[0].main,
//             clouds: recurso.clouds.all,
//             latitud: recurso.coord.lat,
//             longitud: recurso.coord.lon
//           };
//           setCities(oldCities => [...oldCities, ciudad]);
//         } else {
//           alert("Ciudad no encontrada");
//         }
//       });


const getInfoApi = async ()=>{
    const apiEndPoint = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=ba9d5abd92d14d288e629a337d8157d0&addRecipeInformation=true&number=100`)
    const infoApiEndPoint = await apiEndPoint.data.results.map((e)=>{
        return {
            id:e.id,
            image:e.image,
            readyInMinutes:e.readyInMinutes,
            name:e.title,
            dietTypes: e.diets,
            summary: e.summary,
            healthScore:e.healthScore,
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
            healthScore: e.healthScore,
            createDb:e.createDb,
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