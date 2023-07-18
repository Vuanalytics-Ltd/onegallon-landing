import { AboutUs, ContactUs, FAQ, Footer, HIWSection, Hero, NavBar, PriceEstimator, SaveTime } from '@/components'
import { Sora  } from 'next/font/google'
import localFont from 'next/font/local'
import { faqQuery } from '../../sanity/lib/queries'
import { client } from '../../sanity/lib/client'
import Head from 'next/head'

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

export const getStaticProps = async () => {
  const data = await client.fetch(faqQuery);

  return { props: { data } };
};


export default  function Home({ data }: any) {
  // const faqs = await cachedClient(faqQuery)

  // console.log("faqs" , data)

  return (
    <main
      className={`flex min-h-screen flex-col  ${clashDisplay.variable} ${gotham.variable} ${sora.variable}` }
    >
      <Head>
        <title>OneGallon - We give you the time to do the things that matter</title>
        <meta property="og:title" content="OneGallon" key="title" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <NavBar />
       <Hero />
       <PriceEstimator />
       <AboutUs />
       <SaveTime /> 
       <HIWSection />  
       <FAQ data={data} />  
       <ContactUs /> 
       <Footer />
       

      
    </main>
  )
}
