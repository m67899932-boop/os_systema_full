'use client'
import { AuthGuard } from '../../components/AuthGuard'

export default function Frota(){
  return (
    <AuthGuard>
      <section>
        <h1 className="text-2xl font-semibold mb-4">Módulo Frota</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded border">
            <h2 className="font-medium">Veículos</h2>
            <p className="text-sm text-gray-500">Placeholder para cadastro de veículos.</p>
          </div>
          <div className="p-4 bg-white rounded border">
            <h2 className="font-medium">Manutenções</h2>
            <p className="text-sm text-gray-500">Placeholder para manutenção e histórico.</p>
          </div>
        </div>
      </section>
    </AuthGuard>
  )
}
