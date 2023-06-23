
export interface MClass {
  id: string
  name: string
  level: string
  major: string
}

export interface ClassesResponse {
  data: MClass[]
}

export interface ClassResponse {
  data: MClass
}


