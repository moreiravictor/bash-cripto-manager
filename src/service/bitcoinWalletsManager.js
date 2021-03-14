import getWalletBalances from '../http/service/bitcoinWalletsService.js'

const icon = '฿'

function BTCvalue(satoshiValues) {
  const satoshi = 100000000
  const convertedValues = []
  satoshiValues.forEach((value) => convertedValues.push(value / satoshi))
  return convertedValues.join(' | ')
}

function getFinalValues(wallets) {
  return Object.values(wallets).map((info) => info.final_balance)
}

async function getBalance() {
  const res = await getWalletBalances()
  if (res === 'ERROR') {
    return 'Reconnecting...'
  }
  const values = getFinalValues(res.data)
  return `${icon} ${BTCvalue(values)}`
}

export default getBalance
