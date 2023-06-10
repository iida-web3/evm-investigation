import { ethers } from 'hardhat';
import { env } from '../lib/config';
import { utils } from 'ethers';

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log(`deployer address: ${await deployer.getAddress()}`);
  console.log(await deployer.provider?.getNetwork());

  const TERC20 = await ethers.getContractFactory('TERC20');
  const erc20 = await TERC20
  .connect(deployer)
  .deploy(env.ERC20_NAME, env.ERC20_SYMBOL, {gasPrice: utils.parseUnits('350', 'gwei')});

  console.log(`TERC20 address: ${erc20.address}`);

  await erc20.deployed();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
