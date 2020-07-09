// const http = require('http');
// const express = require('express');
// const { InfoProvider } = require('./src/infoProvider');
// const content = require('./database/district.json');
// const app = express();

// const PORT = 5000;
// const infoProvider = new InfoProvider(content);

// const getServerOptions = () => {
//   return {
//     host: 'localhost',
//     port: 4000,
//     method: 'post',
//   };
// };

// const informWorkerFree = (locationName, result) => {
//   const options = getServerOptions();
//   options.path = `/completed-job/${locationName}`;
//   const req = http.request(options, (res) => {});
//   req.write(JSON.stringify(result));
//   req.end();
// };

// app.post('/process', (req, res) => {
//   let data = '';
//   req.on('data', (chunk) => (data += chunk));
//   req.on('end', () => {
//     const job = JSON.parse(data);
//     const result = infoProvider.processJob(job);
//     console.log('Job completed', job.id);
//     informWorkerFree(job.locationName, result);
//     res.end();
//   });
// });

// app.listen(PORT, () => console.log(`listening on ${PORT}`));

const redis = require('redis');
const db = redis.createClient({ db: 1 });

const getJobFromDb = (id) => {
  return new Promise((resolve, reject) => {
    db.hgetall(id, (err, res) => {
      resolve(res);
    });
  });
};

const getJob = () => {
  return new Promise((resolve, reject) => {
    db.lpop('undoneWork', (err, res) => {
      if (!err) resolve(res);
    });
  });
};

const runLoop = () => {
  getJob.then((id) => {
    const job = getJobFromDb(id);
  });
};
