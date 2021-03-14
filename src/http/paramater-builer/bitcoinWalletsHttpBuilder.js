import { base_blockchain_url } from '../../config/general.js'
const URL = `${base_blockchain_url}/balance?active=`

function httpBuilder(wallets) {
    return {url: `${URL}${wallets}`}
}

export {httpBuilder}
