import { defineStore } from 'pinia'
import { API } from './const'
import {
  GetAppAnnouncementUsersRequest,
  GetAppAnnouncementUsersResponse,
  CreateAnnouncementUsersRequest,
  CreateAnnouncementUsersResponse,
  DeleteAnnouncementUserRequest,
  DeleteAnnouncementUserResponse,
} from './types'
import { doActionWithError } from '../../../action'
import { AnnouncementUser } from '../../../base'

export const useAdminAnnouncementUserStore = defineStore('admin-announcementuser-v4', {
  state: () => ({
    AnnouncementUsers: {
      AnnouncementUsers: [] as Array<AnnouncementUser>,
      Total: 0
    }
  }),
  getters: {
  },
  actions: {
    getAppAnnouncementUsers (req: GetAppAnnouncementUsersRequest, done: (error: boolean, rows: Array<AnnouncementUser>) => void) {
      doActionWithError<GetAppAnnouncementUsersRequest, GetAppAnnouncementUsersResponse>(
        API.GET_APP_ANNOUNCEMENTUSERS,
        req,
        req.Message,
        (resp: GetAppAnnouncementUsersResponse): void => {
          this.AnnouncementUsers.AnnouncementUsers.push(...resp.Infos)
          this.AnnouncementUsers.Total = resp.Total
          done(false, resp.Infos)
        }, () => {
          done(true, [] as Array<AnnouncementUser>)
        }
      )
    },
    deleteAnnouncementUser (req: DeleteAnnouncementUserRequest, done: (error: boolean, row: AnnouncementUser) => void) {
      doActionWithError<DeleteAnnouncementUserRequest, DeleteAnnouncementUserResponse>(
        API.DELETE_ANNOUNCEMENTUSERS,
        req,
        req.Message,
        (resp: DeleteAnnouncementUserResponse): void => {
          const index = this.AnnouncementUsers.AnnouncementUsers.findIndex((el) => el.ID === resp.Info.ID)
          this.AnnouncementUsers.AnnouncementUsers.splice(index, 1)
          this.AnnouncementUsers.Total -= 1
          done(false, resp.Info)
        }, () => {
          done(true, {} as AnnouncementUser)
        }
      )
    },
    createAnnouncementUsers (req: CreateAnnouncementUsersRequest, done: (error: boolean, rows: Array<AnnouncementUser>) => void) {
      doActionWithError<CreateAnnouncementUsersRequest, CreateAnnouncementUsersResponse>(
        API.CREATE_ANNOUNCEMENTUSERS,
        req,
        req.Message,
        (resp: CreateAnnouncementUsersResponse): void => {
          this.AnnouncementUsers.AnnouncementUsers.push(...resp.Infos)
          this.AnnouncementUsers.Total += 1
          done(false, resp.Infos)
        }, () => {
          done(true, [] as Array<AnnouncementUser>)
        }
      )
    }
  }
})