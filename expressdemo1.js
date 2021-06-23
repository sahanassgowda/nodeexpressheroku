const express = require('express')

const app = express()

app.post('/ibm',function(req,rest){
    result.send('<h2>Welcome To Express Server using post </h2>')
})

app.get('/ibm',function(req,res){
    res.send('<h2>Welcome To Express Server Using get </h2>')
})

app.put('/ibm',function(req,res){
    res.send('<h2>Welcome To Express Server Using Put <h2>')
})
app.delete('/ibm',function(req,res){
    res.send('<h2>Welcome To Express Server Using delete </h2>')
})
