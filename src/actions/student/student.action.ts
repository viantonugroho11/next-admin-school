import axios, { AxiosResponse } from 'axios'
import { GetStudentsParams, StudentsResponse } from '@models/student/student'

export const getStudents = async (): Promise<StudentsResponse> => {
  try {
    const response: AxiosResponse<StudentsResponse> = await axios.get(
      'go-management-auth-school-production.up.railway.app/v1/apiUser/student',
      {

      }
    )
    return response.data
  } catch (error) {
    throw new Error('Failed to fetch students')
  }
}
