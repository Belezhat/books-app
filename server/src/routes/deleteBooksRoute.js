const BooksModel = require('../models/BooksModel');

module.exports = async (req, res) => {
    const {id} = req.params;
    const books = await BooksModel.findById(id);
    await books.deleteOne({id});
    res.status(200).json({books, message : 'livre supprimé!'})
}