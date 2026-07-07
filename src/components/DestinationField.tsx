import React, { useState, useRef } from "react"
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import { useField } from '@formiz/core'
import Modal from './Modal'


const GOOGLE_MAPS_LIBRARIES: ("places")[] = ["places"]

export function DestinationField(props : {name: string , required: string }){

    const [isOpen,setIsOpen] = React.useState(false)

    const { setValue, value: rawValue , errorMessage , isValid , isPristine , isSubmitted , resetKey } = useField(props)
    const value = rawValue as { address?: string; lat?: number; lng?: number; shouldFetch?: boolean } | undefined

    const [isFocused,setIsFocused] = useState(false)

    const showError = !isValid && !isFocused && (!isPristine || isSubmitted)

    const  [marker , setMarker] = React.useState({lat: 5.614818,lng: -0.205874})

    const [suggestions, setSuggestions] = useState<google.maps.places.AutocompleteSuggestion[]>([])
    const sessionTokenRef = useRef<google.maps.places.AutocompleteSessionToken | undefined>(undefined)
    const debounceRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)


    const handleOpenModal = () => {
        setIsOpen(true)
    }

    const handleCloseModal = () => {
        setIsOpen(false)
    }


    const MapKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY as string

    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: MapKey,
      libraries: GOOGLE_MAPS_LIBRARIES,
    })

    // Debounced Places (New) autocomplete lookup.
    const fetchSuggestions = (input: string) => {
      if (debounceRef.current) clearTimeout(debounceRef.current)
      debounceRef.current = setTimeout(async () => {
        if (input.length <= 2) {
          setSuggestions([])
          return
        }
        try {
          if (!sessionTokenRef.current) {
            sessionTokenRef.current = new google.maps.places.AutocompleteSessionToken()
          }
          const { suggestions } = await google.maps.places.AutocompleteSuggestion.fetchAutocompleteSuggestions({
            input,
            includedRegionCodes: ["gh"],
            sessionToken: sessionTokenRef.current,
          })
          setSuggestions(suggestions)
        } catch (error) {
          console.error(error)
          setSuggestions([])
        }
      }, 300)
    }

    const handleInputChange = (text: string) => {
      // Free text invalidates any previously resolved coordinates until a
      // suggestion or map pin is chosen.
      setValue({ address: text, shouldFetch: false })
      fetchSuggestions(text)
    }

    const handleSelectSuggestion = async (suggestion: google.maps.places.AutocompleteSuggestion) => {
      const prediction = suggestion.placePrediction
      if (!prediction) return
      try {
        const place = prediction.toPlace()
        await place.fetchFields({ fields: ["formattedAddress", "location"] })
        setValue({
          address: place.formattedAddress ?? prediction.text.text,
          lat: place.location?.lat(),
          lng: place.location?.lng(),
          shouldFetch: true,
        })
      } catch (error) {
        console.error(error)
      }
      setSuggestions([])
      sessionTokenRef.current = undefined
    }


    const getlocation = (lat: number,lng: number) => {
        const geocoder = new google.maps.Geocoder()
        geocoder.geocode({location: {lat, lng}}).then(
            ({results}) => {
                const address = results[0].formatted_address
                setValue({address: address , lat: lat , lng: lng,shouldFetch: true})
            },
        ).catch((error) => {
            console.error(error)
        })
        setSuggestions([])
    }

    const handleCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            getlocation(position.coords.latitude,position.coords.longitude)
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
             {isLoaded ? (
                <div className="relative w-full max-w-xs mb-5">
                   <input
                      type="text"
                      key={resetKey}
                      placeholder="Enter destination"
                      value={value?.address ?? ""}
                      onChange={(e) => handleInputChange(e.target.value)}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                      autoComplete="off"
                      className="bg-white input border border-[#737373] w-full"
                   />
                   {suggestions.length > 0 && (
                      <ul className="absolute z-10 w-full bg-white border border-[#737373] rounded-md mt-1 max-h-60 overflow-auto shadow-lg">
                         {suggestions.map((suggestion, index) => (
                            <li
                               key={suggestion.placePrediction?.placeId ?? index}
                               onMouseDown={() => handleSelectSuggestion(suggestion)}
                               className="px-3 py-2 cursor-pointer hover:bg-gray-100 font-gotham text-sm text-left"
                            >
                               {suggestion.placePrediction?.text.text}
                            </li>
                         ))}
                      </ul>
                   )}
                </div>
             ) : (
                <input
                   type="text"
                   placeholder="Loading..."
                   disabled
                   className="bg-white input border border-[#737373] w-full max-w-xs mb-5"
                />
             )}

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
            {isLoaded && (
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={12}
                options={{ streetViewControl: false }}
              >
                <MarkerF
                   position={marker}
                   icon={"./pin.png"}
                   draggable={true}
                   onDragEnd={
                    e => {
                        setMarker({lat: e.latLng?.lat() as number , lng: e.latLng?.lng() as number})
                        getlocation(e.latLng?.lat() as number , e.latLng?.lng() as number)

                    }
                   }
                />
              </GoogleMap>
            )}
            <div className="w-full md:w-10/12  p-4 rounded-md bg-white flex flex-row justify-between absolute md:left-16 md:bottom-8">
              <div className="flex flex-1 flex-wrap items-center gap-2">
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
