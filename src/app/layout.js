import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { AuthProvider } from './AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Desafio do Julião',
  description: 'Ainda decidindo o que vai ser',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={inter.className}>{children}</body>
      </AuthProvider>
    </html>
  )
}
''