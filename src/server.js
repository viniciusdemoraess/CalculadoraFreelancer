const express = require("express")//Importanto o express para uma variavel const
const server = express() //rodando a funcao express
const routes = require("./routes")

//habilitar arquivos statics
server.use(express.static("public"))

//routes
server.use(routes)

server.listen(3000, () => console.log('rodando')) // Abre uma porta SERVIDOR CRIADO COM AS LINHAS ACIMA

