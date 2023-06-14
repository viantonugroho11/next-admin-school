// actions.ts

import { Dispatch } from 'redux'
import { getStudents } from './student.action'
import { Student, StudentsResponse, GetStudentsParams } from '@models/student/student'
import { ThunkDispatch } from 'redux-thunk'
import { State } from '@reducers/student'

// Tipe aksi
export enum ActionTypes {
  FETCH_STUDENTS_REQUEST = 'FETCH_STUDENTS_REQUEST',
  FETCH_STUDENTS_SUCCESS = 'FETCH_STUDENTS_SUCCESS',
  FETCH_STUDENTS_FAILURE = 'FETCH_STUDENTS_FAILURE'
}

// Tipe aksi Fetch Students
interface FetchStudentsRequestAction {
  type: ActionTypes.FETCH_STUDENTS_REQUEST
}

interface FetchStudentsSuccessAction {
  type: ActionTypes.FETCH_STUDENTS_SUCCESS
  payload: StudentsResponse
}

interface FetchStudentsFailureAction {
  type: ActionTypes.FETCH_STUDENTS_FAILURE;
  error: string | null;
}

// Tipe aksi gabungan
export type Action = FetchStudentsRequestAction | FetchStudentsSuccessAction | FetchStudentsFailureAction

// Aksi Fetch Students
export const fetchStudents = (params: GetStudentsParams) => {
  return async (dispatch: ThunkDispatch<State, null, Action>) => {
    dispatch({ type: ActionTypes.FETCH_STUDENTS_REQUEST })

    try {
      const students = await getStudents(params)
      const payload: StudentsResponse = {
        data: students.data,
        total: students.total
      }
      dispatch({ type: ActionTypes.FETCH_STUDENTS_SUCCESS, payload })
    } catch (error) {
      const errorMessage = 'Failed to fetch students'
      dispatch({ type: ActionTypes.FETCH_STUDENTS_FAILURE, error: errorMessage })
    }
  }
}
