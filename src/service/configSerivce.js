import { getService } from '../util/configMap.js'
import _ from 'lodash'
import fs from 'fs'
import { config, configPath } from '../util/constants.js'

const configs = config()

function handleConfig(options) {
  const action = getService(options[1])
  const updatedConfig = action(options)
  fs.writeFileSync(configPath, JSON.stringify(updatedConfig))
  return updatedConfig
}

function addCoin(options) {
  const coin = options[2]
  const amount = Number(options[3])
  const updatedConfig = _.cloneDeep(configs)
  updatedConfig.coins[coin] = amount
  return updatedConfig
}

function removeCoin(options) {
  const coin = options[2]
  const updatedConfig = _.cloneDeep(configs)
  delete updatedConfig.coins[coin]
  return updatedConfig
}

function addIcon(options) {
  const coin = options[2]
  const icon = options[3]
  const updatedConfig = _.cloneDeep(configs)
  updatedConfig.icons[coin] = icon
  return updatedConfig
}

function removeIcon(options) {
  const coin = options[2]
  const updatedConfig = _.cloneDeep(configs)
  delete updatedConfig.icons[coin]
  return updatedConfig
}

function updateApiKey(options) {
  const key = options[2]
  const updatedConfig = _.cloneDeep(configs)
  updatedConfig.apiKey = key
  return updatedConfig
}

function addWallet(options) {
  const newWallet = options[2]
  const updatedConfig = _.cloneDeep(configs)
  if (!updatedConfig.wallets.find(wallet => wallet === newWallet)) {
    updatedConfig.wallets.push(newWallet)
  } 
  return updatedConfig
}

function removeWallet(options) {
  const exclusionWallet = options[2]
  const updatedConfig = _.cloneDeep(configs)
  updatedConfig.wallets = updatedConfig.wallets.filter(wallet => wallet !== exclusionWallet) 
  return updatedConfig
}

function updateCurrency(options) {
  const currency = options[2]
  const updatedConfig = _.cloneDeep(configs)
  updatedConfig.currency = currency
  return updatedConfig
}

export {
  handleConfig,
  addCoin,
  removeCoin,
  addIcon,
  removeIcon,
  updateApiKey,
  addWallet,
  removeWallet,
  updateCurrency
}