import { Lexend_Giga } from 'next/font/google'

import ToasterContext from './context/toasterContext'

import './globals.css'

const lex = Lexend_Giga({ subsets: ['latin'] })

export const metadata = {
  title: 'Project Chat Suite',
  description: 'Tutorial by Coding With Antonio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lex.className}>
        <ToasterContext />
        {children}
      </body>
    </html>
  )
}
