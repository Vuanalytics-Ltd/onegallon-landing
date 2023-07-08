"use client"
import React,{useState} from "react"
import { useField } from '@formiz/core'

export function SummaryField(props: {name: string , data: {destination: string , plan: string , product: string}}){
    //const { setValue, value } = useField(props)
    
    // console.log("summary" , value)
    return (
        <div className="flex flex-col">
              <h2 className="font-gotham font-medium text-base mb-3 text-center">
                Price Estimation Summary
              </h2>
              <div className="form-control lg:w-5/12  w-10/12 max-w-sm mx-auto">
                    <p className="text-center text-base font-gotham font-light">The estimated price of {props.data.product} to be delivered to {props.data.destination} is GHC 50 </p>
              </div>
        </div>
    )
}