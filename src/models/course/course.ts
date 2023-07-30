export interface Course {
  id: string
  name: string
  type: number
}

export interface CoursesResponse {
  data: Course[]
}

export interface CourseResponse {
  data: Course
}

export interface CourseParams {
  name: string
  type: number
}
