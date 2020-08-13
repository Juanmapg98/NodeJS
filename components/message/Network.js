const express = require('express');
const router = express.Router();
const response = require('../../network/response')

router.get('/', function(req, res){
    response.success(req, res, 'tareas obtenidas',200)
})

router.post('/', function(req,res){
    console.log(req.query)
    if(req.query.error == "ok"){
        response.error(req, res, 'algo ha sucedido al crear la tarea', 400, 'es solo una simulacion de los errores')
    }else {
        response.success(req, res, 'tarea creada correctamente',201)
    }
});

module.exports = router;
