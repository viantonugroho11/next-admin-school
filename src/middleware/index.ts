import { RootState } from '@reducers/store';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';


const AuthMiddleware = ({ children }: any) => {
  const router = useRouter()
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuth)

  useEffect(() => {
    if (!isAuthenticated && router.pathname !== '/auth/login') {
      router.push('/auth/login') // Redirect ke halaman login jika tidak terautentikasi
    }
  }, [isAuthenticated, router])

  return children
}

export default AuthMiddleware
