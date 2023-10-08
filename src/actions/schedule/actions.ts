import { MappingCourseParams,MappingCoursesResponse } from '@models/mapping/mapCourse/mappingCourse'
import { ActionType } from '@reducers/schedule'
import { apiGetWithoutToken, apiPostWithoutToken, apiPutWithoutToken } from '@services/api'
import { AxiosResponse } from 'axios'
import { Dispatch } from 'react'

export const fetchMappingCourses = () => {
  return async (dispatch: Dispatch<any>) => {
    dispatch({ type: ActionType.FETCH_MAPPING_COURSES_REQUEST })
  
    try {
      const response: AxiosResponse<MappingCoursesResponse> = await apiGetWithoutToken(
        'https://7z35rw2w-1325.asse.devtunnels.ms/v1/apiUser/mappingCourse/all',
        ''
      )
      const data = response.data.data
  
      dispatch({
        type: ActionType.FETCH_MAPPING_COURSES_SUCCESS,
        payload: data
      })
    } catch (error) {
      dispatch({
        type: ActionType.FETCH_MAPPING_COURSES_FAILURE,
        payload: 'Failed to fetch mappingCourses'
      })
    }
  }
}

// update mapping course
export const updateMappingCourse = (params: MappingCourseParams) => {
  return async (dispatch: Dispatch<any>) => {
    dispatch({ type: ActionType.PUT_MAPPING_COURSE_REQUEST })
  
    try {
      const response: AxiosResponse<MappingCoursesResponse> = await apiPutWithoutToken(
        'https://7z35rw2w-1325.asse.devtunnels.ms/v1/apiUser/mappingCourse',
        params
      )
      const data = response.data.data
  
      dispatch({
        type: ActionType.PUT_MAPPING_COURSE_SUCCESS,
        payload: data
      })
    }
    catch (error) {
      dispatch({
        type: ActionType.PUT_MAPPING_COURSE_FAILURE,
        payload: 'Failed to update mapping course'
      })
    }
  }
}

// create mapping course
export const createMappingCourse = (params: MappingCourseParams) => {
  return async (dispatch: Dispatch<any>) => {
    dispatch({ type: ActionType.POST_MAPPING_COURSE_REQUEST })

    try {
      const response: AxiosResponse<MappingCoursesResponse> = await apiPostWithoutToken(
        'https://7z35rw2w-1325.asse.devtunnels.ms/v1/apiUser/mappingCourse',
        params
      )
      const data = response.data.data

      dispatch({
        type: ActionType.POST_MAPPING_COURSE_SUCCESS,
        payload: data
      })
    } catch (error) {
      dispatch({
        type: ActionType.POST_MAPPING_COURSE_FAILURE,
        payload: 'Failed to create mapping course'
      })
    }
  }
}


