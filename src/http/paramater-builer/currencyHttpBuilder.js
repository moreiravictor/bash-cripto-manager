import { base_url, api_key } from '../../config/general.js'
import { keys } from '../../commons/objects.js'

const URL = `${base_url}/quotes/latest`

function currencyHttpParameters(currency, coins) {
    const slugs = keys(coins).reduce((total, current) => `${total},${current}`)
    return {
        url: `${URL}?convert=${currency}&slug=${slugs}`, 
        headers: {
            headers: {'X-CMC_PRO_API_KEY': api_key}
        }
    }
}

function currencyConvertionHttpParameters(fiat, cripto) {
    return {
        url: `${URL}?convert=${fiat}&slug=${cripto}`, 
        headers: {
            headers: {'X-CMC_PRO_API_KEY': api_key}
        }
    }
}

export {
    currencyHttpParameters,
    currencyConvertionHttpParameters
}
