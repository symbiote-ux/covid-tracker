const express = require('express');
const app = express();

const redis = require('redis');
const db = redis.createClient({ db: 1 });

const getCurrId = () => {
  return new Promise((resolve, reject) =>
    db.incr('current_id', (err, res) => resolve(res))
  );
};

const getWork = async (location, locationName) => {
  const id = await getCurrId();
  return await { id, location, locationName };
};
// let id = 1;
// const getWork = (location, locationName) => {
//   return { id: id++, location, locationName };
// };

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
    req.body = JSON.parse(comment);
    next();
  });
};

app.use(readBody);

app.post('/process', async (req, res) => {
  const { location, locationName } = req.body;
  const job = await getWork(location, locationName);
  await db.rpush('undoneWork', job.id);
  await db.hmset(job.id, job.location, job.locationName);
  res.json({
    msg: `job scheduled for ${job.location} with job id ${job.id}`,
    jobId: job.id,
  });
});

app.post('/getInfo', (req, res) => {
  const { jobId } = req.body;
  db.hgetall(jobId, (err, reply) => {
    if ('cases' in reply) {
      return res.json(JSON.parse(reply.cases));
    }
    res.json({ msg: 'Your request is in process' });
  });
});

module.exports = { app };
