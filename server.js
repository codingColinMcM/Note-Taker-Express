// Import Express, Path
const express = require("express");
const path = require("path");
const fs = require("fs");
const { json } = require("express");
const uuid = require('./helpers/uuid');

// Use ecpress to instantiate/create a copy of a web server
var app = express();

// Using milware before routing
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

// How to respond to a "get" request
app.get("/main", (req, res) => {
    res.sendFile(path.dirname + "./index.html")
    console.log("hello")
})

app.put('/api/notes', (req, res) => {
  
})

app.get('/api/notes', (req, res) => {

  fs.readFile('./db/notes.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
    } else {
        const notes = JSON.parse(data);
        res.json(notes)
    }
  })
  //console.log(notes)
})
// How to respond to a "post" request

app.post('/notes', (req, res) => {

    // Destructuring assignment for the items in req.body
    const { title, textarea } = req.body;
  
    // If all the required properties are present
    if (title && textarea) {
      // Variable for the object we will save
      const newNote= {
        title, 
        textarea,
        noteID: uuid(),
      };
  
      // Convert the data to a string so we can save it
      const noteString = JSON.stringify(newNote);

      fs.readFile('./db/notes.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err)
        } else {
            var paresdNotes = JSON.parse(data);
            
            paresdNotes.push(newNote);

            obj = JSON.stringify(paresdNotes, null, 4);
                        
            fs.writeFile(
                './db/notes.json',
                obj,
                (writeErr) =>
                    writeErr
                        ? console.error(err)
                        : console.log(
                            `Note for ${newNote.title} has been written to JSON file`
                        )
            )
        }
      })
  
  
      const response = {
        status: 'success',
        body: newNote,
      };

      const newNotes = require('./db/notes')

      res.json(newNotes);
    } else {
      res.status(500).json('Error in posting review');
    }
  });

app.delete('/api/notes/:noteID', (req, res) => {
  fs.readFile('./db/notes.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
    } else {

        var paresdNotes = JSON.parse(data);
        const { noteID } =  req.params;
        const noteIndex = paresdNotes.findIndex(p => p.noteID == noteID);
        paresdNotes.splice(noteIndex, 1);     

        obj = JSON.stringify(paresdNotes, null, 4);
                        
            fs.writeFile(
                './db/notes.json',
                obj,
                (writeErr) =>
                    writeErr
                        ? console.error(err)
                        : console.log(
                            `Note has been REMOVED from JSON file`
                        ))

    }})

    const newNotes = require('./db/notes');

    res.json(newNotes);
});
app.listen(3001)