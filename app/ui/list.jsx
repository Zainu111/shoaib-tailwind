"use client";
import React, { useState } from "react";

export default function List({ title, text }) {
  const [visible, setVisible] = useState(false);
  return (
    <li
      className="bg-sothebys-blue  p-4 rounded-xl cursor-pointer text-white"
      onClick={() => setVisible(!visible)}
    >
      <b className="font-octa">{title}</b>
      {visible && <p className="my-4 font-benton">{text}</p>}
    </li>
  );
}
