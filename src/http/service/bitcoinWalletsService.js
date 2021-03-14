import axios from 'axios'
import wallets from '../../config/wallets.js'
import httpBuilder from '../paramater-builer/bitcoinWalletsHttpBuilder.js'

async function getWalletBalances() {
  const { url, headers } = httpBuilder(wallets)
  return axios.get(url, headers).catch(() => 'ERROR')
}

export default getWalletBalances
