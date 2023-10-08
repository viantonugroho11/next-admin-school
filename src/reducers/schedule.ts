import { MappingCourse } from "@models/mapping/mapCourse/mappingCourse";
import { Reducer } from 'redux'

interface MappingCourseState {
  mappingCourses: MappingCourse[]
  loading: boolean
  error: string | null
  mappingCourse: MappingCourse
}

enum ActionType {
  FETCH_MAPPING_COURSES_REQUEST = 'FETCH_MAPPING_COURSES_REQUEST',
  FETCH_MAPPING_COURSES_SUCCESS = 'FETCH_MAPPING_COURSES_SUCCESS',
  FETCH_MAPPING_COURSES_FAILURE = 'FETCH_MAPPING_COURSES_FAILURE',
  FETCH_MAPPING_COURSE_REQUEST = 'FETCH_MAPPING_COURSE_REQUEST',
  FETCH_MAPPING_COURSE_SUCCESS = 'FETCH_MAPPING_COURSE_SUCCESS',
  FETCH_MAPPING_COURSE_FAILURE = 'FETCH_MAPPING_COURSE_FAILURE',
  POST_MAPPING_COURSE_REQUEST = 'POST_MAPPING_COURSE_REQUEST',
  POST_MAPPING_COURSE_SUCCESS = 'POST_MAPPING_COURSE_SUCCESS',
  POST_MAPPING_COURSE_FAILURE = 'POST_MAPPING_COURSE_FAILURE',
  PUT_MAPPING_COURSE_REQUEST = 'PUT_MAPPING_COURSE_REQUEST',
  PUT_MAPPING_COURSE_SUCCESS = 'PUT_MAPPING_COURSE_SUCCESS',
  PUT_MAPPING_COURSE_FAILURE = 'PUT_MAPPING_COURSE_FAILURE',
  DELETE_MAPPING_COURSE_REQUEST = 'DELETE_MAPPING_COURSE_REQUEST',
  DELETE_MAPPING_COURSE_SUCCESS = 'DELETE_MAPPING_COURSE_SUCCESS',
  DELETE_MAPPING_COURSE_FAILURE = 'DELETE_MAPPING_COURSE_FAILURE'
}

interface FetchMappingCoursesRequestAction {
  type: ActionType.FETCH_MAPPING_COURSES_REQUEST
}

interface FetchMappingCoursesSuccessAction {
  type: ActionType.FETCH_MAPPING_COURSES_SUCCESS
  payload: MappingCourse[]
}

interface FetchMappingCoursesFailureAction {
  type: ActionType.FETCH_MAPPING_COURSES_FAILURE
  payload: string
}

interface FetchMappingCourseRequestAction {
  type: ActionType.FETCH_MAPPING_COURSE_REQUEST
}

interface FetchMappingCourseSuccessAction {
  type: ActionType.FETCH_MAPPING_COURSE_SUCCESS
  payload: MappingCourse
}

interface FetchMappingCourseFailureAction {
  type: ActionType.FETCH_MAPPING_COURSE_FAILURE
  payload: string
}

interface PostMappingCourseRequestAction {
  type: ActionType.POST_MAPPING_COURSE_REQUEST
}

interface PostMappingCourseSuccessAction {
  type: ActionType.POST_MAPPING_COURSE_SUCCESS
  payload: MappingCourse
}

interface PostMappingCourseFailureAction {
  type: ActionType.POST_MAPPING_COURSE_FAILURE
  payload: string
}

interface PutMappingCourseRequestAction {
  type: ActionType.PUT_MAPPING_COURSE_REQUEST
}

interface PutMappingCourseSuccessAction {
  type: ActionType.PUT_MAPPING_COURSE_SUCCESS
  payload: MappingCourse
}

interface PutMappingCourseFailureAction {
  type: ActionType.PUT_MAPPING_COURSE_FAILURE
  payload: string
}

interface DeleteMappingCourseRequestAction {
  type: ActionType.DELETE_MAPPING_COURSE_REQUEST
}

interface DeleteMappingCourseSuccessAction {
  type: ActionType.DELETE_MAPPING_COURSE_SUCCESS
  payload: MappingCourse
}

interface DeleteMappingCourseFailureAction {
  type: ActionType.DELETE_MAPPING_COURSE_FAILURE
  payload: string
}

type Action =
  | FetchMappingCoursesRequestAction
  | FetchMappingCoursesSuccessAction
  | FetchMappingCoursesFailureAction
  | FetchMappingCourseRequestAction
  | FetchMappingCourseSuccessAction
  | FetchMappingCourseFailureAction
  | PostMappingCourseRequestAction
  | PostMappingCourseSuccessAction
  | PostMappingCourseFailureAction
  | PutMappingCourseRequestAction
  | PutMappingCourseSuccessAction
  | PutMappingCourseFailureAction
  | DeleteMappingCourseRequestAction
  | DeleteMappingCourseSuccessAction
  | DeleteMappingCourseFailureAction

const initialState: MappingCourseState = {
  mappingCourses: [],
  loading: false,
  error: null,
  mappingCourse: {} as MappingCourse,
}

const scheduleReducer: Reducer<MappingCourseState, Action> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ActionType.FETCH_MAPPING_COURSES_REQUEST:
      return { ...state, loading: true }
    case ActionType.FETCH_MAPPING_COURSES_SUCCESS:
      return { ...state, loading: false, mappingCourses: action.payload }
    case ActionType.FETCH_MAPPING_COURSES_FAILURE:
      return { ...state, loading: false, error: action.payload }
    case ActionType.FETCH_MAPPING_COURSE_REQUEST:
      return { ...state, loading: true }
    case ActionType.FETCH_MAPPING_COURSE_SUCCESS:
      return { ...state, loading: false, mappingCourse: action.payload }
    case ActionType.FETCH_MAPPING_COURSE_FAILURE:
      return { ...state, loading: false, error: action.payload }
    case ActionType.POST_MAPPING_COURSE_REQUEST:
      return { ...state, loading: true }
    case ActionType.POST_MAPPING_COURSE_SUCCESS:
      return { ...state, loading: false, mappingCourse: action.payload }
    case ActionType.POST_MAPPING_COURSE_FAILURE:
      return { ...state, loading: false, error: action.payload }
    case ActionType.PUT_MAPPING_COURSE_REQUEST:
      return { ...state, loading: true }
    case ActionType.PUT_MAPPING_COURSE_SUCCESS:
      return { ...state, loading: false, mappingCourse: action.payload }
    case ActionType.PUT_MAPPING_COURSE_FAILURE:
      return { ...state, loading: false, error: action.payload }
    case ActionType.DELETE_MAPPING_COURSE_REQUEST:
      return { ...state, loading: true }
    case ActionType.DELETE_MAPPING_COURSE_SUCCESS:
      return { ...state, loading: false, mappingCourse: action.payload }
    case ActionType.DELETE_MAPPING_COURSE_FAILURE:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export {scheduleReducer, ActionType}

