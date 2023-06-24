import { authVerifyToken } from '@actions/auth/actions'
import { RootState } from '@reducers/store'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Cookies } from 'react-cookie'
import { useDispatch, useSelector } from 'react-redux'

const AuthMiddleware = ({ children }: any) => {
  const router = useRouter()
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuth)
  const cookies = new Cookies()
  const dispatch = useDispatch()
  useEffect(() => {
    var token = cookies.get('token')
    if (!token) {
      if (
        !isAuthenticated &&
        router.pathname !== '/auth/login' &&
        router.pathname !== '/auth/register' &&
        router.pathname !== '/401'
      ) {
        router.push('/401') // Redirect ke halaman login jika tidak terautentikasi
      }
    } 
    // else {
    //   const fetchData = async () => {
    //     try {
    //       if (router.pathname !== '/auth/login' && router.pathname !== '/auth/register' && router.pathname !== '/401') {
    //         await dispatch<any>(authVerifyToken())
    //         if (
    //           !isAuthenticated &&
    //           router.pathname !== '/auth/login' &&
    //           router.pathname !== '/auth/register' &&
    //           router.pathname !== '/401'
    //         ) {
    //           router.push('/401') // Redirect ke halaman login jika tidak terautentikasi
    //         }
    //       }
    //     } catch (error) {
    //       router.push('/401')
    //     }
    //   }
    //   fetchData()
    // }
  }, [isAuthenticated, router, dispatch, cookies])

  return children
}

export default AuthMiddleware
