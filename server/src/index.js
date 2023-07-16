const express = require ('express');
//console.log(express);
const morgan = require('morgan');
const cors = require('cors');
const app =express();
const router = require('./router');
const dotenv = require('dotenv');
const mongoose = require('mongoose');





//app.get('/books', (req, res) =>{
    //res.send("Everything's Ok!")
    //})
dotenv.config();
app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());
app.use(router);


mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('Bien connecté à Mongodb')
    app.listen(3000);
})




