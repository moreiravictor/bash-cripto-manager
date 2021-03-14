import axios from 'axios'
import { wallets } from '../../config/wallets.js'
import {httpBuilder} from '../paramater-builer/bitcoinWalletsHttpBuilder.js'

async function getWalletBalances() {
    const {url, headers} = httpBuilder(wallets)
    try {
        return await axios.get(url, headers)
    } catch(error) {
        return 'ERROR'
    } 
}

export {getWalletBalances}