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
