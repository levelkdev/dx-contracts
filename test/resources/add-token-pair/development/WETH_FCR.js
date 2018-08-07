module.exports = {
  // WETH
  tokenB: {
    symbol: 'WETH',
    address: "0x4cadb4939da3368e89fbf6d42fd3e17811bd35b4",
    // Check ETH oracle:
    //   https://makerdao.com/feeds/#0x729d19f657bd0614b4985cf1d82531c67569197b
    //   Price: 423.960
    //   20$ = 20/423.960 ETH = 0.04717426172
    funding: 10
  },
  // OMG
  tokenA: {
    symbol: 'FCR',
    address: "0x857e428edca523948ed502d98223fa8cc3490d95",
    funding: 0
  },
  // Price:
  //   https://www.coingecko.com/en/price_charts/omisego/eth
  //   1 ETH = 60.63636408838016 OMG
  //   initial price = 61 OMG/WETH
  initialPrice: {
    numerator: 1,
    denominator: 1
  }
}
