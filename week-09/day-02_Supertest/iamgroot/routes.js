const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
  let received = 'Groot';
  if (received == null || received.length === 0) {
    res.json({ error: 'I am Groot!' });
  }
  res.status(200).json({ received: received, translated: 'I am Groot!' });
});

module.exports = app;
