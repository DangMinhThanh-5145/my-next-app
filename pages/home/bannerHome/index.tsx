import React from "react";
import Image from "next/image";
import BannerImage from "../../../src/assets/images/banner.png";

export interface BannerProps {}

const Banner = (props: BannerProps) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Image src={BannerImage} alt="Banner" width={1300} />
    </div>
  );
};

export default Banner;
