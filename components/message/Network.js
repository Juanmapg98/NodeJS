const express = require('express');
const response = require('../../network/response')
const controller = require('./Controller')
const router = express.Router();
router.get('/', function (req, res) {
    controller.getMessages()
        .then((messageList) => {
            response.success(req,res,messageList, 200)
        })
        .catch(e => {
            response.error(req,res, 'unexpected error', 500, e)
        })
})

router.post('/', function (req, res) {
    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage) => {
            response.success(req, res, fullMessage, 201)
        })
        .catch(e => {
            response.error(req, res, 'algo ha sucedido al crear la tarea', 400, 'es solo una simulacion de los errores')
        })

});

module.exports = router;
