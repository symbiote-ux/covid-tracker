class InfoProvider {
  constructor(content) {
    this.info = content;
  }
  delay(time) {
    const count = time * 3000000000;
    let a, b;
    for (let i = 0; i < count; i++) {
      a = i;
      b = a * i;
    }
  }
  getDistrictInfo(value) {
    this.delay(2);
    for (let i = 0; i < this.info.length; i++) {
      const districtInfo = this.info[i].districtData.find(
        (district) => district.id.toLowerCase() === value.toLowerCase()
      );
      if (districtInfo) return districtInfo;
    }
  }
  getStateInfo(value) {
    this.delay(1);
    return this.info.find(
      (stateInfo) => stateInfo.state.toLowerCase() === value.toLowerCase()
    );
  }
  processJob(location, locationName) {
    if (location === 'state') {
      return this.getStateInfo(locationName);
    }
    return this.getDistrictInfo(locationName);
  }
}

module.exports = { InfoProvider };
