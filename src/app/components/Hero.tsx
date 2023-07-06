import Link from "next/link";
import Image from "next/image";

const data = [
    {
      img: 'apple-white.svg',
      header: 'Available on',
      title: 'APP STORE',
      link: '/'
    },
    {
     img: 'android-white.svg',
     header: 'Available on',
     title: 'PLAY STORE',
     link: '/'
   }
 
 ]

export function Hero(){
    return (
      <div className="hero min-h-screen bg-no-repeat place-items-start bg-[#D7D7D7] bg-[url('/hero.svg')]" >
        <div className="hero-content flex-col min-h-screen ">
          <div className="max-w-xl px-3">
            <h1 className="md:text-5xl text-3xl font-clashDisplay font-semibold text-white">We give you the time </h1>
            <h1 className="md:text-5xl text-3xl font-clashDisplay font-semibold text-white">to do the things that matter</h1>
            <p className="font-gotham font-light text-white text-lg py-6">Fuel delivery and time-saving</p>
            <div className="flex flex-row  gap-6">
            {
                    data.map((item,index) => {
                       return (
                        <Link key={"dynamo__item__" + index} className="btn btn-outline border-white normal-case " href="/">
                        <Image
                              src={item.img}
                              width={25}
                              height={25}
                              alt="Apple icon"
                              
                           />
                           <div className="ml-3">
                           <h4 className="font-gotham font-light text-xs  text-left text-white">Available on</h4>
                            <h4 className="font-gotham  text-xs font-light text-left text-white">{item.title}</h4>
                            </div>

                       </Link>
                       )
                })
                }
            </div>
          </div>
         
        </div>
      </div>
    );
}