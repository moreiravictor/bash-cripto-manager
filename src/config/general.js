import fs from 'fs'
const config = JSON.parse(fs.readFileSync('src/config/config.json'))

const apiKey = config.apiKey
const baseUrl = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency'
const baseBlockchainUrl = 'https://blockchain.info'

export {
  apiKey,
  baseUrl,
  baseBlockchainUrl,
}
