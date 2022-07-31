const { DataTypes, UUIDV4, DATE } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipe', {
    id:{
      type: DataTypes.STRING,
      defaultValue:UUIDV4,
      allowNull:false,
      primaryKey: true,

    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    image:{
      type:DataTypes.STRING,
      defaultValue:('https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?cs=srgb&dl=pexels-adonyi-g%C3%A1bor-1414651.jpg&fm=jpg')
    
    },
    score:{
      type: DataTypes.INTEGER,
    },
    healthScore:{
      type:DataTypes.INTEGER,
    },
    steps:{
      type: DataTypes.STRING
    },
    createDb:{
    type:DataTypes.BOOLEAN,
    defaultValue: true,
    },


  });
};




// ID: *
// Nombre *
// Resumen del plato *
// Nivel de "comida saludable" (health score)
// Paso a paso