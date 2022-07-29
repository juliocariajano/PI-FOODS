const { Router } = require('express');
const {Recipe, Type} = require('../db')
const recipeRouter = require ('./recipeRoutes');
const typeRouter = require ('./typeRoutes')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/recipe', recipeRouter);
router.use('/type', typeRouter);


module.exports = router;
