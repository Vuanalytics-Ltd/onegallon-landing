export function FAQ(){
    return (
      <div className="bg-[#F3F3F3] p-4" id="faqs">
        <div className="container mx-auto px-4">
          <h1 className="pt-6 pb-2 font-clashDisplay font-medium md:text-4xl text-3xl">
            FAQs
          </h1>
          <div className="relative  w-full pb-8 ">
            <div className="">
              <div className="mt-8 grid  divide-y divide-neutral-200">
                <div className="py-5">
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                      <li className="font-gotham font-medium list-disc text-base">
                        {" "}
                        How to request a ride?
                      </li>
                      <span className="transition group-open:rotate-90">
                        {/* <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg> */}
                        <svg
                          width="8"
                          height="14"
                          viewBox="0 0 8 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1L7.17644 7.17644L1.17647 13.1764"
                            stroke="#7E7E7E"
                            stroke-linecap="round"
                          />
                        </svg>
                      </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                      Springerdata offers a variety of billing options,
                      including monthly and annual subscription plans, as well
                      as pay-as-you-go pricing for certain services. Payment is
                      typically made through a credit card or other secure
                      online payment method.
                    </p>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}