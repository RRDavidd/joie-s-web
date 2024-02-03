import Image from "next/image";
import Blobs from "./Blobs";

export default function Banner() {
  return (
    <>
      <figure className="relative w-full h-[920px] shadow-inner">
        <Image
          src={"/@/../nana.jpg"}
          fill
          alt="nana"
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 ">
          <h1 className="font-mono text-default md:text-9xl sm:text-6xl text-5xl whitespace-nowrap text-shadow-xl">
            JOIEBELLS {"<3"}
          </h1>
          <p className="text-center">Hi beb happi valentines day :D</p>
        </div>
        <Blobs />
      </figure>
    </>
  );
}
