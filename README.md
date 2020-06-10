# polybar-bitcoin-wallet

This is a module for polybar where you can check the current balance of your bitcoin wallet.

![working sample](https://i.imgur.com/HQiOwUR.jpg)

first, in your polybar folder
```bash
  $ git clone git@github.com:moreiravictor/polybar-bitcoin-wallet.git
  $ cd polybar-bitcoin-wallet
  $ npm install
```
Then, put your Bitcoin Wallet public address and icon you want to display on bitcoin.js file  

```javascript
const wallet_pk = "PUBLIC ADDRESS HERE";
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
exec = node ~/.config/polybar/polybar-bitcoin-wallet/bitcoin.js
```
Thanks to my dear friend [@itsmaia](https://github.com/itsmaia) and in his words:
This is licensed under do whatever you want with it.
