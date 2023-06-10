import { Contract, providers } from 'ethers';
import axios from 'axios';
import { usdtABI } from './abis';

import {
  TERC20,
  TERC20__factory,
} from '../types';
import { env } from '../lib/config';
import Web3 from 'web3';

export const JsonRpcProvider = new providers.JsonRpcProvider(env.NODE_URL);
export const StaticJsonRpcProvider = new providers.StaticJsonRpcProvider(
  env.NODE_URL,
);
export const EtherscanProvider = new providers.EtherscanProvider(env.FORGE_NETWORK);
// export const WebSocketProvider = new providers.WebSocketProvider(env.WSS);
export const web3: Web3 = new Web3(new Web3.providers.HttpProvider(env.NODE_URL));

export async function inisrizeTERC20(): Promise<TERC20> {
  return await TERC20__factory.connect(
    env.ERC20_CONTRACT_ADDRESS,
    StaticJsonRpcProvider,
  );
}

export async function getGasPrice() {
  const defultGasPrice: number = covertGweiToWei(50);

  try {
    const response = await (
      await axios.get(process.env.GET_GAS_FEE_URL || '')
    ).data;

    console.log('response = ', response);

    const result = covertGweiToWei(response.result.SafeGasPrice);
    console.log('result = ', result);

    if (defultGasPrice < result) {
      return defultGasPrice;
    }

    return result;
  } catch (error) {
    return defultGasPrice;
  }
}

function covertGweiToWei(amount: number): number {
  return Math.round(Number(amount) * 10 ** 9);
}

export async function inisrizeUSDT(): Promise<Contract> {
  return await new Contract(
    env.USDT,
    usdtABI,
    StaticJsonRpcProvider,
  );
}

export async function isContract(address: string): Promise<boolean> {
  const code = await StaticJsonRpcProvider.getCode(address);
  return code !== '0x';
}
