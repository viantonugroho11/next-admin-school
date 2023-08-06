 export interface Task {
    id: string
    name: string
    mapping_weekly_id: string
    number_of_task: number
    task_open_date: string
    task_close_date: string
    task_open_hour: string
    task_close_hour: string
    work_limit_task: number
    status: number
  }

  export interface TaskResponse {
    data: Task
  }

  export interface TasksResponse {
    data: Task[]
  }

  export interface TaskParams {
    name: string
    mapping_weekly_id: string
    number_of_task: number
    task_open_date: string
    task_close_date: string
    task_open_hour: string
    task_close_hour: string
    work_limit_task: number
    status: number
  }
