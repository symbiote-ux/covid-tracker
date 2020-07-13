const displayCasesTable = (result) => {
  const { locName, confirmed, recovered, deaths, active } = result;
  const box = document.createElement('div');
  box.id = 'table';
  const header = document.createElement('div');
  header.id = 'header';
  header.innerText = locName;
  box.appendChild(header);
  const body = document.createElement('div');
  body.id = 'table-body';
  const x = document.createElement('div');
  x.className = 'unit';
  x.innerText = `Confirmed: ${confirmed || 0}`;
  const y = document.createElement('div');
  y.className = 'unit';
  y.innerText = `Recovered: ${recovered || 0}`;
  const z = document.createElement('div');
  z.className = 'unit';
  z.innerText = `Deaths: ${deaths || 0}`;
  const a = document.createElement('div');
  a.className = 'unit';
  a.innerText = `Active: ${active || 0}`;
  body.appendChild(x);
  body.appendChild(y);
  body.appendChild(z);
  body.appendChild(a);
  box.appendChild(body);
  return box;
};

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
  const message = displayCasesTable(result);
  const board = document.getElementById('board');
  board.innerHTML = '';
  board.appendChild(message);
};

const getProcessedJob = function () {
  const jobId = document.getElementById('jobId').value;
  sendReq('POST', '/getInfo', { jobId }, displayProcessedData);
};
