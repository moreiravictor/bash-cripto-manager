import { execute, getService } from './commons/functionalityMap.js'

const options = process.argv.slice(2)
const functionality = options[0]
const service = getService(functionality)

execute(service, options)