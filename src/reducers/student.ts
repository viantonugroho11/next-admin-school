// reducers.ts

import { ActionTypes, Action } from '@actions/student/actions'
import { StudentsResponse } from '@models/student/student'

// Tipe State
export interface State {
  students: StudentsResponse | null
  loading: boolean
  error: string | null
}

// State awal
const initialState: State = {
  students: null,
  loading: false,
  error: null
}

// Reducer
export const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.FETCH_STUDENTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case ActionTypes.FETCH_STUDENTS_SUCCESS:
      return {
        ...state,
        students: action.payload,
        loading: false,
        error: null
      }
    case ActionTypes.FETCH_STUDENTS_FAILURE:
      return {
        ...state,
        students: null,
        loading: false,
        error: action.error
      }
    default:
      return state
  }
}
