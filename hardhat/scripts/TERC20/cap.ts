import { utils, BigNumber } from 'ethers';
import { inisrizeTERC20 } from '../../lib/functions';
import { TERC20 } from '../../types';

async function main() {
  const erc20: TERC20 = await inisrizeTERC20();

  const cap: BigNumber = await erc20.cap();
  console.log('cap = ', utils.formatEther(BigInt(cap._hex).toString()));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
