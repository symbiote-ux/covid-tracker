// class InfoProvider {
//   constructor(content) {
//     this.info = content;
//   }
//   delay(time) {
//     const count = time * 3000000000;
//     let a, b;
//     for (let i = 0; i < count; i++) {
//       a = i;
//       b = a * i;
//     }
//   }
//   getDistrictInfo(value) {
//     this.delay(2);
//     for (let i = 0; i < this.info.length; i++) {
//       const districtInfo = this.info[i].districtData.find(
//         (district) => district.id.toLowerCase() === value.toLowerCase()
//       );
//       if (districtInfo) return districtInfo;
//     }
//   }
//   getStateInfo(value) {
//     this.delay(1);
//     return this.info.find(
//       (stateInfo) => stateInfo.state.toLowerCase() === value.toLowerCase()
//     );
//   }
//   processJob(location, locationName) {
//     if (location === 'state') {
//       return this.getStateInfo(locationName);
//     }
//     return this.getDistrictInfo(locationName);
//   }
// }

// module.exports = { InfoProvider };

const http = require('http');
const url = require('./urls.json');

const getData = (url) => {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
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
