import axios, { AxiosResponse } from 'axios'
import { GetStudentsParams, StudentsResponse } from '@models/student/student'

export const getStudents = async (params: GetStudentsParams): Promise<StudentsResponse> => {
  try {
    const response: AxiosResponse<StudentsResponse> = await axios.get('/api/students', {
      params
    })
    return response.data
  } catch (error) {
    throw new Error('Failed to fetch students')
  }
}
