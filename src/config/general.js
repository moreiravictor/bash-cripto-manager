import { config } from "../util/constants.js"

const apiKey = config().apiKey
const baseUrl = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency'
const baseBlockchainUrl = 'https://blockchain.info'

export {
  apiKey,
  baseUrl,
  baseBlockchainUrl,
}
