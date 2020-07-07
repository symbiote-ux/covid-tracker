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
const scheduler = new Scheduler(getWorkerOptions());
scheduler.start();

app.get('/district/:district/', (req, res) => {
  const districtInfo = infoProvider.getDistrictInfo(req.params.district);
  res.json(districtInfo);
});

app.get('/state/:state/', (req, res) => {
  const StateInfo = infoProvider.getStateInfo(req.params.state);
  res.json(StateInfo);
});

module.exports = { app };
