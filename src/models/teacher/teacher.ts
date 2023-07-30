export interface Teacher {
  id: string
  nik: string
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
  details: string
  rt: string
  rw: string
}

export interface TeachersResponse {
  data: Teacher[]
}

export interface TeacherResponse {
  data: Teacher
}

export interface TeachersParams {
  page: number
  pageSize: number
}
