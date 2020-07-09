const express = require('express');
const app = express();
const redis = require('redis');
const db = redis.createClient({ db: 1 });

let id = 1;
const getWork = ({ location, locationName }) => {
  return { id: id++, location, locationName };
};

const isLocationSearched = async function (location) {
  return new Promise((resolve, reject) => {
    db.keys(location, (err, reply) => {
      if (reply.length) resolve(true)
      resolve(false)
    });
  });
};

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
    res.end();
  });
});

// db.exists(job.locationName);
app.get('/covidStatus/:location/:locationName/', async (req, res) => {
  const job = getWork(req.params);
  res.write(`Go to url=> curl localhost:4000/jobStatus/${job.locationName}`);
  if ( await isLocationSearched(job.locationName)) {
    console.log('Your job is completed');
    res.end();
  } else {
    db.rpush('undoneWork', job.locationName);
    db.hmset(job.locationName, job.location, job.locationName);
    console.log('job scheduled', req.params.location, req.params.locationName);
    res.end();
  }
});

app.get('/jobStatus/:locationName/', (req, res) => {
  db.get(req.params.locationName, (err, reply) => {
    res.json(JSON.parse(reply));
  });
});

module.exports = { app };
