function migrate ({
  artifacts,
  deployer
}) {
  const TokenFRT = artifacts.require('TokenFRT')
  const EtherToken = artifacts.require('EtherToken')
  const DutchExchangeProxy = artifacts.require('DutchExchangeProxy')
  async function allocateToken() {
    etherToken = await EtherToken.deployed()
    etherToken.transfer('0xe3717ccdfbe15649f44ff27a81be38d4648e1ef0', 10 * (10 ** 18))
  }
  return deployer
    .then(() => TokenFRT.deployed())
    .then(tokenFrt => tokenFrt.updateMinter(DutchExchangeProxy.address))
    .then(() => allocateToken())
}

module.exports = migrate
