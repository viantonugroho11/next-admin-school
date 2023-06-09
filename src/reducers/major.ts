import { Major } from '@models/major/major'
import { Reducer } from 'redux'

// Definisikan tipe data untuk state
interface MajorState {
  majors: Major[]
  loading: boolean
  error: string | null
  major: Major
}

// Definisikan action types
enum ActionType {
  FETCH_MAJORS_REQUEST = 'FETCH_MAJORS_REQUEST',
  FETCH_MAJORS_SUCCESS = 'FETCH_MAJORS_SUCCESS',
  FETCH_MAJORS_FAILURE = 'FETCH_MAJORS_FAILURE',
  FETCH_MAJOR_REQUEST = 'FETCH_MAJOR_REQUEST',
  FETCH_MAJOR_SUCCESS = 'FETCH_MAJOR_SUCCESS',
  FETCH_MAJOR_FAILURE = 'FETCH_MAJOR_FAILURE',
  POST_MAJOR_REQUEST = 'POST_MAJOR_REQUEST',
  POST_MAJOR_SUCCESS = 'POST_MAJOR_SUCCESS',
  POST_MAJOR_FAILURE = 'POST_MAJOR_FAILURE',
  PUT_MAJOR_REQUEST = 'PUT_MAJOR_REQUEST',
  PUT_MAJOR_SUCCESS = 'PUT_MAJOR_SUCCESS',
  PUT_MAJOR_FAILURE = 'PUT_MAJOR_FAILURE',
  DELETE_MAJOR_REQUEST = 'DELETE_MAJOR_REQUEST',
  DELETE_MAJOR_SUCCESS = 'DELETE_MAJOR_SUCCESS',
  DELETE_MAJOR_FAILURE = 'DELETE_MAJOR_FAILURE'
}

interface FetchMajoresRequestAction {
  type: ActionType.FETCH_MAJORS_REQUEST
}

interface FetchMajoresSuccessAction {
  type: ActionType.FETCH_MAJORS_SUCCESS
  payload: Major[]
}

interface FetchMajoresFailureAction {
  type: ActionType.FETCH_MAJORS_FAILURE
  payload: string
}

interface FetchMajorRequestAction {
  type: ActionType.FETCH_MAJOR_REQUEST
}

interface FetchMajorSuccessAction {
  type: ActionType.FETCH_MAJOR_SUCCESS
  payload: Major
}

interface FetchMajorFailureAction {
  type: ActionType.FETCH_MAJOR_FAILURE
  payload: string
}

interface PostMajorRequestAction {
  type: ActionType.POST_MAJOR_REQUEST
}

interface PostMajorSuccessAction {
  type: ActionType.POST_MAJOR_SUCCESS
  payload: Major
}

interface PostMajorFailureAction {
  type: ActionType.POST_MAJOR_FAILURE
  payload: string
}

interface PutMajorRequestAction {
  type: ActionType.PUT_MAJOR_REQUEST
}

interface PutMajorSuccessAction {
  type: ActionType.PUT_MAJOR_SUCCESS
  payload: Major
}

interface PutMajorFailureAction {
  type: ActionType.PUT_MAJOR_FAILURE
  payload: string
}

interface DeleteMajorRequestAction {
  type: ActionType.DELETE_MAJOR_REQUEST
}

interface DeleteMajorSuccessAction {
  type: ActionType.DELETE_MAJOR_SUCCESS
  payload: Major
}

interface DeleteMajorFailureAction {
  type: ActionType.DELETE_MAJOR_FAILURE
  payload: string
}

type MajorAction =
  | FetchMajoresRequestAction
  | FetchMajoresSuccessAction
  | FetchMajoresFailureAction
  | FetchMajorRequestAction
  | FetchMajorSuccessAction
  | FetchMajorFailureAction
  | PostMajorRequestAction
  | PostMajorSuccessAction
  | PostMajorFailureAction
  | PutMajorRequestAction
  | PutMajorSuccessAction
  | PutMajorFailureAction
  | DeleteMajorRequestAction
  | DeleteMajorSuccessAction
  | DeleteMajorFailureAction
// Inisialisasi state awal
const initialState: MajorState = {
  majors: [],
  loading: false,
  error: null,
  major: {
    id: 0,
    name: ''
  }
}

// Definisikan reducer major
const majorReducer: Reducer<MajorState, MajorAction> = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_MAJORS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case ActionType.FETCH_MAJORS_SUCCESS:
      return {
        ...state,
        loading: false,
        majors: action.payload
      }
    case ActionType.FETCH_MAJORS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case ActionType.FETCH_MAJOR_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case ActionType.FETCH_MAJOR_SUCCESS:
      return {
        ...state,
        loading: false,
        major: action.payload
      }
    case ActionType.FETCH_MAJOR_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case ActionType.POST_MAJOR_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case ActionType.POST_MAJOR_SUCCESS:
      return {
        ...state,
        loading: false,
        major: action.payload
      }
    case ActionType.POST_MAJOR_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case ActionType.PUT_MAJOR_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case ActionType.PUT_MAJOR_SUCCESS:
      return {
        ...state,
        loading: false,
        majors: state.majors.map(c => (c.id === action.payload.id ? action.payload : c)),
        major: action.payload
      }
    case ActionType.PUT_MAJOR_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case ActionType.DELETE_MAJOR_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case ActionType.DELETE_MAJOR_SUCCESS:
      return {
        ...state,
        loading: false,
        majors: state.majors.filter(c => c.id !== action.payload.id),
        major: action.payload
      }
    case ActionType.DELETE_MAJOR_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}
export { majorReducer, ActionType }
