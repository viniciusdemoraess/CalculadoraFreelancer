const express = require('express')
const routes = express.Router()
const basePath = __dirname + "/views"
// request, response
routes.get('/', (request, response) => response.sendFile(basePath + "/index.htm"))

routes.get('/job', (request, response) => response.sendFile(basePath + "/job.htm"))

routes.get('/job/edit', (request, response) => response.sendFile(basePath + "/job-edit.htm"))

routes.get('/profile', (request, response) => response.sendFile(basePath + "/profile.htm"))

module.exports = routes
