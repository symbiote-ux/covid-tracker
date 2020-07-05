class InfoProvider {
  constructor(content) {
    this.info = content;
  }
  getDistrictInfo(value) {
    for (let i = 0; i < this.info.length; i++) {
      const districtInfo = this.info[i].districtData.find(
        (district) => district.id.toLowerCase() === value.toLowerCase()
      );
      if (districtInfo) return districtInfo;
    }
  }
  getStateInfo(value) {
    return this.info.find(
      (stateInfo) => stateInfo.state.toLowerCase() === value.toLowerCase()
    );
  }
}

module.exports = { InfoProvider };
