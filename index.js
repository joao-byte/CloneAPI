const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyparser = require('body-parser')
const { urlencoded } = require('body-parser')

const app = express()

app.use(morgan('dev'))
app.use(bodyparser.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

let db = [
    { '1': { Nome: 'Cliente 1', idade: '21' } },
    { '2': { Nome: 'Cliente 2', idade: '22' } },
    { '3': { Nome: 'Cliente 3', idade: '23' } }
]


app.listen(21262, () =>{
    console.log(`Express started at http://localhost/21262`)
})