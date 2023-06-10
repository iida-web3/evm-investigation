import { env } from '../../lib/config';
import { ethers } from 'hardhat';
import { inisrizeTERC20 } from '../../lib/functions';
import { TERC20 } from '../../types';
import { BigNumber, utils } from 'ethers';

async function main() {
  const [deployer, user1, user2, user3, user4, user5] =
    await ethers.getSigners();
  const erc20: TERC20 = await inisrizeTERC20();

  let balanceOf: BigNumber;

  balanceOf = await erc20.balanceOf(await deployer.getAddress());
  console.log(
    `${await deployer.getAddress()} = `,
    utils.formatEther(BigInt(balanceOf._hex).toString()),
  );

  balanceOf = await erc20.balanceOf(await user1.getAddress());
  console.log(
    `${await user1.getAddress()} = `,
    utils.formatEther(BigInt(balanceOf._hex).toString()),
  );

  balanceOf = await erc20.balanceOf(await user2.getAddress());
  console.log(
    `${await user2.getAddress()} = `,
    utils.formatEther(BigInt(balanceOf._hex).toString()),
  );

  balanceOf = await erc20.balanceOf(await user3.getAddress());
  console.log(
    `${await user3.getAddress()} = `,
    utils.formatEther(BigInt(balanceOf._hex).toString()),
  );

  balanceOf = await erc20.balanceOf(await user4.getAddress());
  console.log(
    `${await user4.getAddress()} = `,
    utils.formatEther(BigInt(balanceOf._hex).toString()),
  );

  balanceOf = await erc20.balanceOf(await user5.getAddress());
  console.log(
    `${await user5.getAddress()} = `,
    utils.formatEther(BigInt(balanceOf._hex).toString()),
  );

  balanceOf = await erc20.balanceOf(env.ERC20_CONTRACT_ADDRESS);
  console.log(
    `${env.ERC20_CONTRACT_ADDRESS} = `,
    utils.formatEther(BigInt(balanceOf._hex).toString()),
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
