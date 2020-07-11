const https = require('https');
const url = require('./urls.json');

const getData = (url) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        resolve(JSON.parse(data));
      });
    });
  });
};

const getStateCases = async (name) => {
  const covidCases = await getData(url.state);
  const stateCases = covidCases.find(
    (stateInfo) => stateInfo.state.toLowerCase() === name.toLowerCase()
  );
  return stateCases;
};

module.exports = { getStateCases };
