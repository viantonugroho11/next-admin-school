export interface Major {
  id: number
  name: string
}

export interface MajorsResponse {
  data: Major[]
}

export interface MajorResponse {
  data: Major
}

export interface MajorRequest {
  name: string
}

