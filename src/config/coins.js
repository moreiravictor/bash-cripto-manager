import fs from 'fs'
import path from 'path'
const config = JSON.parse(fs.readFileSync(path.resolve() + '/cripto-manager/src/config/config.json'))

const currency = config.currency
const coins = config.coins
const icons = config.icons

export {
  currency,
  coins,
  icons,
}
