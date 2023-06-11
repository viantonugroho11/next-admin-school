import { useRouter } from 'next/router'
import { useEffect } from 'react'

export function validateAuth(): void {
  const router = useRouter()

  useEffect(() => {
    // Cek jika storelocal jwt-auth kosong dan alamat saat ini bukan halaman login
    if (!localStorage.getItem('jwt-auth') && router.pathname !== '/login') {
      // Redirect ke halaman login
      router.replace('auth/login')
    }
  }, [])
}
