import Link from "next/link";
import Image from "next/image";

const data = [
    {
      img: 'apple.svg',
      header: 'Available on',
      title: 'APP STORE',
      link: '/'
    },
    {
     img: 'android.svg',
     header: 'Available on',
     title: 'PLAY STORE',
     link: '/'
   }
 
 ]

export function Hero(){
    return (
      <div className="hero min-h-screen bg-[#D7D7D7]">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="md:text-5xl text-3xl font-clashDisplay font-semibold text-[#FF0127]">We give you the time to do the</h1>
            <h1 className="md:text-5xl text-3xl font-clashDisplay font-semibold text-[#FF0127]">things that matter</h1>
            <p className="font-gotham font-light text-lg py-6">Fuel delivery and time-saving</p>
            <div className="flex flex-row justify-center items-center gap-6">
            {
                    data.map((item,index) => {
                       return (
                        <Link key={"dynamo__item__" + index} className="btn btn-outline normal-case " href="/">
                        <Image
                              src={item.img}
                              width={25}
                              height={25}
                              alt="Apple icon"
                              
                           />
                           <div className="ml-3">
                           <h4 className="font-gotham font-light text-xs  text-left">Available on</h4>
                            <h4 className="font-gotham  text-xs font-light text-left">{item.title}</h4>
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