import {DeployFunction} from 'hardhat-deploy/types'

const func: DeployFunction = async function (hre) {
  const {deploy} = hre.deployments
  const {deployer} = await hre.getNamedAccounts()

  await deploy('ToVerify', {
    from: deployer,
    proxy: {
      execute: {
        init: {
          methodName: 'initialize',
          args: ['Hello, World!'],
        },
      },
      proxyContract: 'OpenZeppelinTransparentProxy',
    },
    log: true,
    autoMine: true,
  })
}

export default func
