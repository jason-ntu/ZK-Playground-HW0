require('dotenv').config();
const { ethers } = require('ethers');

const { API_URL, PRIVATE_KEY, CONTRACT_ADDRESS, WALLET_ADDRESS } = process.env;

const quickNodeProvider = new ethers.providers.JsonRpcProvider(API_URL);
const wallet = new ethers.Wallet(PRIVATE_KEY, quickNodeProvider);

const tx = {
    to: CONTRACT_ADDRESS,
    value: ethers.utils.parseEther('0.01')
}

async function main() {
    const balance = await provider.getBalance(WALLET_ADDRESS);
    console.log('Balance:', ethers.utils.formatEther(balance));
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