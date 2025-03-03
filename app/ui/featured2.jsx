import Image from "next/image";
import React from "react";
import Bvlgari from "../icons/Bvlgari";
import redseaicon from "@/public/assets/logo-hero.svg";

import beach from "@/public/assets/Shura MASTER PLAN.jpg";
export default function Featured2() {
  return (
    <section className="w-full h-[80vh] relative">
      <Image
        src={beach}
        className="w-full h-full object-fill"
        placeholder="blur"
        alt="beach"
      />
    </section>
  );
}
