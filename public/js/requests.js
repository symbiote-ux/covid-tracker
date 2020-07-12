const sendReq = function (method, url, body, callback) {
  const req = new XMLHttpRequest();
  req.onload = function () {
    if (this.status < 400) {
      return callback(JSON.parse(this.responseText));
    }
  };
  req.open(method, url);
  let content = body;
  if (body) {
    req.setRequestHeader('Content-Type', 'application/json');
    content = JSON.stringify(body);
  }
  req.send(content);
};

const updateDisplay = function ({ msg, jobId }) {
  const message = `<p>${msg}</p>`;
  const board = document.getElementById('board');
  board.innerHTML = message;
};

const processJob = function () {
  const location = document.getElementById('loc').value;
  const locationName = document.getElementById('locName').value;
  sendReq('POST', '/process', { location, locationName }, updateDisplay);
};

const displayProcessedData = function (result) {
  const message = `<p>${JSON.stringify(result)}</p>`;
  const board = document.getElementById('board');
  board.innerHTML = message;
};

const getProcessedJob = function () {
  const jobId = document.getElementById('jobId').value;
  sendReq('POST', '/getInfo', { jobId }, displayProcessedData);
};
