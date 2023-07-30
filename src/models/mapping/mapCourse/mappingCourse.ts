export interface MappingCourse {
  id: string
  course_id: string
  teacher_id: string
  major_id: string
  class_id: string
  created_at: string
  updated_at: string
}

export interface MappingCoursesResponse {
  data: MappingCourse[]
}

export interface MappingCourseResponse {
  data: MappingCourse
}

export interface MappingCourseParams {
  course_id: string
  teacher_id: string
  major_id: string
  class_id: string
}


