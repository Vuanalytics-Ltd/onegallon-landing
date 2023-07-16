import React,{useState} from "react"
import { useField } from '@formiz/core'

export function PriceRangeField(props: {name: string , required: string}){
  const { setValue, value , errorMessage , isValid , isPristine , isSubmitted , resetKey } = useField(props)
    
  const [isFocused,setIsFocused] = useState(false)

  const showError = !isValid && !isFocused && (!isPristine || isSubmitted)

  const [checkedValue,setCheckedValue] = useState('')
   
  const handleChange = (e: { target: { value: React.SetStateAction<string> , checked: boolean} }) => {
        if (e.target.checked){
            setCheckedValue(e.target.value)
            //setValue(checkedValue)
        }
        
    }

    const data = [
        {
            title: "Lite",
            price: "GHS 20.00 - GHS 25.00",
            key: "lite"
        },
        {
            title: "Regular",
            price: "GHS 26.00 - GHS 30.00",
            key: "regular"
        },
        {
            title: "Premium",
            price: "GHS 31.00 - GHS 35.00",
            key: "premium"
        },
    ]

    return (
        <div className="flex flex-col">
          <h2 className="font-gotham font-medium text-base mb-3 text-center">
            Price Range for Service plan
          </h2>
          <div className="form-control  mx-auto">
            {
                data.map((item) => {
                       return (
                         <label
                           key={item.key}
                           htmlFor={item.key}
                           className={`label cursor-pointer border border-[#737373] rounded-lg mb-3 px-4 ${
                            checkedValue === item.key ? "bg-black" : ""
                          }`}
                         >
                          {/* ${
                             checkedValue === item.key ? "bg-black" : ""
                           } */}
                          <span
                               className={`px-1 font-gotham font-medium label-text ${
                                checkedValue === item.key ? "text-white" : ""
                              }  `}
                             >
                              {/* ${
                                 checkedValue === item.key ? "text-white" : ""
                               } */}
                               {item.title}
                             </span>
                             <span
                               className={`font-gotham font-medium label-text ${checkedValue === item.key ? "text-white" : ""} `}
                             >
                              {/* ${checkedValue === item.key ? "text-white" : ""} */}
                               {item.price}
                             </span>

                           <input
                             id={item.key}
                             type="radio"
                             name="radio-10"
                             className="radio "
                             checked={checkedValue === item.key}
                             hidden
                             //onChange={handleChange}
                             onChange={ (e) => { handleChange(e) , setValue(e.target.value)} }
                             value={item.key}
                            //  onFocus={() => setIsFocused(true)}
                            //  onBlur={() => setIsFocused(false)}
                             key={resetKey}
                           />
                         </label>
                       );
                })
            }
            {/* {
              showError && (
                <p className="font-gotham font-medium text-sm text-red-500">{errorMessage}</p>
              )
            } */}
          
           
            
          </div>
         
        </div>
      );
}