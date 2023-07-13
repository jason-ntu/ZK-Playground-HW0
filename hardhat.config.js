require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.13",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    // sepolia: {},
  },
  gasReporter: {
    enabled: false,
  },
};
