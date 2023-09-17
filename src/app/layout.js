import '../app/globals.css'

export const metadata = {
  title: 'Sistema de Registro de Usuários',
  description: 'Project for class PTAC',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
