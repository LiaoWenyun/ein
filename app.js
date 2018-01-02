const express =require('express');
const app =express();
const mongoose = require('mongoose');
const bodyParser=require('body-parser');
const cors= require('cors');
const Thing= require('./model/thing')

mongoose.connect('mongodb://localhost/crud',()=>{
    console.log("db is opended!")
});


app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/stuff',(req,res)=>{
    let new_thing= new Thing({
        name: req.body.name,
        description: req.body.description,
        rate: req.body.rate
    })

    Thing.save_thing(new_thing).then(
        (success)=> {
            res.send("received")
        }, (fail)=> {
            res.send("fail")
    })


console.log(req.body);
})

app.get('/stuff',(req,res)=>
{ 
    console.log('getworks')
    res.send('hello world!');
})



app.listen(8080,()=>{
    console.log("app is listening on port 8080...") 
});
