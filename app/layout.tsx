import type { Metadata } from 'next'
import { Geist, Geist_Mono, Shippori_Mincho, Cormorant_Garamond, DM_Mono } from 'next/font/google'
import './globals.css'
import { Footer } from '@/components/footer';
import Navigation from '@/components/navigation';

const _geist = Geist({ subsets: ["latin"], variable: '--font-sans' });
const _geistMono = Geist_Mono({ subsets: ["latin"], variable: '--font-mono' });
const shipporiMincho = Shippori_Mincho({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: '--font-shippori' });
const cormorantGaramond = Cormorant_Garamond({ subsets: ["latin"], weight: ["300", "400", "500"], variable: '--font-cormorant' });
const dmMono = DM_Mono({ subsets: ["latin"], weight: ["300", "400"], variable: '--font-dm-mono' });

export const metadata: Metadata = {
  title: 'Kuro Roastery - Premium Japanese Coffee',
  description: 'Discover single-origin Japanese coffee, hand-roasted to perfection. Experience the art of coffee craftsmanship with Kuro Roastery.',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-[#f4f0e8] scroll-smooth" style={{
      ..._geist.style,
      ..._geistMono.style,
      ...shipporiMincho.style,
      ...cormorantGaramond.style,
      ...dmMono.style,
    } as React.CSSProperties}>
      <body className="antialiased text-[#0f0e0c] overflow-x-hidden">
        <Navigation />
        {children}
              <Footer />
      </body>

    </html>
  )
}
