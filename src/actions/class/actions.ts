import { ClassRequest, ClassesResponse } from "@models/class/class"
import { ActionType } from "@reducers/class"
import { apiGetWithoutToken, apiPostWithoutToken, apiPutWithoutToken } from "@services/api"
import { AxiosResponse } from "axios"
import { Dispatch } from "react"

export const fetchClasses = () => {
  return async (dispatch:Dispatch<any>) => {
    dispatch({type: ActionType.FETCH_CLASSES_REQUEST})

    try {
      const response: AxiosResponse<ClassesResponse> = await apiGetWithoutToken(
        'https://7z35rw2w-1325.asse.devtunnels.ms/v1/apiUser/class/all',
        ''
      )
      const data = response.data.data

      dispatch({
        type: ActionType.FETCH_CLASSES_SUCCESS,
        payload: data
      })
    } catch (error) {
      dispatch({
        type: ActionType.FETCH_CLASSES_FAILURE,
        payload: 'Failed to fetch classes'
      })
    }
  }
}

export const fetchClass = (id: string) => {
  return async (dispatch: Dispatch<any>) => {
    dispatch({ type: ActionType.FETCH_CLASS_REQUEST })

    try {
      const response: AxiosResponse<ClassesResponse> = await apiGetWithoutToken(
        `https://7z35rw2w-1325.asse.devtunnels.ms/v1/apiUser/class/${id}`,
        ''
      )
      const data = response.data.data

      dispatch({
        type: ActionType.FETCH_CLASS_SUCCESS,
        payload: data
      })
    } catch (error) {
      dispatch({
        type: ActionType.FETCH_CLASS_FAILURE,
        payload: 'Failed to fetch class'
      })
    }
  }
}

export const postClass = (params: ClassRequest) => {
  return async (dispatch: Dispatch<any>) => {
    dispatch({ type: ActionType.POST_CLASS_REQUEST })

    try {
      const response: AxiosResponse<ClassesResponse> = await apiPostWithoutToken(
        'https://7z35rw2w-1325.asse.devtunnels.ms/v1/apiUser/class',
        params
      )
      const data = response.data.data

      dispatch({
        type: ActionType.POST_CLASS_SUCCESS,
        payload: data
      })
    } catch (error) {
      dispatch({
        type: ActionType.POST_CLASS_FAILURE,
        payload: 'Failed to post class'
      })
    }
  }
}

export const deleteClass = (id: string) => {
  return async (dispatch: Dispatch<any>) => {
    dispatch({ type: ActionType.DELETE_CLASS_REQUEST })

    try {
      const response: AxiosResponse<ClassesResponse> = await apiGetWithoutToken(
        `https://7z35rw2w-1325.asse.devtunnels.ms/v1/apiUser/class/${id}`,
        ''
      )
      const data = response.data.data

      dispatch({
        type: ActionType.DELETE_CLASS_SUCCESS,
        payload: data
      })
    } catch (error) {
      dispatch({
        type: ActionType.DELETE_CLASS_FAILURE,
        payload: 'Failed to delete class'
      })
    }
  }
}

export const updateClass = (id: string, params: ClassRequest) => {
  return async (dispatch: Dispatch<any>) => {
    dispatch({ type: ActionType.PUT_CLASS_REQUEST })

    try {
      const response: AxiosResponse<ClassesResponse> = await apiPutWithoutToken(
        `https://7z35rw2w-1325.asse.devtunnels.ms/v1/apiUser/class/${id}`,
        params
      )
      const data = response.data.data

      dispatch({
        type: ActionType.PUT_CLASS_SUCCESS,
        payload: data
      })
    } catch (error) {
      dispatch({
        type: ActionType.PUT_CLASS_FAILURE,
        payload: 'Failed to put class'
      })
    }
  }
}


