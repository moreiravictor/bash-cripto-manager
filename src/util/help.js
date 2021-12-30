export default function help() {
  return `
Cripto Manager!

:::General options:::

-h shows this message
-p shows current prices and your portfolia percentage for each coin
-t shows user total amount of coins converted to configures fiat/cripto
-bw shows user total balance on configured bitcoin wallets
-c {cripto_asset} {quantity} shows converted value from selected cripto asset to configured currency
-q {cripto_asset} shows quotation for selected cripto asset
-vf shows variance flag for all configured cripto assets

:::Configuration options:::

-config --add-coin {coin} {amount} adds/updates a coin amount and slug
-config --remove-coin {coin} removes coin from configuration
-config --add-icon {coin} {icon} adds/updates a coin icon
-config --remove-icon {coin} removes icon from configuration
-config --update-apikey {key} updates coinmarketcap api key
-config --add-wallet {wallet} adds new bitcoin wallet to configuration
-config --remove-wallet {wallet} removes bitcoin wallet from configuration
-config --update-currency {currency} updates base currency used for convertion purposes
`
}
