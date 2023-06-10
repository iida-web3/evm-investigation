import { ethers } from 'hardhat';
import {
  providers,
  utils,
} from 'ethers';
import {
  StaticJsonRpcProvider,
  inisrizeTERC20,
  web3,
} from '../../lib/functions';
import { TERC20 } from '../../types';
import { TERC20EnvetInterface } from '../../lib/events';
import { BlockTransactionString } from '../../lib/types';

async function main() {
  const [deployer, user1] = await ethers.getSigners();
  const erc20: TERC20 = await inisrizeTERC20();

  let result;

  const getLatestBlock = await StaticJsonRpcProvider.getBlockNumber()

  const pendingTx: BlockTransactionString = await web3.eth.getBlock("pending")
  console.log(pendingTx);

  const filter = {
    address: erc20.address,
    fromBlock: getLatestBlock - 1000,
    topics: [utils.id(TERC20EnvetInterface.transfer),
      utils.hexZeroPad(await deployer.getAddress(), 32),
      utils.hexZeroPad(await user1.getAddress(), 32)
    ]
  };

  const rowLogs: providers.Log[] = await StaticJsonRpcProvider.getLogs(filter);

  for (let n = 0; n < rowLogs.length; n++) {
    const parsedLog = erc20.interface.parseLog(rowLogs[n]);
    console.log('parsedLog = ', parsedLog);
    const transactionHash = rowLogs[n].transactionHash
    console.log('transactionHash = ', transactionHash);

    result = pendingTx.transactions.includes(transactionHash)

    if (result) {
      break
    }
  }

  return result
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
