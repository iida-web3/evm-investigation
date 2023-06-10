import { env } from '../../lib/config';
import { ethers } from 'hardhat';
import { utils, BigNumber, ContractTransaction } from 'ethers';
import { inisrizeTERC20 } from '../../lib/functions';
import { TERC20 } from '../../types';

async function main(amount: BigNumber) {
  const [deployer, uesr1] = await ethers.getSigners();
  const erc20: TERC20 = await inisrizeTERC20();

  const tx: ContractTransaction = await erc20.connect(uesr1).burn(amount);
  console.log('tx = ', tx);
}

const amount: BigNumber = utils.parseUnits('10.0', 'ether');

main(amount)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
