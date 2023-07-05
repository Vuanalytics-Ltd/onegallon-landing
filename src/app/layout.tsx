import './globals.css'
import { Sora  } from 'next/font/google'
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

const sora = Sora({
  weight: ["300" , "400" , "500"],
  variable: '--font-sora',
  subsets: ['latin'],
  display: 'swap',
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
      <body className={`${clashDisplay.variable} ${gotham.variable} ${sora.variable}`}>{children}</body>
    </html>
  )
}
