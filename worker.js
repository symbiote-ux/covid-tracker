const redis = require('redis');
const db = redis.createClient({ db: 1 });
const { getCases } = require('./lib/infoProvider');

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
      if (err || res === null) reject('No job found');
      resolve({ jobId: res });
    });
  });
};

const runLoop = async () => {
  try {
    const { jobId } = await getJob();
    const job = await getJobFromDb(jobId);
    const [location, locationName] = Object.entries(job)[0];
    const cases = await getCases(location, locationName);
    await db.set(jobId, JSON.stringify(cases));
    console.log('job completed', jobId, locationName);
    runLoop();
  } catch (error) {
    console.log(error);
    setTimeout(runLoop, 5000);
  }
};

runLoop();
