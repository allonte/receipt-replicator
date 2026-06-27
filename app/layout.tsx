import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono, IBM_Plex_Sans, Playfair_Display } from 'next/font/google'
import { Courier_Prime } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _courierPrime = Courier_Prime({ weight: ["400", "700"], subsets: ["latin"] });
const _ibmPlexSans = IBM_Plex_Sans({ weight: ["300", "400", "500", "600"], subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: 'all&co — Custom Software & AI Workflows',
  description: 'From idea to running software. all&co builds custom systems, automations, and AI workflows for businesses. Kenya\'s trusted development partner.',
  keywords: ['custom software', 'AI workflows', 'software development', 'automation', 'all&co'],
  authors: [{ name: 'all&co' }],
  openGraph: {
    title: 'all&co — Custom Software & AI Workflows',
    description: 'From idea to running software. all&co builds custom systems, automations, and AI workflows for businesses.',
    type: 'website',
    url: 'https://ai.allco.co.ke',
    siteName: 'all&co',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'all&co — Custom Software & AI Workflows',
    description: 'From idea to running software. all&co builds custom systems, automations, and AI workflows for businesses.',
  },
  icons: {
    icon: [
      {
        url: '/allandco-logo.png',
        type: 'image/png',
      },
    ],
    apple: '/allandco-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${playfair.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
