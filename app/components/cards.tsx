"use client";
import React from "react";
import {
  Card,
  CardBody,
  Image,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import Link from "next/link";
import { ArrowNarrowRightIcon, LockClosedIcon } from "@heroicons/react/solid";

interface projectProps {
  name: string;
  description?: string;
  pid?: string;
  src: string;
  type?: string;
  isLocked?: boolean;
  password?: string;
}
const ProjectCards = ({
  name,
  description,
  pid,
  src,
  type = "Project-Main",
  isLocked,
  password,
}: projectProps) => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 rounded-[5px] bg-customGray text-[#A1A1A1]"
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
                  className="flex items-center absolute bottom-1 hover:text-customGreen border-b-2 border-dotted border-opacity-35"
                >
                  View Project
                  <ArrowNarrowRightIcon className="w-3 h-3 hover:text-customGreen ml-2" />
                </Link>
                {/* <Button onPress={onOpen} color="primary">
      Open Modal
    </Button> */}
              </div>
            </div>
          )}
          {["Project-Sub","Gallery"].includes(type) && (
            <div className="p-1 flex flex-col justify-center items-center">
              <Image
                alt="Album cover"
                className="object-cover rounded-[5px]"
                height="10rem"
                shadow="md"
                src={src}
                width="250rem"
              />
              <span className="mt-1 ml-2 self-start">
                {name || "Project Name"}
              </span>
            </div>
          )}
        </CardBody>
      </Card>
      {/* <Modal isOpen={isOpen} onClose={onClose} placement="center">
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1">
              Enter Password
            </ModalHeader>
            <ModalBody>
              <Input
                label="Password"
                placeholder="Enter your password"
                type="password"
                variant="bordered"
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="flat" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onClose}>
                Open
              </Button>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal> */}
    </div>
  );
};

export default ProjectCards;
