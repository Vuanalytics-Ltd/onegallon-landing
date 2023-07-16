import React,{useState , useContext  } from "react"
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import { useField } from '@formiz/core'
import Modal from './Modal'
import Geocode from "react-geocode";

export function DestinationField(props : {name: string , required: string }){

    const [isOpen,setIsOpen] = React.useState(false)

    const { setValue, value , errorMessage , isValid , isPristine , isSubmitted , resetKey } = useField(props)
    
    const [isFocused,setIsFocused] = useState(false)

    const showError = !isValid && !isFocused && (!isPristine || isSubmitted)

    const  [marker , setMarker] = React.useState({lat: 5.614818,lng: -0.205874})
    

    const handleOpenModal = () => {
        setIsOpen(true)
    }
  
    const handleCloseModal = () => {
        setIsOpen(false)
    }

   
    
    React.useEffect(() => {
        if ("geolocation" in navigator) {
            console.log("Available");
          } else {
            console.log("Not Available");
          }
    },[])
    
    
    const MapKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY as string
    
    Geocode.setApiKey(MapKey)

    const debounce = (cb: any,delay: number) => {
      let timer: any;
      return function (...args: any){
          if (timer) clearTimeout(timer);
          timer = setTimeout(() => {
              cb(...args)
          } , delay)

      }
  }

    const getAddress = debounce(
       (value: string) => {
        if(value.length > 2){ 
          Geocode.fromAddress(value,"","", "GH").then(
            (response) => {
                 console.log(response)   
                const location = response?.results[0].geometry.location  
                setValue({address: value , lat: location.lat , lng: location.lng})

            },
            (error) => {
             console.error(error)
         }
          )
         }    
       },2000
    )
    
    const coordinatesFromAddress = (address: string) => {
       console.log("address",address)
       setValue({address: address})
       getAddress(address)
       
      // Geocode.fromAddress(address,"","","gh").then(
      //     (response) => {
      //          console.log(response)     
      //     },
      //     (error) => {
      //      console.error(error)
      //  }
      //   )
       
       
    }

    
    const getlocation = (lat: number,lng: number) => {
              
        Geocode.fromLatLng(lat.toString(),lng.toString()).then(
            (response) => {
                const address = response.results[0].formatted_address
                setValue({address: address , lat: lat , lng: lng})
            },
            (error) => {
                console.error(error)
            }
        )
    }

    const handleCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            getlocation(position.coords.latitude,position.coords.longitude)
        //    console.log(position)
        },
        (error) => {
           console.log(error)
        }
        )
   }


    const containerStyle = {
        width: '100%',
        height: '500px'
      };
    
    const center = {
        lat: 5.614818,
        lng: -0.205874
    } 
    

    return (
      <div>
        <div className="flex flex-col">
          <h2 className="font-gotham font-medium text-base mb-3 text-center">
            Destination
          </h2>

          <div className="form-control lg:w-5/12  w-10/12 max-w-sm mx-auto">
            <input
              type="text"
              key={resetKey}
              placeholder="Enter destination"
              value={value?.address ?? ""}
              onChange={(e) => coordinatesFromAddress(e.target.value)}
              className="bg-white input border border-[#737373] w-full max-w-xs mb-5"
              // onFocus={() => setIsFocused(true)}
              // onBlur={() => setIsFocused(false)}
            />
            {
              showError && (
                <p className="font-gotham font-medium text-sm text-red-500">{errorMessage}</p>
              )
            }

            <div className="mb-4">
              <a
                onClick={handleCurrentLocation}
                className="font-gotham font-medium text-base cursor-pointer mb-1"
              >
                Use current location
              </a>
              <p className="font-gotham font-light text-sm text-[#898989]">
                For perfect pickup experience
              </p>
            </div>

            <a
              onClick={handleOpenModal}
              className="font-gotham font-medium text-base cursor-pointer mb-1"
            >
              Set location on map
            </a>
          </div>
        </div>
        <Modal isOpen={isOpen} onClose={handleCloseModal}>
          <div className="my-4 md:p-4 relative">
            <LoadScript googleMapsApiKey={MapKey}>
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={12}
                options={{ streetViewControl: false }}
              >
                <MarkerF 
                   position={marker} 
                   icon={"/pin.png"}
                   draggable={true}
                   onDragEnd={
                    e => {  
                        // console.log(e.latLng?.lat())
                        // console.log(e.latLng?.lng())
                        setMarker({lat: e.latLng?.lat() as number , lng: e.latLng?.lng() as number})
                        getlocation(e.latLng?.lat() as number , e.latLng?.lng() as number)
                        
                    }
                   }
                />
              </GoogleMap>
            </LoadScript>
            <div className="w-full md:w-10/12  p-4 rounded-md bg-white flex flex-row justify-between absolute md:left-16 md:bottom-8">
              <div className="flex flex-1 flex-wrap items-center gap-2">
                {/* <p className="font-gotham font-medium text-base">
                  Use current location
                </p> */}
                <p className="font-gotham font-medium text-sm text-[#898989]">
                  Please drag pin to select location
                </p>
              </div>
              <button onClick={() => setIsOpen(false)} className="m-btn-fix btn  bg-[#FF0127] font-gotham font-medium normal-case text-white text-lg hover:bg-[#FF0127] ">
                Select
              </button>
            </div>
          </div>
        </Modal>
        
      </div>
    );
}