const express = require('express');

const server = express();
server.use(express.json());

const knex = require('knex');
const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);

server.get('/', (req,res) => {
  return res.send('/api/projects for more info')
});

server.get('/api/projects', (req,res) => {
  db('projects')
    .then(proj => res.status(200).json(proj))
    .catch(err => res.status(500).json(err))
});

server.get('/api/projects/:id', (req,res) => {
  const id= req.params.id
  db('projects')
    .where({ id })
    .then(proj => {
      db.raw(`select * from actions where actions.project_id = ${proj[0].id}`)
        .then(act => {
          const full = {
            id: proj[0].id,
            name: proj[0].name,
            description: proj[0].description,
            project_complete: proj[0]["project_complete"],
            actions: [...act]
          }

          res.status(200).json(full)
        })
        .catch(err => res.status(500).json(err))
        
    })
    .catch(err => res.status(500).json(err))
});

server.post('/api/projects', (req,res) => {
  db('projects')
    .insert(req.body)
    .then(response => res.status(200).json(response))
    .catch(err => res.status(500).json(err))
});

server.put('/api/projects/:id', (req,res) => {
  db('projects')
    .update(req.body)
    .where({id: req.params.id})
    .then(response => res.status(200).json(response))
    .catch(err => res.status(500).json(err))
});

server.delete('/api/projects/:id', (req,res) => {
  db('projects')
    .where({id: req.params.id})
    .del()
    .then(response => res.status(200).json(response))
    .catch(err => res.status(500).json(err))
});





server.get('/api/actions', (req,res) => {
  db('actions')
    .then(proj => res.status(200).json(proj))
    .catch(err => res.status(500).json(err))
});

server.post('/api/actions', (req,res) => {
  db('actions')
    .insert(req.body)
    .then(response => res.status(200).json(response))
    .catch(err => res.status(500).json(err))
});

server.put('/api/actions/:id', (req,res) => {
  db('actions')
    .update(req.body)
    .where({id: req.params.id})
    .then(response => res.status(200).json(response))
    .catch(err => res.status(500).json(err))
});

server.delete('/api/actions/:id', (req,res) => {
  db('actions')
    .where({id: req.params.id})
    .del()
    .then(response => res.status(200).json(response))
    .catch(err => res.status(500).json(err))
});

const port = process.env.PORT || 5000;
server.listen(port, () =>
  console.log(`\n** API running on http://localhost:${port} **\n`)
);
