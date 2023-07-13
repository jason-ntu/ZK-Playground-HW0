

async function main() {
    const Hashing = await ethers.getContractFactory("hashing");
    const hashing = await Hashing.deploy();
    await hashing.deployed();
    console.log("Hashing contract deployed to address:", hashing.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
