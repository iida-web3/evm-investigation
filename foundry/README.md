```
npm run format
forge compile
forge build
forge test -vvvvv
```

```
source .env
```

```
anvil --fork-url $RPC_URL
```

```
forge script ./foundry/script/Deploy.s.sol \
    --tc Deploy \
    --broadcast \
    --chain 1 \
    -vvvv --fork-url $NODE_URL
```
