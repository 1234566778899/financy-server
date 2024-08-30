const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect('mongodb+srv://victor:1234556@cluster0.iyqbg9l.mongodb.net/financy', {
    //mongoose.connect('mongodb://localhost:27017/financy', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(db => console.log('db connected'))
    .catch(error => console.log(error));
