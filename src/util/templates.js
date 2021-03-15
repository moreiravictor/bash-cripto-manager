import { currency, icons } from '../config/coins.js'
import { getVarianceFlag, price } from '../model/coinsData.js'
import { round } from './dataUtil.js'

function percentageTemplate(treatedData) {
  let result = ''
  treatedData.forEach((coin) => { result += `${icons[coin.slug]} ${round(price(coin, currency))} (${round(coin.userPercentage)}%) ` })
  return result
}

function varianceFlagTemplate(treatedData) {
  let result = ''
  treatedData.forEach((coin) => { result += `${icons[coin.slug]} ${round(price(coin, currency))} (${round(getVarianceFlag(coin))}%) ` })
  return result
}

function valueTemplate(value) {
  return `${round(value)} ${currency}`
}

export {
  percentageTemplate,
  varianceFlagTemplate,
  valueTemplate,
}
