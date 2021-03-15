import { currency, coins } from '../config/coins.js'
import { getFullInfos, getCoinInfos } from '../http/service/quotesService.js'
import { getUserTotal, price, setCoinsAmount } from '../model/coinsData.js'
import { percentageTemplate, valueTemplate, varianceFlagTemplate } from '../util/templates.js'

async function priceAndPercentage() {
  const coinsData = await getFullInfos()

  setCoinsAmount(coinsData)
  const userTotalAmount = getUserTotal(coinsData)
  coinsData.forEach((coin) => { coin.userPercentage = (coin.totalAmount / userTotalAmount) * 100 })

  return percentageTemplate(coinsData)
}

async function userTotal() {
  const coinsData = await getFullInfos()

  setCoinsAmount(coinsData)
  const userTotalVal = getUserTotal(coinsData)

  return valueTemplate(userTotalVal)
}

async function convert(options) {
  const cripto = options[1]
  const amount = options[2] || coins[cripto]

  const coinData = await getCoinInfos(currency, cripto)
  const converted = price(coinData[0], currency) * amount

  return valueTemplate(converted)
}

async function quote(options) {
  const cripto = options[1]

  const coinData = await getCoinInfos(currency, cripto)

  const quoted = price(coinData[0], currency)
  return valueTemplate(quoted)
}

async function varianceFlag() {
  const coinsData = await getFullInfos()
  return varianceFlagTemplate(coinsData)
}

export {
  priceAndPercentage,
  userTotal,
  convert,
  quote,
  varianceFlag,
}
