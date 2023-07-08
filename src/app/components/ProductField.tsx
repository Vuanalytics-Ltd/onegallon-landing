"use client"
import React,{useState} from "react"
import { useField } from '@formiz/core'

export function ProductField(props: {name: string , required: string}){
    const { setValue, value } = useField(props)
    const [checkedValue,setCheckedValue] = useState('')
   
    const handleChange = (e: { target: { value: React.SetStateAction<string> , checked: boolean} }) => {
        if (e.target.checked){
            setCheckedValue(e.target.value)
            //setValue(e.target.value)

            
        }
        
    }


    return (
      <div className="flex flex-col">
        <h2 className="font-gotham font-medium text-base mb-3 text-center">
          Select Product
        </h2>
        <div className="form-control lg:w-5/12  w-10/12 max-w-sm mx-auto">
          
          <label htmlFor="petrol" className={`label cursor-pointer border border-[#737373] rounded-lg mb-3 ${checkedValue === 'petrol' ? 'bg-black' : ''}`}>
            <span className={`w-full font-gotham font-medium label-text text-center ${checkedValue === 'petrol' ? 'text-white' : ''}`}>Petrol</span>
            <input
              id="petrol"
              type="radio"
              name="radio-10"
              className="radio "
              checked={checkedValue === 'petrol'}
              hidden
            //   onChange={handleChange}
              onChange={ (e) => { handleChange(e) , setValue(e.target.value)} }

              value="petrol"
            />
          </label>
          <label htmlFor="diesel" className={`label cursor-pointer border border-[#737373] rounded-lg mb-10 ${checkedValue === 'diesel' ? 'bg-black' : ''}`}>
            <span className={`w-full font-gotham font-medium label-text text-center ${checkedValue === 'diesel' ? 'text-white' : ''}`}>Diesel</span>
            <input
              id="diesel"
              type="radio"
              name="radio-10"
              className="radio "
              checked={checkedValue === 'diesel'}
              
              hidden
              value="diesel"  
            //   onChange={[(e) => handleChange(e) , (e) => setValue(e.target.value)]}
             onChange={ (e) => { handleChange(e) , setValue(e.target.value)} }
            />
          </label>
          
        </div>
        {/* <input
          value={value ?? ""} // Pass the value for the input
          onChange={(e) => setValue(e.target.value)} // Update the value onChange
        /> */}
      </div>
    );
}