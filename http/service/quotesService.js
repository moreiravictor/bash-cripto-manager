const axios = require('axios');
const {currency, coins} = require('../../config/coins');
const currencyHttpBuilder = require('../paramater-builer/currencyHttpBuilder');

async function getFullInfos() {
    const {url, headers} = currencyHttpBuilder.currencyHttpParameters(currency, coins);
    try {
        return await axios.get(url, headers);
    } catch(err) {
        return {'data': {'data': {}}};
    }
}

module.exports = {getFullInfos};