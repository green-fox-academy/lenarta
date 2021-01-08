'use strict';

const express = require('express');
const app = express();
app.set('view engine', 'ejs');


app.get('/', (req,res) => {
   res.sendFile(__dirname + '/index.html');
});

app.get('/pic', (req, res) => {
   res.sendFile(__dirname + '/assets/result.png');
});

app.get('/list', (req, res) => {
      res.sendFile(__dirname + '/assets/products.csv');
});



app.listen(3000);