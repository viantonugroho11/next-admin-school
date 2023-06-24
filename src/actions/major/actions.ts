import { MajorsResponse } from '@models/major/major'
import { ActionType } from '@reducers/major'
import { apiGetWithoutToken } from '@services/api'
import { AxiosResponse } from 'axios'
import { Dispatch } from 'react'

export const fecthMajor = () => {
  return async (dispatch: Dispatch<any>) => {
    dispatch({ type: ActionType.FETCH_MAJOR_REQUEST })

    try {
      const response: AxiosResponse<MajorsResponse> = await apiGetWithoutToken(
        'https://go-management-auth-school-production.up.railway.app/v1/apiUser/major/all',
        ''
      )
      const data = response.data.data

      dispatch({
        type: ActionType.FETCH_MAJOR_SUCCESS,
        payload: data
      })
    } catch (error) {
      dispatch({
        type: ActionType.FETCH_MAJOR_FAILURE,
        payload: 'Failed to fetch majors'
      })
    }
  }
}

export const postMajor = (params: any) => {
  return async (dispatch: Dispatch<any>) => {
    dispatch({ type: ActionType.POST_MAJOR_REQUEST })

    try {
      const response: AxiosResponse<MajorsResponse> = await apiGetWithoutToken(
        'https://go-management-auth-school-production.up.railway.app/v1/apiUser/major/all',
        ''
      )
      const data = response.data.data

      dispatch({
        type: ActionType.POST_MAJOR_SUCCESS,
        payload: data
      })
    } catch (error) {
      dispatch({
        type: ActionType.POST_MAJOR_FAILURE,
        payload: 'Failed to fetch majors'
      })
    }
  }
}

//put
export const putMajor = (params: any) => {
  return async (dispatch: Dispatch<any>) => {
    dispatch({ type: ActionType.PUT_MAJOR_REQUEST })

    try {
      const response: AxiosResponse<MajorsResponse> = await apiGetWithoutToken(
        'https://go-management-auth-school-production.up.railway.app/v1/apiUser/major/all',
        ''
      )
      const data = response.data.data

      dispatch({
        type: ActionType.PUT_MAJOR_SUCCESS,
        payload: data
      })
    } catch (error) {
      dispatch({
        type: ActionType.PUT_MAJOR_FAILURE,
        payload: 'Failed to fetch majors'
      })
    }
  }
}

//delete
export const deleteMajor = (params: any) => {
  return async (dispatch: Dispatch<any>) => {
    dispatch({ type: ActionType.DELETE_MAJOR_REQUEST })

    try {
      const response: AxiosResponse<MajorsResponse> = await apiGetWithoutToken(
        'https://go-management-auth-school-production.up.railway.app/v1/apiUser/major/all',
        ''
      )
      const data = response.data.data

      dispatch({
        type: ActionType.DELETE_MAJOR_SUCCESS,
        payload: data
      })
    } catch (error) {
      dispatch({
        type: ActionType.DELETE_MAJOR_FAILURE,
        payload: 'Failed to fetch majors'
      })
    }
  }
}
