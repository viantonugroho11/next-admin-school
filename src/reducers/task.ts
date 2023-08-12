import { Task } from '@models/task/task'
import { Reducer } from 'redux'

interface TaskState {
  tasks: Task[]
  loading: boolean
  error: string | null
  taks: Task
}

enum ActionType {
  FETCH_TASKS_REQUEST = 'FETCH_TASKS_REQUEST',
  FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS',
  FETCH_TASKS_FAILURE = 'FETCH_TASKS_FAILURE',
  FETCH_TASK_REQUEST = 'FETCH_TASK_REQUEST',
  FETCH_TASK_SUCCESS = 'FETCH_TASK_SUCCESS',
  FETCH_TASK_FAILURE = 'FETCH_TASK_FAILURE',
  POST_TASK_REQUEST = 'POST_TASK_REQUEST',
  POST_TASK_SUCCESS = 'POST_TASK_SUCCESS',
  POST_TASK_FAILURE = 'POST_TASK_FAILURE',
  PUT_TASK_REQUEST = 'PUT_TASK_REQUEST',
  PUT_TASK_SUCCESS = 'PUT_TASK_SUCCESS',
  PUT_TASK_FAILURE = 'PUT_TASK_FAILURE',
  DELETE_TASK_REQUEST = 'DELETE_TASK_REQUEST',
  DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS',
  DELETE_TASK_FAILURE = 'DELETE_TASK_FAILURE'
}

interface FetchTasksRequestAction {
  type: ActionType.FETCH_TASKS_REQUEST
}

interface FetchTasksSuccessAction {
  type: ActionType.FETCH_TASKS_SUCCESS
  payload: Task[]
}

interface FetchTasksFailureAction {
  type: ActionType.FETCH_TASKS_FAILURE
  payload: string
}

interface FetchTaskRequestAction {
  type: ActionType.FETCH_TASK_REQUEST
}

interface FetchTaskSuccessAction {
  type: ActionType.FETCH_TASK_SUCCESS
  payload: Task
}

interface FetchTaskFailureAction {
  type: ActionType.FETCH_TASK_FAILURE
  payload: string
}

interface PostTaskRequestAction {
  type: ActionType.POST_TASK_REQUEST
}

interface PostTaskSuccessAction {
  type: ActionType.POST_TASK_SUCCESS
  payload: Task
}

interface PostTaskFailureAction {
  type: ActionType.POST_TASK_FAILURE
  payload: string
}

interface PutTaskRequestAction {
  type: ActionType.PUT_TASK_REQUEST
}

interface PutTaskSuccessAction {
  type: ActionType.PUT_TASK_SUCCESS
  payload: Task
}

interface PutTaskFailureAction {
  type: ActionType.PUT_TASK_FAILURE
  payload: string
}

interface DeleteTaskRequestAction {
  type: ActionType.DELETE_TASK_REQUEST
}

interface DeleteTaskSuccessAction {
  type: ActionType.DELETE_TASK_SUCCESS
  payload: Task
}

interface DeleteTaskFailureAction {
  type: ActionType.DELETE_TASK_FAILURE
  payload: string
}

type TaskAction =
  | FetchTasksRequestAction
  | FetchTasksSuccessAction
  | FetchTasksFailureAction
  | FetchTaskRequestAction
  | FetchTaskSuccessAction
  | FetchTaskFailureAction
  | PostTaskRequestAction
  | PostTaskSuccessAction
  | PostTaskFailureAction
  | PutTaskRequestAction
  | PutTaskSuccessAction
  | PutTaskFailureAction
  | DeleteTaskRequestAction
  | DeleteTaskSuccessAction
  | DeleteTaskFailureAction

const initialState: TaskState = {
  tasks: [],
  loading: false,
  error: null,
  taks: {} as Task
}

const taskReducer: Reducer<TaskState, TaskAction> = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_TASKS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case ActionType.FETCH_TASKS_SUCCESS:
      return {
        ...state,
        loading: false,
        tasks: action.payload
      }
    case ActionType.FETCH_TASKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case ActionType.FETCH_TASK_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case ActionType.FETCH_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        taks: action.payload
      }
    case ActionType.FETCH_TASK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case ActionType.POST_TASK_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case ActionType.POST_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        taks: action.payload
      }
    case ActionType.POST_TASK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case ActionType.PUT_TASK_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case ActionType.PUT_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        taks: action.payload
      }
    case ActionType.PUT_TASK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case ActionType.DELETE_TASK_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case ActionType.DELETE_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        taks: action.payload
      }
    case ActionType.DELETE_TASK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export { taskReducer, ActionType }
