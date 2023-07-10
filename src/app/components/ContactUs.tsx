"use client"
import React, { useEffect } from 'react'
import { useForm , SubmitHandler } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

type Inputs = {
    name: string,
    email: string,
    phone: string,
    message: string
  }

export function ContactUs(){
    const {register,handleSubmit,formState,formState: {errors , isSubmitSuccessful},reset} = useForm<Inputs>()
    
    const [loadingState,setLoadingState] = React.useState(false)

    const notify = () => toast('Thanks for contacting us. We will get back to you soon')

    useEffect(() => {
        if(formState.isSubmitSuccessful)
         {
            reset({
                name: '',
                phone: '',
                email: '',
                message: ''
            })
         }
        
      }, [formState,reset])

      const onSubmit: SubmitHandler<Inputs> = async (data) => {
        setLoadingState(true)
         
        // console.log("data", data)

        const contact = [data?.name , data?.email , data?.phone ,  data?.message ]
        
        const sheetData = {
            range: 'Contacts',
            data: contact
        }
        
        const response = await fetch('/api/sheet' , {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sheetData)
        })

        const content = await response.json()

        
        if(content?.status === 200){
            notify()
            setLoadingState(false)
        } else {
            setLoadingState(true)
        }

        
        
    }  

    return(
    <div className="bg-[#FF0127] p-4" id="contact">
        <div className="container px-4 mx-auto">
            <div className="flex flex-row flex-wrap py-6 gap-4">
                 <div className="flex flex-col flex-auto w-full lg:w-5/12">
                       <h1 className="text-white font-clashDisplay font-medium lg:text-4xl text-3xl pb-10">Contact Us</h1>
                       <h2 className="font-gotham text-white font-medium text-xl mb-3">Questions & Support</h2>
                       <h2 className="font-gotham text-white font-light text-base mb-3">Need help with one of our services, or have a query about your account?</h2>
                       <h2 className="font-gotham text-white font-light text-base mb-3">Drop us a message and we&apos;ll be there for you</h2>


                 </div>
                 <div className="flex flex-col  flex-auto w-full lg:w-5/12">
                      <form onSubmit={handleSubmit(onSubmit)} className="xl:mx-auto xl:w-1/2">
                          <div className='mb-4'>
                            <input type="text" placeholder="Name*" className="input border border-white bg-transparent placeholder:text-white text-white w-full max-w-sm mb-2" 
                            {...register("name", { required: true, minLength: 2 })} />
                            {errors.name?.type === "required" && (
                                    <span
                                        role="alert"
                                        className="mt-1 font-sora text-xs font-bold text-white"
                                    >
                                        A name is required
                                    </span>
                                    )}
                          </div>
                          <div className="mb-4">
                             <input type="email" placeholder="Email*" className="bg-transparent placeholder:text-white text-white input border border-white w-full max-w-sm mb-2" 
                             {...register("email", { required: "Email Address is required" })}
                             />
                             {errors.email && (
                                <span
                                    role="alert"
                                    className="mt-1 font-sora text-xs font-bold text-white"
                                >
                                    {errors.email?.message}
                                </span>
                                )}
                          </div>
                          <div className="mb-4">
                            <input type="text" placeholder="Phone*" className="bg-transparent placeholder:text-white text-white input border border-white w-full max-w-sm mb-2" 
                                {...register("phone", { required: true })}
                            />
                                  {errors.phone?.type === "required" && (
                                    <span
                                        role="alert"
                                        className="mt-1 font-sora text-xs font-bold text-white"
                                    >
                                        A phone number is required
                                    </span>
                                    )}
                          </div>
                          <div className='mb-4'>
                             <textarea className="bg-transparent placeholder:text-white text-white textarea border border-white w-full max-w-sm mb-2" placeholder="Message*"
                               {...register("message", { required: true, minLength: 2 })}
                             ></textarea>
                                 {errors.message?.type === "required" && (
                                <span
                                    role="alert"
                                    className="mt-1 font-sora text-xs font-bold text-white"
                                >
                                    Message is required
                                </span>
                                )}
                          </div>
                          <button  type="submit" className=" btn bg-white hover:bg-white capitalize font-sora font-semibold text-[#FF0127] w-1/2">
                             { loadingState && <span className="loading loading-spinner"></span> }
                             Send
                         </button>
                      </form>  
                      <ToastContainer />
                 </div>
            </div>
        </div>
    </div>
    )
}