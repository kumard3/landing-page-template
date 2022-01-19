export default function ContactPage() {
  return (
    <div className="container flex items-center justify-center flex-col my-5 mx-auto">
      <h1 className="text-5xl font-bold text-[#7C76BB] ">
        Start your business now !!!
      </h1>
      <div>
        <img src="/Shopping 1.png" />
      </div>
      <button className="border-2 border-[#7C76BB] px-6 py-2 flex justify-evenly  items-center rounded-xl">
        <h2 className="font-bold"> Let's Talk </h2>
        <div className="pl-2">
          <svg
            width="27"
            height="19"
            viewBox="0 0 27 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.1833 0.779053L16.0082 2.9644L21.0498 7.98247L0.0753632 8.00358L0.0784662 11.0869L20.9954 11.0659L16.0387 16.0458L18.2241 18.2209L26.9247 9.47961L18.1833 0.779053Z"
              fill="#7C76BB"
            />
          </svg>
        </div>
      </button>
    </div>
  );
}
