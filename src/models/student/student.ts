// types.ts

export interface Student {
  id: number
  name: string
  age: number
  grade: string
}

export interface StudentsResponse {
  data: Student[]
  total: number
}

export interface GetStudentsParams {
  page: number
  pageSize: number
}
