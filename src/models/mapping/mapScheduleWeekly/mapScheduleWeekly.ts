export interface ScheduleWeekly {
  id: string
  name: string
  course_id: string
  week: number
}

export interface ScheduleWeeklyResponse {
  data: ScheduleWeekly
}

export interface ScheduleWeeklyParams {
  name: string
  course_id: string
  week: number
}

export interface ScheduleWeekliesResponse {
  data: ScheduleWeekly[]
}
