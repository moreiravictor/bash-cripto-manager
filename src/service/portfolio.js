import { data, price, round, varianceFlag } from '../commons/dataUtil.js'
import { currency, coins, icons } from '../config/coins.js'
import { getFullInfos, getCoinInfos } from '../http/service/quotesService.js'

function userTotalCoin(coin) {
  return coins[coin.slug] * price(coin, currency)
}

function finalTemplate(coin) {
  return `${icons[coin.slug]} ${round(price(coin, currency))} (${round(coin.user_percentage)}%) `
}

function varianceFlagTemplate(coin) {
    return `${icons[coin.slug]} ${round(price(coin, currency))} (${round(coin.variance_flag)}%) `
}

async function priceAndPercentage() {
  const response = await getFullInfos()
  const coinsData = data(response)

  coinsData.forEach((coin) => coin.totalValues = userTotalCoin(coin))
  const userTotalVal = coinsData.reduce((total, { totalValues }) => total + totalValues, 0)
  coinsData.forEach(coin => coin.user_percentage = (coin.totalValues/userTotalVal)* 100)

  let result = ''
  coinsData.forEach((coin) => result += finalTemplate(coin))
  return result
}

async function userTotal() {
  const response = await getFullInfos()
  const coinsData = data(response)

  coinsData.forEach(coin => coin.totalValues = userTotalCoin(coin))
  const userTotalVal = coinsData.reduce((total, { totalValues }) => total + totalValues, 0)
  return `${round(userTotalVal)} ${currency}`
}

async function convert(options) {
  const cripto = options[1]
  const amount = options[2] || coins[cripto]

  const res = await getCoinInfos(currency, cripto)
  const converted = price(data(res)[0], currency) * amount
  return `${round(converted)} BRL`
}

async function quote(options) {
  const cripto = options[1]
  const res = await getCoinInfos(currency, cripto)
  const quoted = price(data(res)[0], currency)
  return `${round(quoted)} BRL`
}

async function getVarianceFlag() {
    const response = await getFullInfos()
    const coins_data = data(response)
    
    coins_data.map(coin => coin.user_total = userTotalCoin(coin))
    coins_data.map(coin => coin.variance_flag = varianceFlag(coin, currency))
    
    let result = ''
    coins_data.forEach( coin => result += varianceFlagTemplate(coin))
    return result
}

export {
    priceAndPercentage, 
    userTotal,
    convert,
    quote,
    getVarianceFlag
}
