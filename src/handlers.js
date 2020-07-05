const express = require('express');
const app = express();

const content = require('../database/district.json');
const { InfoProvider } = require('./infoProvider');

const infoProvider = new InfoProvider(content);

app.get('/:district/', (req, res) => {
  const districtData = infoProvider.getDistrictInfo(req.params.district);
  console.log(districtData);
  res.json(districtData);
  res.end();
});

module.exports = { app };
