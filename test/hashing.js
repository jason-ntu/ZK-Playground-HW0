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
        console.log("Deployer Address: " + deployer.address);

        const Hashing = await ethers.getContractFactory('hashing');
        hashing = await Hashing.deploy();
        await hashing.deployed();
        console.log("Contract Address: " + hashing.address);
    });

    it('The deployer should be the s/c owner', async () => {
        const owner = await hashing.owner();
        expect(owner).to.equal(deployer.address);
    });

    it("Gets the string hash", async function () {
        const txResponse = await hashing.hashString('zkplayground');
        const txReceipt = await txResponse.wait();
        const [transferEvent] = txReceipt.events;
        const { _hash } = transferEvent.args;
        expect(_hash).to.equal(hashed_elements[0]);
    });

    it("Gets all the string hashes", async function () {
        const txResponse = await hashing.hashStrings(elements);
        const txReceipt = await txResponse.wait();
        const [transferEvent] = txReceipt.events;
        const { _hashes } = transferEvent.args;
        _hashes.forEach((hash, index) => {
            expect(hash).to.equal(hashed_elements[index]);
        })
    });
});
