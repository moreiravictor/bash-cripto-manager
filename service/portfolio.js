const {data, price, round} = require('../commons/dataUtil');
const {currency, coins, icons} = require('../config/coins');
const {getFullInfos, getCoinInfos} = require('../http/service/quotesService');

function userTotalCoin(coin) {
    return coins[coin.slug] * price(coin, currency);
}

function finalTemplate(coin) {
    return `${icons[coin.slug]} ${round(price(coin, currency))} (${round(coin.user_percentage)}%) `;
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

async function convert(options) {
    const cripto = options[1]
    const amount = options[2]

    const response = await getCoinInfos(currency, cripto)
    const coin_data = data(response)[0];
    const converted = price(coin_data, currency) * amount
    return `${round(converted)} BRL`
}

module.exports = {
    priceAndPercentage, 
    userTotal,
    convert
};


