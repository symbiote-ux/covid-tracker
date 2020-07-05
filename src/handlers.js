const express = require('express');
const app = express();

const content = require('../database/district.json');
const { InfoProvider } = require('./infoProvider');

const infoProvider = new InfoProvider(content);

app.get('/:district/', (req, res) => {
  const districtInfo = infoProvider.getDistrictInfo(req.params.district);
  console.log(districtInfo);
  res.json(districtInfo);
  res.end();
});

app.get('/:state/', (req, res) => {
  const StateInfo = infoProvider.getStateInfo(req.params.state);
  console.log(StateInfo);
  res.json(StateInfo);
  res.end();
});

module.exports = { app };
