import { AppDefaultGood, BaseRequest } from '../../../base'

export interface CreateAppDefaultGoodRequest extends BaseRequest{
  TargetAppID: string;
  GoodID: string;
  CoinTypeID: string;
}

export interface CreateAppDefaultGoodResponse {
  Info: AppDefaultGood;
}

export interface UpdateAppDefaultGoodRequest extends BaseRequest{
  ID: string;
  GoodID: string;
  TargetAppID: string;
}

export interface UpdateAppDefaultGoodResponse {
  Info: AppDefaultGood;
}

export interface DeleteAppDefaultGoodRequest extends BaseRequest{
  ID: string;
  TargetAppID: string;
}

export interface DeleteAppDefaultGoodResponse {
  Info: AppDefaultGood;
}

export interface GetAppDefaultGoodsRequest extends BaseRequest{
  TargetAppID: string;
  /** @format int32 */
  Offset: number;
  /** @format int32 */
  Limit: number;
}

export interface GetAppDefaultGoodsResponse {
  Infos: AppDefaultGood[];
  /** @format int64 */
  Total: number;
}