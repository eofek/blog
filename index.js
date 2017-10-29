const express = require('express');
var modulez = require('./modulez/notki');

var app = express();

app.use(express.static('public'));

app.get('/getnotes', modulez.getNotes);

app.get('/getSingleNote/:id', modulez.getSingleNote);

app.listen(3000, () => {
  console.log('up@ locahost:3K');
});
