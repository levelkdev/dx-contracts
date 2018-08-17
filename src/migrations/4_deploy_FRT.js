function migrate ({
  artifacts,
  deployer,
  network,
  accounts
}) {
  const TokenFRT = artifacts.require('TokenFRT')
  const { SafeMath } = _getDependencies(artifacts, network, deployer)

  return deployer
    .then(() => SafeMath.deployed())
    .then(safeMath => deployer.link(SafeMath, TokenFRT))
    .then(() => {
      const account = accounts[0]
      console.log('Deploying TokenFRT with owner: %s', account)
      return deployer.deploy(TokenFRT, account)
    })
}

function _getDependencies (artifacts, network, deployer) {
  let SafeMath
  if (network === 'development') {
    SafeMath = artifacts.require('SafeMath')
  } else {
    const contract = require('truffle-contract')
    SafeMath = contract(require('openzeppelin-solidity/contracts/math/SafeMath'))
    SafeMath.setProvider(deployer.provider)
  }

  return {
    SafeMath
  }
}

module.exports = migrate
