import { env } from '../../lib/config';
import { ethers } from 'hardhat';
import {
  BigNumber,
  BigNumberish,
  ContractTransaction,
  providers,
  utils,
} from 'ethers';
import { StaticJsonRpcProvider, inisrizeTERC20 } from '../../lib/functions';
import { TERC20 } from '../../types';

async function main(to: string, amount: BigNumberish) {
  const [deployer] = await ethers.getSigners();
  const erc20: TERC20 = await inisrizeTERC20();

  const nonce = await deployer.getTransactionCount();
  const nonces = Array.from({ length: 50 }, (_, i) => i + nonce);

  await Promise.all(
    nonces.map(async (nonce) => {
      const tx: ContractTransaction = await erc20
        .connect(deployer)
        .transfer(to, amount, { nonce: nonce, gasPrice: utils.parseUnits('0.01', 'gwei')});
      await tx.wait();
      console.log(tx);
    }),
  );
}

const to: string = env.USER1_ADDRESS;
const amount: BigNumberish = utils.parseUnits('0.001', 'ether');

main(to, amount)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
