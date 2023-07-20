import { AboutUs, ContactUs, FAQ,  HIWSection, Hero, PriceEstimator, SaveTime } from '@/components'
import { Sora  } from 'next/font/google'
import localFont from 'next/font/local'
import { faqQuery } from '../../sanity/lib/queries'
import { client } from '../../sanity/lib/client'
import Layout from '@/components/Layout'


export const getStaticProps = async () => {
  const data = await client.fetch(faqQuery);

  return { props: { data } };
};


export default  function Home({ data }: any) {
  // const faqs = await cachedClient(faqQuery)

  // console.log("faqs" , data)

  return (
  
    <Layout>
       <Hero />
       <PriceEstimator />
       <AboutUs />
       <SaveTime /> 
       <HIWSection />  
       <FAQ data={data} />  
       <ContactUs /> 
    </Layout>  
      
  )
}
