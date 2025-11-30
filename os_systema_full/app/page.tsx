'use client'
import { useEffect, useState } from 'react'
import { AuthGuard } from '../components/AuthGuard'

function SmallCard({title, value}:{title:string,value:string}){
  return (
    <div className="p-4 bg-white rounded shadow-sm border">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  )
}

export default function Dashboard(){
  const [counts,setCounts] = useState({employees:0, osOpen:0, osInProgress:0, osDone:0})

  useEffect(()=>{
    const em = JSON.parse(localStorage.getItem('os_employees' )||'[]')
    const os = JSON.parse(localStorage.getItem('os_list' )||'[]')
    setCounts({
      employees: em.length,
      osOpen: os.filter((o:any)=>o.status==='aberta').length,
      osInProgress: os.filter((o:any)=>o.status==='andamento').length,
      osDone: os.filter((o:any)=>o.status==='concluida').length,
    })
  },[])

  return (
    <AuthGuard>
      <section>
        <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <SmallCard title="Funcionários" value={String(counts.employees)} />
          <SmallCard title="OS Abertas" value={String(counts.osOpen)} />
          <SmallCard title="Em Andamento" value={String(counts.osInProgress)} />
          <SmallCard title="Concluídas" value={String(counts.osDone)} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded border">
            <h2 className="font-medium mb-2">Resumo - OS (gráfico)</h2>
            {/* Simple SVG bar chart placeholder */}
            <svg viewBox="0 0 200 100" className="w-full h-40">
              <rect x="20" y={100 - counts.osOpen*10} width="30" height={counts.osOpen*10} />
              <rect x="70" y={100 - counts.osInProgress*10} width="30" height={counts.osInProgress*10} />
              <rect x="120" y={100 - counts.osDone*10} width="30" height={counts.osDone*10} />
            </svg>
            <div className="text-xs text-gray-500 mt-2">Apenas visualização rápida (placeholders)</div>
          </div>

          <div className="p-4 bg-white rounded border">
            <h2 className="font-medium mb-2">Últimas OS</h2>
            <RecentList />
          </div>
        </div>
      </section>
    </AuthGuard>
  )
}

function RecentList(){
  const [list,setList] = useState<any[]>([])
  useEffect(()=>{
    setList(JSON.parse(localStorage.getItem('os_list')||'[]').slice(-5).reverse())
  },[])
  if(list.length===0) return <div className="text-sm text-gray-500">Nenhuma OS ainda</div>
  return (
    <ul>
      {list.map((l,i)=>(
        <li key={i} className="mb-2 p-2 border rounded">
          <div className="font-medium">{l.title}</div>
          <div className="text-xs text-gray-500">Status: {l.status}</div>
        </li>
      ))}
    </ul>
  )
}
