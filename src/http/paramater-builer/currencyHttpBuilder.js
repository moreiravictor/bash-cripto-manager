import { baseUrl, apiKey } from '../../config/general.js'
import { keys } from '../../commons/objects.js'

const URL = `${baseUrl}/quotes/latest`

function currencyHttpParameters(currency, coins) {
  const slugs = keys(coins).reduce((total, current) => `${total},${current}`)
  return {
    url: `${URL}?convert=${currency}&slug=${slugs}`,
    headers: {
      headers: { 'X-CMC_PRO_API_KEY': apiKey },
    },
  }
}

function currencyConvertionHttpParameters(fiat, cripto) {
  return {
    url: `${URL}?convert=${fiat}&slug=${cripto}`,
    headers: {
      headers: { 'X-CMC_PRO_API_KEY': apiKey },
    },
  }
}

export {
  currencyHttpParameters,
  currencyConvertionHttpParameters,
}
