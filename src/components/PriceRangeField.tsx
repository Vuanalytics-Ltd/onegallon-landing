import React,{useState} from "react"
import { useField } from '@formiz/core'
import useSWR from 'swr'


export function PriceRangeField(props: {name: string , data: {destination: {lat: number , lng: number , address: string , shouldFetch: boolean} , plan: string , product: string}}){
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

    

    
    const FUEL_IDS: Record<string, string | undefined> = {
      petrol: process.env.NEXT_PUBLIC_FUEL_ID_PETROL,
      diesel: process.env.NEXT_PUBLIC_FUEL_ID_DIESEL,
    }

    const res = {
      lat: props.data.destination?.lat,
      lng: props.data.destination?.lng,
      fuel_id: FUEL_IDS[props.data.product]
    }

    // console.log("data",props)
        // console.count("results")

    const isFetch = props.data.destination?.shouldFetch   


    // console.log("isFetch",isFetch )

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
  
    const { data: results, error } = useSWR( isFetch && res.fuel_id ?  `https://api.onegallon.com.gh/price-estimates?lat=${res.lat}&lng=${res.lng}&radius=5&radius_unit=km&fuel_id=${res.fuel_id}` : null,fetcher , {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    })

    if (error) return <p className="font-gotham font-medium text-base mb-3 text-center text-red-500">Failed to load</p>
    if (!results) return <p className="font-gotham font-medium text-base mb-3 text-center">Loading...</p>


    return (
        <div className="flex flex-col">
          <h2 className="font-gotham font-medium text-base mb-3 text-center">
            Delivery fee by plan
          </h2>
          <div className="form-control  mx-auto">
            {
                results?.data.map((item: {plan_id: string , plan_name: string , available: boolean , delivery_fee: string | null , fee_basis: string | null} ,index: number) => {
                       return (
                         <label
                           key={"price___range__" + index }
                           htmlFor={item.plan_id }
                           className={`label border border-[#737373] rounded-lg mb-3 px-4 ${item.available ? "cursor-pointer hover:bg-black" : "opacity-50 cursor-not-allowed pointer-events-none"}`}
                         >
                          <span
                               className={`px-1 font-gotham font-medium label-text `}
                             >
                               {item.plan_name}
                             </span>
                             <span
                               className={`font-gotham font-medium label-text  hover:text-white`}
                             >
                               {item.available ? `GHC ${item.delivery_fee}` : "Unavailable"}
                             </span>

                           <input
                             id={item.plan_id}
                             type="radio"
                             name="radio-10"
                             className="radio "
                             checked={checkedValue === item.plan_id}
                             disabled={!item.available}
                             hidden
                             //onChange={handleChange}
                             onChange={ (e) => { handleChange(e) , setValue(e.target.value)} }
                             value={item.plan_id}
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