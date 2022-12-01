const notes = require('express').Router();
const { readAndWrite, readThisFile, deleteNote } = require('../helpers/fileEditing');
const newId = require('../helpers/newId');

notes.get('/', (req, res) => {
    readThisFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

notes.post('/', (req, res) => {
    const {title, text } = req.body;
    
    if (req.body) {
        const newNote = {
            title,
            text,
            id: newId.newId(7)
        };

        readAndWrite(newNote, './db/db.json');
        res.json('Note sent off to the space station! B)');
    } else {
        res.error('Something went wrong in sending the note to space! It came back in an escape pod.');
    }
});

notes.delete('/', (req, res) => {
    console.log(`${req}\n ${res}`);
})

module.exports = notes;