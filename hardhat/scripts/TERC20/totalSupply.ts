import { inisrizeTERC20 } from '../../lib/functions';
import { TERC20 } from '../../types';
import { BigNumber, utils } from 'ethers';

async function main() {
  const erc20: TERC20 = await inisrizeTERC20();

  const totalSupply: BigNumber = await erc20.totalSupply();
  console.log(
    'totalSupply = ',
    utils.formatEther(BigInt(totalSupply._hex).toString()),
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
