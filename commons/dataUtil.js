const {values} = require('./objects');

function data(response) {
    return values(response.data.data);
}

function price(coin, currency) {
    return coin.quote[currency].price;
}

function round(num) {
    return num.toFixed(2);
}

module.exports = {
    data,
    price,
    round
}