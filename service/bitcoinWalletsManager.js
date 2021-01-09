const bwService = require('../http/service/bitcoinWalletsService')
const icon = "฿";

function BTCvalue(satoshi_values) {
    const satoshi = 100000000;
    let converted_values = [];
    satoshi_values.forEach(value => converted_values.push(value/satoshi));
    return converted_values.join(' | ');
}

function getFinalValues(wallets) {
    let values = [];
    for (let public_key in wallets) {
        values.push(wallets[public_key].final_balance);
    }
    return values;
}

async function getBalance() {
    const res = await bwService.getWalletBalances();
    if (res === 'ERROR'){
        return 'Reconnecting...';
    } else {
        let values = getFinalValues(res.data);
        return `${icon} ${BTCvalue(values)}`;
    }
}

module.exports = {getBalance};