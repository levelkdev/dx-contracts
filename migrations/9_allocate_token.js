const EtherToken = artifacts.require("EtherToken");

module.exports = function(deployer, network, accounts) {
  EtherToken.deployed().then((token) => {
    token.transfer(accounts[0], 50 * (10**18) )
    console.log('transferred to ', accounts[0])
  })
};
