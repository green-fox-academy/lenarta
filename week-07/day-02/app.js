'use strict';

const express = require('express');
const path = require('path');
const PORT = 3000;
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('assets'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  let received = Number(req.query.input);
  let result = received * 2;

  if (!received) {
    res.json({ error: 'Please provide an input!' });
  } else {
    res.json({ received: received, result: result });
  }
});

app.get('/greeter', (req, res) => {
  let name = req.query.name;
  let title = req.query.title;

  if (!name && !title) {
    res.status(400).json({ error: 'Please provide a name and a title!' });
  }
  if (!name) {
    res.status(400).json({ error: 'Please provide a name!' });
  }
  if (!title) {
    res.status(400).json({ error: 'Please provide a title!' });
  } else {
    res.json({ welcome_message: `Oh, hi there ${name}, my dear ${title}!` });
  }
});

app.get('/appenda/:appendable', (req, res) => {
  let appendable = req.params.appendable;
  if (appendable === undefined) {
    res.status(404);
  } else {
    res.json({ appended: `${appendable}a` });
  }
});

app.post('/dountil/:action', (req, res) => {
  let action = req.params.action;
  let number = req.body.until;
  console.log(number, action);

  if (!number) {
    res.json({ error: 'Please provide a number!' });
  }

  if (action === 'sum') {
    let sum = 0;
    for (let i = 0; i <= number; i++) {
      sum += i;
      return sum;
    }
    res.json({ result: sum });
  }

  if (action === 'factor') {
    
    function factorialize(num) {
      if (num === 0 || num === 1)
        return 1;
      for (let i = num - 1; i >= 1; i--) {
        num *= i;
      }
      return num;
    }

    let factor = factorialize(number);
    res.json({ result: factor });
  }
});

app.listen(PORT);
