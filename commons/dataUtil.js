const {currency} = require('../config/coins');
const {values} = require('./objects');

function data(response) {
    return values(response.data.data);
}

function priceMap(coins) {
    const price_map = {};
    coins.forEach(coin => price_map[coin.slug] = coin.quote[currency].price);
    return price_map;
}

function infoMap(coins) {
    const map = {};
    coins.forEach(coin => {
        map[coin.slug] = {
                symbol:  coin.symbol,    
                price: Number(coin.quote[currency].price.toFixed(2)),
            }
    });
    return map;
}

function price(coin) {
    return coin.quote[currency].price;
}

module.exports = {
    data,
    priceMap,
    price, 
    infoMap
}