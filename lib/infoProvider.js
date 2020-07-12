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
  let districtData;
  covidCases.forEach((state) => {
    state.districtData.forEach((districtInfo) => {
      if (districtInfo.name.toLowerCase() === name.toLowerCase())
        districtData = districtInfo;
    });
  });
  return districtData;
};

const getWorldCases = async (name) => {
  return await getData(url.world);
};

const getCases = function (loc, locName) {
  const funcs = {
    state: getStateCases,
    district: getDistrictCases,
    world: getWorldCases,
  };
  return funcs[loc](locName);
};

module.exports = { getCases };
