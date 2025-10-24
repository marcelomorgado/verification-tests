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

const accounts: {mnemonic: string} | undefined = process.env.MNEMONIC ? {mnemonic: process.env.MNEMONIC!} : undefined

const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  networks: {
    mainnet: {
      url: mainnetNodeUrl,
      accounts,
      chainId: 1,
    },
    optimism: {
      url: optimismNodeUrl,
      accounts,
      chainId: 10,
      verify: {
        etherscan: {
          apiUrl: 'https://explorer.optimism.io/api',
        },
      },
    },
    base: {
      url: baseNodeUrl,
      accounts,
      chainId: 8453,
      verify: {
        etherscan: {
          apiUrl: 'https://base.blockscout.com/api',
        },
      },
    },
    hemi: {
      url: hemiNodeUrl,
      accounts,
      chainId: 43111,
      verify: {
        etherscan: {
          apiUrl: 'https://explorer.hemi.xyz/api',
        },
      },
    },
    plasma: {
      url: plasmaNodeUrl,
      accounts,
      chainId: 9745,
      verify: {
        etherscan: {
          apiUrl: 'https://api.routescan.io/v2/network/mainnet/evm/9745/etherscan',
        },
      },
    },
  },

  namedAccounts: {
    deployer: 0,
  },

  sourcify: {
    enabled: false,
  },

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
