const express = require('express');
const app = express();
const { Scheduler } = require('./scheduler');
const tempDatabase = {};

const getWorkerOptions = () => {
  return {
    host: 'localhost',
    port: 5000,
    method: 'post',
    path: '/process',
  };
};

let id = 1;
const getWork = ({ location, locationName }) => {
  return { id: id++, location, locationName };
};

const scheduler = new Scheduler(getWorkerOptions());
scheduler.start();

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.post('/completed-job/:id', (req, res) => {
  let data = '';
  req.on('data', (chunk) => (data += chunk));
  req.on('end', () => {
    const result = JSON.parse(data);
    console.log('job completed', req.params.id);
    tempDatabase[req.params.id] = result;
    scheduler.setWorkerFree();
    res.end();
  });
});

app.get('/covidStatus/:location/:locationName/', (req, res) => {
  scheduler.schedule(getWork(req.params));
  console.log('job scheduled', req.params.location, req.params.locationName);
  res.end();
});

app.get('/jobStatus/:id/', (req, res) => {
  res.json(tempDatabase[req.params.id]);
});

module.exports = { app };
