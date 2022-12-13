const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const cors = require('cors');
const { json } = require('body-parser');
const { nanoid } = require('nanoid');

dotenv.config({ path: './config.env' });

const app = express();

app.use(cors());
app.use(json());

let notes = [
    {
      id: nanoid(),
      note: 'note 1',
      color: 'red',
    },
    {
      id: nanoid(),
      note: 'note 2',
      color: 'yellow',
    },
    {
      id: nanoid(),
      note: 'note 3',
      color: 'blue',
    },
    {
      id: nanoid(),
      note: 'note 4',
      color: 'green',
    },
    {
      id: nanoid(),
      note: 'note 5',
      color: 'pink',
    },
  ];

  app.get('/notes', (req, res) => res.send(notes));

  app.post('/notes', (req, res) => {
    const note = { note: req.body.note, id: nanoid(), color: 'false' };
    notes.push(note);
    return res.send(note);
  });
  
  app.patch('/notes/:id', (req, res) => {
    const id = req.params.id;
    const index = notes.findIndex((note) => note.id == id);
    const color = req.body.color;
    if (index > -1) {
      notes[index].color = color;
    }
    return res.send(notes[index]);
  });
  
  app.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    const index = notes.findIndex((note) => note.id == id);
    if (index > -1) {
      notes.splice(index, 1);
    }
  
    res.send(notes);
  });
  
  const PORT = 7000;
  
  app.listen(PORT, console.log(`Server running on port ${PORT}`.green.bold));