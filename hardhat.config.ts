import "@nomiclabs/hardhat-waffle";
import "hardhat-typechain";
import { HardhatUserConfig } from "hardhat/types";
import "solidity-coverage";
import "hardhat-deploy";
import "hardhat-gas-reporter";

import ENV from "./config/index";

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  solidity: {
    compilers: [
      {
        version: "0.8.4",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.7.5",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.5.17",
        settings: {
          optimizer: {
            enabled: true,
            runs: 20,
          },
        },
      },
    ],
  },
  paths: {
    artifacts: "./build/artifacts",
    cache: "./build/cache",
  },
  networks: {
    hardhat: {
      blockGasLimit: 15000000,
    },
    // rinkeby: {
    //   url: ENV.INFURA_RINKEBY_KEY,
    // },
  }
};

export default config;
