'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { AuthGuard } from '../../components/AuthGuard'

export default function NewOS(){
  const [title,setTitle] = useState('')
  const [desc,setDesc] = useState('')
  const router = useRouter()

  function submit(e:any){
    e.preventDefault()
    if(!title.trim()) return alert('Informe o título')
    const cur = JSON.parse(localStorage.getItem('os_list')||'[]')
    cur.push({id:Date.now(), title, desc, status:'aberta', created: new Date().toISOString()})
    localStorage.setItem('os_list', JSON.stringify(cur))
    router.push('/os')
  }

  return (
    <AuthGuard>
      <section>
        <h1 className="text-2xl font-semibold mb-4">Nova Ordem de Serviço</h1>
        <form onSubmit={submit} className="p-4 bg-white rounded border">
          <label className="block mb-2">Título</label>
          <input value={title} onChange={e=>setTitle(e.target.value)} className="w-full mb-3 p-2 border rounded" />

          <label className="block mb-2">Descrição</label>
          <textarea value={desc} onChange={e=>setDesc(e.target.value)} className="w-full mb-3 p-2 border rounded" />

          <button className="px-4 py-2 bg-blue-600 text-white rounded">Criar OS</button>
        </form>
      </section>
    </AuthGuard>
  )
}
