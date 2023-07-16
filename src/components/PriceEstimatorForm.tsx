import React from "react"
import {Formiz,useForm,FormizStep} from "@formiz/core"
import {ProductField , PriceRangeField ,DestinationField,SummaryField} from './index'





export function PriceEstimatorForm(){
    const Form = useForm()

    const [summary , setSummary] = React.useState({})
    
    const handleSubmit = (values : object) => {
        // console.log("values",values)
        setSummary(values)
        Form.goToStep("step4")
    
    }

    // console.log("Form" , Form.values)


    const handleSteps = (step: string) => {
  
     ( Form.isStepValid && Form.isStepSubmitted ) ? Form.goToStep(step) : null
    }


    return (
      <div className="w-full md:w-1/2">
        <Formiz connect={Form} onValidSubmit={handleSubmit}>
          <form noValidate onSubmit={Form.submit}>
            <FormizStep name="step1" >
                 <DestinationField 
                    name="destination"
                    required="Pleas enter your location"
                    
                 />
            </FormizStep>
            <FormizStep name="step2">
                <ProductField
                name="product"
                required="Please select a product"
                />
            </FormizStep>
            <FormizStep name="step3">
                <PriceRangeField name="plan" required="please select a plan" />
            </FormizStep>
            <FormizStep name="step4">
                {/* <SummaryField name="summary" data={summary as {destination: {lat: number , lng: number , address: string}, plan: string , product: string}} /> */}
                <SummaryField name="summary" data={summary as {destination: {lat: number , lng: number , address: string}, plan: string , product: string}}  />

            </FormizStep>
            
             <div className="flex flex-wrap flex-row my-5 lg:w-5/12 w-10/12 max-w-sm mx-auto mb-5">
                {
                    Form.currentStep?.index === 0 && (
                        <button 
                            onClick={() => handleSteps("step2")}  
                            className="btn m-btn-fix  bg-[#FF0127] font-gotham font-medium normal-case text-white text-lg hover:bg-[#FF0127] w-full"
                            disabled={!Form.isStepValid && Form.isStepSubmitted}
                            >
                              Confirm
                            </button>
                    )
                }
                {
                    Form.currentStep?.index === 1 && (
                        <button 
                           onClick={() => handleSteps("step3") }
                           disabled={!Form.isStepValid && Form.isStepSubmitted}  
                           className="m-btn-fix btn bg-[#FF0127] font-gotham font-medium normal-case text-white text-lg hover:bg-[#FF0127] w-full">Select</button>
                        )
                }
                {
                    Form.currentStep?.index === 2 && (
                        <button type="submit"   className="m-btn-fix btn  bg-[#FF0127] font-gotham font-medium normal-case text-white text-lg hover:bg-[#FF0127] w-full">Request now</button>
                        )
                }
                
               
                
             </div>
              <div className="flex flex-row gap-2 justify-center">
                 {
                    ["step1","step2","step3"].map((item,index) => {
                          return (
                            <svg
                              key={item}
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="cursor-pointer"
                              onClick={() => handleSteps(item)}
                            >
                              <circle cx="5" cy="5" r="4.5" stroke="#4F4F4F" fill={Form.currentStep?.index === index ? "black" : ""} />
                            </svg>
                          );
                    })
                 }
                
                {/* <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="5" cy="5" r="5" fill="black"/>
</svg> */}

              </div>
          </form>
        </Formiz>
      </div>
    );
}