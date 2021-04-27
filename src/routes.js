const express = require('express')
const routes = express.Router() //cria as rotas
const views = __dirname + "/views/"// caminho base

const profile = {
    name: "Vinícius De Moraes",
    avatar: "https://avatars.githubusercontent.com/u/66479557?v=4",
    "monthly-budget": 3000,
    "days-per-week": 5,
    "hours-per-day": 5,
    "vacation-per-year": 4,

}
//req, res 
routes.get('/', (req, res) => res.render(views + "index"))
routes.get('/job', (req, res) => res.render(views + "job"))
routes.get('/job/edit', (req, res) => res.render(views + "job-edit"))
routes.get('/profile', (req, res) => res.render(views + "profile", {profile: profile}))



module.exports = routes