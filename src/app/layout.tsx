import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import Navsign from "@/components/ui/navsign"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hermitra - PCOS Awareness & Support",
  description: "Comprehensive PCOS awareness, support, and management platform for women",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <Navsign />
        {children}
      </body>
    </html>
  )
}
