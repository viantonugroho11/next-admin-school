// // actions.ts
// import { Dispatch, AnyAction } from 'redux'
// import { getStudents } from './student.action'
// import { Student, StudentsResponse, GetStudentsParams } from '@models/student/student'
// import { ThunkDispatch } from 'redux-thunk'
// import { ThunkAction } from 'redux-thunk'
// import { State } from '@reducers/student'

// // Tipe aksi
// export enum ActionTypes {
//   FETCH_STUDENTS_REQUEST = 'FETCH_STUDENTS_REQUEST',
//   FETCH_STUDENTS_SUCCESS = 'FETCH_STUDENTS_SUCCESS',
//   FETCH_STUDENTS_FAILURE = 'FETCH_STUDENTS_FAILURE'
// }

// // Tipe aksi Fetch Students
// interface FetchStudentsRequestAction {
//   type: ActionTypes.FETCH_STUDENTS_REQUEST
// }

// interface FetchStudentsSuccessAction {
//   type: ActionTypes.FETCH_STUDENTS_SUCCESS
//   payload: StudentsResponse
// }

// interface FetchStudentsFailureAction {
//   type: ActionTypes.FETCH_STUDENTS_FAILURE;
//   error: string | null;
// }

// // Tipe aksi gabungan
// export type Action = FetchStudentsRequestAction | FetchStudentsSuccessAction | FetchStudentsFailureAction

// // Aksi Fetch Students
// // Fungsi untuk mengambil data student dari API
// export const fetchStudents = () => {
//   return async (dispatch: Dispatch) => {
//     dispatch({ type: ActionTypes.FETCH_STUDENTS_REQUEST });

//     try {
//       const response = await fetch('https://api.example.com/students');
//       const data = await response.json();

//       dispatch({
//         type: ActionTypes.FETCH_STUDENTS_SUCCESS,
//         payload: data,
//       });
//     } catch (error) {
//       dispatch({
//         type: ActionTypes.FETCH_STUDENTS_FAILURE,
//         payload: 'Failed to fetch students',
//       });
//     }
//   };
// };


// studentActions.ts

import { AnyAction, Dispatch } from 'redux'
import { ActionType } from '@reducers/student'
import axios, { AxiosResponse } from 'axios'
import { StudentsResponse } from '@models/student/student'

// Fungsi untuk mengambil data student dari API
export const fetchStudents = () => {
  return async (dispatch: Dispatch) =>{
    dispatch({ type: ActionType.FETCH_STUDENTS_REQUEST })

    try {
      const response: AxiosResponse<StudentsResponse> = await axios.get(
        'https://go-management-auth-school-production.up.railway.app/v1/apiUser/student/all',
        {}
      )
      const data = response.data.data

      console.log('datanih', data)

      dispatch({
        type: ActionType.FETCH_STUDENTS_SUCCESS,
        payload: data
      })
    } catch (error) {
      dispatch({
        type: ActionType.FETCH_STUDENTS_FAILURE,
        payload: 'Failed to fetch students'
      })
    }
  }
}

// import { ThunkAction, ThunkDispatch } from 'redux-thunk'
// import { AnyAction } from 'redux'
// import { RootState } from '@reducers/store'
// import { ActionType } from '@reducers/student'
// import axios, { AxiosResponse } from 'axios'
// import { Dispatch } from 'react'
// import { StudentsResponse } from '@models/student/student'

// export const fetchStudents = (): ThunkAction<void, RootState, null, AnyAction> => {
//   return async (dispatch: ThunkDispatch<RootState, null, AnyAction>) => {
//     dispatch({ type: ActionType.FETCH_STUDENTS_REQUEST })

//     try {
//       const response: AxiosResponse<StudentsResponse> = await axios.get(
//         'http://go-management-auth-school-production.up.railway.app/v1/apiUser/student/all',
//         {}
//       )
//       const data = response.data.data

//       console.log('datanih', data)

//       dispatch({
//         type: ActionType.FETCH_STUDENTS_SUCCESS,
//         payload: data
//       })
//     } catch (error) {
//       dispatch({
//         type: ActionType.FETCH_STUDENTS_FAILURE,
//         payload: 'Failed to fetch students'
//       })
//     }
//   }
// }

