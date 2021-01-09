const {base_blockchain_url} = require('../../config/general')
const URL = `${base_blockchain_url}/balance?active=`;

function httpBuilder(wallets) {
    return {url: `${URL}${wallets}`};
}

module.exports = {httpBuilder};
