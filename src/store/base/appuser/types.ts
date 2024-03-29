
import {
  EntityType,
  KYCState,
  RecaptchaType,
  SigninVerifyType,
  SignMethodType,
  DocumentType,
  KYCReviewState,
  CreateInvitationCodeWhen
} from './const'

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
  AddressFieldsString: string
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
  SigninVerifyTypeStr: string
  GoogleAuthVerified: boolean
  GoogleAuthVerifiedInt: number
  GoogleSecret: string
  HasGoogleSecret: boolean
  GoogleOTPAuth: string
  SigninVerifyByGoogleAuth: boolean
  SigninVerifyByGoogleAuthInt: number

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

  Kol: boolean
  KolConfirmed: boolean
  
  InvitationCodeID: string
  InvitationCode: string
  InvitationCodeConfirmed: boolean

  LoginVerified: boolean

  State: KYCState
  KycStateStr: string

  SelectedLangID: string
}


export interface LoginHistory {
  AppID: string;
  ID: string;
  UserID: string;
  ClientIP: string;
  UserAgent: string;
  Location: string;
  CreatedAt: number;
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

  CreateInvitationCodeWhen: CreateInvitationCodeWhen
  MaxTypedCouponsPerOrder: number

  Maintaining: boolean
  CommitButtonTargets: string[]
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

export interface AuthHistory {
  AppID: string
  AppName: string
  AppLogo: string
  UserID: string
  EmailAddress: string
  PhoneNO: string
  Resource: string
  Method: string
  Allowed: boolean
  CreatedAt: number
}

export interface KYC {
  ID: string;
  AppID: string;
  AppName: string;
  AppLogo: string;
  UserID: string;
  EmailAddress: string;
  PhoneNO: string;
  DocumentType: DocumentType;
  IDNumber: string;
  FrontImg: string;
  BackImg: string;
  SelfieImg: string;
  EntityType: EntityType;
  ReviewID: string;
  State: KYCState;
  CreatedAt: number;
  UpdatedAt: number;

  ReviewMessage: string;
}

export interface KYCReview {
  UserID:       string;
  EmailAddress: string;
  PhoneNO:      string;
  KycID:        string;
  DocumentType: DocumentType;
  IDNumber:     string;
  FrontImg:     string;
  BackImg:      string;
  SelfieImg:    string;
  EntityType:   EntityType;
  ReviewID:     string;
  ObjectType:   string;
  Domain:       string;
  Reviewer:     string;
  ReviewState:  KYCReviewState;
  KycState:     KYCState;
  Message:      string;
  CreatedAt:    number;
  UpdatedAt:    number;
}

export interface AppRoleUser {
  ID:           string;
  CreatedBy:    string;
  Role:         string;
  Description:  string;
  Default:      boolean;
  AppID:        string;
  AppName:      string;
  AppLogo:      string;
  CreatedAt:    number;
  UserID:       string;
  EmailAddress: string;
  PhoneNO:      string;
  Genesis:      boolean;
}

export interface RoleUserRelation {
  ID:     string;
  AppID:  string;
  RoleID: string;
  UserID: string;
}

export interface Recaptcha {
  ID:        string;
  Recaptcha: string;
  Dashboard: string;
}

export interface SignMethod {
  ID:       string;
  Method:   string;
  Icon:     string;
  External: boolean;
}