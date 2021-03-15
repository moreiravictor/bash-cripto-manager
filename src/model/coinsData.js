import { coins, currency } from '../config/coins.js'

function price(coin, curr) { return coin.quote[curr].price }

function userCoinAmount(coin) {
  return coins[coin.slug] * price(coin, currency)
}

function setCoinsAmount(coinsData) {
  coinsData.forEach((coin) => { coin.totalAmount = userCoinAmount(coin) })
}

function getUserTotal(coinsData) {
  return coinsData.reduce((total, { totalAmount }) => total + totalAmount, 0)
}

function getVarianceFlag(coin) {
  return coin.quote[currency].percent_change_24h
}

export {
  userCoinAmount,
  setCoinsAmount,
  getUserTotal,
  getVarianceFlag,
  price,
}
