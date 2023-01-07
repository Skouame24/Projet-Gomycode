const mongoose = require('mongoose');


const formSchema = new mongoose.Schema({
    nom: {
        type: String,
    
      },
    prenom: {
        type: String,
    
    },
    contact: {
        type: String,
    },
    email: {
        type: String,
    
      },
      blog: {
        type: String,
    
      },
});

module.exports = mongoose.model('Form', formSchema);