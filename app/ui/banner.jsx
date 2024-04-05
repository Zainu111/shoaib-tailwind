"use client";
import React from "react";
import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

export default function Banner() {
  return (
    <section className="w-full relative bg-black pt-[48%] overflow-hidden">
      <div className="absolute top-0 left-0 w-full">
        <CldVideoPlayer
          src="pahizwbjznyu3rdd6koh"
          controls={false}
          autoplay={true}
          playsinline={true}
          loop
          muted
          posterOptions={{
            publicId: "gzphvg7gj7pybifcmdib",
            effect: ["sepia"],
          }}
        />
      </div>
      <div className="absolute bottom-[12%] left-[5%] max-w-96 hidden lg:block">
        <h2 className="md:text-lg text-white font-normal mb-4">
          <span className="font-semibold">Pioneering Prestige:</span> Where
          Luxury Meets Exceptional Service
        </h2>
        <button className="py-3 px-9 font-benton text-white border transition-all duration-300 hover:bg-sothebys-blue hover:border-sothebys-blue">Explore</button>
      </div>
    </section>
  );
}
