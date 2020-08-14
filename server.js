const express = require('express')
const bodyParser = require('body-parser')
const db = require('./db')
const router = require('./network/Routes');


db("mongodb://user:25285789@cluster0-shard-00-00.hochh.mongodb.net:27017,cluster0-shard-00-01.hochh.mongodb.net:27017,cluster0-shard-00-02.hochh.mongodb.net:27017/<telegram>?ssl=true&replicaSet=atlas-lnnmdu-shard-0&authSource=admin&retryWrites=true&w=majority")
var app = express();
app.use(bodyParser.json());
// app.use(router)

router(app)

app.use('/app', express.static('public'));

app.listen(3000);
console.log('la aplicacion esta escuchando en http://localhost:3000')