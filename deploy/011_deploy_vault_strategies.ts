import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { ethers, upgrades } from 'hardhat';
import { StrategyAddTwoSidesOptimal__factory } from '../typechain';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    /*
  ░██╗░░░░░░░██╗░█████╗░██████╗░███╗░░██╗██╗███╗░░██╗░██████╗░
  ░██║░░██╗░░██║██╔══██╗██╔══██╗████╗░██║██║████╗░██║██╔════╝░
  ░╚██╗████╗██╔╝███████║██████╔╝██╔██╗██║██║██╔██╗██║██║░░██╗░
  ░░████╔═████║░██╔══██║██╔══██╗██║╚████║██║██║╚████║██║░░╚██╗
  ░░╚██╔╝░╚██╔╝░██║░░██║██║░░██║██║░╚███║██║██║░╚███║╚██████╔╝
  ░░░╚═╝░░░╚═╝░░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝╚═╝╚═╝░░╚══╝░╚═════╝░
  Check all variables below before execute the deployment script
  */

  const VAULT_ADDR = '0x947fFd3352136aC34eC67895E4fd392de18157DF';
  const ROUTER = '0xEAF62f7bEaC130A36b3770EFd597f7678D7182F3';









  console.log(">> Deploying an upgradable StrategyAddTwoSidesOptimal contract");
  const StrategyAddTwoSidesOptimal = (await ethers.getContractFactory(
    'StrategyAddTwoSidesOptimal',
    (await ethers.getSigners())[0]
  )) as StrategyAddTwoSidesOptimal__factory;
  const strategyAddTwoSidesOptimal = await upgrades.deployProxy(
    StrategyAddTwoSidesOptimal,[ROUTER, VAULT_ADDR]
  );
  await strategyAddTwoSidesOptimal.deployed();
  console.log(`>> Deployed at ${strategyAddTwoSidesOptimal.address}`);
};

export default func;
func.tags = ['VaultStrategies'];