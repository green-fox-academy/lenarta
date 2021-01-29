'use strict';

const express = require('express');
const mysql = require('mysql');
const app = express();
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password1',
  database: 'reddit',
});

conn.connect((err) => {
  if (err) {
    console.log(err.toString());
  }
  console.log('Connected to mysql');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/post.html');
});
app.get('/newpost', (req, res) => {
  res.sendFile(__dirname + '/public/newpost.html');
  //res.sendFile('newpost.html');
});
app.get('/post', (req, res) => {
  //console.log(req.headers);
  conn.query(`SELECT * FROM posts`, (err, rows) => {
    //console.log(rows);
    if (err) {
      console.log(err.toString());
      res.status(500).json({ error: 'database error' });
      return;
    }
    res.status(200).json(rows);
  });
});

app.post('/post', (req, res) => {
  conn.query(
    `INSERT INTO posts (title, url, owner)
          VALUES(?,?,?);`,
    [req.body.title, req.body.url, req.headers.username],
    (err, rows) => {
      console.log(req.headers.username);
      if (err) {
        console.log(err.toString());
        res.status(500).json({ error: 'database error' });
        return;
      }
      conn.query(
        `SELECT * FROM posts WHERE post_id = ${rows.insertId};`,
        (err, rows) => {
          if (err) {
            console.log(err.toString());
            res.status(500).json({ error: 'database error' });
            return;
          }
          res.status(200).json(rows);
        }
      );
    }
  );
});

app.put('/post/:postId/upvote', (req, res) => {
  conn.query(
    `UPDATE posts 
          SET score = score + 1 
          WHERE post_id = ${req.params.postId}`,
    (err, rows) => {
      //console.log(req.query.postId);
      if (err) {
        console.log(err.toString());
        res.status(200).json({ error: 'database error' });
        return;
      }
      conn.query(
        `SELECT * FROM posts WHERE post_id = ${req.params.postId};`,
        (err, rows) => {
          if (err) {
            console.log(err.toString());
            res.status(500).json({ error: 'database error' });
            return;
          }
          res.status(200).json(rows);
        }
      );
    }
  );
});

app.put('/post/:postId/downvote', (req, res) => {
  conn.query(
    `UPDATE posts 
          SET score = score - 1 
          WHERE post_id = ${req.params.postId};`,
    (err, rows) => {
      if (err) {
        console.log(err.toString());
        res.status(200).json({ error: 'database error' });
        return;
      }
      conn.query(
        `SELECT * FROM posts WHERE post_id = ${req.params.postId};`,
        (err, rows) => {
          if (err) {
            console.log(err.toString());
            res.status(500).json({ error: 'database error' });
            return;
          }
          res.status(200).json(rows);
        }
      );
    }
  );
});

app.delete('/post/:postId', (req, res) => {
  let post;
  conn.query(
    `SELECT * FROM posts WHERE post_id = ${req.params.postId};`,
    (err, rows) => {
      if (err) {
        console.log(err.toString());
        res.status(500).json({ error: 'database error' });
        return;
      }
      post = rows;

      conn.query(
        `DELETE FROM posts WHERE post_id = ${req.params.postId};`,
        (err, rows) => {
          if (err) {
            console.log(err.toString());
            res.status(200).json({ error: 'database error' });
            return;
          }
          res.status(200).json(post);
        }
      );
    }
  );
});

app.listen(3000);
