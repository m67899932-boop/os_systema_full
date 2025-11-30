'use client'
import { useEffect, useState } from 'react'
import { AuthGuard } from '../../components/AuthGuard'
import Link from 'next/link'

export default function OSList(){
  const [list,setList] = useState<any[]>([])
  useEffect(()=> setList(JSON.parse(localStorage.getItem('os_list')||'[]')),[])
  function changeStatus(id:any, status:string){
    const cur = JSON.parse(localStorage.getItem('os_list')||'[]').map((o:any)=> o.id===id?({...o,status}):o)
    localStorage.setItem('os_list', JSON.stringify(cur))
    setList(cur)
  }
  return (
    <AuthGuard>
      <section>
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">Ordens de Serviço</h1>
          <Link href="/os/new"><a className="px-3 py-2 bg-blue-600 text-white rounded">Nova OS</a></Link>
        </div>

        <div className="grid gap-3">
          {list.length===0 && <div className="text-sm text-gray-500">Nenhuma OS cadastrada</div>}
          {list.map(o=>(
            <div key={o.id} className="p-3 bg-white rounded border">
              <div className="flex justify-between">
                <div>
                  <div className="font-medium">{o.title}</div>
                  <div className="text-xs text-gray-500">Criada em: {new Date(o.created).toLocaleString()}</div>
                </div>
                <div className="text-sm">
                  <div className="mb-2">Status: <strong>{o.status}</strong></div>
                  <div className="flex gap-2">
                    {o.status!=='aberta' && <button onClick={()=>changeStatus(o.id,'aberta')} className="px-2 py-1 border rounded">Abrir</button>}
                    {o.status!=='andamento' && <button onClick={()=>changeStatus(o.id,'andamento')} className="px-2 py-1 border rounded">Em andamento</button>}
                    {o.status!=='concluida' && <button onClick={()=>changeStatus(o.id,'concluida')} className="px-2 py-1 border rounded">Concluir</button>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </AuthGuard>
  )
}
