const express = require('express')
const products = require('./mocks/data')

const app = express()

app.get('/api/product', (req, res) => {
    res.json(products)
})

app.get('/api/product/:id', (req, res) => {
    const product = products.find(item => item._id === req.params.id) 
    res.json(product)
})

app.listen(4000, console.log("Server running"))