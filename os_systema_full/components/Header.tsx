'use client'
import Link from 'next/link'

export function Header(){
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logos/os-logo.svg" alt="OS" className="h-10 w-10" />
          <div>
            <div className="font-bold">OS Systema</div>
            <div className="text-sm text-gray-500">Painel integrado</div>
          </div>
        </div>
        <nav>
          <Link href="/"><a className="mr-4 text-sm">Dashboard</a></Link>
          <Link href="/os"><a className="mr-4 text-sm">Ordens</a></Link>
          <Link href="/employees"><a className="mr-4 text-sm">Funcionários</a></Link>
          <Link href="/frota"><a className="text-sm">Frotas</a></Link>
        </nav>
      </div>
    </header>
  )
}
