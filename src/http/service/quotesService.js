import axios from 'axios'
import { currency, coins } from '../../config/coins.js'
import { data } from '../../util/dataUtil.js'
import { currencyHttpParameters, currencyConvertionHttpParameters } from '../paramater-builer/currencyHttpBuilder.js'

async function getFullInfos() {
  const { url, headers } = currencyHttpParameters(currency, coins)
  const response = await axios.get(url, headers).catch(() => ({ data: { data: {} } }))
  return data(response)
}

async function getCoinInfos(fiat, cripto) {
  const { url, headers } = currencyConvertionHttpParameters(fiat, cripto)
  const response = await axios.get(url, headers)
  return data(response)
}

export {
  getFullInfos,
  getCoinInfos,
}
