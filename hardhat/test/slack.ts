import axios from 'axios';
import { providers } from 'ethers';
import { TransactionResponse } from '@ethersproject/abstract-provider';
import { StaticJsonRpcProvider } from '../lib/functions';

export type Transactions = {
  type: 'transactions';
  data: Array<TransactionResponse>;
};

export type MaticBalance = {
  type: 'maticBalance';
  address: string;
  balance: string;
};

export async function sendSlackNotification(
  webhookUrl: string,
  event: Transactions | MaticBalance,
) {
  let payload: {
    text: string;
    attachments: {
      title: string;
      color: string;
      text: string;
      mrkdwn_in: string[];
    }[];
  };

  let attachments: {
    title: string;
    color: string;
    text: string;
    mrkdwn_in: string[];
  }[] = [];

  try {
    if (event.type === 'transactions') {
      if (event.data.length === 0) {
        return false;
      }

      for (const data of event.data) {
        const tx: providers.TransactionResponse = data;
        const exploerUrl: string = `https://mumbai.polygonscan.com/tx/${tx.hash}`;
        const attachment = {
          title: event.type,
          color: '#34cdd7',
          text: exploerUrl,
          mrkdwn_in: ['text'],
        };
        attachments.push(attachment);
      }

      payload = {
        text: event.type,
        attachments: attachments,
      };
    } else {
      const attachment = {
        title: event.type,
        color: '#e47911',
        text: event.balance,
        mrkdwn_in: ['text'],
      };

      payload = {
        text: event.type,
        attachments: [attachment],
      };
    }

    await axios.post(webhookUrl, payload);
  } catch (error) {
    console.error(`Error slack notification: ${error}`);
  }
}

async function main() {
  const maticBalance: MaticBalance = {
    type: 'maticBalance',
    address: '0x',
    balance: '34.7',
  };

  const etherscanProvider = new providers.EtherscanProvider('maticmum');
  const block: number = await StaticJsonRpcProvider.getBlockNumber();
  console.log(block);
  const startBlock = block - 15 * 30;
  console.log(startBlock);

  const history: providers.TransactionResponse[] =
    await etherscanProvider.getHistory(
      '0xa8633D55cD7F116f20e80b6b6c2Ba597f7985f6D',
      startBlock,
      block,
    );

  console.log(history);

  const transactions: Transactions = {
    type: 'transactions',
    data: history,
  };

  const slackUrl =
    'https://hooks.slack.com/services/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'; // process.env.SLACK_WEBHOOK_URL || ''
  const res = await sendSlackNotification(slackUrl, maticBalance);
  return res;
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
