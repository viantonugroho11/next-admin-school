export interface MappingPeople {
  id:string
  identity_id:string
  type: boolean
}

export interface MappingPeoplesResponse {
  data: MappingPeople[]
}

export interface MappingPeopleResponse {
  data: MappingPeople
}

export interface MappingPeopleParams {
  identity_id: string
  type: boolean
}
