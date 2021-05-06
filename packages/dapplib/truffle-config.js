require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict lock bone system educate rare remember equip guess clinic olympic trouble'; 
let testAccounts = [
"0xd6572dd3d8a217659ac7d657d540b5c7870e6ed877171f2042ede0c9d6c92b32",
"0xd1f22d40aebce7e8c6831feb5a0a095a3b26a1abd63fdeb45d0474cb89938d72",
"0x7bf25050a47cbbaa5340845adeae10a88d036c66c8b734df5fa5873c5a458fba",
"0x2c7642bee2b72439c1338f9ad8a40861ecab09e8cc4e69a9d0286cf2e7c80df6",
"0xb1017a9cdeb6bece7aaba809acf326945e53d541f9b3fc6947b433f7d4e2fca4",
"0x5eb95c46066daa531d822f17037acc9b70f1969cb0a84c59b28490dfc7f1c054",
"0xf1068657bbc59ca27290626c1f5ab34b782c8fbe922084e6be61f6b7a372c84c",
"0xa6857eef1eed459d705a5c325ad1873fb840962bd869306e1019b045aec4eff5",
"0x5ae96acf5aac609f4f9b167c23f4df8bd7f5666a5431ed1045cb9d7cac5753db",
"0xa4548daa79e6ee36b07ee6ed3314ae2303d6994a8e10f87dd7989c6ddd8ecd27"
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
