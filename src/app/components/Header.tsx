import Image from "next/image";

export default function Header() {
  return (
    <>
      <figure className="relative w-100 h-[950px]">
        <Image
          src={"/@/../nana.jpg"}
          fill
          alt="nana"
          className="object-cover opacity-30"
          priority
        />
        <h1 className="font-mono text-default md:text-9xl sm:text-6xl text-5xl whitespace-nowrap absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 text-shadow-xl">
          JOIEBELLS {"<3"}
        </h1>
      </figure>
      <h1>Testing</h1>
    </>
  );
}
