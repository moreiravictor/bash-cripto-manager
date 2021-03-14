import { priceAndPercentage, userTotal, convert, quote, getVarianceFlag } from '../service/portfolio.js'
import getBalance from '../service/bitcoinWalletsManager.js'

const functionalityMap = Object.freeze({
  '-p': priceAndPercentage,
  '-bw': getBalance,
  '-t': userTotal,
  '-c': convert,
  '-q': quote,
  '-vf': getVarianceFlag,
  default: () => 'option not available',
})

function getService(functionality) {
  return functionalityMap[functionality] || functionalityMap.default
}

async function execute(service, options) {
  const info = await service(options)
  console.log(info)
}

export {
  execute,
  getService,
}
