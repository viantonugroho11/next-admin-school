import { Teacher } from '@models/teacher/teacher'
import { Reducer } from 'redux'

interface TeacherState {
  teachers: Teacher[]
  loading: boolean
  error: string | null
  teacher: Teacher
}

enum ActionType {
  FETCH_TEACHERS_REQUEST = 'FETCH_TEACHERS_REQUEST',
  FETCH_TEACHERS_SUCCESS = 'FETCH_TEACHERS_SUCCESS',
  FETCH_TEACHERS_FAILURE = 'FETCH_TEACHERS_FAILURE',
  FETCH_TEACHER_REQUEST = 'FETCH_TEACHER_REQUEST',
  FETCH_TEACHER_SUCCESS = 'FETCH_TEACHER_SUCCESS',
  FETCH_TEACHER_FAILURE = 'FETCH_TEACHER_FAILURE',
  POST_TEACHER_REQUEST = 'POST_TEACHER_REQUEST',
  POST_TEACHER_SUCCESS = 'POST_TEACHER_SUCCESS',
  POST_TEACHER_FAILURE = 'POST_TEACHER_FAILURE',
  PUT_TEACHER_REQUEST = 'PUT_TEACHER_REQUEST',
  PUT_TEACHER_SUCCESS = 'PUT_TEACHER_SUCCESS',
  PUT_TEACHER_FAILURE = 'PUT_TEACHER_FAILURE',
  DELETE_TEACHER_REQUEST = 'DELETE_TEACHER_REQUEST',
  DELETE_TEACHER_SUCCESS = 'DELETE_TEACHER_SUCCESS',
  DELETE_TEACHER_FAILURE = 'DELETE_TEACHER_FAILURE'
}

interface FetchTeachersRequestAction {
  type: ActionType.FETCH_TEACHERS_REQUEST
}

interface FetchTeachersSuccessAction {
  type: ActionType.FETCH_TEACHERS_SUCCESS
  payload: Teacher[]
}

interface FetchTeachersFailureAction {
  type: ActionType.FETCH_TEACHERS_FAILURE
  payload: string
}

interface FetchTeacherRequestAction {
  type: ActionType.FETCH_TEACHER_REQUEST
}

interface FetchTeacherSuccessAction {
  type: ActionType.FETCH_TEACHER_SUCCESS
  payload: Teacher
}

interface FetchTeacherFailureAction {
  type: ActionType.FETCH_TEACHER_FAILURE
  payload: string
}

interface PostTeacherRequestAction {
  type: ActionType.POST_TEACHER_REQUEST
}

interface PostTeacherSuccessAction {
  type: ActionType.POST_TEACHER_SUCCESS
  payload: Teacher
}

interface PostTeacherFailureAction {
  type: ActionType.POST_TEACHER_FAILURE
  payload: string
}

interface PutTeacherRequestAction {
  type: ActionType.PUT_TEACHER_REQUEST
}

interface PutTeacherSuccessAction {
  type: ActionType.PUT_TEACHER_SUCCESS
  payload: Teacher
}

interface PutTeacherFailureAction {
  type: ActionType.PUT_TEACHER_FAILURE
  payload: string
}

interface DeleteTeacherRequestAction {
  type: ActionType.DELETE_TEACHER_REQUEST
}

interface DeleteTeacherSuccessAction {
  type: ActionType.DELETE_TEACHER_SUCCESS
  payload: Teacher
}

interface DeleteTeacherFailureAction {
  type: ActionType.DELETE_TEACHER_FAILURE
  payload: string
}

type TeacherAction =
  | FetchTeachersRequestAction
  | FetchTeachersSuccessAction
  | FetchTeachersFailureAction
  | FetchTeacherRequestAction
  | FetchTeacherSuccessAction
  | FetchTeacherFailureAction
  | PostTeacherRequestAction
  | PostTeacherSuccessAction
  | PostTeacherFailureAction
  | PutTeacherRequestAction
  | PutTeacherSuccessAction
  | PutTeacherFailureAction
  | DeleteTeacherRequestAction
  | DeleteTeacherSuccessAction
  | DeleteTeacherFailureAction

const initialState: TeacherState = {
  teachers: [],
  loading: false,
  error: null,
  teacher: {} as Teacher
}

const teacherReducer: Reducer<TeacherState, TeacherAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ActionType.FETCH_TEACHERS_REQUEST:
      return { ...state, loading: true }
    case ActionType.FETCH_TEACHERS_SUCCESS:
      return { ...state, loading: false, teachers: action.payload }
    case ActionType.FETCH_TEACHERS_FAILURE:
      return { ...state, loading: false, error: action.payload }
    case ActionType.FETCH_TEACHER_REQUEST:
      return { ...state, loading: true }
    case ActionType.FETCH_TEACHER_SUCCESS:
      return { ...state, loading: false, teacher: action.payload }
    case ActionType.FETCH_TEACHER_FAILURE:
      return { ...state, loading: false, error: action.payload }
    case ActionType.POST_TEACHER_REQUEST:
      return { ...state, loading: true }
    case ActionType.POST_TEACHER_SUCCESS:
      return { ...state, loading: false, teachers: [...state.teachers, action.payload] }
    case ActionType.POST_TEACHER_FAILURE:
      return { ...state, loading: false, error: action.payload }
    case ActionType.PUT_TEACHER_REQUEST:
      return { ...state, loading: true }
    case ActionType.PUT_TEACHER_SUCCESS:
      return { ...state, loading: false, teachers: [...state.teachers.filter(teacher => teacher.id !== action.payload.id), action.payload] }
    case ActionType.PUT_TEACHER_FAILURE:
      return { ...state, loading: false, error: action.payload }
    case ActionType.DELETE_TEACHER_REQUEST:
      return { ...state, loading: true }
    case ActionType.DELETE_TEACHER_SUCCESS:
      return { ...state, loading: false, teachers: state.teachers.filter(teacher => teacher.id !== action.payload.id) }
    case ActionType.DELETE_TEACHER_FAILURE:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export { teacherReducer, ActionType }
