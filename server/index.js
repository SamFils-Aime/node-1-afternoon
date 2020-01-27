const express = require('express')
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')


const app = express()
const port = 3050


app.get('/api/products',(getProducts))
app.get('api/Product:/id',(getProduct))


app.listen(port, ()=> { console.log("this server is listening")})
