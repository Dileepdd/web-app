"use client";
import React from "react";
import { Card, CardBody, Image, Button, Slider } from "@nextui-org/react";
import Link from "next/link";
import { ArrowNarrowRightIcon, ArrowSmUpIcon } from "@heroicons/react/solid";

// import { Card,Image } from "@nextui-org/react";
interface projectProps {
  name: string;
  description: string;
  pid?: string;
  src: string;
  type?: string;
}
const ProjectCards = ({
  name,
  description,
  pid,
  src,
  type = "Project-Main",
}: projectProps) => {
  return (
    <div>
      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px] rounded-[5px] bg-customGray text-[#A1A1A1]"
        shadow="sm"
      >
        <CardBody className="p-2">
          {type == "Project-Main" && (
            <div className="flex">
              <div className="w-40">
                <Image
                  alt="Album cover"
                  className="object-cover rounded-[5px]"
                  height={150}
                  shadow="md"
                  src={src}
                  width="100%"
                />
              </div>
              <div className="ml-4 p-1 relative">
                <h1 className="text-3xl text-white">
                  {name || "Project Name"}
                </h1>
                <p>{description || "your description"}</p>
                <Link
                  href="/"
                  className="flex items-center absolute bottom-1 hover:text-customGreen"
                >
                  {name || "Project Name"}
                  <ArrowNarrowRightIcon className="w-3 h-3 hover:text-customGreen ml-2" />
                </Link>
              </div>
            </div>
          )}
          {type == "Project-Sub" && (
            <div className="p-1">
              <Image
                alt="Album cover"
                className="object-cover rounded-[5px]"
                height={150}
                shadow="md"
                src={src}
                width="100%"
              />
              <div className="mt-1">{name || "Project Name"}</div>
            </div>
          )}
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectCards;
