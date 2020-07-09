const express = require('express');
const app = express();
// const { Scheduler } = require('./scheduler');
const redis = require('redis');
const db = redis.createClient({ db: 1 });

const getWorkerOptions = () => {
  return {
    host: 'localhost',
    port: 5000,
    method: 'post',
    path: '/process',
  };
};

let id = 1;
const getWork = ({ location, locationName }) => {
  return { id: id++, location, locationName };
};

// const scheduler = new Scheduler(getWorkerOptions());
// scheduler.start();

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.post('/completed-job/:locationName', (req, res) => {
  let data = '';
  req.on('data', (chunk) => (data += chunk));
  req.on('end', () => {
    console.log('job completed', req.params.locationName);
    db.set(req.params.locationName, data);
    // scheduler.setWorkerFree();
    res.end();
  });
});

app.get('/covidStatus/:location/:locationName/', (req, res) => {
  // scheduler.schedule(getWork(req.params));
  const job = getWork(req.params);
  db.rpush('undoneWork', job.id);
  db.hmset(
    'id',
    job.locationName,
    'location',
    job.location,
    'locationName',
    job.locationName
  );
  console.log('job scheduled', req.params.location, req.params.locationName);
  res.end();
});

app.get('/jobStatus/:locationName/', (req, res) => {
  db.get(req.params.locationName, (err, reply) => {
    res.json(JSON.parse(reply));
  });
});

module.exports = { app };
