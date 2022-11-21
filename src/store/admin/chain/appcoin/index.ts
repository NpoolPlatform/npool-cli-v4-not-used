import { defineStore } from 'pinia'
import { API } from './const'
import { 
  GetAppCoinsRequest, 
  GetAppCoinsResponse, 
  UpdateAppCoinRequest, 
  UpdateAppCoinResponse 
} from './types'
import { AppCoin } from '../../../base'
import { doActionWithError } from '../../../action'

export const useAdminAppCoinStore = defineStore('admin-appcoin-v4', {
  state: () => ({
    AppCoins: {
      AppCoins: [] as Array<AppCoin>,
      Total: 0
    }
  }),
  getters: {
    getCoinByID () {
      return (ID: string) => {
        return this.AppCoins.AppCoins.find((el) => el.ID === ID)
      }
    }
  },
  actions: {
    getAppCoins (req: GetAppCoinsRequest, done: (error: boolean, appCoins: Array<AppCoin>) => void) {
      doActionWithError<GetAppCoinsRequest, GetAppCoinsResponse>(
        API.GET_APPCOINS,
        req,
        req.Message,
        (resp: GetAppCoinsResponse): void => {
          this.AppCoins.AppCoins.push(...resp.Infos)
          this.AppCoins.Total = resp.Total
          done(false, resp.Infos)
        }, () => {
          done(true, [])
        })
    },
    updateAppCoin (req: UpdateAppCoinRequest, done: (error: boolean, appCoin: AppCoin) => void) {
      doActionWithError<UpdateAppCoinRequest, UpdateAppCoinResponse>(
        API.UPDATE_APPCOIN,
        req,
        req.Message,
        (resp: UpdateAppCoinResponse): void => {
          const index = this.AppCoins.AppCoins.findIndex((el) => el.ID === resp.Info.ID)
          this.AppCoins.AppCoins.splice(index < 0 ? 0 : index, index < 0 ? 0 : 1, resp.Info)
          done(false, resp.Info)
        }, () => {
          done(true, {} as AppCoin)
        })
    },
  }
})