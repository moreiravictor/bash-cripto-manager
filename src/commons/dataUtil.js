import {values} from './objects.js'

function data(response) {
    return values(response.data.data)
}

function price(coin, currency) {
    return coin.quote[currency].price
}

function varianceFlag(coin, currency) {
    return coin.quote[currency].percent_change_24h
}

function round(num) {
    return num.toFixed(2)
}

export {
    data,
    price,
    round,
    varianceFlag
}