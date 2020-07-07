const http = require('http');

class Scheduler {
  constructor(workerOptions) {
    this.workerOptions = workerOptions;
    this.isWorkerFree = true;
    this.jobs = [];
  }
  schedule(job) {
    this.jobs.push(job);
  }
  delegateToWorker(data) {
    const options = this.workerOptions;
    const req = http.request(options, (res) => {
      console.log('got from worker', res.statusCode);
    });
    req.write(JSON.stringify(data));
    req.end();
    this.isWorkerFree = false;
  }
  start() {
    setInterval(() => {
      if (this.isWorkerFree && this.jobs.length > 0) {
        const job = this.jobs.shift();
        console.log('Scheduled on worker', job.id);
        this.delegateToWorker(job);
      }
    }, 1000);
  }
  setWorkerFree() {
    this.isWorkerFree = true;
  }
}

module.exports = { Scheduler };
