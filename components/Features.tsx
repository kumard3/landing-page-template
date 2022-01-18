/* eslint-disable @next/next/no-img-element */
export default function Features() {
  return (
    <div>
      <section className="p-4 lg:p-8 dark:bg-coolGray-800 dark:text-coolGray-100">
        <div className="container mx-auto space-y-12">
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <div className="flex items-center justify-center flex-1 dark:bg-violet-400">
              <img
                src="assets/svg/findcomponent.svg"
                alt=""
                className="p-8 h-60 dark:bg-coolGray-500"
              />
            </div>
            <div className="flex flex-col justify-center flex-1 px-6 py-12 dark:bg-coolGray-900">
              <span className="text-xs uppercase dark:text-coolGray-400">
                Join, it's free
              </span>
              <h2 className="text-3xl font-bold">
                We're not reinventing the wheel
              </h2>
              <p className="my-6 dark:text-coolGray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                aliquam possimus quas, error esse quos.
              </p>
              <button type="button" className="self-start">
                Action
              </button>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
            <div className="flex items-center justify-center flex-1 dark:bg-violet-400">
              <img
                src="assets/svg/selectcolor.svg"
                alt=""
                className="p-8 h-60 dark:bg-coolGray-500"
              />
            </div>
            <div className="flex flex-col justify-center flex-1 px-6 py-12 dark:bg-coolGray-900">
              <span className="text-xs uppercase dark:text-coolGray-400">
                Join, it's free
              </span>
              <h2 className="text-3xl font-bold">
                We're not reinventing the wheel
              </h2>
              <p className="my-6 dark:text-coolGray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                aliquam possimus quas, error esse quos.
              </p>
              <button type="button" className="self-start">
                Action
              </button>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <div className="flex items-center justify-center flex-1 dark:bg-violet-400">
              <img
                src="assets/svg/copycode.svg"
                alt=""
                className="p-8 h-60 dark:bg-coolGray-500"
              />
            </div>
            <div className="flex flex-col justify-center flex-1 px-6 py-12 dark:bg-coolGray-900">
              <span className="text-xs uppercase dark:text-coolGray-400">
                Join, it's free
              </span>
              <h2 className="text-3xl font-bold">
                We're not reinventing the wheel
              </h2>
              <p className="my-6 dark:text-coolGray-400">
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
