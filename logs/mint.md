
```
  hardhat:core:global-dir Looking up Client Id at /Users/jun/Library/Application Support/hardhat-nodejs/analytics.json +0ms
  hardhat:core:global-dir Client Id found: 531a49d3-c1ff-4867-8fbd-35165533123d +1ms
  hardhat:core:analytics Sending hit for /task/builtin +0ms
  hardhat:core:analytics Hit payload: {"v":"1","t":"pageview","tid":"UA-117668706-3","cid":"531a49d3-c1ff-4867-8fbd-35165533123d","dp":"/task/builtin","dh":"cli.hardhat.org","ua":"Node/v16.19.1 (Macintosh; Intel Mac OS X 10_13_6)","cs":"Developer","cm":"User Type","cd1":"hardhat-project","cd2":"Developer","cd3":"Hardhat 2.14.0"} +1ms
  hardhat:core:hre Creating HardhatRuntimeEnvironment +0ms
  hardhat:core:hre Running task run +0ms
  hardhat:core:hre Running task compile +1ms
  hardhat:core:hre Running compile's super +0ms
  hardhat:core:hre Running compile's super +0ms
  hardhat:core:hre Running compile's super +0ms
  hardhat:core:hre Running task compile:get-compilation-tasks +0ms
  hardhat:core:hre Running task compile:solidity +1ms
  hardhat:core:hre Running task compile:solidity:get-source-paths +0ms
  hardhat:core:hre Running task compile:solidity:get-source-names +0ms
  hardhat:core:hre Running task compile:solidity:get-dependency-graph +2ms
  hardhat:core:hre Running task compile:solidity:read-file +1ms
  hardhat:core:hre Running task compile:solidity:transform-import-name +0ms
  hardhat:core:hre Running task compile:solidity:transform-import-name +4ms
  hardhat:core:hre Running task compile:solidity:read-file +138ms
  hardhat:core:hre Running task compile:solidity:read-file +1ms
  hardhat:core:hre Running task compile:solidity:transform-import-name +0ms
  hardhat:core:hre Running task compile:solidity:transform-import-name +1ms
  hardhat:core:hre Running task compile:solidity:read-file +0ms
  hardhat:core:hre Running task compile:solidity:read-file +0ms
  hardhat:core:hre Running task compile:solidity:transform-import-name +1ms
  hardhat:core:hre Running task compile:solidity:transform-import-name +0ms
  hardhat:core:hre Running task compile:solidity:transform-import-name +0ms
  hardhat:core:hre Running task compile:solidity:read-file +1ms
  hardhat:core:hre Running task compile:solidity:read-file +0ms
  hardhat:core:hre Running task compile:solidity:transform-import-name +1ms
  hardhat:core:hre Running task compile:solidity:get-compilation-jobs +1ms
  hardhat:core:tasks:compile The dependency graph was divided in '1' connected components +0ms
  hardhat:core:hre Running task compile:solidity:get-compilation-job-for-file +1ms
  hardhat:core:hre Running compile:solidity:get-compilation-job-for-file's super +0ms
  hardhat:core:hre Running compile:solidity:get-compilation-job-for-file's super +0ms
  hardhat:core:compilation-job File '/Users/jun/workspace/w-thirdverse/hardhat-foundry/src/TERC20.sol' will be compiled with version '0.8.18' +0ms
  hardhat:core:compilation-job File '/Users/jun/workspace/w-thirdverse/hardhat-foundry/foundry/lib/openzeppelin-contracts/contracts/access/Ownable.sol' added as dependency of '/Users/jun/workspace/w-thirdverse/hardhat-foundry/src/TERC20.sol' +0ms
  hardhat:core:compilation-job File '/Users/jun/workspace/w-thirdverse/hardhat-foundry/foundry/lib/openzeppelin-contracts/contracts/token/ERC20/extensions/ERC20Capped.sol' added as dependency of '/Users/jun/workspace/w-thirdverse/hardhat-foundry/src/TERC20.sol' +0ms
  hardhat:core:compilation-job File '/Users/jun/workspace/w-thirdverse/hardhat-foundry/foundry/lib/openzeppelin-contracts/contracts/utils/Context.sol' added as dependency of '/Users/jun/workspace/w-thirdverse/hardhat-foundry/src/TERC20.sol' +0ms
  hardhat:core:compilation-job File '/Users/jun/workspace/w-thirdverse/hardhat-foundry/foundry/lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol' added as dependency of '/Users/jun/workspace/w-thirdverse/hardhat-foundry/src/TERC20.sol' +0ms
  hardhat:core:compilation-job File '/Users/jun/workspace/w-thirdverse/hardhat-foundry/foundry/lib/openzeppelin-contracts/contracts/utils/Context.sol' added as dependency of '/Users/jun/workspace/w-thirdverse/hardhat-foundry/src/TERC20.sol' +0ms
  hardhat:core:compilation-job File '/Users/jun/workspace/w-thirdverse/hardhat-foundry/foundry/lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol' added as dependency of '/Users/jun/workspace/w-thirdverse/hardhat-foundry/src/TERC20.sol' +0ms
  hardhat:core:compilation-job File '/Users/jun/workspace/w-thirdverse/hardhat-foundry/foundry/lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol' added as dependency of '/Users/jun/workspace/w-thirdverse/hardhat-foundry/src/TERC20.sol' +0ms
  hardhat:core:compilation-job File '/Users/jun/workspace/w-thirdverse/hardhat-foundry/foundry/lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol' added as dependency of '/Users/jun/workspace/w-thirdverse/hardhat-foundry/src/TERC20.sol' +0ms
  hardhat:core:hre Running task compile:solidity:get-compilation-job-for-file +1ms
  hardhat:core:hre Running compile:solidity:get-compilation-job-for-file's super +0ms
  hardhat:core:hre Running compile:solidity:get-compilation-job-for-file's super +0ms
  hardhat:core:compilation-job File '/Users/jun/workspace/w-thirdverse/hardhat-foundry/foundry/lib/openzeppelin-contracts/contracts/token/ERC20/extensions/ERC20Capped.sol' will be compiled with version '0.8.18' +1ms
  hardhat:core:compilation-job File '/Users/jun/workspace/w-thirdverse/hardhat-foundry/foundry/lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol' added as dependency of '/Users/jun/workspace/w-thirdverse/hardhat-foundry/foundry/lib/openzeppelin-contracts/contracts/token/ERC20/extensions/ERC20Capped.sol' +0ms
  hardhat:core:compilation-job File '/Users/jun/workspace/w-thirdverse/hardhat-foundry/foundry/lib/openzeppelin-contracts/contracts/utils/Context.sol' added as dependency of '/Users/jun/workspace/w-thirdverse/hardhat-foundry/foundry/lib/openzeppelin-contracts/contracts/token/ERC20/extensions/ERC20Capped.sol' +0ms
  hardhat:core:compilation-job File '/Users/jun/workspace/w-thirdverse/hardhat-foundry/foundry/lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol' added as dependency of '/Users/jun/workspace/w-thirdverse/hardhat-foundry/foundry/lib/openzeppelin-contracts/contracts/token/ERC20/extensions/ERC20Capped.sol' +0ms
  hardhat:core:compilation-job File '/Users/jun/workspace/w-thirdverse/hardhat-foundry/foundry/lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol' added as dependency of '/Users/jun/workspace/w-thirdverse/hardhat-foundry/foundry/lib/openzeppelin-contracts/contracts/token/ERC20/extensions/ERC20Capped.sol' +0ms
  hardhat:core:compilation-job File '/Users/jun/workspace/w-thirdverse/hardhat-foundry/foundry/lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol' added as dependency of '/Users/jun/workspace/w-thirdverse/hardhat-foundry/foundry/lib/openzeppelin-contracts/contracts/token/ERC20/extensions/ERC20Capped.sol' +0ms
  hardhat:core:hre Running task compile:solidity:get-compilation-job-for-file +1ms
  hardhat:core:hre Running compile:solidity:get-compilation-job-for-file's super +0ms
  hardhat:core:hre Running compile:solidity:get-compilation-job-for-file's super +0ms
  hardhat:core:compilation-job File '/Users/jun/workspace/w-thirdverse/hardhat-foundry/foundry/lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol' will be compiled with version '0.8.18' +0ms
  hardhat:core:compilation-job File '/Users/jun/workspace/w-thirdverse/hardhat-foundry/foundry/lib/openzeppelin-contracts/contracts/utils/Context.sol' added as dependency of '/Users/jun/workspace/w-thirdverse/hardhat-foundry/foundry/lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol' +0ms
  hardhat:core:compilation-job File '/Users/jun/workspace/w-thirdverse/hardhat-foundry/foundry/lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol' added as dependency of '/Users/jun/workspace/w-thirdverse/hardhat-foundry/foundry/lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol' +0ms
  hardhat:core:compilation-job File '/Users/jun/workspace/w-thirdverse/hardhat-foundry/foundry/lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol' added as dependency of '/Users/jun/workspace/w-thirdverse/hardhat-foundry/foundry/lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol' +0ms
  hardhat:core:compilation-job File '/Users/jun/workspace/w-thirdverse/hardhat-foundry/foundry/lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol' added as dependency of '/Users/jun/workspace/w-thirdverse/hardhat-foundry/foundry/lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol' +0ms
  hardhat:core:hre Running task compile:solidity:get-compilation-job-for-file +0ms
  hardhat:core:hre Running compile:solidity:get-compilation-job-for-file's super +0ms
  hardhat:core:hre Running compile:solidity:get-compilation-job-for-file's super +0ms
  hardhat:core:compilation-job File '/Users/jun/workspace/w-thirdverse/hardhat-foundry/foundry/lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol' will be compiled with version '0.8.18' +0ms
  hardhat:core:compilation-job File '/Users/jun/workspace/w-thirdverse/hardhat-foundry/foundry/lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol' added as dependency of '/Users/jun/workspace/w-thirdverse/hardhat-foundry/foundry/lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol' +0ms
  hardhat:core:hre Running task compile:solidity:get-compilation-job-for-file +1ms
  hardhat:core:hre Running compile:solidity:get-compilation-job-for-file's super +0ms
  hardhat:core:hre Running compile:solidity:get-compilation-job-for-file's super +0ms
  hardhat:core:compilation-job File '/Users/jun/workspace/w-thirdverse/hardhat-foundry/foundry/lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol' will be compiled with version '0.8.18' +1ms
  hardhat:core:hre Running task compile:solidity:get-compilation-job-for-file +0ms
  hardhat:core:hre Running compile:solidity:get-compilation-job-for-file's super +0ms
  hardhat:core:hre Running compile:solidity:get-compilation-job-for-file's super +0ms
  hardhat:core:compilation-job File '/Users/jun/workspace/w-thirdverse/hardhat-foundry/foundry/lib/openzeppelin-contracts/contracts/utils/Context.sol' will be compiled with version '0.8.18' +0ms
  hardhat:core:hre Running task compile:solidity:get-compilation-job-for-file +0ms
  hardhat:core:hre Running compile:solidity:get-compilation-job-for-file's super +0ms
  hardhat:core:hre Running compile:solidity:get-compilation-job-for-file's super +0ms
  hardhat:core:compilation-job File '/Users/jun/workspace/w-thirdverse/hardhat-foundry/foundry/lib/openzeppelin-contracts/contracts/access/Ownable.sol' will be compiled with version '0.8.18' +0ms
  hardhat:core:compilation-job File '/Users/jun/workspace/w-thirdverse/hardhat-foundry/foundry/lib/openzeppelin-contracts/contracts/utils/Context.sol' added as dependency of '/Users/jun/workspace/w-thirdverse/hardhat-foundry/foundry/lib/openzeppelin-contracts/contracts/access/Ownable.sol' +0ms
  hardhat:core:hre Running task compile:solidity:handle-compilation-jobs-failures +1ms
  hardhat:core:hre Running task compile:solidity:filter-compilation-jobs +0ms
  hardhat:core:tasks:compile '7' jobs were filtered out +6ms
  hardhat:core:hre Running task compile:solidity:merge-compilation-jobs +2ms
  hardhat:core:hre Running task compile:solidity:compile-jobs +0ms
  hardhat:core:hre Running compile:solidity:compile-jobs's super +1ms
  hardhat:core:tasks:compile No compilation jobs to compile +1ms
  hardhat:core:hre Running task compile:solidity:log:nothing-to-compile +0ms
  hardhat:core:hre Running task typechain:generate-types +0ms
  hardhat:core:hre Running task compile:solidity:log:compilation-result +2ms
  hardhat:core:hre Running task compile:remove-obsolete-artifacts +0ms
  hardhat:core:hre Running task size-contracts +13ms
 ·------------------------|---------------------------|----------------·
 |  Solc version: 0.8.18  ·  Optimizer enabled: true  ·  Runs: 200     │
 ·························|···························|·················
 |  Contract Name         ·  Size (KiB)               ·  Change (KiB)  │
 ·························|···························|·················
 |  ERC20                 ·                    2.080  ·         0.000  │
 ·························|···························|·················
 |  TERC20                ·                    3.291  ·         0.000  │
 ·------------------------|---------------------------|----------------·
  hardhat:core:tasks:run Running script hardhat/scripts/TERC20/mint.ts in a subprocess so we can wait for it to complete +0ms
  hardhat:core:scripts-runner Creating Hardhat subprocess to run hardhat/scripts/TERC20/mint.ts +0ms
  hardhat:core:analytics Hit for "/task/builtin" sent successfully +331ms
  hardhat:core:config Loading Hardhat config from /Users/jun/workspace/w-thirdverse/hardhat-foundry/hardhat.config.ts +0ms
  hardhat:core:hre Creating HardhatRuntimeEnvironment +0ms
  hardhat:core:hre Creating provider for network sepolia +269ms
tx =  {
  hash: '0x5566ddcbdf357a8419c472c75c3059f3786792d4020e181b5ca25ddb0a6f2104',
  type: 2,
  accessList: [],
  blockHash: null,
  blockNumber: null,
  transactionIndex: null,
  confirmations: 0,
  from: '0xDd993a44178346C82eCd8C79F29aE4BbFDB4c42D',
  gasPrice: BigNumber { _hex: '0x019782', _isBigNumber: true },
  maxPriorityFeePerGas: BigNumber { _hex: '0x019778', _isBigNumber: true },
  maxFeePerGas: BigNumber { _hex: '0x019782', _isBigNumber: true },
  gasLimit: BigNumber { _hex: '0x011472', _isBigNumber: true },
  to: '0x3990918E7B5e6d86e07B09CC49331f3f464A4D38',
  value: BigNumber { _hex: '0x00', _isBigNumber: true },
  nonce: 43,
  data: '0x40c10f19000000000000000000000000dd993a44178346c82ecd8c79f29ae4bbfdb4c42d00000000000000000000000000000000000000000052b7d2dcc80cd2e4000000',
  r: '0x00c4e4935732493ac1fd0d11094f97572044415ee6aefaa0aa4ca4677a7a22b5',
  s: '0x55b0159077a6b93fb813ad87d0aa1af6bd71b3891d2df8fe92e91aa19e87cd0d',
  v: 0,
  creates: null,
  chainId: 11155111,
  wait: [Function (anonymous)]
}
  hardhat:core:scripts-runner Script hardhat/scripts/TERC20/mint.ts exited with status code 0 +7s
  hardhat:core:cli Killing Hardhat after successfully running task run +0ms
```
