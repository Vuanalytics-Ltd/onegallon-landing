import React, { useEffect } from 'react'
import { useForm , SubmitHandler } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
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

type Inputs = {
  email: string,
}

export function Footer(){

  const {register,handleSubmit,formState,formState: {errors , isSubmitSuccessful},reset} = useForm<Inputs>()
    
  const [loadingState,setLoadingState] = React.useState(false)

  const notify = () => toast('Thanks for joining our mailing list.')

  useEffect(() => {
    if(formState.isSubmitSuccessful)
     {
        reset({
            email: '',
        })
     }
    
  }, [formState,reset])

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoadingState(true)
     
    // console.log("data", data)

    const contact = [data?.email]
    
    const sheetData = {
        range: 'Mailing List!A2:D',
        data: contact,
        type: "1gallon"

    }
    
    // const response = await fetch('/api/sheet'+ '?' + new URLSearchParams(sheetData) )
    try {
      const response = await fetch("https://google-sheet-node-api.vercel.app/api/sheet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sheetData),
      });

      const content = await response.json()

      if(content?.status === 200){
        notify()
        setLoadingState(false)
      } else {
          setLoadingState(false)
      }
      
    } catch (error) {
      setLoadingState(false)
    }
    
    

    
   

    
    
}  

    return (
      <div className="bg-[#F3F3F3] p-4 py-12">
        <div className="container px-4 mx-auto">
          <div className="flex flex-row my-6">
            <Link href="/">
              <Image
                src="./logo.svg"
                alt="OneGallon Logo"
                width={212}
                height={37}
              />
            </Link>
          </div>
          <footer className="footer">
            <div>
              {lists.map((list) => {
                return (
                  <a
                    key={list.id}
                    href={list.id}
                    className="font-sora font-light text-base mb-4 "
                  >
                    {list.title}
                  </a>
                );
              })}
            </div>

            <div>
              {secondlist.map((list) => {
                return (
                  <a
                    key={list.id}
                    href={list.id}
                    className="font-sora font-light text-base mb-4"
                  >
                    {list.title}
                  </a>
                );
              })}
            </div>
            <div className="lg:w-10/12 w-full mx-auto">
              <span className="footer-title font-sora text-sm font-light opacity-100 normal-case">
                Be the first to hear our news
              </span>
              <form onSubmit={handleSubmit(onSubmit)} className="form-control ">
                <div className="flex flex-row flex-wrap gap-2">
                  <input
                    type="text"
                    placeholder="Email Address"
                    className="input border border-black w-80 pr-16 bg-transparent"
                    {...register("email", {
                      required: "Email Address is required",
                      validate: {
                        // maxLength: (v) =>
                        //   v.length <= 50 || "The email should have at most 50 characters",
                        matchPattern: (v) =>
                          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                            v
                          ) || "Email address must be a valid address",
                      },
                    })}
                  />

                  <button className="m-btn-fix  w-full   md:w-24  btn  font-sora font-semibold bg-[#FF0127] text-white normal-case hover:bg-[#FF0127]  rounded-lg">
                    {loadingState && (
                      <span className="loading loading-spinner loading-xs"></span>
                    )}
                    Send
                  </button>
                </div>
              </form>
              {errors.email && (
                <span
                  role="alert"
                  className="mt-1 font-sora text-xs font-bold text-red-500"
                >
                  {errors.email?.message}
                </span>
              )}
              <ToastContainer />
            </div>
          </footer>
          <div className="flex flex-row flex-wrap mt-12">
            <div className="flex gap-3 flex-1 w-full flex-wrap">
              <p className="font-sora text-sm font-light">
                © 2024 OneGallon - All rights reserved
              </p>
              <div className="flex gap-2">
                {/* <Link href="/privacy" className="font-sora text-sm font-light">Terms</Link> */}

                <Link href="/privacy" className="font-sora text-sm font-light">
                  Terms & Privacy
                </Link>
                <Link href="/account-deletion" className="font-sora text-sm font-light">
                 Account Deletion
                </Link>
              </div>
            </div>
            <div className="flex gap-2 ">
              <a href="https://facebook.com/OneGallon" target="_blank">
                <svg
                  width="31"
                  height="30"
                  viewBox="0 0 31 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.3971 15.0823V21.426C13.3971 21.4696 13.4141 21.5114 13.4443 21.5423C13.4745 21.5731 13.5154 21.5905 13.5581 21.5905H15.8838C15.9265 21.5905 15.9674 21.5731 15.9976 21.5423C16.0278 21.5114 16.0448 21.4696 16.0448 21.426V14.9726H17.7085C17.7287 14.9752 17.7493 14.9733 17.7687 14.9672C17.7882 14.961 17.8062 14.9506 17.8214 14.9368C17.8367 14.9229 17.8488 14.9059 17.8571 14.8869C17.8654 14.8678 17.8696 14.8471 17.8695 14.8263L18.0305 12.8702C18.0305 12.7788 18.0305 12.7057 17.8695 12.7057H16.0805V11.3163C16.0805 11.1611 16.1408 11.0123 16.2482 10.9026C16.3555 10.7929 16.5012 10.7312 16.653 10.7312H17.941C17.9837 10.7312 18.0247 10.7139 18.0549 10.683C18.0851 10.6522 18.102 10.6104 18.102 10.5667V8.62888C18.102 8.58525 18.0851 8.54341 18.0549 8.51256C18.0247 8.4817 17.9837 8.46436 17.941 8.46436H15.7585C15.1448 8.46434 14.556 8.71223 14.1204 9.15399C13.6847 9.59574 13.4376 10.1955 13.4329 10.8227V12.6508H12.288C12.2453 12.6508 12.2043 12.6681 12.1741 12.699C12.1439 12.7298 12.127 12.7717 12.127 12.8154V14.7532C12.127 14.7968 12.1439 14.8387 12.1741 14.8695C12.2043 14.9004 12.2453 14.9177 12.288 14.9177H13.4329L13.3971 15.0823Z"
                    fill="black"
                  />
                  <path
                    d="M15.3113 0.456829C12.4985 0.438807 9.7437 1.27354 7.39514 2.8555C5.04658 4.43745 3.20979 6.69558 2.11707 9.34431C1.02434 11.993 0.7247 14.9134 1.25611 17.7361C1.78752 20.5589 3.12612 23.1572 5.10256 25.2025C7.079 27.2478 9.60455 28.6483 12.3598 29.2268C15.1151 29.8053 17.9764 29.5359 20.5819 28.4526C23.1873 27.3693 25.42 25.5209 26.9974 23.1409C28.5749 20.761 29.4263 17.9565 29.444 15.0821C29.4582 13.1728 29.1036 11.2794 28.4006 9.5104C27.6975 7.74138 26.6599 6.13149 25.3471 4.77292C24.0343 3.41435 22.4721 2.3338 20.75 1.59318C19.0279 0.852552 17.1797 0.466393 15.3113 0.456829V0.456829Z"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                  />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/onegallonfuel/"
                target="_blank"
              >
                <svg
                  width="31"
                  height="30"
                  viewBox="0 0 31 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.8664 10.6399C18.7057 10.6363 18.5476 10.682 18.4125 10.7709C18.2774 10.8599 18.1715 10.9882 18.1084 11.1393C18.0452 11.2903 18.0278 11.4572 18.0583 11.6185C18.0888 11.7797 18.1658 11.928 18.2795 12.0441C18.3931 12.1603 18.5382 12.239 18.696 12.2702C18.8538 12.3013 19.0171 12.2835 19.1649 12.2189C19.3128 12.1544 19.4382 12.0462 19.5253 11.9081C19.6124 11.7701 19.657 11.6085 19.6535 11.4443C19.6535 11.231 19.5706 11.0264 19.423 10.8756C19.2753 10.7247 19.0751 10.6399 18.8664 10.6399ZM15.2885 11.682C14.6339 11.682 13.994 11.8803 13.4498 12.252C12.9055 12.6236 12.4813 13.1518 12.2309 13.7698C11.9804 14.3878 11.9148 15.0678 12.0425 15.7239C12.1702 16.3799 12.4854 16.9826 12.9483 17.4556C13.4111 17.9286 14.0008 18.2506 14.6428 18.3811C15.2848 18.5116 15.9503 18.4447 16.555 18.1887C17.1597 17.9327 17.6766 17.4992 18.0403 16.943C18.404 16.3868 18.598 15.733 18.598 15.064C18.5982 14.1796 18.2594 13.3303 17.6542 12.6981C17.0489 12.0659 16.2253 11.7011 15.36 11.682H15.2885ZM15.2885 17.1665C14.8674 17.1665 14.4559 17.0389 14.1058 16.7998C13.7557 16.5608 13.4828 16.221 13.3217 15.8235C13.1606 15.426 13.1184 14.9885 13.2006 14.5665C13.2827 14.1445 13.4855 13.7569 13.7832 13.4526C14.0809 13.1484 14.4602 12.9412 14.8732 12.8572C15.2861 12.7733 15.7142 12.8164 16.1032 12.981C16.4922 13.1457 16.8247 13.4246 17.0586 13.7823C17.2925 14.1401 17.4173 14.5607 17.4173 14.991C17.4269 15.2767 17.3813 15.5615 17.283 15.8292C17.1848 16.0969 17.0359 16.3422 16.8448 16.551C16.6537 16.7599 16.4242 16.9281 16.1695 17.0463C15.9147 17.1644 15.6397 17.2301 15.36 17.2396L15.2885 17.1665ZM21.9792 12.1756C21.9792 11.0798 21.5532 10.0289 20.795 9.2541C20.0368 8.47927 19.0084 8.04395 17.9361 8.04395H12.5693C11.497 8.04395 10.4687 8.47927 9.71045 9.2541C8.95224 10.0289 8.52625 11.0798 8.52625 12.1756V17.6601C8.52625 18.7558 8.95224 19.8067 9.71045 20.5815C10.4687 21.3564 11.497 21.7917 12.5693 21.7917H17.9361C19.0084 21.7917 20.0368 21.3564 20.795 20.5815C21.5532 19.8067 21.9792 18.7558 21.9792 17.6601V12.1756ZM20.709 17.6601C20.7114 18.0328 20.6413 18.4024 20.5028 18.7473C20.3643 19.0922 20.1601 19.4055 19.9021 19.6691C19.6442 19.9327 19.3376 20.1414 19.0001 20.2829C18.6626 20.4245 18.3009 20.4961 17.9361 20.4937H12.5693C12.2045 20.4961 11.8428 20.4245 11.5054 20.2829C11.1679 20.1414 10.8612 19.9327 10.6033 19.6691C10.3453 19.4055 10.1411 19.0922 10.0026 18.7473C9.86413 18.4024 9.79406 18.0328 9.79644 17.6601V12.1756C9.79406 11.8028 9.86413 11.4332 10.0026 11.0883C10.1411 10.7434 10.3453 10.4301 10.6033 10.1665C10.8612 9.90289 11.1679 9.69424 11.5054 9.5527C11.8428 9.41115 12.2045 9.33949 12.5693 9.34192H17.9361C18.3009 9.33949 18.6626 9.41115 19.0001 9.5527C19.3376 9.69424 19.6442 9.90289 19.9021 10.1665C20.1601 10.4301 20.3643 10.7434 20.5028 11.0883C20.6413 11.4332 20.7114 11.8028 20.709 12.1756V17.6601Z"
                    fill="black"
                  />
                  <path
                    d="M15.3421 0.457031C12.5328 0.457031 9.78654 1.30836 7.45066 2.90335C5.11478 4.49833 3.29418 6.76534 2.21909 9.41771C1.14401 12.0701 0.86275 14.9887 1.41082 17.8044C1.9589 20.6201 3.31172 23.2065 5.29822 25.2366C7.28472 27.2666 9.81565 28.6491 12.571 29.2092C15.3264 29.7693 18.1824 29.4818 20.7779 28.3832C23.3733 27.2845 25.5918 25.424 27.1526 23.037C28.7134 20.6499 29.5464 17.8435 29.5464 14.9726C29.5464 11.1228 28.0499 7.43071 25.3861 4.70851C22.7222 1.98632 19.1093 0.457031 15.3421 0.457031V0.457031Z"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                  />
                </svg>
              </a>
              <a href="https://linkedin.com/company/onegallon" target="_blank">
                <svg
                  height={30}
                  viewBox="0 0 24 24"
                  width={31}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M875 682c6.075 0 11-4.925 11-11s-4.925-11-11-11-11 4.925-11 11 4.925 11 11 11zm0-1c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm6-6h-2.431v-3.515c0-.92-.38-1.549-1.217-1.549-.64 0-.995.424-1.16.833-.063.146-.053.35-.053.555V675h-2.409s.032-6.227 0-6.793h2.409v1.066c.142-.466.912-1.132 2.14-1.132 1.524 0 2.721.978 2.721 3.082V675zm-9.705-7.643h-.016c-.776 0-1.279-.52-1.279-1.178 0-.67.518-1.179 1.31-1.179.79 0 1.277.507 1.293 1.178 0 .658-.502 1.179-1.308 1.179zm-1.018.85h2.144V675h-2.144v-6.793z"
                    fill="#000"
                    transform="translate(-863 -659)"
                    fillRule="evenodd"
                    stroke="none"
                    strokeWidth={1}
                  />
                </svg>
              </a>
              <a href="https://twitter.com/onegallonfuel" target="_blank">
                <svg
                  fill="#000"
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="30"
                  viewBox="0 0 512 512"
                  xmlSpace="preserve"
                >
                  <path d="M256 0C114.609 0 0 114.609 0 256c0 141.392 114.609 256 256 256 141.392 0 256-114.608 256-256C512 114.609 397.392 0 256 0zm0 472c-119.297 0-216-96.702-216-216 0-119.297 96.703-216 216-216 119.298 0 216 96.703 216 216 0 119.298-96.702 216-216 216z" />
                  <path d="M384 170.922c-4.313 2.562-17.248 7.671-29.313 8.953 7.736-4.491 19.188-19.203 22.016-30.89-7.435 5.109-24.516 12.562-32.95 12.562 0 0 0 .023.016.039C334.141 150.75 320.608 144 305.577 144c-29.154 0-52.81 25.461-52.81 56.875 0 4.36.481 8.595 1.357 12.672h-.017c-39.562-1.094-85.811-22.446-111.874-59-16 29.852-2.156 63.046 16.015 75.141-6.203.516-17.671-.766-23.061-6.407-.375 19.797 8.484 46.048 40.735 55.563-6.221 3.61-17.19 2.579-21.984 1.781 1.687 16.75 23.437 38.623 47.202 38.623-8.47 10.534-37.373 29.706-73.141 23.596C152.298 358.782 180.625 368 210.608 368c85.205 0 151.376-74.359 147.814-166.093 0-.11-.031-.219-.031-.313 0-.25.031-.5.031-.719 0-.281-.031-.562-.031-.859 7.75-5.688 18.155-15.782 25.609-29.094z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}
