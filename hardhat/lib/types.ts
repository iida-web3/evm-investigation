
export interface BlockHeader {
    number: number;
    hash: string;
    parentHash: string;
    nonce: string;
    sha3Uncles: string;
    logsBloom: string;
    transactionsRoot: string;
    stateRoot: string;
    receiptsRoot: string;
    miner: string;
    extraData: string;
    gasLimit: number;
    gasUsed: number;
    timestamp: number | string;
    baseFeePerGas?: number;
}

export interface BlockTransactionBase extends BlockHeader {
    size: number;
    difficulty: number;
    totalDifficulty: number;
    uncles: string[];
}

export interface BlockTransactionString extends BlockTransactionBase {
    transactions: string[];
}
