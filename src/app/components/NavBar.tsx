import Image from "next/image";
import Link from "next/link";


const links = [
    {
        title: "Home",
        id: "#home"
    },
    {
        title: "About Us",
        id: "#about"
    },
    {
        title: "How it works",
        id: "#works"
    },
    {
        title: "FAQs",
        id: "#faqs"
    },

]


function NavLinks({title,id}: {title: string , id: string}){
    return (
        <a href={id} className="font-clashDisplay font-normal text-sm">{title}</a>
    )
}


export function NavBar (){
    return (
      <div className=" bg-[#F0EFEF] p-3">
        <div className="navbar ">
          <div className="flex-1">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="OneGallon Logo"
                width={212}
                height={37}
              />
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1 md:flex hidden">
            {
                    links.map((link) => {
                        return (
                            <li key={link.id}> <NavLinks title={link.title}  id={link.id}/> </li>
                        )
                    })
                }
            </ul>
            <div className="dropdown dropdown-end md:hidden">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {
                    links.map((link) => {
                        return (
                            <li key={link.id}> <NavLinks title={link.title}  id={link.id}/> </li>
                        )
                    })
                }
               
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}