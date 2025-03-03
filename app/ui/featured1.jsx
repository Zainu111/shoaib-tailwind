import Image from "next/image";
import React from "react";
import Baccarat from "../icons/Baccarat";
import redseaicon from "@/public/assets/red_sea-icon.svg";
import Link from "next/link";
import feature from "@/public/assets/red_sea_beach.jpg";
import featureBack from "@/public/assets/feature2Bg.jpg";

export default function Featured1() {
  return (
    <section className="w-full h-[120vh] relative overflow-hidden">
      <div className="fixed top-0 left-0 -z-10 w-full h-full">
        <Image
          src={featureBack}
          placeholder="blur"
          fill={true}
          className="object-cover"
          alt="featured"
        />
      </div>
      <div className="border-b max-w-5xl md:py-16 flex  md:flex-row flex-col-reverse items-center gap-8 absolute bottom-0 left-0 bg-white">
        <div>
          <Image
            src={feature}
            placeholder="blur"
            width={1080}
            height={900}
            alt="featured"
          />
        </div>
        <div className="flex flex-col gap-8 items-center px-8 justify-center">
          <Image
            src={redseaicon}
            width={200}
            height={100}
            className="w-22 h-[10rem]"
            alt="featured"
          />
          <p className="text-sm">Excellence that endures</p>
          <Link
            className="py-3 px-9 max-w-max font-benton text-black border border-black transition-all duration-300 hover:bg-sothebys-blue hover:border-sothebys-blue hover:text-white"
            href="/off-plan-projects/four-seasons-private-residences-red-sea-global"
          >
            Explore
          </Link>
        </div>
      </div>
    </section>
  );
}