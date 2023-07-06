import Link from "next/link"
import Image from "next/image"

const lists = [
    {
        title: "Home",
        id: "/"
    },
    {
        title: "About Us",
        id: "#about"
    },
    {
        title: "Price Estimate",
        id: "#price"
    },
    {
        title: "How it works",
        id: "#hiw"
    },    
]

const secondlist = [
    {
        title: "FAQs",
        id: "#faqs"
    },
    
    {
        title: "Careers",
        id: "#careers"
    },
    
    {
        title: "Contact Us",
        id: "#contact"
    },

]

export function Footer(){
    return (
      <div className="bg-[#F3F3F3] p-4 min-h-[50vh]">
        <div className="container px-4 mx-auto">
           <div className="flex flex-row my-6">
                <Link href="/">
                    <Image
                        src="/logo.png"
                        alt="OneGallon Logo"
                        width={212}
                        height={37}
                    />
                </Link>
            </div>
          <footer className="footer">
           
            <div>
                {
                    lists.map((list) => {
                       return (
                        <a key={list.id} href={list.id} className="font-sora font-light text-base mb-4">{list.title}</a>
                       )
                    })
                }
              
             
            </div>

            <div>
                {
                    secondlist.map((list) => {
                       return (
                        <a key={list.id} href={list.id} className="font-sora font-light text-base mb-4">{list.title}</a>
                       )
                    })
                }
              
             
            </div>
            
            
            <div className="w-8/12 mx-auto">
              <span className="footer-title font-sora text-sm font-light opacity-100 normal-case">Be the first to hear our news</span>
              <div className="form-control ">
                
                <div className="flex flex-row flex-wrap gap-2">
                  <input
                    type="text"
                    placeholder="Email Address"
                    className="input border border-black w-80 pr-16"
                  />
                  <button className="btn  font-sora font-semibold bg-[#FF0127] text-white normal-case hover:bg-[#FF0127]  rounded-lg">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
}