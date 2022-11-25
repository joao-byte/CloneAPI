const { Router } = require('express')
const express = require('express')
const routes = express.Router()

//banco de dados nao valido, se a api parar de rodar o db é apagado
let db = [
    { '1': { Nome: 'Cliente 1', idade: '21' } },
    { '2': { Nome: 'Cliente 2', idade: '22' } },
    { '3': { Nome: 'Cliente 3', idade: '23' } }
]

//buscar dados
routes.get(`/`, (req, res) => {
    return res.json(db)
})

//inserir dados
routes.post(`/add`, (req, res) => {
    const body = req.body 
    
    //tratativa, se o body nao existe retun 400
    if(!body)
        return res.status(400).end()
    
    //adiciona dentro do array o body e retorna um json com o body
    db.push(body)
     return res.json(body)
})

routes.delete('/:id', (req, res) => {
    const id = req.params.id

    let newDB = db.filter(item =>{
        if(!item[id])
            return item
    })
    db = newDB
    return res.send(newDB)
})

module.exports = routes