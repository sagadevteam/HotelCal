var HotelCal = artifacts.require("./HotelCal.sol");

module.exports = function(deployer) {
  deployer.deploy(HotelCal, "hotelcal", "room");
};
