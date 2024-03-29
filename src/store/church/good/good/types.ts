import { BaseRequest, CancelMode, Good } from '../../../base'


export interface CreateGoodRequest extends BaseRequest {
  DeviceInfoID: string;
  DurationDays: number;
  CoinTypeID: string;
  InheritFromGoodID?: string;
  VendorLocationID: string;
  Price: string;
  BenefitType: string;
  GoodType: string;
  Title: string;
  Unit: string;
  UnitAmount: number;
  SupportCoinTypeIDs?: string[];
  DeliveryAt: number;
  StartAt: number;
  TestOnly: boolean;
  Total: string;
  Locked?: string;
  InService?: string;
  Sold?: string;
  Posters: string[];
  Labels: string[];
  EnablePurchase?: boolean;
  EnableProductPage?: boolean;
  EnableSetCommission?: boolean;
  PurchaseLimit?: string;
  UserPurchaseLimit?: string;
  CancelMode?: CancelMode;
  CancellableBeforeStart?: number;
}

export interface CreateGoodResponse {
  Info: Good
}

export interface GetGoodsRequest extends BaseRequest{
  Offset: number
  Limit: number
}

export interface GetGoodsResponse {
  Infos: Array<Good>
  Total: number
}

export interface GetGoodRequest extends BaseRequest {
  ID: string
}

export interface GetGoodResponse {
  Info: Good
}

export interface UpdateGoodRequest extends BaseRequest{
  ID: string;
  DeviceInfoID: string;
  DurationDays: number;
  CoinTypeID: string;
  InheritFromGoodID?: string;
  VendorLocationID: string;
  Price: string;
  Title: string;
  Unit: string;
  UnitAmount: number;
  SupportCoinTypeIDs?: string[];
  DeliveryAt: number;
  StartAt: number;
  TestOnly?: boolean;
  Total: string;
  Sold?: string;
  Posters?: string[];
  Labels?: string[];
  EnablePurchase?: boolean;
  EnableProductPage?: boolean;
  EnableSetCommission?: boolean;
  UserPurchaseLimit?: string;
  CancelMode?: CancelMode;
  CancellableBeforeStart?: number;
}

export interface UpdateGoodResponse {
  Info: Good
}
