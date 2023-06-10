import dotenv from 'dotenv';
dotenv.config({ path: process.env.ENV_PATH || 'hardhat/.env.sepolia', debug: false });

import '@nomicfoundation/hardhat-toolbox';
import '@nomicfoundation/hardhat-foundry';
import '@nomiclabs/hardhat-ethers';
import 'solidity-docgen';
import 'solidity-coverage';
import 'hardhat-gas-reporter';
import '@typechain/hardhat';
import 'hardhat-deploy-ethers';
import 'hardhat-contract-sizer';

import { env } from './hardhat/lib/config';
import { HardhatUserConfig } from 'hardhat/config';

const defultNetworksUserConfig = function () {
  return {
    chainId: env.FORGE_CHAIN_ID,
    url: env.NODE_URL,
    accounts: env.ACCOUNTS,
  };
};

const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  networks: {
    local: defultNetworksUserConfig(),
    goerli: defultNetworksUserConfig(),
    sepolia: defultNetworksUserConfig(),
    mumbai: defultNetworksUserConfig(),
    polygon: defultNetworksUserConfig(),
    mainnet: defultNetworksUserConfig(),
  },

  docgen: {
    outputDir: './docs',
    pages: 'files',
  },

  typechain: {
    outDir: 'hardhat/types',
    target: 'ethers-v5',
  },

  gasReporter: {
    enabled: true,
    currency: 'USD',
    fast: true,
    onlyCalledMethods: true,
  },

  contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: true,
    strict: true,
  },

  paths: {
    sources: './src',
    cache: './hardhat/cache',
    artifacts: './hardhat/artifacts',
  },

  solidity: {
    version: '0.8.18',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};

export default config;
