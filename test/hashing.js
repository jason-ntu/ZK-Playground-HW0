const { expect } = require("chai");

describe("Hashing Contract", () => {
    let deployer
    let hashing
    const elements = [
        "zkplayground",
        "zkpapaya",
        "zkpeach",
        "zkpear",
        "zkpersimmon",
        "zkpineapple",
        "zkpitaya",
        "zkplum",
        "zkpomegranate",
        "zkpomelo"
    ]
    const merkleRoot = "0x8d798c5764a164492f1c8850246fdd11750bd2bffd8f42356150ae85a2b5469e"

    const hashed_elements = [
        "0x760785a457f46af4582b62962c4d96be98c68df9619556fa20af3c286343bf81",
        "0xcc61ebc064488ecc9c6aa0138875f527fe4033a5b0fb9a1acf9d48f8809a82e9",
        "0xe17c03649ba03da9751f3150c04fe0cfb9db3638a470502195aa9d2e92a72eeb",
        "0xfbe29ffff2df756f5206d1bed907b27d257c4f3817de02ab09e620f61ebdb8ae",
        "0xfcddce24aa814fcae0054e69eb9a880817ecd7fac7121bd17e5c640cdad1e1bf",
        "0x2606e24a918d1226ad408a6552c50a3ba3e47eaf26ca168da2f72d43b0e58d7d",
        "0x777bf5422e6c21b7feec8203b45bf1ae070d7df86a205b56d6ad8fa7bc5aadf4",
        "0x365be737c7ed4a84a1f9c498dabb5055556922703ec22dc3116c5dbb97b4addf",
        "0xa1b51e6700c38a95f12ae933d044ecb403e95f269a307632d1f0359dc27f4a95",
        "0x6e74da3eb07d6ffbb92dca5cdbb16c24c9c351793062108c06574cb2fb1c6786"
    ]
    
    before(async () => {
        [deployer] = await ethers.getSigners();
        // console.log("Deployer Address: " + deployer.address);

        const Hashing = await ethers.getContractFactory('hashing');
        hashing = await Hashing.deploy();
        await hashing.deployed();
        // console.log("Contract Address: " + hashing.address);
    });

    it('The deployer should be the s/c owner', async () => {
        const owner = await hashing.owner();
        expect(owner).to.equal(deployer.address);
    });

    async function getHash(str) {
        const txResponse = await hashing.hashString(str);
        const txReceipt = await txResponse.wait();
        const [transferEvent] = txReceipt.events;
        const { _hash } = transferEvent.args;
        return _hash;
    }

    it("Gets the string hash", async function () {
        const _hash = await getHash('zkplayground');
        expect(_hash).to.equal(hashed_elements[0]);
    });

    async function getAllHashes(strs) {
        const txResponse = await hashing.hashStrings(strs);
        const txReceipt = await txResponse.wait();
        const [transferEvent] = txReceipt.events;
        const { _hashes } = transferEvent.args;
        return _hashes;
    }

    it("Gets all the string hashes", async function () {
        const _hashes = await getAllHashes(elements);
        _hashes.forEach((hash, index) => {
            expect(hash).to.equal(hashed_elements[index]);
        })
    });

    async function getHashPairs(left, right) {
        const txResponse = await (BigInt(left) < BigInt(right) ? hashing.hashPairs(left, right) : hashing.hashPairs(right, left));
        const txReceipt = await txResponse.wait();
        const [transferEvent] = txReceipt.events;
        const { _hash } = transferEvent.args;
        return _hash;
    }

    it("Calculate the correct merkle root", async function () {
        const _hash01 = await getHashPairs(hashed_elements[0], hashed_elements[1])
        const _hash23 = await getHashPairs(hashed_elements[2], hashed_elements[3])
        const _hash45 = await getHashPairs(hashed_elements[4], hashed_elements[5])
        const _hash67 = await getHashPairs(hashed_elements[6], hashed_elements[7])
        const _hash89 = await getHashPairs(hashed_elements[8], hashed_elements[9])
        const _hash0123 = await getHashPairs(_hash01, _hash23)
        const _hash4567 = await getHashPairs(_hash45, _hash67)
        const _hash01234567 = await getHashPairs(_hash0123, _hash4567)
        const root = await getHashPairs(_hash01234567, _hash89)
        expect(root).to.equal(merkleRoot);
    });

    it("Verify the existance of 'zkplayground' in the merkle tree", async function () {
        const proof = ["0xcc61ebc064488ecc9c6aa0138875f527fe4033a5b0fb9a1acf9d48f8809a82e9",
        "0x6cba9ea971cd36a1100bbe94d254d62109b18a1eb3714c80fbbcc9ffef369744",
        "0x40ef6049493657f0558c92f1f64806570ebba9e20cd40eb1385d8c61b3c523c7",
        "0xa7a7ef787c98fd4abfa510e07a146c11dbfcc93e6a316a41cb57f0dfa2b4cbd6"]
        
        let _hash = await getHash('zkplayground');
        for (let i = 0; i < proof.length; i++) {
            _hash = await getHashPairs(_hash, proof[i])
        }
        expect(_hash).to.equal(merkleRoot);
    });
});
