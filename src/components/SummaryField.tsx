import React,{useState} from "react"
import useSWR from 'swr'

// import { getEstimatorData } from "../lib/estimator"


// async function getEstimatorData(data: {lat: number , lng: number , fuel_type: string }) {
//   try {
//       const res = await fetch(`https://api.1gallon.com/price-estimates?lat=${data.lat}&lng=${data.lng}&radius=5&radius_unit=km&fuel_type=${data.fuel_type}`);
      
//       if(!res.ok) {
//           throw new Error('Failed to fetch data')
//         }
      
//       return res.json


//   } catch (error) {
//       console.log("error" , error)
//   }
  

  

// }


// export async function SummaryField(props: {name: string , data: {destination: {lat: number , lng: number , address: string} , plan: string , product: string}}){
//     //const { setValue, value } = useField(props)
    
//     const [summary,setSummaryData] = React.useState({})

//          const res = {
//         lat: props.data.destination?.lat,
//         lng: props.data.destination?.lng,
//         fuel_type: props.data.product
//       }

//     //   const fetcher = async (url: any) => {
//     //     const response = await fetch(url);
//     //     if (!response.ok) {
//     //       throw new Error('An error occurred while fetching the data.');
//     //     }
//     //     return response.json();
//     //   };  

//     // const { data , error ,isLoading } = useSWR(`https://api.1gallon.com/price-estimates?lat=${res.lat}&lng=${res.lng}&radius=5&radius_unit=km&fuel_type=${res.fuel_type}`,fetcher)

//     // console.log("data",data)
//     // console.log("error",error)
//     // console.log("isLoading",isLoading)
//     // React.useEffect(() => {
//     //      const res = {
//     //     lat: props.data.destination?.lat,
//     //     lng: props.data.destination?.lng,
//     //     fuel_type: props.data.product
//     //   }
//     //   const fetchData = async () => {
//     //      const results = await getEstimatorData(res)
//     //      console.log("results",results)
//     //   }

//     //   fetchData()
//     // },[])
//     // React.useEffect(() => {
//     //   const res = {
//     //     lat: props.data.destination?.lat,
//     //     lng: props.data.destination?.lng,
//     //     fuel_type: props.data.product
//     //   }
//     //   const fetchData = async () => {
//     //     const results = await getEstimatorData(res)
//     //     // setSummaryData(results)
//     //     console.log(results)
//     //   }

//     //   fetchData()
//     // },[props.data])
    

//     // const results = await getEstimatorData(res)
    
//     // console.log("res",res)

//     return (
//         <div className="flex flex-col">
//               <h2 className="font-gotham font-medium text-base mb-3 text-center">
//                 Price Estimation Summary
//               </h2>
//               <div className="form-control lg:w-5/12  w-10/12 max-w-sm mx-auto">
//                     {/* <p className="text-center text-base font-gotham font-light">The estimated price of {props.data.product} to be delivered to {props.data.destination} is GHC 50 </p> */}
//               </div>
//         </div>
//     )
// }


export function SummaryField(props: {name: string , data: {destination: {lat: number , lng: number , address: string} , plan: string , product: string}}){
  
         const res = {
        lat: props.data.destination?.lat,
        lng: props.data.destination?.lng,
        fuel_type: props.data.product
      }

      const fetcher = async (url: any) => {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('An error occurred while fetching the data.');
        }
        return response.json();
      };

  const { data, error } = useSWR(`https://api.1gallon.com/price-estimates?lat=${res.lat}&lng=${res.lng}&radius=5&radius_unit=km&fuel_type=${res.fuel_type}`,fetcher)
 
  if (error) return <div className="font-gotham font-medium text-base mb-3 text-center">Failed to load</div>
  if (!data) return <div className="font-gotham font-medium text-base mb-3 text-center">Loading...</div>
  
  // console.log("data",data)

  return (
    <div className="flex flex-col">
    <h2 className="font-gotham font-medium text-base mb-3 text-center">
      Price Estimation Summary
    </h2>
    <div className="form-control lg:w-5/12  w-10/12 max-w-sm mx-auto">
          {/* <p className="text-center text-base font-gotham font-light">The estimated price of {props.data.product} to be delivered to {props.data.destination} is GHC 50 </p> */}
    </div>
</div>
  )
}