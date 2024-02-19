require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
const privateKeys = process.env.PRIVATE_KEYS || ""

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    localhost: {}, //hardhat knows it is the default localhost network
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: privateKeys.split(",")
    }
  
  }
  // etherscan:{
  //   apiKey: {
  //     sepolia: process.env.ETHERSCAN_API_KEY
  //   }
  // }
  //ETHERSCAN_API_KEY= "VKF7T6X95SDCXCJ2MAA4CPGAXRQKS1QXKI"
};
