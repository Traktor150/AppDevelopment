'use strict';

const express = require('express');
const server = express();
const port = process.env.PORT || 8080;


const mainRouter = require('./router/main')


server.use(express.urlencoded());

server.use(express.static('public'));

server.use('/', mainRouter);


server.listen(port);