'use strict';

const express = require('express');
const app = express();
app.set('view engine', 'ejs');



let database = {
  fruits: [
    'apple',
    'plum',
    'peach',
    'mango',
    'pear',
  ]
};

app.get('/', (req,res) => {
   res.send('SZIASZTOK, EZ A FOOLDALAM es mar NODEMONEAL fut');
});

app.get('/ego', (req,res) => {
  res.send(`${1 + 1}`);
})

app.get('/hello:message', (req,res) => {
  if(!req.params.message){
    res.send(`Hello ${req.query.name} ${req.query.lastname} uzeneted pedig nincs`);
  }else {
  res.send(`Hello ${req.query.name} ${req.query.lastname} and your message is: ${req.params.message}`)
  }
})

app.get('/adjalegykishtmlt', (req, res) => {
  console.log({dirname: __dirname});
  res.sendFile(__dirname + '/index.html');
})

app.get('/add', (req,res) => {
  let fruit = req.query.fruit;
  database.fruits.push(fruit);

  //database.fruits.push(req.query.fruit); //ez ugyanaz, mint a folso
  res.send(`Koszi, hozzaadtam a ${fruit}`);
})

app.get('/webshop', (req,res) => {
  let name = req.query.name;
  let lastname = req.query.lastname;
  let message = req.query.message;
  res.render('webshop', {name: name, lastname:lastname, message:message, fruits: database.fruits});
})

app.listen(3000);