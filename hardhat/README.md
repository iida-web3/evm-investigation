## setup

```
npx hardhat compile

source .env
source hardhat/.env.local
source hardhat/.env.mumbai
source hardhat/.env.sepolia
```

## start node

```
anvil --fork-url $RPC_URL
```

## deploy

```
echo $NETWORK
npx hardhat run --network $NETWORK --verbose hardhat/scripts/deploy.ts
```
