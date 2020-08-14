const express = require("express");
const response = require("../../network/response");
const controller = require("./Controller");
const router = express.Router();

router.post('/', function(req,res){
  controller.addUser(req.body.name)
    .then(data => {
      response.success(req,res,`usuario añadido ${data}`, 201)
    })
    .catch(e => {
      response.error(req,res,'Internal error', 500, e)
    })
})

router.get('/', function(req,res){
  controller.getUsers()
    .then(usersList => {
      response.success(req, res, usersList,200)
    })
    .catch(e => {
      response.error(req,res,'unexpected error', 500, e)
    })
})

module.exports = router