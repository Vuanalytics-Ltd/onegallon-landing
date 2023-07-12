"use client"
import react, {useState} from 'react'
import { PortableText } from "@portabletext/react";
import {PortableTextBlock} from '@portabletext/types'


type FaqInput = {
    _id: string,
    question: string,
    answer: PortableTextBlock,
    _type: string
}[]



const portableComponents = {
   list: {
    bullet: ({children}: any) => <ul className="ml-8 mt-3">{children}</ul>,
   },
   listItem: {
      bullet: ({children}: any) => <li className='list-disc mb-3'>{children}</li>,
   },
   block: {
      p: ({children}: any) => <p >{children}</p>,

   }

}

export function FAQ({data = [] } : {data: FaqInput} ){
   
  
  // console.log("data",data)

    return (
      <div className="bg-[#F3F3F3] p-4" id="faqs">
        <div className="py-12 container mx-auto px-4">
          <h1 className="pt-6 pb-2 font-clashDisplay font-medium md:text-4xl text-3xl">
            FAQs
          </h1>
          <div className="relative  w-full pb-8 ">
            <div className="">
              <div className="mt-8 grid  divide-y divide-neutral-200">
                {
                  data.map((item) => {
                      return (
                      <div key={item._id} className="py-5">
                        <details className="group">
                          <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                            <li className="font-gotham font-medium list-disc text-base">
                              {item.question} 
                            </li>
                            <span className="transition group-open:rotate-90">
                              
                              <svg
                                width="8"
                                height="14"
                                viewBox="0 0 8 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1 1L7.17644 7.17644L1.17647 13.1764"
                                  stroke="#7E7E7E"
                                  strokeLinecap="round"
                                />
                              </svg>
                            </span>
                          </summary>
                          <div className="group-open:animate-fadeIn mt-3 font-gotham text-base font-light">
                              <div className='ml-5'>
                              {item?.answer ? 
                              <PortableText 
                                 value={item.answer}
                                 components={portableComponents}           
                              />  : null }         
                              </div>
                              
                          </div>
                        </details>
                        
                      </div>
                      )   
                  })
                }
                
              
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}