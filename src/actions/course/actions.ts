import { CourseParams,CoursesResponse } from '@models/course/course'
import { ActionType } from '@reducers/course'
import { apiGetWithoutToken, apiPostWithoutToken, apiPutWithoutToken } from '@services/api'
import { AxiosResponse } from 'axios'
import { Dispatch } from 'react'

export const fetchCourses = () => {
  return async (dispatch: Dispatch<any>) => {
    dispatch({ type: ActionType.FETCH_COURSES_REQUEST })

    try {
      const response: AxiosResponse<CoursesResponse> = await apiGetWithoutToken(
        'https://7z35rw2w-1325.asse.devtunnels.ms/v1/apiUser/lesson/all',
        ''
      )
      const data = response.data.data

      dispatch({
        type: ActionType.FETCH_COURSES_SUCCESS,
        payload: data
      })
    } catch (error) {
      dispatch({
        type: ActionType.FETCH_COURSES_FAILURE,
        payload: 'Failed to fetch lessones'
      })
    }
  }
}

export const fetchCourse = (id: string) => {
  return async (dispatch: Dispatch<any>) => {
    dispatch({ type: ActionType.FETCH_COURSE_REQUEST })

    try {
      const response: AxiosResponse<CoursesResponse> = await apiGetWithoutToken(
        `https://7z35rw2w-1325.asse.devtunnels.ms/v1/apiUser/lesson/${id}`,
        ''
      )
      const data = response.data.data

      dispatch({
        type: ActionType.FETCH_COURSE_SUCCESS,
        payload: data
      })
    } catch (error) {
      dispatch({
        type: ActionType.FETCH_COURSE_FAILURE,
        payload: 'Failed to fetch lesson'
      })
    }
  }
}

export const postCourse = (params: CourseParams) => {
  return async (dispatch: Dispatch<any>) => {
    dispatch({ type: ActionType.POST_COURSE_REQUEST })

    try {
      const response: AxiosResponse<CoursesResponse> = await apiPostWithoutToken(
        'https://7z35rw2w-1325.asse.devtunnels.ms/v1/apiUser/lesson',
        params
      )
      const data = response.data.data

      dispatch({
        type: ActionType.POST_COURSE_SUCCESS,
        payload: data
      })
    } catch (error) {
      dispatch({
        type: ActionType.POST_COURSE_FAILURE,
        payload: 'Failed to post lesson'
      })
    }
  }
}

export const deleteCourse = (id: string) => {
  return async (dispatch: Dispatch<any>) => {
    dispatch({ type: ActionType.DELETE_COURSE_REQUEST })

    try {
      const response: AxiosResponse<CoursesResponse> = await apiGetWithoutToken(
        `https://7z35rw2w-1325.asse.devtunnels.ms/v1/apiUser/lesson/${id}`,
        ''
      )
      const data = response.data.data

      dispatch({
        type: ActionType.DELETE_COURSE_SUCCESS,
        payload: data
      })
    } catch (error) {
      dispatch({
        type: ActionType.DELETE_COURSE_FAILURE,
        payload: 'Failed to delete lesson'
      })
    }
  }
}

export const updateCourse = (id: string, params: CourseParams) => {
  return async (dispatch: Dispatch<any>) => {
    dispatch({ type: ActionType.PUT_COURSE_REQUEST })

    try {
      const response: AxiosResponse<CoursesResponse> = await apiPutWithoutToken(
        `https://7z35rw2w-1325.asse.devtunnels.ms/v1/apiUser/lesson/${id}`,
        params
      )
      const data = response.data.data

      dispatch({
        type: ActionType.PUT_COURSE_SUCCESS,
        payload: data
      })
    } catch (error) {
      dispatch({
        type: ActionType.PUT_COURSE_FAILURE,
        payload: 'Failed to put lesson'
      })
    }
  }
}
