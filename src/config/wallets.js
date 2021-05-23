import fs from 'fs'
const config = JSON.parse(fs.readFileSync('src/config/config.json'))

const wallets = config.wallets

export default wallets
