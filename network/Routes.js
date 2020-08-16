const express = require('express')
const message = require('../components/message/Network')
const user = require('../components/user/Network')
const chat = require('../components/chat/Network')

const routes = function(server) {
    server.use('/message', message),
    server.use('/user', user)
    server.use('/chat', chat)
}

module.exports= routes;