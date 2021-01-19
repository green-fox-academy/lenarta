'use strict';

const express = require('express');
const mysql = require('mysql');
const app = express();
app.use(express.json());
app.use(express.static('assets'))
//const path = require('path');


let conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password1',
  database: 'bookstore',
});

conn.connect((err) => {
  if (err) throw err;
  console.log('Connected to mysql')
});

app.get('/', (req,res) => {
  res.sendFile('index.html');
});

app.get('/title', (req,res) => {
conn.query('SELECT book_name FROM book_mast;', (err,rows) => {
  //console.log(rows);
  if(err) {
    console.log(err.toString());
    res.status(500).json({'error': 'database error'});
    return;
  }
  //res.sendFile(path.join(__dirname, 'index.html'));

  res.json(rows);
})
})

app.get('/data', (req,res) => {
conn.query(
`SELECT book_name, book_price, aut_name, cate_descrip, pub_name 
FROM book_mast 
INNER JOIN author ON book_mast.aut_id = author.aut_id 
INNER JOIN category ON book_mast.cate_id = category.cate_id 
INNER JOIN publisher ON book_mast.pub_id = publisher.pub_id;`,
(err,rows) => {
  //console.log(rows);
  if(err) {
    console.log(err.toString());
    res.status(500).json({'error': 'database error'});
    return;
  }
  //res.sendFile(path.join(__dirname, 'index.html'));

  res.json(rows);
})
})

app.listen(3000);