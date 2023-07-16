const express = require('express');
const router = express.Router();
const loginRoute = require('./routes/loginRoute');
const readTodosRoute = require('./routes/readTodosRoute');
const createBooksRoute = require('./routes/createBooksRoute');
const updateBooksRoute = require('./routes/updateBooksRoute');
const deleteBooksRoute = require('./routes/deleteBooksRoute');


const isLoggedIn = require('./middleware/isLoggedIn');
router.post('/login', loginRoute);

router.get('/books', isLoggedIn, readTodosRoute);
router.post('/books', isLoggedIn, createBooksRoute);
router.put('/books/:id', isLoggedIn, updateBooksRoute);
router.delete('/books/:id', isLoggedIn, deleteBooksRoute);

module.exports = router;
    