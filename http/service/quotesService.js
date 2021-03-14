import axios from 'axios'
import { currency, coins } from '../../config/coins.js'
import { currencyHttpParameters, currencyConvertionHttpParameters } from '../paramater-builer/currencyHttpBuilder.js'

async function getFullInfos() {
    const {url, headers} = currencyHttpParameters(currency, coins)
    try {
        return await axios.get(url, headers)
    } catch(err) {
        return {'data': {'data': {}}}
    }
}

async function getCoinInfos(fiat, cripto) {
    const {url, headers} = currencyConvertionHttpParameters(fiat, cripto)
    return await axios.get(url, headers)

}

export {
    getFullInfos,
    getCoinInfos
}