
import {  RecaptchaType, SigninVerifyType, SignMethodType } from './const'

export interface User {
  ID: string

  AppID: string
  EmailAddress: string
  PhoneNO: string

  ImportedFromAppID: string
  ImportedFromAppName: string
  ImportedFromAppLogo: string
  ImportedFromAppHome: string

  Username: string
  AddressFields: Array<string>
  Gender: string
  PostalCode: string
  Age: number
  Birthday: number
  Avatar: string
  Organization: string
  FirstName: string
  LastName: string
  IDNumber: string

  SigninVerifyType: SigninVerifyType
  GoogleAuthVerified: boolean
  GoogleSecret: string
  HasGoogleSecret: boolean

  BanAppUserID: string
  Banned: boolean
  BanMessage: string

  Roles: Array<string>

  Logined: boolean
  LoginAccount: string
  LoginAccountType: SignMethodType
  LoginToken: string
  LoginClientIP: string
  LoginClientUserAgent: string

  CreatedAt: number

  InvitationCode: string
  LoginVerified: boolean
}

export interface App {
  ID: string
  CreatedBy: string
  Name: string
  Logo: string
  Description: string

  BanAppID: string
  Banned: boolean
  BanMessage: string
  SignupMethods: Array<SignMethodType>
  ExtSigninMethods: Array<SignMethodType>
  RecaptchaMethod: RecaptchaType

  KycEnable: boolean
  SigninVerifyEnable: boolean
  InvitationCodeMust: boolean

  CreatedAt: number
}

export interface Role {
  ID: string
  CreatedBy: string
  Role: string
  Description: string
  Default: boolean

  AppID: string
  AppName: string
  AppLogo: string

  CreatedAt: number
}

export interface Auth {
  ID: string
  AppID: string
  RoleID: string
  UserID: string
  Resource: string
  Method: string
}
