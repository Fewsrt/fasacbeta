const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());
app.use('/javascript', express.static('javascript'));

//Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//ROUTES
app.get('/' , (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

//Connect To DB
mongoose.connect(
    process.env.DB_CONNECTION, 
    {useNewUrlParser: true} ,
    () => console.log('connect to mongoDB')
);

//PORT SERVE
app.listen(3000);