import { Address, Hex } from 'viem';

export const JS_FIXTURES_DIRECTORY = 'fixtures';
export const CIRCLE_USDC_BALANCE_STORAGE_KEY = '0x57d18af793d7300c4ba46d192ec7aa095070dde6c52c687c6d0d92fb8532b305';
export const UNISWAP_V3_USDC_BALANCE_STORAGE_KEY = '0x1f21a62c4538bacf2aabeca410f0fe63151869f172e03c0e00357ba26a341eff';
export const BORED_APE_7TH_OWNER_OF_STORAGE_KEY = '0x405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5add';
export const CHAIN_LINK_TRANSFER_TX_HASH = '0x98e19df80eb8feae436896cc7cc6d4a97818e6010b56a249352b9ac2caf0d573';
export const ETH_TRANSFER_TX_HASH = '0xfade98d8c3b7438655139080c33ccd0b1fc5d08b93dab0c3792d6c1001d56ddb';
export const ORACLIZE_TRANSFER_TX_HASH = '0x38f299591902bfada359527fa6b9b597a959c41c6f72a3b484807fbf52dc8abe';
export const TETHER_APPROVE_TX_HASH = '0xa799d5931eed84370b0d8917441d8c912a7e155d9a9a3ebcc0f5bf1a44e4dab6';

interface HistoryAPIFixture {
  blockNumber: bigint;
  skipHeader?: boolean;
  address?: Address;
  storageKeys?: Hex[];
  transactionHash?: Hex;
  logIdx?: number;
}

type HistoryAPIFixtures = Record<string, Record<string, Record<string, HistoryAPIFixture>>>;

export const HISTORY_API_FIXTURES: HistoryAPIFixtures = {
  mainnet: {
    frontier: {
      zero: {
        blockNumber: 0n,
        address: '0x756F45E3FA69347A9A973A725E3C98bC4db0b5a0'
      },
      first: {
        blockNumber: 1n,
        address: '0x40d45d9d7625d15156c932b771ca7b0527130958'
      }
    },
    homestead: {
      fork: {
        blockNumber: 1_150_000n,
        transactionHash: ORACLIZE_TRANSFER_TX_HASH
      }
    },
    london: {
      crypto_punks: {
        blockNumber: 14_194_126n,
        address: '0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb'
      },
      vitalik_balance: {
        blockNumber: 12_965_000n,
        address: '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045'
      }
    },
    paris: {
      usdc_circle: {
        blockNumber: 19_000_000n,
        address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
        storageKeys: [CIRCLE_USDC_BALANCE_STORAGE_KEY]
      },
      usdc_uniswap: {
        skipHeader: true,
        blockNumber: 19_000_000n,
        address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
        storageKeys: [UNISWAP_V3_USDC_BALANCE_STORAGE_KEY]
      },
      bored_ape_yacht_club: {
        blockNumber: 19_000_000n,
        address: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
        storageKeys: [BORED_APE_7TH_OWNER_OF_STORAGE_KEY]
      }
    },
    cancun: {
      small_block: {
        blockNumber: 19_432_673n,
        transactionHash: CHAIN_LINK_TRANSFER_TX_HASH,
        logIdx: 0
      },
      with_blob: {
        blockNumber: 19_432_087n
      },
      access_list: {
        blockNumber: 19_439_366n
      },
      transfer: {
        skipHeader: true,
        blockNumber: 19_539_214n,
        transactionHash: ETH_TRANSFER_TX_HASH
      },
      approve: {
        skipHeader: true,
        blockNumber: 19_667_377n,
        transactionHash: TETHER_APPROVE_TX_HASH,
        logIdx: 0
      }
    }
  }
};