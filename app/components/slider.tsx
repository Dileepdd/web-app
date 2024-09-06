"use client";
import React, { useState } from "react";
import userData from "@/public/data/data.json";
import Description from "./description";
import Image from "next/image";

const Slider: React.FC = () => {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    setActiveImage((prev) =>
      prev === userData.additional_projects.length - 1 ? 0 : prev + 1
    );
  };

  const clickPrev = () => {
    setActiveImage((prev) =>
      prev === 0
        ? userData.additional_projects.length - 1
        : prev - 1
    );
  };

  return (
    <main className="grid place-items-center p-5 md:grid-cols-2 grid-cols-1 w-full mx-auto max-w-5xl shadow-2xl">
      <div className="w-full flex justify-center items-center gap-4 overflow-hidden md:rounded-2xl p-6 md:p-0">
        <div className="w-full h-[50vh] relative">
          {userData.additional_projects.map((elem, idx) => (
            <div
              key={idx}
              className={`${
                idx === activeImage
                  ? "block w-full h-full absolute top-0 left-0 transition-transform duration-500 ease-in-out"
                  : "hidden"
              }`}
            >
              <Image
                src={elem.src}
                alt={elem.name}
                width={400}
                height={300}
                className="w-full h-full object-cover md:rounded-tl-3xl md:rounded-bl-3xl"
              />
            </div>
          ))}
        </div>
      </div>
      <Description
        activeImage={activeImage}
        clickNext={clickNext}
        clickPrev={clickPrev}
      />
    </main>
  );
};

export default Slider;
