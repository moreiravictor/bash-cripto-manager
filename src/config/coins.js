import fs from 'fs'
const config = JSON.parse(fs.readFileSync('src/config/config.json'))

const currency = config.currency
const coins = config.coins
const icons = config.icons

export {
  currency,
  coins,
  icons,
}
