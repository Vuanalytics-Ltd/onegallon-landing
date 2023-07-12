import  {PriceEstimatorForm} from "./PriceEstimatorForm"

export function PriceEstimator(){
    return (
        <div className="bg-white px-2 py-12 w-full min-h-[50vh]" id="price">
            <div className="flex flex-col items-center container px-2">
                 <div className="mb-4">
                    <h1 className="font-clashDisplay text-center md:text-4xl text-3xl font-medium mb-2">OneGallon price estimator</h1>
                    <h2 className="font-gotham md:text-xl text-lg text-center font-light mb-1">Sample delivery prices are estimates only and do not reflect variations due to discounts, geography, traffic delays, or</h2>
                    <h2 className="font-gotham md:text-xl text-lg text-center font-light mb-1">other factors. <strong className="font-normal">Flat rates and minimum fees may apply.</strong>  Actual prices for deliveries may vary.</h2>
                 </div>
                 <PriceEstimatorForm />
            </div>

        </div>
    )
}