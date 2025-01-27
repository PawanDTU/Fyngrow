import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from './components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fyngro - Your Financial Growth Partner',
  description: 'Learn, calculate, and grow your finances with Fyngro',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100">
          {children}
        </main>
      </body>
    </html>
  )
}

