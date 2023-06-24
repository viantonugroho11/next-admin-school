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

export interface ClassRequest {
  name: string
  level: number
  major: number
}
