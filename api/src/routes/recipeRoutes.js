const axios = require ('axios')
const {getAllRecipes} = require ('../controllers/recipeController')
const express = require('express')
const router = express.Router();
const {Recipe, Type} = require ('../db');
const { v4: uuidv4 } = require('uuid');

router.get('/', async(req,res)=>{
const {name} = req.query;
let allRecipes = await getAllRecipes();

if(name){
    const recipeName = await allRecipes.filter((e)=> e.name.toLowerCase().startsWith(name.toLowerCase()));
    recipeName.length? res.status(200).send(recipeName): res.status(404).send("Receta no encontrada");
}else{
    res.status(200).send(allRecipes);
}
})


router.post("/", async (req, res) => {
    let { name, summary, score, healthScore, steps, dietTypes } = req.body;
    let idv4 = uuidv4();
    const dbId = idv4.slice(0, 4);
    const recipe = { id: dbId, name, summary, score, healthScore, steps }
    try {
        const validate = await Recipe.findOne({ where: { name } })
        if (!validate) {
            const recipeCreate = await Recipe.create(recipe)
            let recipeDb = await Type.findAll({
                where: { name: dietTypes }
            })
            console.log(recipeDb)
            await recipeCreate.addType(recipeDb)
            res.status(200).send("Receta creada con exito")
        } else {
            let recipeDb2 = await Type.findAll({
                where: { name: dietTypes }
            })
            await validate.addType(recipeDb2)
            res.status(200).send('Receta creada con exito')
        }
    } catch (error) {
        console.log(error)
    }
})

router.get('/:id',async(req,res)=>{
    let {id} =req.params;
    let allRecipes = await getAllRecipes();
    // res.status(200).send(allRecipes)
    let recipeId = await allRecipes.filter((e)=> e.id==id);
    recipeId.length?
    res.status(200).send(recipeId): res.status(404).send("Receta no encontrada")

})




router.delete('/delete/:id', async (req, res)=>{
        try {
          const {id} = req.params;
          await Recipe.destroy({
            where: { id: id },
          });
          return res.send("deleted!");
        } catch (error) {
          return error;
        }
      
})


module.exports= router;