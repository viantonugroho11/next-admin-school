import { Course } from '@models/course/course'
import { Reducer } from 'redux'

interface CourseState {
  courses: Course[]
  loading: boolean
  error: string | null
  course: Course
}

enum ActionType {
  FETCH_COURSES_REQUEST = 'FETCH_COURSES_REQUEST',
  FETCH_COURSES_SUCCESS = 'FETCH_COURSES_SUCCESS',
  FETCH_COURSES_FAILURE = 'FETCH_COURSES_FAILURE',
  FETCH_COURSE_REQUEST = 'FETCH_COURSE_REQUEST',
  FETCH_COURSE_SUCCESS = 'FETCH_COURSE_SUCCESS',
  FETCH_COURSE_FAILURE = 'FETCH_COURSE_FAILURE',
  POST_COURSE_REQUEST = 'POST_COURSE_REQUEST',
  POST_COURSE_SUCCESS = 'POST_COURSE_SUCCESS',
  POST_COURSE_FAILURE = 'POST_COURSE_FAILURE',
  PUT_COURSE_REQUEST = 'PUT_COURSE_REQUEST',
  PUT_COURSE_SUCCESS = 'PUT_COURSE_SUCCESS',
  PUT_COURSE_FAILURE = 'PUT_COURSE_FAILURE',
  DELETE_COURSE_REQUEST = 'DELETE_COURSE_REQUEST',
  DELETE_COURSE_SUCCESS = 'DELETE_COURSE_SUCCESS',
  DELETE_COURSE_FAILURE = 'DELETE_COURSE_FAILURE'
}

interface FetchCoursesRequestAction {
  type: ActionType.FETCH_COURSES_REQUEST
}

interface FetchCoursesSuccessAction {
  type: ActionType.FETCH_COURSES_SUCCESS
  payload: Course[]
}

interface FetchCoursesFailureAction {
  type: ActionType.FETCH_COURSES_FAILURE
  payload: string
}

interface FetchCourseRequestAction {
  type: ActionType.FETCH_COURSE_REQUEST
}

interface FetchCourseSuccessAction {
  type: ActionType.FETCH_COURSE_SUCCESS
  payload: Course
}

interface FetchCourseFailureAction {
  type: ActionType.FETCH_COURSE_FAILURE
  payload: string
}

interface PostCourseRequestAction {
  type: ActionType.POST_COURSE_REQUEST
}

interface PostCourseSuccessAction {
  type: ActionType.POST_COURSE_SUCCESS
  payload: Course
}

interface PostCourseFailureAction {
  type: ActionType.POST_COURSE_FAILURE
  payload: string
}

interface PutCourseRequestAction {
  type: ActionType.PUT_COURSE_REQUEST
}

interface PutCourseSuccessAction {
  type: ActionType.PUT_COURSE_SUCCESS
  payload: Course
}

interface PutCourseFailureAction {
  type: ActionType.PUT_COURSE_FAILURE
  payload: string
}

interface DeleteCourseRequestAction {
  type: ActionType.DELETE_COURSE_REQUEST
}

interface DeleteCourseSuccessAction {
  type: ActionType.DELETE_COURSE_SUCCESS
  payload: Course
}

interface DeleteCourseFailureAction {
  type: ActionType.DELETE_COURSE_FAILURE
  payload: string
}

type Action =
  | FetchCoursesRequestAction
  | FetchCoursesSuccessAction
  | FetchCoursesFailureAction
  | FetchCourseRequestAction
  | FetchCourseSuccessAction
  | FetchCourseFailureAction
  | PostCourseRequestAction
  | PostCourseSuccessAction
  | PostCourseFailureAction
  | PutCourseRequestAction
  | PutCourseSuccessAction
  | PutCourseFailureAction
  | DeleteCourseRequestAction
  | DeleteCourseSuccessAction
  | DeleteCourseFailureAction

const initialState: CourseState = {
  courses: [],
  loading: false,
  error: null,
  course: {} as Course
}

const courseReducer: Reducer<CourseState, Action> = (
  state: CourseState = initialState,
  action: Action
): CourseState => {
  switch (action.type) {
    case ActionType.FETCH_COURSES_REQUEST:
      return { ...state, loading: true, error: null }
    case ActionType.FETCH_COURSES_SUCCESS:
      return { ...state, loading: false, courses: action.payload }
    case ActionType.FETCH_COURSES_FAILURE:
      return { ...state, loading: false, error: action.payload }
    case ActionType.FETCH_COURSE_REQUEST:
      return { ...state, loading: true, error: null }
    case ActionType.FETCH_COURSE_SUCCESS:
      return { ...state, loading: false, course: action.payload }
    case ActionType.FETCH_COURSE_FAILURE:
      return { ...state, loading: false, error: action.payload }
    case ActionType.POST_COURSE_REQUEST:
      return { ...state, loading: true, error: null }
    case ActionType.POST_COURSE_SUCCESS:
      return { ...state, loading: false, course: action.payload }
    case ActionType.POST_COURSE_FAILURE:
      return { ...state, loading: false, error: action.payload }
    case ActionType.PUT_COURSE_REQUEST:
      return { ...state, loading: true, error: null }
    case ActionType.PUT_COURSE_SUCCESS:
      return { ...state, loading: false, course: action.payload }
    case ActionType.PUT_COURSE_FAILURE:
      return { ...state, loading: false, error: action.payload }
    case ActionType.DELETE_COURSE_REQUEST:
      return { ...state, loading: true, error: null }
    case ActionType.DELETE_COURSE_SUCCESS:
      return { ...state, loading: false, course: action.payload }
    case ActionType.DELETE_COURSE_FAILURE:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export { courseReducer, ActionType }
