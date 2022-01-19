/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
export default function Features() {
  return (
    <div className="relative overflow-hidden">
       <div className="  overflow-hidden w-full h-full  ">
        
           <img src="/Ellipse 9.svg" className=" absolute top-[19rem] right-[-10rem] "/>

            {/* <svg
              width="323"
              height="323"
              viewBox="0 0 323 323"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=" absolute top-[90rem] "
            >
              <g filter="url(#filter0_b_2_51)">
                <circle
                  cx="161.5"
                  cy="161.5"
                  r="161.5"
                  fill="#DCF0FF"
                  fillOpacity="0.25"
                />
              </g>
              <defs>
                <filter
                  id="filter0_b_2_51"
                  x="-12"
                  y="-12"
                  width="347"
                  height="347"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImage" stdDeviation="6" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_2_51"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_2_51"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg> */}
          <div className="hidden lg:block absolute z-[-1] top-0 left-[3rem] w-[15rem] ">
            <svg
              width="100%"
              viewBox="0 0 323 323"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_b_2_51)">
                <circle
                  cx="161.5"
                  cy="161.5"
                  r="161.5"
                  fill="#DCF0FF"
                  fillOpacity="0.25"
                />
              </g>
              <defs>
                <filter
                  id="filter0_b_2_51"
                  x="-12"
                  y="-12"
                  width="347"
                  height="347"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImage" stdDeviation="6" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_2_51"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_2_51"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          </div>
         
      <section className="p-4 lg:p-8 ">
        <div className="container mx-auto space-y-12  ">
         
          <div className="flex flex-col overflow-hidden rounded-md  lg:flex-row">
            <div className="flex items-center justify-center flex-1 ">
              <img src="/e-Commerce 2.png" alt="" className="" />
            </div>
            <div className="flex flex-col justify-center flex-1 px-6 py-12 ">
              <h2 className="text-3xl font-bold">
                We're not reinventing the wheel
              </h2>
              <p className="my-6 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                aliquam possimus quas, error esse quos.
              </p>
              <button type="button" className="self-start">
                Action
              </button>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md  lg:flex-row-reverse">
            <div className="flex items-center justify-center flex-1 ">
              <img src="/Finance 1.png" alt="" className="" />
            </div>
            <div className="flex flex-col justify-center flex-1 px-6 py-12 ">
              <h2 className="text-3xl font-bold">
                We're not reinventing the wheel
              </h2>
              <p className="my-6 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                aliquam possimus quas, error esse quos.
              </p>
              <button type="button" className="self-start">
                Action
              </button>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md  lg:flex-row">
            <div className="flex items-center justify-center flex-1 ">
              <img src="/Messages 1.png" alt="" className="" />
            </div>
            <div className="flex flex-col justify-center flex-1 px-6 py-12 ">
              <h2 className="text-3xl font-bold">
                We're not reinventing the wheel
              </h2>
              <p className="my-6 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                aliquam possimus quas, error esse quos.
              </p>
              <button type="button" className="self-start">
                Action
              </button>
            </div>
          </div>

          <div className="flex flex-col overflow-hidden rounded-md  lg:flex-row-reverse">
            <div className="flex items-center justify-center flex-1 ">
              <img src="/Service 1.png" alt="" className="" />
            </div>
            <div className="flex flex-col justify-center flex-1 px-6 py-12 ">
              <h2 className="text-3xl font-bold">
                We're not reinventing the wheel
              </h2>
              <p className="my-6 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                aliquam possimus quas, error esse quos.
              </p>
              <button type="button" className="self-start">
                Action
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
