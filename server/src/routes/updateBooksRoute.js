const BooksModel = require('../models/BooksModel');

module.exports = async (req, res) => {
    const {id} = req.params;
    const books = await BooksModel.findById(id);
    books.Titre = req.body.Titre;
    books.Auteur = req.body.Auteur;
    books.Prix = req.body.Prix;
    books.Isbn = req.body.Isbn;
    books.Stock = req.body.Stock;

    await books.save();
    res.json(books) 
}