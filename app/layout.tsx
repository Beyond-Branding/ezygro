import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: {
    default: 'Ezygro - Business Growth Solutions',
    template: '%s | Ezygro'
  },
  description: 'Tech Mahindra helps enterprises transform at speed with agility, resilience, and efficiency.',
  keywords: ['business solutions', 'financial accounting' , 'virtual CFO', 'compliance', 'ezygro'],
  authors: [{ name: 'Ezygro Team' }],
  creator: 'Ezygro',
  publisher: 'Ezygro',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ezygro.com',
    title: 'Ezygro - Business Growth Solutions',
    description: 'Tech Mahindra helps enterprises transform at speed with agility, resilience, and efficiency.',
    siteName: 'Ezygro',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ezygro - Business Growth Solutions',
    description: 'Tech Mahindra helps enterprises transform at speed with agility, resilience, and efficiency.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${poppins.className}`}>{children}</body>
    </html>
  )
}
