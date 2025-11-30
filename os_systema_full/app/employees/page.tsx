'use client'
import { useEffect, useState } from 'react'
import { AuthGuard } from '../../components/AuthGuard'

export default function Employees(){
  const [list,setList] = useState<any[]>([])
  const [name,setName] = useState('')
  useEffect(()=> setList(JSON.parse(localStorage.getItem('os_employees')||'[]')),[])
  function add(){
    if(!name.trim()) return alert('Informe o nome')
    const cur = JSON.parse(localStorage.getItem('os_employees')||'[]')
    cur.push({id:Date.now(), name})
    localStorage.setItem('os_employees', JSON.stringify(cur))
    setList(cur); setName('')
  }
  function remove(id:any){
    const cur = JSON.parse(localStorage.getItem('os_employees')||'[]').filter((e:any)=>e.id!==id)
    localStorage.setItem('os_employees', JSON.stringify(cur))
    setList(cur)
  }
  return (
    <AuthGuard>
      <section>
        <h1 className="text-2xl font-semibold mb-4">Funcionários</h1>
        <div className="mb-4 p-4 bg-white rounded border">
          <label className="block mb-2">Nome</label>
          <div className="flex gap-2">
            <input value={name} onChange={e=>setName(e.target.value)} className="flex-1 p-2 border rounded" />
            <button onClick={add} className="px-4 py-2 bg-blue-600 text-white rounded">Adicionar</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {list.map(emp=>(
            <div key={emp.id} className="p-3 bg-white rounded border flex justify-between items-center">
              <div>
                <div className="font-medium">{emp.name}</div>
                <div className="text-xs text-gray-500">ID: {emp.id}</div>
              </div>
              <div>
                <button onClick={()=>remove(emp.id)} className="text-red-600 text-sm">Remover</button>
              </div>
            </div>
          ))}
          {list.length===0 && <div className="text-sm text-gray-500">Nenhum funcionário cadastrado</div>}
        </div>
      </section>
    </AuthGuard>
  )
}
