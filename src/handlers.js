const http = require('http');
const express = require('express');
const app = express();
const { Scheduler } = require('./scheduler');
const { InfoProvider } = require('./infoProvider');
const content = require('../database/district.json');

const getWorkerOptions = () => {
  return {
    host: 'localhost',
    port: 5000,
    method: 'post',
    path: '/process',
  };
};

const infoProvider = new InfoProvider(content);

const districtScheduler = new Scheduler(getWorkerOptions());
districtScheduler.start();

const stateScheduler = new Scheduler(getWorkerOptions());
stateScheduler.start();

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get('/district/:district/', (req, res) => {
  const districtInfo = infoProvider.getDistrictInfo(req.params.district);
  res.json(districtInfo);
});

app.get('/state/:state/', (req, res) => {
  const StateInfo = infoProvider.getStateInfo(req.params.state);
  res.json(StateInfo);
});

app.post

module.exports = { app };
