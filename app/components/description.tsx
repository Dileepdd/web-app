import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import userData from "@/public/data/data.json";
import left from "@/public/left.svg";
import right from "@/public/right.svg";

type DescriptionProps = {
  activeImage: number;
  clickNext: () => void;
  clickPrev: () => void;
};

const Description: React.FC<DescriptionProps> = ({
  activeImage,
  clickNext,
  clickPrev,
}) => {
  return (
    <div className="grid place-items-start w-full  relative">
      {userData.additional_projects.map((elem, idx) => (
        <div
          key={idx}
          className={`${
            idx === activeImage
              ? "block w-full h-full md:h-[50vh] py-2 md:px-20 px-10 text-left"
              : "hidden"
          }`}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ease: "linear", duration: 0.5 }}
            className="w-full"
          >
            <div className="py-2 text-5xl font-extrabold">{elem.name}</div>
            <div className="leading-relaxed font-medium text-base tracking-wide h-60 md:h-40 italic text-gray-600">
              {elem.description}
            </div>
          </motion.div>
          <div className="absolute md:bottom-1 bottom-10 right-10 md:right-0 w-full flex justify-center items-center">
            <div
              className="absolute bottom-2 right-10 cursor-pointer"
              onClick={clickPrev}
            >
              <Image src={left} alt="Previous" />
            </div>
            <div
              className="absolute bottom-2 right-2 cursor-pointer"
              onClick={clickNext}
            >
              <Image src={right} alt="Next" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Description;
