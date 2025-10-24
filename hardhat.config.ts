import {HardhatUserConfig} from 'hardhat/types'
import '@nomicfoundation/hardhat-toolbox'
import 'hardhat-deploy'
import 'dotenv/config'
import '@nomicfoundation/hardhat-viem'
import 'solidity-docgen'

const mainnetNodeUrl = process.env.MAINNET_NODE_URL || ''
const optimismNodeUrl = process.env.OPTIMISM_NODE_URL || ''
const baseNodeUrl = process.env.BASE_NODE_URL || ''
const hemiNodeUrl = process.env.HEMI_NODE_URL || ''
const plasmaNodeUrl = process.env.PLASMA_NODE_URL || ''

const accounts: [string] | undefined = process.env.DEPLOYER_PRIVATE_KEY
  ? [process.env.DEPLOYER_PRIVATE_KEY!]
  : undefined

const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  networks: {
    mainnet: {
      url: mainnetNodeUrl,
      accounts,
      chainId: 1,
      deploy: ['deploy/mainnet'],
    },
    optimism: {
      url: optimismNodeUrl,
      accounts,
      chainId: 10,
      deploy: ['deploy/optimism'],
      verify: {
        etherscan: {
          apiUrl: 'https://explorer.optimism.io/api',
          apiKey: 'noApiKeyNeeded',
        },
      },
    },
    base: {
      url: baseNodeUrl,
      accounts,
      chainId: 8453,
      deploy: ['deploy/base'],
    },
    hemi: {
      url: hemiNodeUrl,
      accounts,
      chainId: 43111,
      deploy: ['deploy/hemi'],
      verify: {
        etherscan: {
          apiUrl: 'https://explorer.hemi.xyz/api',
          apiKey: 'noApiKeyNeeded',
        },
      },
    },
    plasma: {
      url: plasmaNodeUrl,
      accounts,
      chainId: 9745,
      deploy: ['deploy/plasma'],
      verify: {
        etherscan: {
          apiUrl: 'https://api.routescan.io/v2/network/mainnet/evm/9745/etherscan',
        },
      },
    },
  },

  sourcify: {
    enabled: false,
  },

  namedAccounts: {
    deployer: process.env.DEPLOYER || 0,
  },

  paths: {sources: 'src'},

  solidity: {
    version: '0.8.29',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
}

export default config
