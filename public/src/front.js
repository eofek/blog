
(function(){
  getNotes('/getnotes', (n)=> {
    if (n.length>0) {
      // console.log('wywołanie z cbk getnotes: ' + n);
      showNotes(JSON.parse(n));
    }
  });

  function showNotes(notes) {
    var notki = document.querySelector('.notki');
    // console.log('wsie notki: ' + notes);
    notes.forEach((nocia) => {
      var title = document.createElement('h3');
      title.setAttribute('data-id', nocia.id);
      var titleTxt = document.createTextNode(nocia.title);
      title.appendChild(titleTxt);
      notki.appendChild(title);

      var noteBody = document.createElement('p');
      noteBody.setAttribute('data-id', nocia.id);
      noteBody.setAttribute('class', 'link');
      var content = document.createTextNode(nocia.body);
      noteBody.appendChild(content);

      title.insertAdjacentElement("afterend", noteBody);


      title.addEventListener('click', (ev) => {
        var noteID = ev.target.getAttribute("data-id");
        getNotes('/getSingleNote/' + noteID, (note) => {
          var newP = document.createElement('p');
          var newNoteText = document.createTextNode(JSON.parse(note)[0].title);
          newP.appendChild(newNoteText);
          notki.innerHTML = '';
          notki.appendChild(newP);
        })
      });

      noteBody.addEventListener('click', (ev) => {
        var noteID = ev.target.getAttribute("data-id");
        getNotes('/getSingleNote/' + noteID, (note) => {
          var newP = document.createElement('p');
          var newNoteText = document.createTextNode(JSON.parse(note)[0].title);
          newP.appendChild(newNoteText);
          notki.innerHTML = '';
          notki.appendChild(newP);
        })
      });

    })
  }
})();

  function getNotes(addr, cbk) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200)
        cbk(xhr.responseText);
    };

    xhr.open('GET', addr);
    xhr.send();
  }
