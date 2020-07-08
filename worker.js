const http = require('http');
const express = require('express');
const { InfoProvider } = require('./src/infoProvider');
const content = require('./database/district.json');
const app = express();

const PORT = 5000;
const infoProvider = new InfoProvider(content);

const getServerOptions = () => {
  return {
    host: 'localhost',
    port: 4000,
    method: 'post',
  };
};

const informWorkerFree = (id, result) => {
  const options = getServerOptions();
  options.path = `/completed-job/${id}`;
  const req = http.request(options, (res) => {});
  req.write(JSON.stringify(result));
  req.end();
};

app.post('/process', (req, res) => {
  let data = '';
  req.on('data', (chunk) => (data += chunk));
  req.on('end', () => {
    const job = JSON.parse(data);
    const result = infoProvider.processJob(job);
    console.log(result);
    informWorkerFree(job.id, result);
    res.end();
  });
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
