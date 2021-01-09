const {data, price, round} = require('../commons/dataUtil');
const {currency, coins, icons} = require('../config/coins');
const {getFullInfos} = require('../http/service/quotes');

function userTotalCoin(coin) {
    return coins[coin.slug] * price(coin);
}

function finalTemplate(coin) {
    return `${icons[coin.slug]} ${round(price(coin))} (${round(coin.user_percentage)}%) `;
}

async function priceAndPercentage() {
    const response = await getFullInfos();
    const coins_data = data(response);
    
    coins_data.map(coin => coin.user_total = userTotalCoin(coin));
    const user_total = coins_data.reduce((total, {user_total}) => total + user_total, 0);
    coins_data.map(coin => coin.user_percentage = (coin.user_total/user_total)*100);
    
    let result = '';
    coins_data.forEach( coin => result += finalTemplate(coin));
    return result;
}

async function userTotal() {
    const response = await getFullInfos();
    const coins_data = data(response);

    coins_data.map(coin => coin.user_total = userTotalCoin(coin));
    const user_total = coins_data.reduce((total, {user_total}) => total + user_total, 0);
    return `${round(user_total)} ${currency}`;
}

module.exports = {
    priceAndPercentage, 
    userTotal
};


