const express = require('express')
const bodyParser = require('body-parser')
const router = require('./network/Routes')

var app = express();
app.use(bodyParser.json());
// app.use(router)

router(app)

app.use('/app', express.static('public'));

app.listen(3000);
console.log('la aplicacion esta escuchando en http://localhost:3000')