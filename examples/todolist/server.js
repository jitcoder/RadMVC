'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const pug = require('pug') //previously known as jade

let todoList = [];

todoList.push({item:"Get item 1 from server",completed:true});
todoList.push({item:"Get item 2 from server",completed:true});

app.set('view engine',pug);

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/todo',(req,res)=>{
    res.sendStatus(200);
    res.json(todoList);
});

app.post('/todo',(req,res)=>{
    if (!req.body){
        return res.sendStatus(400);
    }
    else{
        todoList.push(req.body);
        res.sendStatus(200);
        res.send('ok')        
    }
});

app.put('/todo',(req,res)=>{
   for(let i = 0; i < todoList.length; i++){
       if(todoList[i].item === req.body.item){
           todoList[i].completed = req.body.completed;
           res.sendStatus(200);
           res.send('ok');
           return;
       }
   }
   
   res.sendStatus(400);
   res.send('failed');
});

app.delete('/todo',(req,res)=>{
   for(let i = 0; i < todoList.length; i++){
       if(todoList[i].item === req.body.item){
           todoList.splice(i,1);
           res.sendStatus(200);
           res.send('ok');
           return;
       }
   }
   
   res.sendStatus(400);
   res.send('failed');
});