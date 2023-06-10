const defultAddress = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';
// trunk-ignore(gitleaks/generic-api-key)
const defultPrvKey =
  'ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80';

function fatchHardhatAccounts(): string[] {
  const account: string[] = [];
  process.env.PRIVATE_KEY ? account.push(process.env.PRIVATE_KEY) : '';
  process.env.USER1_PRIVATE_KEY
    ? account.push(process.env.USER1_PRIVATE_KEY)
    : '';
  process.env.USER2_PRIVATE_KEY
    ? account.push(process.env.USER2_PRIVATE_KEY)
    : '';
  process.env.USER3_PRIVATE_KEY
    ? account.push(process.env.USER3_PRIVATE_KEY)
    : '';
  process.env.USER4_PRIVATE_KEY
    ? account.push(process.env.USER4_PRIVATE_KEY)
    : '';
  process.env.USER5_PRIVATE_KEY
    ? account.push(process.env.USER5_PRIVATE_KEY)
    : '';

  if (account.length < 64) {
    account.push(defultPrvKey);
  }
  return account;
}

export const env = {
  NODE_URL: process.env.NODE_URL || 'http://127.0.0.1:8545/',
  PRIVATE_KEY: process.env.PRIVATE_KEY || defultPrvKey,
  DEPLOYER_ADDRESS: process.env.DEPLOYER_ADDRESS || defultAddress,
  USER1_ADDRESS: process.env.USER1_ADDRESS || defultAddress,
  USER1_PRIVATE_KEY: process.env.USER1_PRIVATE_KEY || defultPrvKey,
  USER2_ADDRESS: process.env.USER2_ADDRESS || defultAddress,
  USER2_PRIVATE_KEY: process.env.USER2_PRIVATE_KEY || defultPrvKey,
  USER3_ADDRESS: process.env.USER3_ADDRESS || defultAddress,
  USER3_PRIVATE_KEY: process.env.USER3_PRIVATE_KEY || defultPrvKey,
  USER4_ADDRESS: process.env.USER4_ADDRESS || defultAddress,
  USER4_PRIVATE_KEY: process.env.USER4_PRIVATE_KEY || defultPrvKey,
  USER5_ADDRESS: process.env.USER4_ADDRESS || defultAddress,
  USER5_PRIVATE_KEY: process.env.USER4_PRIVATE_KEY || defultPrvKey,
  ERC20_CONTRACT_ADDRESS: process.env.ERC20_CONTRACT_ADDRESS || defultAddress,
  CHAIN_ID: Number(process.env.CHAIN_ID) || 31337,
  FORGE_CHAIN_ID: Number(process.env.FORGE_CHAIN_ID) || 1,
  ACCOUNTS: fatchHardhatAccounts(),
  ERC20_NAME: process.env.ERC20_NAME || 'TEST',
  ERC20_SYMBOL: process.env.ERC20_SYMBOL || 'TEST',
  GET_GAS_FEE_URL: process.env.GET_GAS_FEE_URL || '',
  RPC_URL: process.env.RPC_URL || '',
  NETWORK: process.env.NETWORK || 'local',
  FORGE_NETWORK: process.env.FORGE_NETWORK || 'mainnet',
  USDT: process.env.USDT || defultAddress,
  ENV_PATH: process.env.ENV_PATH || '.env',
  WSS: process.env.WSS || '',
};
