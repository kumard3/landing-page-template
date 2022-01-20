/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
export default function Blog() {
  return (
    <section className="">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        
        <div className="flex justify-between items-center container mx-auto w-full">
          <h1 className="text-5xl"> From our blog </h1>
          <button className="border-[1px] border-indigo-400 p-2 rounded-xl"> Show More </button>
        </div>
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <a
            href="#"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline "
          >
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 "
              src="https://source.unsplash.com/random/481x361"
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                In usu laoreet repudiare legendos
              </h3>
              <span className="text-xs dark:text-coolGray-400">
                January 21, 2021
              </span>
              <p>
                Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                neglegentur, ex has tantas percipit perfecto. At per tempor
                albucius perfecto, ei probatus consulatu patrioque mea, ei
                vocent delicata indoctum pri.
              </p>
            </div>
          </a>
          <a
            href="#"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline "
          >
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 "
              src="https://source.unsplash.com/random/482x362"
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                In usu laoreet repudiare legendos
              </h3>
              <span className="text-xs dark:text-coolGray-400">
                January 22, 2021
              </span>
              <p>
                Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                neglegentur, ex has tantas percipit perfecto. At per tempor
                albucius perfecto, ei probatus consulatu patrioque mea, ei
                vocent delicata indoctum pri.
              </p>
            </div>
          </a>
          <a
            href="#"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline "
          >
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 "
              src="https://source.unsplash.com/random/483x363"
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                In usu laoreet repudiare legendos
              </h3>
              <span className="text-xs dark:text-coolGray-400">
                January 23, 2021
              </span>
              <p>
                Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                neglegentur, ex has tantas percipit perfecto. At per tempor
                albucius perfecto, ei probatus consulatu patrioque mea, ei
                vocent delicata indoctum pri.
              </p>
            </div>
          </a>
          
        </div>
        
      </div>
    </section>
  );
}
