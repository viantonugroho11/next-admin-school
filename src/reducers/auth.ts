import { Reducer } from 'redux'
import { Auth, ValidateJwt } from '@models/auth/auth'
import { Cookies } from 'react-cookie'

// Definisikan tipe data untuk state auth
interface AuthState {
  auth: Auth
  loading: boolean
  error: string | null
  isAuth: boolean | false
  jwt: ValidateJwt
}

enum ActionType {
  LOGIN_REQUEST = 'LOGIN_REQUEST',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILURE = 'LOGIN_FAILURE',
  LOGIN_SESSION_OUT = 'LOGIN_SESSION_OUT',
  VERIFY_JWT_REQUEST = 'VERIFY_JWT_REQUEST',
  VERIFY_JWT_SUCCESS = 'VERIFY_JWT_SUCCESS',
  VERIFY_JWT_FAILURE = 'VERIFY_JWT_FAILURE'
}

interface LoginRequestAction {
  type: ActionType.LOGIN_REQUEST
}

interface LoginSuccessAction {
  type: ActionType.LOGIN_SUCCESS
  payload: Auth
  isAuth: boolean
}

interface LoginFailureAction {
  type: ActionType.LOGIN_FAILURE
  payload: string
  isAuth: boolean
}

interface LoginSessionOutAction {
  type: ActionType.LOGIN_SESSION_OUT
  isAuth: boolean
}

interface VerifyJwtRequestAction {
  type: ActionType.VERIFY_JWT_REQUEST
}

interface VerifyJwtSuccessAction {
  type: ActionType.VERIFY_JWT_SUCCESS
  payload: ValidateJwt
}

interface VerifyJwtFailureAction {
  type: ActionType.VERIFY_JWT_FAILURE
  payload: string
  isAuth: boolean
}

type LoginAction =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailureAction
  | LoginSessionOutAction
  | VerifyJwtRequestAction
  | VerifyJwtSuccessAction
  | VerifyJwtFailureAction

const initialState: AuthState = {
  auth: {
    expired_data: '',
    status: false,
    token: '',
    expired_refresh_token: '',
    refresh_token: '',
    session_token: ''
  },
  loading: false,
  error: null,
  isAuth: false,
  jwt: {
    identityId: '',
    username: '',
    fullname: '',
    email: '',
    phone: '',
    permissions: '',
    isActive: false,
    expiredAt: ''
  }
}
const cookies = new Cookies()

const authReducer: Reducer<AuthState, LoginAction> = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case ActionType.LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token)
      cookies.set('token', action.payload.token, {})
      return {
        ...state,
        auth: action.payload,
        loading: false,
        error: null,
        isAuth: true
      }
    case ActionType.LOGIN_FAILURE:
      return {
        ...state,
        auth: {
          expired_data: '',
          status: false,
          token: '',
          expired_refresh_token: '',
          refresh_token: '',
          session_token: ''
        },
        loading: false,
        error: action.payload,
        isAuth: false
      }
    case ActionType.LOGIN_SESSION_OUT:
      return {
        ...state,
        auth: {
          expired_data: '',
          status: false,
          token: '',
          expired_refresh_token: '',
          refresh_token: '',
          session_token: ''
        },
        loading: false,
        error: null,
        isAuth: false
      }
    case ActionType.VERIFY_JWT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case ActionType.VERIFY_JWT_SUCCESS:
      return {
        ...state,
        jwt: action.payload,
        loading: false,
        error: null
      }
    case ActionType.VERIFY_JWT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        isAuth: false
      }
    default:
      return state
  }
}

export { authReducer, ActionType }
