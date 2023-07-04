import './globals.css'
// import { Inter  } from 'next/font/google'
import localFont from 'next/font/local'

// const inter = Inter({ subsets: ['latin'] })

const gotham = localFont({
  src: [
    {
      path: '../../public/fonts/gotham/Gotham-Light.otf',
      weight: '300'
    },
    {
      path: '../../public/fonts/gotham/Gotham-Medium.otf',
      weight: '500'
    },
    {
      path: '../../public/fonts/gotham/Gotham-Bold.otf',
      weight: '700'
    },
  ],
  variable: '--font-gotham'
})

const clashDisplay = localFont({
  src: [
    {
      path: '../../public/fonts/clashdisplay/ClashDisplay-Light.ttf',
      weight: '300'
    },
    {
      path: '../../public/fonts/clashdisplay/ClashDisplay-Regular.ttf',
      weight: '400'
    },
    {
      path: '../../public/fonts/clashdisplay/ClashDisplay-Medium.ttf',
      weight: '500'
    },
    {
      path: '../../public/fonts/clashdisplay/ClashDisplay-Semibold.ttf',
      weight: '600'
    },
    {
      path: '../../public/fonts/clashdisplay/ClashDisplay-Bold.ttf',
      weight: '700'
    },
  ],
  variable: "--font-clashDisplay"
})

export const metadata = {
  title: 'OneGallon',
  description: 'OneGallon App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${clashDisplay.variable} ${gotham.variable}`}>{children}</body>
    </html>
  )
}
