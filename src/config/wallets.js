import fs from 'fs'
import path from 'path'
const config = JSON.parse(fs.readFileSync(path.resolve() + '/cripto-manager/src/config/config.json'))

const wallets = config.wallets

export default wallets
