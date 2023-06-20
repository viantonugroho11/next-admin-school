import { Reducer } from 'redux'
import { Auth } from '@models/auth/auth'

// Definisikan tipe data untuk state auth
interface AuthState {
  auth: Auth
  loading: boolean
  error: string | null
  isAuth: boolean | false
}

enum ActionType {
  LOGIN_REQUEST = 'LOGIN_REQUEST',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILURE = 'LOGIN_FAILURE',
  LOGIN_SESSION_OUT = 'LOGIN_SESSION_OUT'
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

type LoginAction = LoginRequestAction | LoginSuccessAction | LoginFailureAction | LoginSessionOutAction

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
  isAuth: false
}

const authReducer: Reducer<AuthState, LoginAction> = (
  state = initialState,
  action
  ) => {
  switch (action.type) {
    case ActionType.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case ActionType.LOGIN_SUCCESS:
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
    default:
      return state
  }
}

export { authReducer, ActionType }
