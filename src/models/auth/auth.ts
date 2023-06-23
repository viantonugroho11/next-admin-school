export interface Auth {
  expired_data: string
  status: boolean
  token: string
  expired_refresh_token: string
  refresh_token: string
  session_token: string
}

export interface AuthResponse {
  data: Auth
}

export interface LoginRequest {
  username: string
  password: string
}

export interface ValidateJwt{
  identityId: string
  username: string
  fullname: string
  email: string
  phone: string
  permissions: string
  isActive: boolean
  expiredAt: string
}

export interface ValidateJwtResponse {
  data: ValidateJwt
}