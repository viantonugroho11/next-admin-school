export interface Material {
  id: string
  name: string
  article: string
  file: string
  status: number
  mapping_weekly_id: string
}

export interface MaterialsResponse {
  data: Material[]
}

export interface MaterialResponse {
  data: Material
}

export interface MaterialParams {
  name: string
  article: string
  file: string
  status: number
  mapping_weekly_id: string
}
