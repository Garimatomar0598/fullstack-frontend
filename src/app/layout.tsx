import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import { Toaster } from '@/components/ui/toaster'
import { QueryProvider } from '../components/query-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Full-stack Assignment',
  description: 'Full-stack assignment application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
          <QueryProvider>
            {children}
            <Toaster />
          </QueryProvider>
      </body>
    </html>
  )
}
