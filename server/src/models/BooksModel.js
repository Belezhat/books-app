const mongoose = require('mongoose');

const BooksSchema = new mongoose.Schema({
    Titre:{
        type: String,
    },
    Auteur:{
        type: String,
    },
    Prix:{
        type: Number
    },
    Isbn:{
        type: Number
    },
    Stock:{
        type: Boolean,
    },
});

const BooksModel = mongoose.model('Books', BooksSchema);
module.exports= BooksModel;