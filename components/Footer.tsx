export function Footer(){
  return (
    <footer className="bg-gray-50 border-t mt-6">
      <div className="container mx-auto p-4 text-sm text-gray-600">
        © {new Date().getFullYear()} OS Systema — Feito para deploy na Vercel.
      </div>
    </footer>
  )
}
