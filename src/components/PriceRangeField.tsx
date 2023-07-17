import React,{useState} from "react"
import { useField } from '@formiz/core'
import useSWR from 'swr'


export function PriceRangeField(props: {name: string , data: {destination: {lat: number , lng: number , address: string} , plan: string , product: string}}){
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

    

    
    const res = {
      lat: props.data.destination?.lat,
      lng: props.data.destination?.lng,
      fuel_type: props.data.product
    }

    console.log("data",props)

    const fetcher = async (url: any) => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('An error occurred while fetching the data.');
      }
      return response.json();
    };

  //   const data = [
  //     {
  //       service_plan_name: "Lite",
  //       range_from: "20.00 ",
  //       range_to: "25.00"
  //     },
  //     {
  //       service_plan_name: "Regular",
  //       range_from: "26.00 ",
  //       range_to: "30.00"
  //     },
  //     {
  //       service_plan_name: "Premium",
  //       range_from: "31.00 ",
  //       range_to: "35.00"
  //     },
  // ]
  
    const { data: results, error } = useSWR(`https://api.1gallon.com.gh/price-estimates?lat=${res.lat}&lng=${res.lng}&radius=5&radius_unit=km&fuel_type=${res.fuel_type}`,fetcher)

    if (error) return <p className="font-gotham font-medium text-base mb-3 text-center">Failed to load</p>
    if (!results) return <p className="font-gotham font-medium text-base mb-3 text-center">Loading...</p>

    console.log("results",results)

    return (
        <div className="flex flex-col">
          <h2 className="font-gotham font-medium text-base mb-3 text-center">
            Price Range for Service plan
          </h2>
          <div className="form-control  mx-auto">
            {
                results?.data.map((item: {service_plan_name: string , range_from: string , range_to: string} ,index: number) => {
                       return (
                         <label
                           key={"price___range__" + index }
                           htmlFor={"price___range__" + index }
                           className={`label cursor-pointer border border-[#737373] rounded-lg mb-3 px-4 hover:bg-black`}
                         >
                          {/* ${
                             checkedValue === item.key ? "bg-black" : ""
                           } */}
                          <span
                               className={`px-1 font-gotham font-medium label-text `}
                             >
                              {/* ${
                                 checkedValue === item.key ? "text-white" : ""
                               } */}
                               {item.service_plan_name}
                             </span>
                             <span
                               className={`font-gotham font-medium label-text  hover:text-white`}
                             >
                              {/* ${checkedValue === item.key ? "text-white" : ""} */}
                               GHC {item.range_from} - GHC {item.range_to}
                             </span>

                           <input
                             id={item.service_plan_name}
                             type="radio"
                             name="radio-10"
                             className="radio "
                             checked={checkedValue === item.service_plan_name}
                             hidden
                             //onChange={handleChange}
                             onChange={ (e) => { handleChange(e) , setValue(e.target.value)} }
                             value={item.service_plan_name}
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