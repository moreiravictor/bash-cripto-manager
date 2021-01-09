const {priceAndPercentage, userTotal} = require('../service/portfolio');
const {getBalance} = require('../service/bitcoin_wallets');

const functionalityMap = Object.freeze({
    '-p': priceAndPercentage,
    '-bw': getBalance,
    '-t': userTotal
})

module.exports = {
    functionalityMap
}
    
