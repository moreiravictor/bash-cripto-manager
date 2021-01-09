const dataUtil = require('./commons/dataUtil');
const {currency, coins, icons} = require('./config/coins');
const {getFullInfos} = require('./http/service/quotes');

function userTotal(coin) {
    return coins[coin.slug] * coin.quote[currency].price;
}

function finalTemplate(coin) {
    return `${icons[coin.slug]} ${coin.quote[currency].price.toFixed(2)} (${coin.user_percentage.toFixed(2)}%) `;
}

(async function priceAndPercentage() {
    const response = await getFullInfos();
    const coins_data = dataUtil.data(response);
    
    coins_data.map(coin => coin.user_total = userTotal(coin));
    const user_total = coins_data.reduce((total, {user_total}) => total + user_total, 0);
    coins_data.map(coin => coin.user_percentage = (coin.user_total/user_total)*100);
    
    let result = '';
    coins_data.forEach( coin => result += finalTemplate(coin));
    console.log(result);
}());