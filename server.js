const express = require('express')
const server = express()
const nunjucks = require('nunjucks')
const recipes = require("./data")

server.use(express.static('public'))
server.set("view engine", "njk")
nunjucks.configure("views", {
    express: server,

})


server.get("/", function(req, res) { // buscamos a rota principal "/" e criamos uma funçao de requisitar e responder
    // return res.send("Hi everyone!") // retorna uma resposta enviando a msg Hi no localhost:5000
    return res.render("index", { items: recipes })
})
server.get("/receitas", function(req, res) { // buscamos a rota principal "/" e criamos uma funçao de requisitar e responder
    // return res.send("Hi everyone!") // retorna uma resposta enviando a msg Hi no localhost:5000
    return res.render("receitas", { items: recipes })
})
server.get("/sobre", function(req, res) { // buscamos a rota principal "/" e criamos uma funçao de requisitar e responder
    // return res.send("Hi everyone!") // retorna uma resposta enviando a msg Hi no localhost:5000
    return res.render("sobre")
})
server.get("/receitas_detalhe/:index", function(req, res) {
    const recipeIndex = req.params.index
    return res.render("receitas_detalhe", { item: recipes[recipeIndex] })

})

//server.get("/receitas-detalhe", function(req, res) {
//query strings - retiramos o modal e colocamos numa pagina
//  const id = req.query.id
//const receita = recipes.find(function(receita) {
//   if (receita.id == id) {
//      return true
//}
//})
//if (!receita) {
//   return res.send("Video not found!")
//}
//return res.render("receitas-detalhe", { item: receita })
//})
server.listen(5000, function() { // o server vai ouvir a porta 5000 e abrir o console log para exibir a msg
    console.log("server is running")
})