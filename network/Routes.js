const express = require('express')
const message = require('../components/message/Network')
const user = require('../components/user/Network')

const routes = function(server) {
    server.use('/message', message),
    server.use('/user', user)
}

module.exports= routes;