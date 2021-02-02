const {priceAndPercentage, userTotal} = require('../service/portfolio');
const {getBalance} = require('../service/bitcoinWalletsManager');

const functionalityMap = Object.freeze({
    '-p': priceAndPercentage,
    '-bw': getBalance,
    '-t': userTotal,
    default: () => {return 'option not available'}
})

module.exports = {
    functionalityMap
}
    
