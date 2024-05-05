import type { Metadata } from 'next';
import DarkThemeProvider from '@/components/theme-provider';

import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'QuickBook',
  description: 'Entertainment Ticket Booking',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="max-w-[90%] mx-auto">
        <DarkThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </DarkThemeProvider>
      </body>
    </html>
  )
}
