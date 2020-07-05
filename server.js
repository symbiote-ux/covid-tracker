const express = require('express');
const app = express();

app.get('/:district/', (req, res) => {
  console.log(req.params);
  res.end();
})

app.listen(4000, () => console.log('listening on 4000'));
