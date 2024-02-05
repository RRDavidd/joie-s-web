import Image from "next/image";

export default function Symbols() {
  return (
    <>
      <figure className="absolute left-10">
        <Image
          width={150}
          src={"/@/../nana-lotus.svg"}
          height={150}
          alt="symbols"
          className=""
        />
      </figure>
    </>
  );
}
