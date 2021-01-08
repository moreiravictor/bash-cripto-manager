# polybar-bitcoin-wallet

these are two modules for polybar where you can check the current balance of your bitcoin wallet as well as get current values and yout portfolio percentage. 

![working sample](https://i.imgur.com/HQiOwUR.jpg)

first, in your polybar folder
```bash
  $ git clone git@github.com:moreiravictor/polybar-cripto-manager.git
  $ cd polybar-cripto-manager
  $ npm install
```

## Untill  now there are two functionalities:

### 1. Portfolio/current values manager:
Then, put your API key at ./config/general.js
```javascript
const api_key = '{APIKEY}';
```
And finally add the currency you desire as well as the coins and quantity of each one at ./config/coins.js
```javascript
const currency = 'USD';
const coins = {
    bitcoin: 1, 
    ethereum: 1,
    nano: 1, 
    cardano: 1
};
```


### 2. Bitcoin Wallet manager:   
Then, put your Bitcoin Wallet public address and icon you want to display on bitcoin.js file  
```javascript
const wallet_keys = [{PUBLIC ADDRESS HERE}, {PUBLIC ADDRESS HERE}, ...];
const icon = "YOUR ICON IN UNICODE HERE";
```

In your polybar config file:
```
...
modules-right = bitcoinwallet
...
[module/bitcoinwallet]
type = custom/script
interval = 600
exec = node ~/.config/polybar/polybar-cripto-manager/{FUNCTIONALITY}.js
```
Thanks to my dear friend [@itsmaia](https://github.com/itsmaia) and in his words:
This is licensed under do whatever you want with it.
