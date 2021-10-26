import fs from 'fs'
import path from 'path'
const config = JSON.parse(fs.readFileSync(path.resolve() + '/cripto-manager/src/config/config.json'))

const apiKey = config.apiKey
const baseUrl = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency'
const baseBlockchainUrl = 'https://blockchain.info'

export {
  apiKey,
  baseUrl,
  baseBlockchainUrl,
}
