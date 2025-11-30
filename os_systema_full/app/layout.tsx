import './globals.css'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export const metadata = {
  title: 'OS Systema - Completo',
  description: 'OS + Frotas integrados',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-1 container mx-auto p-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
