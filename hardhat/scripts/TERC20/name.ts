import { inisrizeTERC20 } from '../../lib/functions';
import { TERC20 } from '../../types';

async function main() {
  const erc20: TERC20 = await inisrizeTERC20();

  const name: string = await erc20.name();
  console.log('name = ', name);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
