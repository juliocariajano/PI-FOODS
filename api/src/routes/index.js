const { Router } = require('express');
const {Recipe, Type} = require('../db')
const recipeRouter = require ('./recipeRoutes');
const typeRouter = require ('./typeRoutes')


const router = Router();

// Configurar los routers
router.use('/recipe', recipeRouter);
router.use('/type', typeRouter);


module.exports = router;
