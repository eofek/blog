const fs = require('fs');

function getNotes(req, res) {
  var noteString = fs.readFileSync('blogonotki.json');
  var note = JSON.parse(noteString);
  res.send(note);
}

function getSingleNote(req, res) {
  var noteString = fs.readFileSync('blogonotki.json');
  var note = JSON.parse(noteString);
  var noteID = req.params.id;
  var filtr = note.filter(function (n){return n.id == noteID});


  res.send(note.filter((n)=> {return n.id ==noteID}));

}

exports.getNotes = getNotes;
exports.getSingleNote = getSingleNote;
