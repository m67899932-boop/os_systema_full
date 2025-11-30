'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Login(){
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const router = useRouter()

  function submit(e: any){
    e.preventDefault()
    // simplistic: accept any non-empty credentials
    if(user.trim()){
      localStorage.setItem('os_user', user)
      router.push('/')
    } else {
      alert('Informe o usuário')
    }
  }

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded shadow">
      <h1 className="text-xl font-semibold mb-4">Login</h1>
      <form onSubmit={submit}>
        <label className="block mb-2">Usuário</label>
        <input value={user} onChange={e=>setUser(e.target.value)} className="w-full mb-3 p-2 border rounded" />
        <label className="block mb-2">Senha</label>
        <input type="password" value={pass} onChange={e=>setPass(e.target.value)} className="w-full mb-4 p-2 border rounded" />
        <button className="px-4 py-2 bg-blue-600 text-white rounded">Entrar</button>
      </form>
    </div>
  )
}
