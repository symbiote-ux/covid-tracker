const express = require('express');
const app = express();

const content = require('../database/district.json');
const { InfoProvider } = require('./infoProvider');

const infoProvider = new InfoProvider(content);

app.get('/district/:district/', (req, res) => {
  const districtInfo = infoProvider.getDistrictInfo(req.params.district);
  res.json(districtInfo);
});

app.get('/state/:state/', (req, res) => {
  const StateInfo = infoProvider.getStateInfo(req.params.state);
  res.json(StateInfo);
});

module.exports = { app };
