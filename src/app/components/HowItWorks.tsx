import Image from 'next/image'

const data = [
    {
        img: 'app_icon.svg',
        title: 'Get the app',
        description: 'Download the app and start saving time with onegallon'
    },
    {
        img: 'book.svg',
        title: 'Book and checkout',
        description: 'Open the app, anytime.Order and pay for fuel delivery'
    },
    {
        img: 'delivery.svg',
        title: 'Get your car ready',
        description: 'Make sure your car is easily accessible (and don\'t forget to open your fuel cap if you\'ve ordered a fuel delvery).'
    },
    {
        img: 'all_set.svg',
        title: 'You\'re all set',
        description: 'And we\'re on our way. No queues, no hassle. Simpler. Smarter.'
    },
]

const lists = [
    'Download the app from Playstore or AppStore depending on your mobile device',
    'Tell us where you are.',
    'Tell us what type of Plan you want',
    'Enter the quantity you want',
    'Pay and Place your order'
]

export function HIWSection(){
    return (
      <div className="bg-white p-4 w-full min-h-screen" id="hiw">
        <div className="container px-4 mx-auto">
          <h1 className="font-clashDisplay md:text-4xl text-3xl font-medium py-10 mb-3">
            It&apos;s as easy
          </h1>

          <div className="flex flex-row flex-wrap gap-3 mb-10">
            {data.map((item, index) => {
              return (
                <div
                  key={"hiw--" + index}
                  className="flex-auto w-full md:w-3/12 lg:w-2/12"
                >
                  <div className="mb-6 h-16 w-16 relative">
                    <Image
                      src={item.img}
                      //    width={38}
                      //    height={38}
                      alt={item.title}
                      fill
                    />
                  </div>
                  <h1 className="font-gotham lg:text-2xl text-xl font-medium mb-4">
                    {item.title}
                  </h1>
                  <h3 className="font-gotham text-sm font-light mb-4">
                    {" "}
                    {item.description}{" "}
                  </h3>
                </div>
              );
            })}
          </div>
          <h1 className="font-clashDisplay md:text-4xl text-3xl font-medium py-5 mb-3">
            How it works
          </h1>
          <div className="flex flex-row flex-wrap gap-3 mb-4 items-center">
            <div className="flex-auto w-full lg:w-6/12 px-2">
              <ul className="list-decimal ml-4">
                {lists.map((list, index) => {
                  return (
                    <li
                      className="font-gotham font-light md:text-lg  text-base mb-2"
                      key={"list__" + index}
                    >
                      {list}
                    </li>
                  );
                })}
              </ul>
              <div className="flex flex-col mt-16">
                <button className="btn  bg-[#FF0127] font-clashDisplay font-medium normal-case text-white text-lg hover:bg-[#FF0127] w-80">
                  <svg
                    width="30"
                    height="27"
                    viewBox="0 0 30 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_132_11)">
                      <path
                        d="M0 6.4239C0.0356592 6.31238 0.074575 6.20187 0.106652 6.08935C0.425468 4.96915 1.41416 4.16785 2.55004 4.15034C3.74129 4.13201 4.93302 4.14184 6.12443 4.14634C6.55251 4.14801 6.84902 4.35871 6.98774 4.77912C7.57751 6.56643 8.15734 8.35707 8.74221 10.146C8.84414 10.4578 8.77152 10.7348 8.59974 10.9975C8.1601 11.6701 7.72649 12.3471 7.27904 13.0142C7.17662 13.1669 7.17386 13.2799 7.25934 13.4426C8.16971 15.1776 9.41746 16.6305 10.8943 17.8659C11.6528 18.5003 12.5125 19.0079 13.3234 19.5775C13.4684 19.6794 13.5784 19.6477 13.714 19.5532C14.3594 19.1034 15.0153 18.6694 15.6595 18.2178C15.9662 18.0027 16.2748 17.9579 16.6281 18.0801C18.309 18.6617 19.9931 19.233 21.6754 19.8102C22.1836 19.9846 22.3841 20.2688 22.385 20.8122C22.387 21.9521 22.3898 23.0918 22.3846 24.2316C22.3772 25.8423 21.2246 27.0166 19.6554 26.9996C16.3777 26.964 13.3354 26.0351 10.5296 24.3377C5.94125 21.5619 2.67851 17.6365 0.920627 12.4529C0.441751 11.041 0.154361 9.58445 0.0504765 8.09153C0.0438006 7.99484 0.0172597 7.89966 0 7.80381C0 7.3439 0 6.88382 0 6.4239ZM20.6278 22.9523C20.6278 22.5023 20.618 22.0523 20.6324 21.6029C20.6386 21.4095 20.5759 21.3261 20.3958 21.266C19.1358 20.8446 17.8781 20.4157 16.6244 19.9757C16.433 19.9086 16.2982 19.9402 16.1409 20.0513C15.6428 20.4027 15.0987 20.696 14.6413 21.0949C13.952 21.6959 13.3154 21.6335 12.5595 21.2158C10.81 20.2486 9.30869 18.9767 7.96959 17.4913C6.92522 16.3328 6.02022 15.0737 5.39611 13.619C5.22693 13.2249 5.2507 12.8764 5.49136 12.5195C5.94028 11.8535 6.37665 11.1786 6.80228 10.4969C6.86888 10.3903 6.90079 10.2114 6.86383 10.0939C6.45025 8.78348 6.0168 7.47959 5.59834 6.17069C5.54363 5.9995 5.47133 5.93749 5.29157 5.93965C4.4421 5.94982 3.59246 5.94182 2.74299 5.94499C2.09136 5.94732 1.75333 6.29888 1.75968 6.9685C1.7771 8.81448 2.09852 10.607 2.73485 12.3311C4.50348 17.1233 7.64443 20.6979 12.0206 23.1361C14.3879 24.4552 16.9298 25.1691 19.6386 25.2006C20.2719 25.208 20.6237 24.8536 20.6275 24.212C20.6299 23.7921 20.628 23.3723 20.628 22.9524L20.6278 22.9523Z"
                        fill="white"
                      />
                      <path
                        d="M15.8811 12.5555C15.6401 12.4988 15.4121 12.453 15.1882 12.3915C12.3541 11.6142 10.4597 8.94055 10.6139 5.93903C10.7641 3.0167 12.9285 0.567105 15.7971 0.0820208C16.0753 0.0350127 16.3603 0.010175 16.6423 0.00950826C19.064 0.00400731 21.4859 -0.00916164 23.9077 0.010175C26.8439 0.0335124 29.365 2.22256 29.8987 5.17773C30.4903 8.4523 28.4317 11.6759 25.2555 12.4163C24.7649 12.5307 24.2529 12.5807 23.7489 12.5954C22.8024 12.623 21.8546 12.6087 20.9074 12.599C20.7153 12.597 20.5826 12.6584 20.4492 12.7964C19.4944 13.7841 18.5322 14.7642 17.5722 15.7467C17.51 15.8104 17.4493 15.8756 17.3841 15.9358C17.0971 16.2005 16.7688 16.287 16.4104 16.1233C16.0556 15.9611 15.8825 15.6625 15.8819 15.2643C15.8804 14.4745 15.8812 13.6847 15.8812 12.8949C15.8812 12.7859 15.8812 12.6769 15.8812 12.5557L15.8811 12.5555ZM17.6391 13.1326C18.3167 12.4378 18.9393 11.8067 19.553 11.1666C19.7933 10.9159 20.0672 10.7919 20.4135 10.8004C20.9307 10.813 21.4483 10.8097 21.9656 10.8022C22.7846 10.7905 23.6115 10.8375 24.4212 10.74C26.7029 10.4656 28.366 8.37996 28.24 6.02855C28.1169 3.73265 26.1882 1.83082 23.9176 1.81099C21.4869 1.78982 19.0559 1.78832 16.6252 1.81165C14.3355 1.83349 12.4078 3.83034 12.3666 6.17507C12.322 8.70801 14.2191 10.7357 16.6962 10.8027C17.2863 10.8187 17.6342 11.1799 17.6386 11.7865C17.6416 12.2048 17.6393 12.623 17.6393 13.1328L17.6391 13.1326Z"
                        fill="white"
                      />
                      <path
                        d="M17.638 6.29777C17.6411 6.78386 17.248 7.19526 16.7731 7.20276C16.2878 7.21043 15.8773 6.79219 15.8821 6.29461C15.8866 5.80869 16.2867 5.40395 16.7615 5.40479C17.2363 5.40562 17.6349 5.81169 17.638 6.29777Z"
                        fill="white"
                      />
                      <path
                        d="M20.2745 7.20276C19.8 7.20176 19.4016 6.79552 19.3983 6.30943C19.3949 5.81202 19.8068 5.39544 20.2924 5.40494C20.7678 5.41428 21.1593 5.82685 21.1541 6.31293C21.1489 6.79902 20.7488 7.20376 20.2745 7.20276Z"
                        fill="white"
                      />
                      <path
                        d="M24.6702 6.3033C24.6702 6.78972 24.2748 7.19829 23.7998 7.20279C23.3141 7.20729 22.9066 6.78689 22.9144 6.28913C22.9219 5.80372 23.3249 5.40081 23.7992 5.40481C24.2745 5.40882 24.6703 5.81705 24.6703 6.3033H24.6702Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_132_11">
                        <rect width="30" height="27" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Call Vendors
                </button>
                <p className="font-gotham font-bold md:text-3xl text-2xl mt-3">+233 (0) 242439874</p>
              </div>
            </div>
            <div className="flex-auto w-full lg:w-5/12">
              <Image
                src="/how-it-works.png"
                alt="How it works"
                width={400}
                height={350}
              />
            </div>
          </div>
        </div>
      </div>
    );
}