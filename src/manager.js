#!/usr/bin/env node

import { execute, getService } from './util/functionalityMap.js'

const options = process.argv.slice(2)
const functionality = options[0]
const service = getService(functionality)

execute(service, options)
