"use client";

import { useEffect, useState } from "react";

const makeRandomPosition = (max: number) => {
  return Math.floor(Math.random() * max);
};

export default function BlobSVGS() {
  const [blobPosition, setBlobPosition] = useState<number[][]>([]);

  const blobsSrc = [
    <svg key="blob1" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="#B080B8"
        d="M71.4,-19.1C79.7,2.4,64.8,35.5,43.7,48.1C22.5,60.6,-4.9,52.5,-23.6,37.7C-42.4,22.9,-52.4,1.3,-47,-16.2C-41.6,-33.7,-20.8,-47,5.4,-48.8C31.5,-50.5,63.1,-40.6,71.4,-19.1Z"
        transform="translate(100 100)"
      />
    </svg>,
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="#F9A7AB"
        d="M22.7,-41.6C30.6,-34.7,39.2,-31.1,45.2,-24.7C51.2,-18.4,54.8,-9.2,59.2,2.5C63.6,14.3,68.9,28.6,65.8,40.1C62.8,51.6,51.4,60.4,39,60.9C26.6,61.4,13.3,53.6,3,48.5C-7.4,43.4,-14.8,40.9,-29.2,41.6C-43.5,42.2,-64.7,45.9,-72.5,39.5C-80.4,33.1,-74.7,16.5,-67.6,4.1C-60.5,-8.3,-51.9,-16.7,-45.2,-24.9C-38.4,-33.2,-33.5,-41.4,-26.3,-48.6C-19.1,-55.9,-9.5,-62.3,-1.1,-60.5C7.4,-58.6,14.7,-48.5,22.7,-41.6Z"
        transform="translate(100 100)"
      />
    </svg>,
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="#DBB8E0"
        d="M62.2,-25.7C67.9,-2.5,51.2,22.5,28.5,38.9C5.8,55.3,-22.9,63.2,-40,51.6C-57.1,40,-62.6,8.9,-54,-18.2C-45.4,-45.4,-22.7,-68.6,2.8,-69.5C28.2,-70.4,56.4,-48.9,62.2,-25.7Z"
        transform="translate(100 100)"
      />
    </svg>,
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="#000000"
        d="M61,-61.2C76.8,-45.1,85.9,-22.6,80.4,-5.5C74.8,11.5,54.7,23,38.8,37C23,51,11.5,67.5,-1.9,69.4C-15.3,71.3,-30.6,58.5,-42.9,44.5C-55.2,30.6,-64.5,15.3,-64.5,0C-64.5,-15.2,-55.1,-30.5,-42.8,-46.6C-30.5,-62.7,-15.2,-79.7,3.7,-83.3C22.6,-87,45.1,-77.3,61,-61.2Z"
        transform="translate(100 100)"
      />
    </svg>,
  ];

  useEffect(() => {
    setBlobPosition(
      Array(4)
        .fill(0)
        .map((_, i) => {
          return [makeRandomPosition(700), makeRandomPosition(1400)];
        })
    );
  }, []);

  return (
    <>
      {blobsSrc.map(
        (blob, index) =>
          blobPosition[index] ? (
            <div
              key={index}
              className={`absolute w-96`}
              style={{
                left: `${blobPosition[index][1]}px`,
                top: `${blobPosition[index][0]}px`,
              }}
            >
              {blob}
            </div>
          ) : null // Render nothing or a placeholder if blobPosition[index] is undefined
      )}
    </>
  );
}
