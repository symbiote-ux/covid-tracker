const express = require('express');
const app = express();

const content = require('../database/district.json');
const {InfoProvider} = require('./infoProvider');

const infoProvider = new InfoProvider(content);

app.get('/:district/', (req, res) => {
  res.write(infoProvider.getDistrictInfo(req.params.district));
  res.end();
});

module.exports = {app};