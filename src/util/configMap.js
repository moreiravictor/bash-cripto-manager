import { addCoin, removeCoin, addIcon, removeIcon, updateApiKey, addWallet, removeWallet, updateCurrency } from '../service/configSerivce.js'

const configMap = Object.freeze({
  '--add-coin': addCoin,
  '--remove-coin': removeCoin,
  '--add-icon': addIcon,
  '--remove-icon': removeIcon,
  '--update-apikey': updateApiKey,
  '--add-wallet': addWallet,
  '--remove-wallet': removeWallet,
  '--update-currency': updateCurrency,
  default: () => 'action not available',
})

function getService(functionality) {
  return configMap[functionality] || configMap.default
}

export {
  getService,
}
