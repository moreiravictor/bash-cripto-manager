import { values } from './objects.js'

function data(response) { return values(response.data.data) }

function round(num) { return num.toFixed(2) }

export {
  data,
  round,
}
