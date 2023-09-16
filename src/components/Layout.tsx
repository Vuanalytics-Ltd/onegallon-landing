import Head from 'next/head'
import { NavBar , Footer } from "./index";
import { Sora  } from 'next/font/google'
import localFont from 'next/font/local'

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

export default function Layout({children}: {children: React.ReactNode}){
    return (
      <main
        className={`flex min-h-screen flex-col  ${clashDisplay.variable} ${gotham.variable} ${sora.variable}`}
      >
        <Head>
          <title>
            1gallon - We give you the time to do the things that matter
          </title>
          <meta property="og:title" content="1Gallon" key="title" />
          <meta
          name="description"
          content="Request for fuel from 100+ fuel stations and in 3+ cities in Ghana, the OneGallon app is a great way to make buying fuel stress-free."
          key="desc"
        />
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <NavBar />
        {children}
        <Footer />
      </main>
    );
}