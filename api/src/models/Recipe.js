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
      defaultValue:('https://th.bing.com/th/id/R.b21ad12d1596fd9b84b1416b67d2f908?rik=dMavOk1kZBPU1Q&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f03%2fFood-PNG-Picture-180x180.png&ehk=M6cDdzk%2fnj3g0Y%2b5B%2bt8AWhEcT7nLkQ9B7JC%2bvWDP1A%3d&risl=&pid=ImgRaw&r=0')
    
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