// studentActions.ts

import { Dispatch } from 'redux'
import { ActionType } from '@reducers/student'
import { AxiosResponse } from 'axios'
import { StudentsResponse } from '@models/student/student'
import { apiGetWithoutToken } from '@services/api'

// Fungsi untuk mengambil data student dari API
export const fetchStudents = () => {
  return async (dispatch: Dispatch<any>) => {
    dispatch({ type: ActionType.FETCH_STUDENTS_REQUEST })

    try {
      const response: AxiosResponse<StudentsResponse> = await apiGetWithoutToken(
        'https://go-management-auth-school-production.up.railway.app/v1/apiUser/student/all',
        ''
      )
      const data = response.data.data

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
