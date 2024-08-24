import Layout from "@/components/Layout";
import React, { useEffect } from "react";
import { useForm , SubmitHandler } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


type Inputs = {
    name: string,
    email: string,
    phone_number: string,
    message: string
  }
  

export default function AccountDeletion(){
  const {register,handleSubmit,formState,formState: {errors , isSubmitSuccessful},reset} = useForm<Inputs>()
  const [loadingState,setLoadingState] = React.useState(false)
  const notify = () => toast('Your account has been deleted')

  useEffect(() => {
    if(formState.isSubmitSuccessful)
     {
        reset({
            name: '',
            phone_number: '',
            email: '',
            message: ''
        })
     }
    
  }, [formState,reset])

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoadingState(true)

    
    // const response = await fetch('/api/sheet'+ '?' + new URLSearchParams(sheetData) )
    const result = {
        name: data?.name,
        phone_number: data?.phone_number,
        email: data?.email
    }
    try {
        const response = await fetch(process.env.NEXT_PUBLIC_DELETE_REQUEST as string, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(result),
          });

          const content = await response.json()

    
          if(content?.status === 200){
              notify()
              setLoadingState(false)
          } else {
              setLoadingState(false)
          }
        
    } catch (error) {
        setLoadingState(false);
    }    
}

    return (
      <Layout>
        <div className="w-full min-h-screen py-8">
          <div className="container px-4 mx-auto">
            <h1 className="text-center font-gotham font-medium text-2xl mb-4">
              Account Deletion
            </h1>
            <div className="py-3 font-sora font-normal">
              <div className="">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col  items-center w-full "
                >
                  <div className="w-full flex flex-col items-center mb-4">
                    <input
                      type="text"
                      placeholder="Name*"
                      className="input border border-black bg-transparent placeholder:text-black text-black w-full mb-2 md:max-w-lg"
                      {...register("name", { required: true, minLength: 2 })}
                    />
                    {errors.name?.type === "required" && (
                      <span
                        role="alert"
                        className="mt-1 font-sora text-xs font-bold text-black"
                      >
                        A name is required
                      </span>
                    )}
                  </div>
                  <div className="w-full flex flex-col items-center mb-4">
                    <input
                      type="email"
                      placeholder="Email"
                      className="bg-transparent placeholder:text-black text-black input border border-black w-full md:max-w-lg  mb-2"
                      {...register("email", {
                        required: false
                        // required: "Email Address is required",
                        // validate: {
                        //   matchPattern: (v) =>
                        //     /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                        //       v
                        //     ) || "Email address must be a valid address",
                        // },
                      })}
                    />
                    {errors.email && (
                      <span
                        role="alert"
                        className="mt-1 font-sora text-xs font-bold text-black"
                      >
                        {errors.email?.message}
                      </span>
                    )}
                  </div>
                  <div className="w-full flex flex-col items-center mb-4">
                    <input
                      type="text"
                      placeholder="Phone*"
                      className="bg-transparent placeholder:text-black text-black input border border-black w-full mb-2 md:max-w-lg"
                      {...register("phone_number", { required: true })}
                    />
                    {errors.phone_number?.type === "required" && (
                      <span
                        role="alert"
                        className="mt-1 font-sora text-xs font-bold text-black"
                      >
                        A phone number is required
                      </span>
                    )}
                  </div>
                  {/* <div className="mb-4">
                    <textarea
                      className="bg-transparent placeholder:text-black text-black textarea border border-black w-full max-w-md mb-2"
                      placeholder="Message*"
                      {...register("message", { required: true, minLength: 2 })}
                    ></textarea>
                    {errors.message?.type === "required" && (
                      <span
                        role="alert"
                        className="mt-1 font-sora text-xs font-bold text-black"
                      >
                        Message is required
                      </span>
                    )}
                  </div> */}
                  <button
                    type="submit"
                    className="m-btn-fix  btn bg-black hover:bg-black capitalize font-sora font-semibold text-white w-full md:max-w-lg"
                  >
                    {loadingState && (
                      <span className="loading loading-spinner"></span>
                    )}
                    Send
                  </button>
                </form>
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
}