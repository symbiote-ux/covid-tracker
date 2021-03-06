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

const formateData = function (cases, locName) {
  cases = cases.data ? cases.data : cases;
  const data = { locName };
  data.confirmed = cases.confirmed || cases.total_cases;
  data.recovered = cases.recovered || cases.recovery_cases;
  data.deaths = cases.deaths || cases.death_cases;
  if (locName.toLowerCase() === 'world') {
    const recoveredCount = data.recovered.split(',').join('');
    const deathCount = data.deaths.split(',').join('');
    const confirmedCount = data.confirmed.split(',').join('');
    data.active = +confirmedCount - (+deathCount + +recoveredCount);
    return data;
  }
  data.active =
    cases.active || +data.confirmed - (+data.recovered + +data.deaths);
  return data;
};
const runLoop = async () => {
  try {
    const { jobId } = await getJob();
    const job = await getJobFromDb(jobId);
    const [location, locationName] = Object.entries(job)[0];
    const cases = await getCases(location, locationName);
    const data = formateData(cases, locationName);
    await db.hmset(jobId, 'cases', JSON.stringify(data));
    console.log('job completed', jobId, locationName);
    runLoop();
  } catch (error) {
    console.log(error);
    setTimeout(runLoop, 1000);
  }
};

runLoop();
