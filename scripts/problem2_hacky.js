require('dotenv').config();
const { ethers } = require('ethers');

const { API_URL, PRIVATE_KEY, CONTRACT_ADDRESS } = process.env;

const quickNodeProvider = new ethers.providers.JsonRpcProvider(API_URL);
const wallet = new ethers.Wallet(PRIVATE_KEY, quickNodeProvider);

const tx = {
    to: CONTRACT_ADDRESS,
    // This is the encoded data for the function call, fetched from previous 
    data: "0x81f0765400000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000004cc61ebc064488ecc9c6aa0138875f527fe4033a5b0fb9a1acf9d48f8809a82e96cba9ea971cd36a1100bbe94d254d62109b18a1eb3714c80fbbcc9ffef36974440ef6049493657f0558c92f1f64806570ebba9e20cd40eb1385d8c61b3c523c7a7a7ef787c98fd4abfa510e07a146c11dbfcc93e6a316a41cb57f0dfa2b4cbd6"
}

async function main() {
    wallet.sendTransaction(tx).then((receipt) => {
        console.log(receipt)
    })
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });