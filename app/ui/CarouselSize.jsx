"use client";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { useState } from "react";

export function CarouselSize({ images }) {
  const [isOpen, setIsOpen] = useState(false);
  const [updatedImages, setUpdatedImages] = useState(images); // initialImages is the initial value of updatedImages

  const onClose = () => {
    setIsOpen(false);
    setSelectImage("");
  };
  const [selectImage, setSelectImage] = useState("");
  const onOpen = (i, image) => {
    setIsOpen(true);
    // Make a copy of updatedImages
    const updatedImagesCopy = [...updatedImages];
    // Remove the element at index i and insert image at the beginning
    updatedImagesCopy.splice(i, 1);
    updatedImagesCopy.unshift(image);
    // Set the state with the updated copy
    setUpdatedImages(updatedImagesCopy);
  };

  return (
    <>
      <Carousel
        opts={{
          loop: true,
        }}
        className="flex flex-col aspect-auto"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="basis-full ">
              <div className=" relative overflow-hidden mx-auto  wide-container bg-cover bg-no-repeat bg-center h-[363px] md:h-[600px] lg:h-[700px]">
                <Image
                  src={urlForImage(image)}
                  alt="image"
                  className="object-cover object-center"
                  fill={true}
                  onClick={() => onOpen(index, image)}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex p-4 items-center justify-between md:hidden">
          <CarouselPrevious variant="none" />
          <CarouselNext variant="none" />
        </div>
      </Carousel>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="!max-w-6xl 2xl:!max-w-7xl">
          <Carousel
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              {updatedImages?.map((image, index) => (
                <CarouselItem key={index} className="basis-full">
                  <Image
                    src={urlForImage(image)}
                    alt="image"
                    className="w-full aspect-video mx-auto"
                    width={1000}
                    height={800}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </DialogContent>
      </Dialog>
    </>
  );
}
