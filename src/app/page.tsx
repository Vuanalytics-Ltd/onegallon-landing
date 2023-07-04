import Image from 'next/image'
import { NavBar , Hero , PriceEstimator , AboutUs , SaveTime} from './components'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  ">
       <NavBar />
       <Hero />
       <PriceEstimator />
       <AboutUs />
       <SaveTime />      
    </main>
  )
}
