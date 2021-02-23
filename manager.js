const {functionalityMap} = require('./commons/functionalityMap')

const options = process.argv.slice(2);
const functionality = options[0];
const service = functionalityMap[functionality] || functionalityMap.default;
(async function execute() {
    const info = await service(options);
    console.log(info);
}())