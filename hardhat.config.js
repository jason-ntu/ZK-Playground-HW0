require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");

const API_URL = process.env.API_URL;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.13",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: API_URL,
    },
  },
  gasReporter: {
    enabled: false,
  },
};
