const mongoose = require('mongoose');


const terrainSchema = new mongoose.Schema({
    
    titre:  {
          type: String
    },


    lieu: {
        type: String,
    
      },
    superficie: {
        type: String,
    
    },
    description: {
        type: String
    },
     Geolocalisation:{
        type: String
     }
    ,
    service : {
        type: String
    },
    prix: {
        type: String,
    }
});

module.exports = mongoose.model('Terrain', terrainSchema);