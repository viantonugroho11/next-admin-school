import { RootState } from '@reducers/store'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Cookies } from 'react-cookie'
import { useSelector } from 'react-redux'

const AuthMiddleware = ({ children }: any) => {
  const router = useRouter()
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuth)
  const cookies = new Cookies()
  useEffect(() => {
    var token = cookies.get('token')
    if (!token) {
      if (!isAuthenticated && router.pathname !== '/auth/login') {
        router.push('/auth/login') // Redirect ke halaman login jika tidak terautentikasi
      }
    }// else
    // check verify token
    

  }, [isAuthenticated, router])

  return children
}

export default AuthMiddleware
