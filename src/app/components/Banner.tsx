import Image from "next/image";
import Blobs from "./Blobs";
import Symbols from "./Symbols";

export default function Banner() {
  const handleClick = () => {
    let count = 0;
    const interval = setInterval(() => {
      if (count === 5) {
        clearInterval(interval);
      }
      count++;
    }, 1000);
  };

  return (
    <>
      <figure className="relative w-full h-screen">
        <Image
          src={"/@/../nana.jpg"}
          fill
          alt="nana"
          className="object-cover opacity-30"
          priority
          draggable={false}
        />
        <div className="absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 ">
          <h1 className="font-mono text-default md:text-9xl sm:text-6xl text-5xl whitespace-nowrap text-shadow-xl">
            JOIEBELLS {"<3"}
          </h1>
          <div className="flex items-center flex-col">
            <p className="">Hi beb happi valentines day :D</p>
            <p className="">Be my Valentine?</p>
            <div className="">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Yes
              </button>
              <button
                type="button"
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                No
              </button>
            </div>
          </div>
        </div>
        {/* <Blobs /> */}
        <Symbols />
      </figure>
    </>
  );
}
