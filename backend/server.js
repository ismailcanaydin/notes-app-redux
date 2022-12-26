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
      id: "1",
      note: 'note 1',
      color: 'red',
    },
    {
      id: "2",
      note: 'note 2',
      color: 'yellow',
    },
    {
      id: "3",
      note: 'note 3',
      color: 'blue',
    },
    {
      id: "4",
      note: 'note 4',
      color: 'green',
    },
    {
      id: "5",
      note: 'note 5',
      color: 'pink',
    },{
      id: "6",
      note: 'note 6',
      color: 'red',
    },
    {
      id: "7",
      note: 'note 7',
      color: 'yellow',
    },
    {
      id: "8",
      note: 'note 8',
      color: 'blue',
    },
    {
      id: "9",
      note: 'note 9',
      color: 'green',
    },
    {
      id: "10",
      note: 'note 10',
      color: 'pink',
    },
  ];

  app.get('/notes', (req, res) => res.send(notes));

  app.post('/notes', (req, res) => {
    const note = { ...req.body, id: nanoid() };
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