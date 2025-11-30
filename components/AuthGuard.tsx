'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export function AuthGuard({ children } : { children: React.ReactNode }){
  const router = useRouter()
  useEffect(()=>{
    const u = localStorage.getItem('os_user')
    if(!u) router.push('/login')
  },[])
  return <>{children}</>
}
