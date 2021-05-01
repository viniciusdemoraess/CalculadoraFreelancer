const express = require('express')
const routes = express.Router() //cria as rotas
const views = __dirname + "/views/"// caminho base

const profile = {
    name: "Vinícius De Moraes",
    avatar: "https://github.com/viniciusdemoraess.png",
    "monthly-budget": 3000,
    "days-per-week": 5,
    "hours-per-day": 5,
    "vacation-per-year": 4,
}

const jobs = [
    {
        id: 1,
        name: "Pizzaria Guloso",
        "daily-hours": 2,
        "total-hours": 60, 
        created_at: Date.now()
    },
    {
        id: 2,
        name: "One Two Project",
        "daily-hours": 3,
        "total-hours": 47, 
        created_at: Date.now()
    }
]

//req, res 
routes.get('/', (req, res) => res.render(views + "index", { jobs }))
routes.get('/job', (req, res) => res.render(views + "job"))
routes.post('/job', (req, res) => {
    // req.body = {name: `Vini` , `daily-hours`: `3.1` ,`total-hours` : `3`}
    const lastId = jobs[jobs.length - 1]?.id || 1;
    jobs.push({
        id: lastId + 1,
        name: req.body.name,
        "daily-hours": req.body["daily-hours"],
        "total-hours": req.body["total-hours"],
        created_at: Date.now() //atribuindo data de hoje
    })
    return res.redirect('/')
})
routes.get('/job/edit', (req, res) => res.render(views + "job-edit"))
routes.get('/profile', (req, res) => res.render(views + "profile", {profile: profile}))

module.exports = routes