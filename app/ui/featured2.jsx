import Image from "next/image";
import React from "react";
import Bvlgari from "../icons/Bvlgari";
import redseaicon from "@/public/assets/logo-hero.svg";

import beach from "@/public/assets/Shura MASTER PLAN.jpg";
export default function Featured2() {
  return (
    <section className="w-full">
      <Image
        src={beach}
        width={1920}
        height={1200}
        className="object-cover"
        placeholder="blur"
        alt="beach"
      />
    </section>
  );
}
