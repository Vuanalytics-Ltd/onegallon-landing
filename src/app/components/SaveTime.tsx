import Image from 'next/image'
import Link from "next/link"

const data = [
    'Save time and beat the queues',
    '24/7 petrol and diesel delivery',
    'Same price as the petrol station, pay for only the delivery fee',
    'Contactless – order and pay on the app'
]

const icons = [
    {
      img: 'apple.svg',
      link: 'https://apps.apple.com/us/app/1gallon-request-for-fuel/id6444171778'
    },
    {
     img: 'android.svg',
     link: 'https://play.google.com/store/apps/details?id=com.gh.onegallon.customer'
   }
 
 ]

export function SaveTime(){
    return (
        <div className="py-8 px-2 w-full min-h-screen bg-[#F3F3F3]">
            <div className='container pt-8 mx-auto px-4'>
                <div className="pb-10 ">
                    <h1 className="font-clashDisplay md:text-4xl text-2xl font-medium mb-1">We help save your most</h1>
                    <h1 className="font-clashDisplay md:text-4xl text-2xl font-medium mb-3">precious time</h1>
                    <h2 className="font-gotham md:text-lg text-base font-light">OneGallon helps you break free from the petrol station. Saving you time, by bringing fuel to you, anytime, anywhere.</h2>
                </div>
                <div className="flex flex-row flex-wrap">
                    <div className="flex-auto lg:w-1/2 w-full">
                    <Image
                        src="/precious-time.png"
                        alt="save your most precious time"
                        width={650}
                        height={500}
                    />
                    </div>
                    <div className="flex-auto lg:w-1/2 w-full flex flex-col justify-center">
                        <h1 className="py-4 font-clashDisplay font-semibold text-xl">We&apos;ll keep you moving</h1>
                        <div className="flex flex-row flex-wrap  w-full gap-3 pb-8">
                            {
                                data.map((item, index) => {
                                    return (
                                        <div key={"precious--item--" + index} className="md:w-5/12 w-full flex gap-2  mb-3 items-center">
                                            <Image 
                                                width={18}
                                                height={18}
                                                src="/check.svg"
                                                alt="check mark"
                                                    />
                                            <h2 className="font-gotham text-base font-light">{item}</h2>
                                        </div>
                                    )
                                })
                            }
                             
                        </div>
                        <div className="flex flex-row items-center py-6 border border-black px-4 rounded-xl md:w-7/12 w-full">
                            <h2 className="font-gotham font-light text-base">Download the App on</h2>
                            <div className="ml-3 py-3 border-l border-black"></div>
                             {
                                  icons.map((item,index) => {
                                     return (
                                        <Link key={"onegallon__icon__" + index} className="normal-case mx-3" href={item.link} target="_blank">
                                         <Image
                                              src={item.img}
                                              width={25}
                                              height={25}
                                              alt="Apple icon"
                                              
                                           />
                                           
                
                                       </Link>
                                     )
                                  })
                             }
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )

}