// types.ts

export interface Student {
  id: string
  nik: string
  nisn: string
  full_name: string
  first_name: string
  last_name: string
  email: string
  place_of_birth: string
  date_of_birth: string
  phone: string
  gender: string
  religion: string
  image: string
  status: string
  is_active: string
  address: string
  height: string
  weight: string
  blood_type: string
  disability: string
  disability_info: string
  details: string
  rt: string
  rw: string
}

export interface StudentsResponse {
  data: Student[]
}

export interface GetStudentsParams {
  page: number
  pageSize: number
}
