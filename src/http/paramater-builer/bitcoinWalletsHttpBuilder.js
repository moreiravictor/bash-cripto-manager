import { baseBlockchainUrl } from '../../config/general.js'

const URL = `${baseBlockchainUrl}/balance?active=`

function httpBuilder(wallets) {
  return { url: `${URL}${wallets}` }
}

export default httpBuilder
