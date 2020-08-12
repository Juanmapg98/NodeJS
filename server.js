const express = require('express');
const bodyParser = require('body-parser')
const response = require('./network/response')
const router = express.Router();

var app = express();
app.use(bodyParser.json());
// El router debe ir siempre al final
app.use(router);

router.get('/message', function(req, res){
    response.success(req, res, 'tareas obtenidas',200)
})

router.post('/message', function(req,res){
    console.log(req.query)
    if(req.query.error == "ok"){
        response.error(req, res, 'algo ha sucedido al crear la tarea', 400)
    }else {
        response.success(req, res, 'tarea creada correctamente',201)
    }
})

app.listen(3000);
console.log('la aplicacion esta escuchando en http://localhost:3000')