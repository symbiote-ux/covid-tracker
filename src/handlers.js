const express = require('express');
const app = express();

app.get('/:district/', (req, res) => {
  console.log(req.params);
  res.end();
});

module.exports = {app};