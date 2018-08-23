var HotelCal = artifacts.require("./HotelCal.sol");
var SAGApoint = artifacts.require("./SAGApoint");

module.exports = function(deployer) {
  deployer.deploy(HotelCal, "hotelcal", "room");
  deployer.deploy(SAGApoint);
};
