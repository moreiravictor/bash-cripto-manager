import {values} from './objects.js'

function data(response) {
    return values(response.data.data)
}

function price(coin, currency) {
    return coin.quote[currency].price
}

function round(num) {
    return num.toFixed(2)
}

export {
    data,
    price,
    round
}