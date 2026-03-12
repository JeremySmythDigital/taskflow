import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TaskFlow - Dead Simple Task Management for Micro-Businesses',
  description: 'Stop losing tasks in spreadsheets. Task management built for small teams (1-5 people). Free for 1 user, $9/month for teams.',
  keywords: 'task management, small business, micro-business, team tasks, kanban',
  openGraph: {
    title: 'TaskFlow - Dead Simple Task Management',
    description: 'Stop losing tasks in spreadsheets. Built for micro-businesses.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}