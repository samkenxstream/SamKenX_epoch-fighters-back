const Web3 = require("web3");

const web3 = new Web3();

const checkAddress = (address, message, signature) => {
  return recoverAddress(message, signature) == address;
};

const recoverAddress = (message, signature) => {
  return web3.eth.accounts.recover(message, signature);
};

module.exports = {
  recoverAddress,
  checkAddress
};
