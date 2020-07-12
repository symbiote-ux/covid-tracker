const express = require('express');
const querystring = require('querystring');
const app = express();

const redis = require('redis');
const db = redis.createClient({ db: 1 });

let id = 1;
const getWork = (location, locationName) => {
  return { id: id++, location, locationName };
};

app.use(express.static('public'));

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

const readBody = function (req, res, next) {
  let comment = '';
  req.on('data', (chunk) => {
    comment += chunk;
  });
  req.on('end', () => {
    req.body = comment;
    if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
      req.body = querystring.parse(req.body);
    }
    next();
  });
};

app.use(readBody);

app.get('/covidStatus/:location/:locationName/', (req, res) => {
  const job = getWork(req.params);
  db.rpush('undoneWork', job.id);
  db.hmset(job.id, job.location, job.locationName);
  console.log('job scheduled', req.params.location, req.params.locationName);
  res.end();
});

app.post('/process', async (req, res) => {
  const { location, locationName } = JSON.parse(req.body);
  const job = getWork(location, locationName);
  await db.rpush('undoneWork', job.id);
  await db.hmset(job.id, job.location, job.locationName);
  res.json({
    msg: `job scheduled for ${job.location} with job id ${job.id}`,
    jobId: job.id,
  });
});

app.post('/getInfo', (req, res) => {
  db.hgetall(req.body.id, (err, reply) => {
    if ('cases' in reply) {
      return res.json(JSON.parse(reply.cases));
    }
    res.json({ msg: 'Your request is in process' });
  });
});

module.exports = { app };
