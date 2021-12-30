# cripto-manager

This is a command line app for you to manage your cripto assets.
You can either use it totally via command line or integrate it with your polybar module!

![working sample](https://i.imgur.com/szKKK9a.png)

First, you need:
- Node >= 12.0.0
- npm

and then
```bash
  $ git clone git@github.com:moreiravictor/polybar-cripto-manager.git
  $ cd cripto-manager
  $ npm start
```

OBS: if you update your configuration via coffig.json file you need to run `npm start` again

## Untill  now there are 4 functionalities: 
* -t (total user values)
* -p (portfolio)
* -bw (bitcoin wallets values)
* -c (cripto convertion to fiat)
### The following step is common for the first two:
Put your API key (generate one at https://pro.coinmarketcap.com) at ./config/general.js
```javascript
const api_key = '{APIKEY}';
```

### 1. Portfolio/current values manager:
Add the currency you desire as well as the coins, quantity of each one and the icons you want to display at ./config/coins.js
```javascript
const currency = 'USD';
const coins = {
    bitcoin: 1, 
    ethereum: 1,
    nano: 1, 
    cardano: 1
};
const icons = {
    bitcoin: "", 
    ethereum: "",
    nano: "",
    cardano: ""
};
```
And then use:
```javascript
cm -p
```
If you'd rather see the price variance for the day instead, use:
```javascript
cm -vf
```

### 2. Total user values:
Add the currency you desire as well as the coins, quantity of each one and the icons you want to display at ./config/coins.js
```javascript
const currency = 'USD';
const coins = {
    bitcoin: 1, 
    ethereum: 1,
    nano: 1, 
    cardano: 1
};
```
And then use:
```javascript
cm -t
```

### 3. Amount convertion from critpto to fiat currency:
Add the currency you desire at ./config/coins.js
```javascript
const currency = 'USD';
const coins = {
    bitcoin: 1, 
    ethereum: 1,
    nano: 1, 
    cardano: 1
};
```
And then use:
```javascript
cm -c {cripto_name} {amount} (amount is optional, if you don't type it, you'll receive the amount from the config file)
e.g: 
cm -c bitcoin 0.0034 
or 
cm -c bitcoin
```

### 4. Bitcoin Wallet manager:   
Then, put your Bitcoin Wallet public addresses on ./config/wallets file  
```javascript
const wallets = [
  {PUBLIC ADDRESS HERE}, 
  {PUBLIC ADDRESS HERE}, 
  ...];
```
And then use:
```javascript
cm -bw
```

## Finally
In your polybar config file:
```
...
modules-right = bitcoinwallet
...
[module/bitcoinwallet]
type = custom/script
interval = 600
exec = cm -{FUNCTIONALITY}
```
Thanks to my dear friend [@itsmaia](https://github.com/itsmaia) and in his words:
This is licensed under do whatever you want with it.
