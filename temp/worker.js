const http = require('http');
const express = require('express');
const app = express();
const {InfoProvider} = require('./infoProvider');
const content = require('../database/district.json');

const infoProvider = new InfoProvider(content);

const PORT = 5000;
const getServerOptions = () => {
  return {
    host: 'localhost',
    port: 4000,
    method: 'post',
  };
};

const informWorkerFree = ({ id, tags }) => {
  const options = getServerOptions();
  options.path = `/completed-job/${id}`;
  const req = http.request(options, (res) => {});
  req.write(JSON.stringify(tags));
  req.end();
};

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.post('/process', (req, res) => {
  let data = '';
  req.on('data', (chunk) => (data += chunk));
  req.on('end', () => {
    const params = JSON.parse(data);
    infoProvider.getDistrictInfo(params)
      .then((tags) => {
        console.log(tags);
        return { id: params.id, tags: tags };
      })
      .then(informWorkerFree);
    res.end();
  });
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
