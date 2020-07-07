const http = require('http');
const express = require('express');
const { InfoProvider } = require('./src/infoProvider');
const content = require('./database/district.json');
const app = express();

const PORT = 5000;
const infoProvider = new InfoProvider(content);

app.post('/process', (req, res) => {
  let data = '';
  req.on('data', (chunk) => (data += chunk));
  req.on('end', () => {
    const info = JSON.parse(data);
    res.write(infoProvider.getDistrictInfo(info.place));
  });
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
