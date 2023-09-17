// authActions.ts
// export const authActions

import { Dispatch } from 'react'
import { AuthResponse, LoginRequest } from '@models/auth/auth'
import { ActionType } from '@reducers/auth'
import { AxiosResponse } from 'axios'
import { apiGetWithToken, apiPostWithoutToken } from '@services/api'



export const authLoginPost = (params: LoginRequest) => {
  return async (dispatch: Dispatch<any>) => {
    dispatch({ type: ActionType.LOGIN_REQUEST })

    try {
      const response: AxiosResponse<AuthResponse> = await apiPostWithoutToken(
        'https://7z35rw2w-1325.asse.devtunnels.ms/v1/apiAuth/auth/login',
        params
      )
      const data = response.data.data

      dispatch({
        type: ActionType.LOGIN_SUCCESS,
        payload: data
      })
    } catch (error) {
      dispatch({
        type: ActionType.LOGIN_FAILURE,
        payload: 'Failed to login'
      })
    }
  }
}

export const authVerifyToken = () => {
  return async (dispatch: Dispatch<any>) => {
    dispatch({ type: ActionType.VERIFY_JWT_REQUEST })

    try {
      const response: AxiosResponse<AuthResponse> = await apiGetWithToken(
        'https://7z35rw2w-1325.asse.devtunnels.ms/v1/apiAuth/auth/validate',
        ''
      )
      const data = response.data.data

      dispatch({
        type: ActionType.VERIFY_JWT_SUCCESS,
        payload: data
      })
    } catch (error) {
      dispatch({
        type: ActionType.VERIFY_JWT_FAILURE,
        payload: 'Failed to login'
      })
    }
  }
}
