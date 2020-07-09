const redis = require('redis');
const db = redis.createClient({ db: 1 });
const content = require('./database/district.json');
const { InfoProvider } = require('./src/infoProvider');
const infoProvider = new InfoProvider(content);

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
      if (err || res === null) reject('No Job present!');
      resolve(res);
    });
  });
};

const runLoop = () => {
  getJob()
    .then((id) => {
      getJobFromDb(id).then((job) => {
        const [location, locationName] = Object.entries(job)[0];
        const result = infoProvider.processJob(location, locationName);
        db.set(locationName, JSON.stringify(result));
        console.log('Job completed', locationName);
      });
    })
    .catch((msg) => console.log(msg));
};

setInterval(runLoop, 5000);
