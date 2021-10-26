import { config } from "../util/constants.js"

const configs = config()

const currency = configs.currency
const coins = configs.coins
const icons = configs.icons

export {
  currency,
  coins,
  icons,
}
