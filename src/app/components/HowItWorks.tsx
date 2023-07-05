import Image from 'next/image'

const data = [
    {
        img: 'app_icon.svg',
        title: 'Get the app',
        description: 'Download the app and start saving time with onegallon'
    },
    {
        img: 'book.svg',
        title: 'Book and checkout',
        description: 'Open the app, anytime.Order and pay for fuel delivery'
    },
    {
        img: 'delivery.svg',
        title: 'Get your car ready',
        description: 'Make sure your car is easily accessible (and don\'t forget to open your fuel cap if you\'ve ordered a fuel delvery).'
    },
    {
        img: 'all_set.svg',
        title: 'You\'re all set',
        description: 'And we\'re on our way. No queues, no hassle. Simpler. Smarter.'
    },
]

const lists = [
    'Download the app from Playstore or AppStore depending on your mobile device',
    'Tell us where you are.',
    'Tell us what type of Plan you want',
    'Enter the quantity you want',
    'Pay and Place your order'
]

export function HIWSection(){
    return (
        <div className="bg-white p-4 w-full min-h-screen">
            <div className="container px-4 mx-auto">
                   <h1 className="font-clashDisplay md:text-4xl text-3xl font-medium py-10 mb-3">It&apos;s as easy</h1>

                   <div className="flex flex-row flex-wrap gap-3 mb-10">
                      {
                        data.map((item,index) => {
                           return (
                             <div key={"hiw--" + index} className="flex-auto w-full md:w-3/12 lg:w-2/12">
                                  <div className="mb-6 h-16 w-16 relative">
                                     <Image
                                       src={item.img}
                                    //    width={38}
                                    //    height={38}
                                       alt={item.title} 
                                       fill   
                                           />
                                  </div>
                                  <h1 className="font-gotham lg:text-2xl text-xl font-medium mb-4">{item.title}</h1>
                                  <h3 className='font-gotham text-sm font-light mb-4'> {item.description} </h3>
                             </div>
                           )
                        })
                      }
                   </div>
                   <h1 className="font-clashDisplay md:text-4xl text-3xl font-medium py-5 mb-3">How it works</h1>
                   <div className="flex flex-row flex-wrap gap-3 mb-4 items-center">
                       <div className="flex-auto w-full lg:w-6/12 px-2">
                          <ul className="list-decimal ml-4">
                             {
                                lists.map((list , index) => {
                                    return (
                                        <li className="font-gotham font-light md:text-lg  text-base mb-2" key={"list__" + index}>{list}</li>
                                    )
                                })
                             }
                          </ul>
                       </div>
                       <div className="flex-auto w-full lg:w-5/12">
                            <Image
                                src="/how-it-works.png"
                                alt="How it works"
                                width={400}
                                height={350}
                            />
                       </div>
                   </div>
            </div>
        </div>
    )
}