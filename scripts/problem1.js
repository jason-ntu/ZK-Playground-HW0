const { getJsonWalletAddress } = require('@ethersproject/json-wallets');
const { ethers } = require('ethers');

const node = "https://tame-quaint-grass.ethereum-sepolia.discover.quiknode.pro/d0f831ac9b6d966a958ee9bec124602f8dc4c500/"
const provider = new ethers.providers.JsonRpcProvider(node);

const privateKey = "private key"
const wallet = new ethers.Wallet(privateKey, provider);

const sender = "0xF85d255D10EbA7Ec5a12724D134420A3C2b8EA3a"
const receiver = "0x5c561Afb29903D14B17B8C5EA934D6760C882b7d"

const tx = {
    to: receiver,
    value: ethers.utils.parseEther('0.01')
}
// API_KEY = "zHOX2vRWxZ1oHGhqjGEe39bYK3BH"

async function main() {
    // const balance = await provider.getBalance(sender);
    // console.log('Balance:', ethers.utils.formatEther(balance));
    wallet.sendTransaction(tx).then((txObject) => {
        console.log(txObject)
    })
}

main()