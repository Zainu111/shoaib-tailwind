import HeaderBlack from "@/app/ui/headerBlack";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <>
      <HeaderBlack />
      <div className="max-w-6xl mx-auto my-8 font-acta">
        <h1 className="text-lg font-bold md:text-3xl my-8">
          Private Jet Servies
        </h1>
        <div className="aspect-video relative">
          <Image src="/assets/jet1.jpg" fill={true} alt="jet"/>
        </div>
        <div className="content"></div>
      </div>
    </>
  );
}
