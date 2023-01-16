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
      color: 'text-bg-danger',
    },
    {
      id: "2",
      note: 'note 2',
      color: 'color-label-3',
    },
    {
      id: "3",
      note: 'note 3',
      color: 'text-bg-info',
    },
    {
      id: "4",
      note: 'note 4',
      color: 'color-label-4',
    },
    {
      id: "5",
      note: 'note 5',
      color: 'text-bg-secondary',
    },{
      id: "6",
      note: 'note 6',
      color: 'text-bg-danger',
    },
    {
      id: "7",
      note: 'note 7',
      color: 'color-label-3',
    },
    {
      id: "8",
      note: 'note 8',
      color: 'text-bg-info',
    },
    {
      id: "9",
      note: 'note 9',
      color: 'color-label-4',
    },
    {
      id: "10",
      note: 'note 10',
      color: 'text-bg-secondary',
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