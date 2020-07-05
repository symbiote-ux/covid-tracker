class InfoProvider {
  constructor(content) {
    this.info = content;
  }

  getDistrictInfo(district) {
    for (let states in this.info) {
      if (district in this.info[states].districtData)
        return this.info[states].districtData[district];
    }
  }
}

module.exports = {InfoProvider};