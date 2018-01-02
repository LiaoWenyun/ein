const express =require('express');
const app =express();
const mongoose = require('mongoose');
const bodyParser=require('body-parser');
const cors= require('cors');

mongoose.connect('mongodb://localhost/crud',()=>{
    console.log("db is opended!")
});


let Thing =mongoose.model('thing',{
    name: String,
    description: String,
    rate: Number
});
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/stuff',(req,res)=>{
console.log(req.body);
res.send('love you'+JSON.stringify(req.body.value));
})

app.get('/stuff',(req,res)=>
{ 
    console.log('getworks')
    res.send('hello world!');
})



app.listen(8080,()=>{
    console.log("app is listening on port 8080...") 
});
