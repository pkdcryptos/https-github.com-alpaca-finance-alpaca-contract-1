import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import {  Ownable, Ownable__factory } from '../typechain'
import { ethers, upgrades } from 'hardhat';

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

  const TIMELOCK_ADDRESS = '0x771F70042ebb6d2Cfc29b7BF9f3caf9F959385B8';
  const TO_BE_LOCKED = [
    '0x6BF1c9Dd8a88c703FbFBA34d5F4fa0c141a62b35',
    '0xcaC1512f8D1fB21fe91C1b6b7EF7F9b5CC6ab5F8',
    '0x4b5C242E8B9f8420Fb62829c6177BC6c07f9E017',
    '0x413A5dA73B2dd9CEeD1DFE88C038ae0A6E54de96',
    '0xf8010E2fb6651DA7C152e06513A5c6E476EaC518',
    '0x1b9a864a510Cd86B0Ab2dF8C44B5a80633fA459D',
    '0x65CcD1eE5f96C10B7Ee997eE2538E69fa4902b94'
  ];











  for(let i = 0; i < TO_BE_LOCKED.length; i++ ) {
    console.log(`>> Transferring ownership of ${TO_BE_LOCKED[i]} to TIMELOCK`);
    const ownable = Ownable__factory.connect(TO_BE_LOCKED[i], (await ethers.getSigners())[0]);
    await ownable.transferOwnership(TIMELOCK_ADDRESS);
    console.log("✅ Done")
  }
};

export default func;
func.tags = ['TransferOwnershipToTimeLock'];