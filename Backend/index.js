const express = require ('express');
var app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/users', (req, res) => {
  res.json({msg:"routes users"});
});

app.listen(3000);