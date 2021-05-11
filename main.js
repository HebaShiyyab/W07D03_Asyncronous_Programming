const express = require("express");
const axios = require("axios");
const fs = require("fs")

const app = express();
const port = 5000;
app.use(express.json());

fs.readFile("./data.txt",(err,data)=>{
    if(err){
        console.log('Err')
    };
})

fs.writeFile("./data.txt",(err,data)=>{
    if(err){
        console.log('Err')
    }else{
        console.log('heba')
    }
})

app.get("/",(req,res)=>{
    res.status(201);
    res.json('I am ready')
})

app.listen(port,(req,res)=>{
    console.log('the server its ready')
})