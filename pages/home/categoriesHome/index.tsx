import React from "react";
import Image from "next/image";
import Styles from "./Categories.module.css";
import Image4 from "../../../src/assets/images/image 4.png";
import Image3 from "../../../src/assets/images/image 3.png";
import Image2 from "../../../src/assets/images/image 2.png";
import Image1 from "../../../src/assets/images/image 1.png";
import CategoriesBanner from "../../../src/assets/images/categoriesBanner.svg";

export interface CategoriesHomeProps {}

const CategoriesHome = (props: CategoriesHomeProps) => {
  return (
    <div className={Styles.mainBanner}>
      <div>
        <Image src={CategoriesBanner} alt="Categories Banner" />
      </div>
      <div className={Styles.product}>
        <div className={Styles.box}>
          <Image
            src={Image4}
            alt="Categories Banner"
            style={{ borderRadius: 15 }}
          />
          <p>Chalkboard Chalk</p>
        </div>
        <div className={Styles.box}>
          <Image
            src={Image3}
            alt="Categories Banner"
            style={{ borderRadius: 15 }}
          />
          <p>School Supplies and Student Tools</p>
        </div>
      </div>
      <div className={Styles.product}>
        <div className={Styles.box}>
          <Image
            src={Image2}
            alt="Categories Banner"
            style={{ borderRadius: 15 }}
          />
          <p>Office Supplies</p>
        </div>
        <div className={Styles.box}>
          <Image
            src={Image1}
            alt="Categories Banner"
            style={{ borderRadius: 15 }}
          />
          <p>Art Supplies</p>
        </div>
      </div>
    </div>
  );
};

export default CategoriesHome;
