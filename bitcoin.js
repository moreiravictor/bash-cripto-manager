const axios = require('axios');
const wallet_pk = "11dcwyCsHw8AB45aHTd9cHUGZVVwR9h41";
const icon = "฿";
const address = `https://blockchain.info/balance?active=${wallet_pk}`;

function BTCvalue(satoshi_value) {
    const satoshi = 100000000;
    return satoshi_value/satoshi;
}

async function getBalance(address) {
    axios.get(address).then( res => {
        const value = res.data[wallet_pk].final_balance;
        console.log(`${icon} ${BTCvalue(value)}`);
    }).catch(error => {
        if (error.code === "ENOTFOUND") {
            console.log("Reconnecting...");
        } else {
            console.log("Inform error to maintainer:", error.code);
        }
    });
}

getBalance(address);
