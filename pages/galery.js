import React from "react";
import Image from "next/image";
import img1 from "../public/assets/img1.jpg";
import img2 from "../public/assets/img2.jpg";
import img3 from "../public/assets/img3.jpg";

export default function galery() {
  return (
    <div>
      <Image
        layout="responsive"
        placeholder="blur"
        src={img1}
        with="6000"
        height="4000"
        alt=""
      />
      <Image
        layout="responsive"
        placeholder="blur"
        src={img2}
        with="3857"
        height="2571"
        alt=""
      />
      <Image
        layout="responsive"
        placeholder="blur"
        src={img3}
        with="3346"
        height="4736"
        alt=""
      />
    </div>
  );
}
