


// authActions.ts
// export const authActions

import { Dispatch } from "react"
import { AuthResponse, LoginRequest } from "@models/auth/auth"
import { ActionType } from "@reducers/auth"
import { AxiosResponse } from "axios"
import { apiPostWithoutToken } from "@services/api"
import { useRouter } from "next/router"

export const authLoginPost = (params:LoginRequest) => {
  return async (dispatch: Dispatch<any>) => {
    dispatch({ type: ActionType.LOGIN_REQUEST })

    try {
      const response: AxiosResponse<AuthResponse> = await apiPostWithoutToken(
        'https://go-management-auth-school-production.up.railway.app/v1/apiAuth/auth/login',
        params
      )
      const data = response.data.data
      console.log(data)

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
