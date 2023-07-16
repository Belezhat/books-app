const BooksModel = require('../models/BooksModel');

module.exports = async (req, res) => {
    const books = await BooksModel.find();
    res.send(books);
    
};