const axios = require('axios');
const wallet_pk = "3GU9DTPj9YVtQwz3KihPhByesDqP1Ywpuc";
const address = `https://blockchain.info/balance?active=${wallet_pk}`;

function BTCvalue(satoshi_value) {
    const satoshi = 100000000;
    return satoshi_value/satoshi;
}

async function getBalance(address) {
    axios.get(address).then( res => {
        const value = res.data[wallet_pk].final_balance;
        console.log(`\u20BF ${BTCvalue(value)}`);
    });
}

getBalance(address);