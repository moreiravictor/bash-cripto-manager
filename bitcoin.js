const axios = require('axios');
const wallet_keys = ["11dcwyCsHw8AB45aHTd9cHUGZVVwR9h41", "165wEp4BjiTWAuPcRbfjAwCFs6crUk9Huq"];
const icon = "฿";
const address = `https://blockchain.info/balance?active=${wallet_keys}`;

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

async function getBalance(address) {
    axios.get(address).then( res => {
        let values = getFinalValues(res.data);
        console.log(`${icon} ${BTCvalue(values)}`);
    }).catch(error => {
        if (error.code === "ENOTFOUND") {
            console.log("Reconnecting...");
        } else {
            console.log("Inform error to maintainer:", error);
        }
    });
}

getBalance(address);
