const http = require('http');
const express = require('express');
const app = express();
const { Scheduler } = require('./scheduler');

const getWorkerOptions = () => {
  return {
    host: 'localhost',
    port: 5000,
    method: 'post',
    path: '/process',
  };
};

let id = 1;

const getWork = (place) => {
  return { id: id++, place: place };
};

const districtScheduler = new Scheduler(getWorkerOptions());
districtScheduler.start();

const stateScheduler = new Scheduler(getWorkerOptions());
stateScheduler.start();

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.post('/completed-job/:id', (req, res) => {
  let data = '';
  req.on('data', (chunk) => (data += chunk));
  req.on('end', () => {
    const tags = JSON.parse(data);
    console.log('received tags', tags);
    imageSets.completedProcessing(req.params.id, tags);
    scheduler.setWorkerFree();
    res.end();
  });
});

app.get('/district/:district/', (req, res) => {
  // const districtInfo = infoProvider.getDistrictInfo(req.params.district);
  districtScheduler.schedule(getWork(req.params.district));
  console.log('job scheduled', req.params.district);
  // res.json(districtInfo);
  res.end();
});

app.get('/state/:state/', (req, res) => {
  // const StateInfo = infoProvider.getStateInfo(req.params.state);
  stateScheduler.schedule(getWork(req.params.state));
  console.log('job scheduled', req.params.state);
  // res.json(StateInfo);
  res.end();
});

app.post;

module.exports = { app };
