import { env } from '../../lib/config';
import { ethers } from 'hardhat';
import { utils, BigNumber, ContractTransaction } from 'ethers';
import { inisrizeTERC20 } from '../../lib/functions';
import { TERC20 } from '../../types';

async function main(to: string, amount: BigNumber) {
  const [deployer, user1] = await ethers.getSigners();
  const erc20: TERC20 = await inisrizeTERC20();

  const tx: ContractTransaction = await erc20
    .connect(user1)
    .transfer(to, amount);
  console.log('tx = ', tx);
}

const to: string = env.USER2_ADDRESS;
const amount: BigNumber = utils.parseUnits('1.0', 'ether');

main(to, amount)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
