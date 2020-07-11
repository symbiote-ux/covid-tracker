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

const getDistrictCases = async (name) => {
  const covidCases = await getData(url.district);
  const state = Object.keys(covidCases).find((state) => {
    return Object.keys(covidCases[state].districtData).some((districtName)=>districtName.toLowerCase()===name.toLowerCase());
  });
  console.log(state,covidCases[state].districtData[name]);
  return covidCases[state].districtData[name];
};

const getCases = function (loc,locName) {
  const funcs = {
    'state': getStateCases,
    'district':getDistrictCases
  }
  return funcs[loc](locName);
}

module.exports = { getCases};
