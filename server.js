const express = require('express');
const bodyParser = require('body-parser')
const router = express.Router();

var app = express();
app.use(bodyParser.json());
// El router debe ir siempre al final
app.use(router);

router.get('/message', function(req, res){
    res.header({
        "custom-header": "holix baby"
    })
    console.log(req.headers["custom-header"])
    res.send('Lista de mensajes')
})

router.post('/message', function(req,res){
    console.log(req.query)
    console.log(req.body)
    // respuestas 
    res.status(201).send([{error: '', message: 'El mensaje se ha añadido correctamente'},{objeto:'segundo objeto'}])
    // respuesta simple
    res.send('El mensaje ha sido añadido')
})

app.listen(3000);
console.log('la aplicacion esta escuchando en http://localhost:3000')