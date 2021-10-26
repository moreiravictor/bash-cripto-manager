import path from "path";
import fs from "fs";

export const configPath = path.resolve() + '/cripto-manager/src/config/config.json'
export const config = () => JSON.parse(fs.readFileSync(configPath))