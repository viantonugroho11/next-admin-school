import { Reducer } from 'redux'

// Definisikan tipe data untuk class
import { MClass } from '@models/class/class'

// Definisikan tipe data untuk state
interface ClassState {
  classes: MClass[]
  loading: boolean
  error: string | null
}

// Definisikan action types
enum ActionType {
  FETCH_CLASSES_REQUEST = 'FETCH_CLASSES_REQUEST',
  FETCH_CLASSES_SUCCESS = 'FETCH_CLASSES_SUCCESS',
  FETCH_CLASSES_FAILURE = 'FETCH_CLASSES_FAILURE',
  FETCH_CLASS_REQUEST = 'FETCH_CLASS_REQUEST',
  FETCH_CLASS_SUCCESS = 'FETCH_CLASS_SUCCESS',
  FETCH_CLASS_FAILURE = 'FETCH_CLASS_FAILURE',
  POST_CLASS_REQUEST = 'POST_CLASS_REQUEST',
  POST_CLASS_SUCCESS = 'POST_CLASS_SUCCESS',
  POST_CLASS_FAILURE = 'POST_CLASS_FAILURE',
  PUT_CLASS_REQUEST = 'PUT_CLASS_REQUEST',
  PUT_CLASS_SUCCESS = 'PUT_CLASS_SUCCESS',
  PUT_CLASS_FAILURE = 'PUT_CLASS_FAILURE',
  DELETE_CLASS_REQUEST = 'DELETE_CLASS_REQUEST',
  DELETE_CLASS_SUCCESS = 'DELETE_CLASS_SUCCESS',
  DELETE_CLASS_FAILURE = 'DELETE_CLASS_FAILURE'
}

interface FetchClassesRequestAction {
  type: ActionType.FETCH_CLASSES_REQUEST
}

interface FetchClassesSuccessAction {
  type: ActionType.FETCH_CLASSES_SUCCESS
  payload: MClass[]
}

interface FetchClassesFailureAction {
  type: ActionType.FETCH_CLASSES_FAILURE
  payload: string
}

interface FetchClassRequestAction {
  type: ActionType.FETCH_CLASS_REQUEST
}

interface FetchClassSuccessAction {
  type: ActionType.FETCH_CLASS_SUCCESS
  payload: MClass
}

interface FetchClassFailureAction {
  type: ActionType.FETCH_CLASS_FAILURE
  payload: string
}

interface PostClassRequestAction {
  type: ActionType.POST_CLASS_REQUEST
}

interface PostClassSuccessAction {
  type: ActionType.POST_CLASS_SUCCESS
  payload: MClass
}

interface PostClassFailureAction {
  type: ActionType.POST_CLASS_FAILURE
  payload: string
}

interface PutClassRequestAction {
  type: ActionType.PUT_CLASS_REQUEST
}

interface PutClassSuccessAction {
  type: ActionType.PUT_CLASS_SUCCESS
  payload: MClass
}

interface PutClassFailureAction {
  type: ActionType.PUT_CLASS_FAILURE
  payload: string
}

interface DeleteClassRequestAction {
  type: ActionType.DELETE_CLASS_REQUEST
}

interface DeleteClassSuccessAction {
  type: ActionType.DELETE_CLASS_SUCCESS
  payload: MClass
}

interface DeleteClassFailureAction {
  type: ActionType.DELETE_CLASS_FAILURE
  payload: string
}

type ClassAction =
  | FetchClassesRequestAction
  | FetchClassesSuccessAction
  | FetchClassesFailureAction
  | FetchClassRequestAction
  | FetchClassSuccessAction
  | FetchClassFailureAction
  | PostClassRequestAction
  | PostClassSuccessAction
  | PostClassFailureAction
  | PutClassRequestAction
  | PutClassSuccessAction
  | PutClassFailureAction
  | DeleteClassRequestAction
  | DeleteClassSuccessAction
  | DeleteClassFailureAction
// Inisialisasi state awal
const initialState: ClassState = {
  classes: [],
  loading: false,
  error: null
}

// Definisikan reducer class
const classReducer: Reducer<ClassState, ClassAction> = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_CLASSES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case ActionType.FETCH_CLASSES_SUCCESS:
      return {
        ...state,
        loading: false,
        classes: action.payload
      }
    case ActionType.FETCH_CLASSES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case ActionType.FETCH_CLASS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case ActionType.FETCH_CLASS_SUCCESS:
      return {
        ...state,
        loading: false,
        classes: [...state.classes, action.payload]
      }
    case ActionType.FETCH_CLASS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case ActionType.POST_CLASS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case ActionType.POST_CLASS_SUCCESS:
      return {
        ...state,
        loading: false,
        classes: [...state.classes, action.payload]
      }
    case ActionType.POST_CLASS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case ActionType.PUT_CLASS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case ActionType.PUT_CLASS_SUCCESS:
      return {
        ...state,
        loading: false,
        classes: state.classes.map(c => (c.id === action.payload.id ? action.payload : c))
      }
    case ActionType.PUT_CLASS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case ActionType.DELETE_CLASS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case ActionType.DELETE_CLASS_SUCCESS:
      return {
        ...state,
        loading: false,
        classes: state.classes.filter(c => c.id !== action.payload.id)
      }
    case ActionType.DELETE_CLASS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}
export { classReducer, ActionType }
