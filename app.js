const express = require('express');
const mongoose = require('mongoose')
const app = express();
const db = mongoose.connect('mongodb://localhost/bookAPI');
const bookRouter = express.Router();
const port = process.env.PORT || 3000;

const Book = require('./models/bookModel');



bookRouter.route('/books').get((req, res) => {
    const response = { hello: 'This is my API' };
    res.json(response);
});

app.use('/api', bookRouter);

app.get('/', (req, res) => {
    res.send("'Welcome to aaa'");
});
app.listen(port, () => {
    console.log(`Runnin on port  + ${port}`);
});