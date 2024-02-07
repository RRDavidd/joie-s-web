"use client";

import Image from "next/image";
import Blobs from "./Blobs";
import Symbols from "./Symbols";
import { useEffect, useState } from "react";
import AudioPlaySpook from "./AudioPlaySpook";
import AudioPlayYay from "./AudioPlayYay";

const textArray = [
  "No",
  "Are you sure?",
  "Are you really sure?",
  "Last Chance",
];

export default function Banner() {
  const [count, setCount] = useState(0);
  const [noText, setNoText] = useState(textArray[0]);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [audio, setAudio] = useState(false);
  const [spook, setSpook] = useState(false);
  const [yes, setYes] = useState(false);

  const handleClick = () => {
    const newCount = count + 1;
    setCount(newCount);
    if (newCount < textArray.length) {
      setNoText(textArray[newCount]);
    } else {
      setCountdown(3);
    }
  };

  const handleYes = () => {
    setYes(true);
  };

  useEffect(() => {
    let timer: any;
    if (countdown !== null && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    }

    if (countdown === 0) {
      setAudio(true);
      setSpook(true);
    }
    console.log(audio);

    return () => clearTimeout(timer);
  }, [countdown]);

  return (
    <>
      {spook ? (
        <figure className="w-full h-screen">
          <Image
            src={"/@/../spooky.jpg"}
            fill
            alt="spook"
            className="object-cover"
            priority
            draggable={false}
          />
        </figure>
      ) : (
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
            <div className="flex items-center flex-col gap-4">
              <p className="">Hi beb happi valentines day :D</p>
              <p className="">Be my Valentine?</p>
              <div className="">
                <button
                  onClick={handleYes}
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Yes
                </button>
                <button
                  onClick={handleClick}
                  type="button"
                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  {countdown || noText}
                </button>
              </div>
            </div>
          </div>
          {/* <Blobs /> */}
          <Symbols />
        </figure>
      )}
      {audio && (
        <AudioPlaySpook
          onEnded={() => {
            setAudio(false);
            setSpook(false);
          }}
        />
      )}

      {yes && (
        <>
          <Image
            src={"/@/../yay.jpg"}
            fill
            alt="yay"
            priority
            draggable={false}
          />
          <AudioPlayYay onEnded={() => setYes(false)} />
        </>
      )}
    </>
  );
}
