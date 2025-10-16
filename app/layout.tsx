import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Victor Kipkirui - Computer Science Student & Software Developer',
  description: 'Personal portfolio website of Victor Kipkirui, Computer Science student and aspiring software developer. Showcasing projects, skills, and experience.',
  keywords: 'Victor Kipkirui, Computer Science, Software Developer, Portfolio, Next.js, React',
  authors: [{ name: 'Victor Kipkirui' }],
  creator: 'Victor Kipkirui',
  openGraph: {
    title: 'Victor Kipkirui - Computer Science Student & Software Developer',
    description: 'Personal portfolio website showcasing projects, skills, and experience.',
    url: 'https://your-domain.vercel.app',
    siteName: 'Victor Kipkirui Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Victor Kipkirui Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Victor Kipkirui - Computer Science Student & Software Developer',
    description: 'Personal portfolio website showcasing projects, skills, and experience.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}