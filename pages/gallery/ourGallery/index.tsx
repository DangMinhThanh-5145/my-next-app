import React from "react";
import Styles from "./OurGallery.module.css";
import GalleryIcon from "../../../src/assets/icons/ourGallery.svg";
import Image from "next/image";

export interface OurGalleryProps {}

const OurGallery = () => {
  return (
    <div className={Styles.ourGalleryContainer}>
      <div className={Styles.icon}>
        <Image src={GalleryIcon} alt="Gallery Icon" />
      </div>
      <div className={Styles.listGallery}>
        <div className={Styles.items}>
          <div className={Styles.image}>1</div>
          <p>Awesome collection</p>
          <p>Date and time</p>
        </div>
        <div className={Styles.items}>
          <div className={Styles.image}>1</div>
          <p>Awesome collection</p>
          <p>Date and time</p>
        </div>
        <div className={Styles.items}>
          <div className={Styles.image}>1</div>
          <p>Awesome collection</p>
          <p>Date and time</p>
        </div>
      </div>
      <div className={Styles.icon}>
        <button>See More</button>
      </div>
    </div>
  );
};

export default OurGallery;
