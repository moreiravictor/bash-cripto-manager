const axios = require('axios');
const {currency, coins} = require('../../config/coins');
const currencyHttpBuilder = require('../paramater-builer/currencyHttpBuilder');

async function getFullInfos() {
    const {url, headers} = currencyHttpBuilder.currencyHttpParameters(currency, coins);
    return await axios.get(url, headers);
}

module.exports = {getFullInfos};