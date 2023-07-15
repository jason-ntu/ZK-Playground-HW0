require('dotenv').config();
const { ethers } = require('ethers');

const { API_URL, PRIVATE_KEY, CONTRACT_ADDRESS } = process.env;

const abi = [{
    "type": "function",
    "name": "merkleProof",
    "inputs": [{ "name": "proof", "type": "bytes32[]" }],
    "outputs": [],
    "stateMutability": "nonpayable",
}]

const proof = ["0xcc61ebc064488ecc9c6aa0138875f527fe4033a5b0fb9a1acf9d48f8809a82e9",
    "0x6cba9ea971cd36a1100bbe94d254d62109b18a1eb3714c80fbbcc9ffef369744",
    "0x40ef6049493657f0558c92f1f64806570ebba9e20cd40eb1385d8c61b3c523c7",
    "0xa7a7ef787c98fd4abfa510e07a146c11dbfcc93e6a316a41cb57f0dfa2b4cbd6"]

const quickNodeProvider = new ethers.providers.JsonRpcProvider(API_URL);

const signer = new ethers.Wallet(PRIVATE_KEY, quickNodeProvider);

const hw0Contract = new ethers.Contract(CONTRACT_ADDRESS, abi, signer);

async function main() {
    await hw0Contract.merkleProof(proof).then((receipt) => {
        console.log(receipt)
    })
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });

    
