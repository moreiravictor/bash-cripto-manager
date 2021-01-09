const axios = require('axios');
const {wallets} = require('../../config/wallets');
const bitcoinWalletsHttpBuilder = require('../paramater-builer/bitcoinWalletsHttpBuilder');

async function getWalletBalances() {
    const {url, headers} = bitcoinWalletsHttpBuilder.httpBuilder(wallets);
    try {
        return await axios.get(url, headers);
    } catch(error) {
        return 'ERROR';
    } 
}

module.exports = {getWalletBalances};