import { AccountUsedFor } from '../account';

export interface AppCoin {
  ID: string;
  AppID: string;
  CoinTypeID: string;
  Name: string;
  DisplayNames: string[];
  Logo: string;
  Unit: string;
  Presale: boolean;
  ReservedAmount: string;
  ForPay: boolean;
  CoinForPay: boolean;
  ProductPage: string;
  DailyRewardAmount: string;
  ENV: string;
  HomePage: string;
  Specs: string;
  FeeCoinTypeID: string;
  FeeCoinName: string;
  FeeCoinLogo: string;
  FeeCoinUnit: string;
  FeeCoinENV: string;
  WithdrawFeeByStableUSD: boolean;
  WithdrawFeeAmount: string;
  CollectFeeAmount: string;
  HotWalletFeeAmount: string;
  LowFeeAmount: string;
  HotLowFeeAmount: string;
  HotWalletAccountAmount: string;
  PaymentAccountCollectAmount: string;
  WithdrawAutoReviewAmount: string;
  LeastTransferAmount: string;
  StableUSD: boolean;
  MarketValue: string;
  SettleValue: string;
  SettlePercent: number;
  SettleTips: string[];
  Setter: string;
  Disabled: boolean;
  CoinDisabled: boolean;
  CreatedAt: number;
  Display: boolean;
  DisplayIndex: number;
  UpdatedAt: number;
  MaxAmountPerWithdraw: string;
  DefaultGoodID: string;
  NeedMemo: boolean;
}

export interface Coin {
  ID: string;
  Name: string;
  Logo: string;
  Presale: boolean;
  ReservedAmount: string;
  Unit: string;
  ENV: string;
  ForPay: boolean;
  HomePage: string;
  Specs: string;
  StableUSD: boolean;
  FeeCoinTypeID: string;
  FeeCoinName: string;
  FeeCoinLogo: string;
  FeeCoinUnit: string;
  FeeCoinENV: string;
  WithdrawFeeByStableUSD: boolean;
  WithdrawFeeAmount: string;
  CollectFeeAmount: string;
  HotWalletFeeAmount: string;
  LowFeeAmount: string;
  HotLowFeeAmount: string;
  HotWalletAccountAmount: string;
  PaymentAccountCollectAmount: string;
  MaxAmountPerWithdraw: string;
  LeastTransferAmount: string;
  DefaultGoodID: string;
  NeedMemo: boolean;
  Disabled: boolean;
  CheckNewAddressBalance: boolean;
  CreatedAt: number;
  UpdatedAt: number;
}

export const PriceCoinName = "USDT"

export enum CoinDescriptionUsedFor {
  DefaultUsedFor = "DefaultUsedFor",
  ProductPage = "ProductPage",
}

export const CoinDescriptionUsedFors = [
  CoinDescriptionUsedFor.ProductPage
]

export enum CoinEnvironment {
  Test = "test",
  Main = "main"
}

export const CoinEnvironments = [
  CoinEnvironment.Test,
  CoinEnvironment.Main
]

export interface CoinDescription {
  ID: string;
  AppID: string;
  CoinTypeID: string;
  CoinName: string;
  CoinLogo: string;
  CoinUnit: string;
  CoinENV: string;
  UsedForStr: string;
  UsedFor: CoinDescriptionUsedFor;
  Title: string;
  Message: string;
  CreatedAt: number;
  UpdatedAt: number;
}

/** @default "DefaultTxState" */
export enum TxState {
  DefaultTxState = "DefaultTxState",
  StateCreated = "StateCreated",
  StateWait = "StateWait",
  StateTransferring = "StateTransferring",
  StateSuccessful = "StateSuccessful",
  StateFail = "StateFail",
}

/** @default "DefaultTxType" */
export enum TxType {
  DefaultTxType = "DefaultTxType",
  TxWithdraw = "TxWithdraw",
  TxFeedGas = "TxFeedGas",
  TxPaymentCollect = "TxPaymentCollect",
  TxBenefit = "TxBenefit",
}

export interface Tx {
  ID: string;
  CoinTypeID: string;
  CoinName: string;
  CoinLogo: string;
  CoinUnit: string;
  CoinENV: string;
  AppID: string;
  AppName: string;
  FromAccountID: string;
  FromAddress: string;
  FromUsedFor: AccountUsedFor;
  ToAccountID: string;
  ToAddress: string;
  ToUsedFor: AccountUsedFor;
  Amount: string;
  FeeAmount: string;
  ChainTxID: string;
  State: TxState;
  Extra: string;
  Type: TxType;
  CreatedAt: number;
  UpdatedAt: number;
}

export enum CoinType {
  USDTERC20 = 'tether'
}

export enum CurrencyType {
  USD = 'usd',
  JPY = 'jpy'
}

export enum FiatType {
  USD = 'USD',
  JPY = 'JPY'
}

export interface FiatCurrencyType {
  ID: string;
  Name: string;
  Logo: string;
  /** @format int64 */
  CreatedAt: number;
  /** @format int64 */
  UpdatedAt: number;
}

/** @default "DefaultFeedType" */
export enum FeedType {
  DefaultFeedType = 'DefaultFeedType',
  CoinGecko = 'CoinGecko',
  CoinBase = 'CoinBase',
  StableUSDHardCode = 'StableUSDHardCode',
}

export enum CurrencyFeedType {
  DefaultFeedType = 'DefaultFeedType',
  CoinGecko = 'CoinGecko',
  CoinBase = 'CoinBase',
  StableUSDHardCode = 'StableUSDHardCode',
}

export interface CoinCurrency {
  ID: string;
  CoinTypeID: string;
  CoinName: string;
  CoinLogo: string;
  CoinUnit: string;
  CoinENV: string;
  CreatedAt: number;
  UpdatedAt: number;
  MarketValueHigh: string;
  MarketValueLow: string;
  FeedType: CurrencyFeedType;
}

export interface FiatCurrency {
  ID: string;
  FiatID: string;
  FeedType: CurrencyFeedType;
  FiatName: string;
  FiatLogo: string;
  FiatUnit: string;
  MarketValueHigh: string;
  MarketValueLow: string;
  CreatedAt: number;
  UpdatedAt: number;
}
