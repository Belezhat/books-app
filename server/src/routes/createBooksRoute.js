const BooksModel = require('../models/BooksModel');

module.exports = async (req, res) => {
   const {Titre, Auteur, Prix, Isbn, Stock} = req.body;
   console.log(Titre, Auteur, Prix, Isbn)
   const books = new BooksModel({
    Titre,
    Auteur,
    Prix,
    Isbn,
    Stock,
   });
   const newBooks = await books.save();
   res.json(newBooks);
};
