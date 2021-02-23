const axios = require('axios');
const {currency, coins} = require('../../config/coins');
const {currencyHttpParameters, currencyConvertionHttpParameters} = require('../paramater-builer/currencyHttpBuilder');

async function getFullInfos() {
    const {url, headers} = currencyHttpParameters(currency, coins);
    try {
        return await axios.get(url, headers);
    } catch(err) {
        return {'data': {'data': {}}};
    }
}

async function getCoinInfos(fiat, cripto) {
    const {url, headers} = currencyConvertionHttpParameters(fiat, cripto);
    return await axios.get(url, headers);

}

module.exports = {
    getFullInfos,
    getCoinInfos
};