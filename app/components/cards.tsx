"use client";
import React from "react";
import { Card, CardBody, Image } from "@nextui-org/react";
import Link from "next/link";
import { ArrowNarrowRightIcon, LockClosedIcon } from "@heroicons/react/solid";
import { ProjectCardProps } from "@/public/data/types";
import Slider from "./slider";
import { XIcon } from "@heroicons/react/solid";

const ProjectCards = ({
  name,
  description,
  pid,
  src,
  type = "Project-Main",
  isLocked,
  password,
}: ProjectCardProps) => {
  return (
    <div>
      <Card
        isBlurred
        className="border-none mx-5 bg-background/60 dark:bg-default-100/50 rounded-[5px] bg-customGray text-[#A1A1A1]"
        shadow="sm"
      >
        <CardBody className="p-2">
          {type === "Project-Main" && (
            <div className="flex w-full sm:min-w-[40rem] md:min-w-[50rem] lg:min-w-[50rem] max-w-[50rem]">
              <div className="w-40 flex-shrink-0">
                <Image
                  alt="Album cover"
                  className="object-cover rounded-[5px]"
                  height={150}
                  shadow="md"
                  src={src}
                  width={150}
                />
              </div>
              <div className="ml-4 p-1 relative flex-1">
                <div className="text-3xl text-white flex items-center">
                  {isLocked && (
                    <LockClosedIcon className="w-7 h-7 mr-2 text-customGreen" />
                  )}
                  {name || "Project Name"}
                </div>
                <div className="p-1 mt-1">
                  <p className="text-xs">{description || "your description"}</p>
                </div>
                <Link
                  href={`/projects/${pid}`}
                  className="inline-flex items-center absolute cursor-pointer bottom-1 hover:text-customGreen border-b-2 border-dotted border-opacity-35"
                >
                  View Project{" "}
                  <ArrowNarrowRightIcon className="w-3 h-3 hover:text-customGreen ml-2" />
                </Link>
                {/* Modal toggle */}
                <input
                  type="checkbox"
                  id="my_modal_6"
                  className="modal-toggle"
                />
                <div className="modal" role="dialog">
                  <div className="modal-box bg-customGray max-w-full max-h-full">
                    <h3 className="text-lg font-bold">Hello!</h3>
                    <p className="py-4">
                      This modal works with a hidden checkbox!
                    </p>
                    <div className="modal-action">
                      <label htmlFor="my_modal_6" className="btn">
                        Close!
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {["Project-Sub", "Gallery"].includes(type) && (
            <div>
              <label htmlFor="my_modal_5" className="cursor-pointer">
                <div className="p-1 flex flex-col justify-center items-center">
                  <Image
                    alt="Album cover"
                    className="object-cover rounded-[5px]"
                    height={150} // Fixed height
                    shadow="md"
                    src={src}
                    width={250} // Fixed width
                  />
                  <span className="mt-1 ml-2 self-start">
                    {name || "Project Name"}
                  </span>
                </div>
              </label>
              <input type="checkbox" id="my_modal_5" className="modal-toggle" />
              <div className="modal" role="dialog">
                <div className="modal-box bg-customGray max-w-[60%] max-h-[70%] relative">
                  <label
                    htmlFor="my_modal_5"
                    className="absolute top-4 cursor-pointer right-4 text-gray-400 hover:text-gray-600"
                  >
                    <XIcon className="w-6 h-6" />
                  </label>
                  <div className="py-4">
                    <Slider />
                  </div>
                </div>
              </div>
            </div>
          )}
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectCards;
