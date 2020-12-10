require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glide fringe skull drift rifle pizza essay imitate prison equal gauge'; 
let testAccounts = [
"0x911d242060db3b8cdfe248a14667c290ca8feade1d0211915c06655b5fbf7542",
"0xeb3712f450211925408a55096b52f268a847048c845a23d0ec788563a323b325",
"0x4d01f89be07aaeb03b8f7d2d90f643efaf299128ff297059eaf2a1be24d6aea7",
"0x59df21bf47b6adc192c58761f6bdea8693c1b8d428b0baf62e02eedb76798482",
"0x454d57adfb69d01fd8594531cb41584a45127e2fd75dd8a9378953cd1df56c11",
"0x2867830567710a28676fb5a0813bdb72c588fa8b9b58f2a2ceef4e55c3223b12",
"0x942a4adf81a84492c57612ce0357e8cc41e9e43603bd8f2896a50dbadc1659d9",
"0xd6b7e47792039396de2d0817d9d0134cc441ac8e264c0593801f0b2fc4cc7eb1",
"0x1eee2e858cd5f1a7bfd189a6d83e8c24dcd5b476e0ab4db0c372e52024ca1434",
"0x9544733f0bf7c7f63be3fdeed57936ff0b6b35819618d43734ebe62b69d6742e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
