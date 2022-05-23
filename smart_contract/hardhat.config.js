require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/mFlci_6Gvd_3NmK05MyT_GxgbHWCJPmV",
      accounts: [
        "e811f7537d55c8db5231a691d979e97c0dda757819a7a86ec6c395504ebf4638",
      ],
    },
  },
};
