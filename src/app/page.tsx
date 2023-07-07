import { NavBar , Hero , PriceEstimator , AboutUs , SaveTime , HIWSection , FAQ, ContactUs , Footer} from './components'
import { cachedClient } from "../../sanity/lib/client"
import { faqQuery } from '../../sanity/lib/queries'

export default async function Home() {
  
  const faqs = await cachedClient(faqQuery)


  return (
    <main className="flex min-h-screen flex-col  ">
       <NavBar />
       <Hero />
       <PriceEstimator />
       <AboutUs />
       <SaveTime /> 
       <HIWSection />  
       <FAQ data={faqs}/>  
       <ContactUs /> 
       <Footer />
    </main>
  )
}
