import Image from "next/image";
import React from "react";
import Styles from "./OurProduct.module.css";
import OurProductIcon from "../../../src/assets/icons/ourProduct.svg";

export interface OurProductProps {}

const OurProduct = (props: OurProductProps) => {
  return (
    <div className={Styles.ourProductContainer}>
      <div className={Styles.icons}>
        <Image src={OurProductIcon} alt="Our Product Icon" />
      </div>
      <div>
        <ul className={Styles.filter}>
          <li>All items</li>
          <li>Chalkboard Chalk</li>
          <li>School Supplies and Student Tools</li>
          <li>Art Supplies</li>
          <li>Office Supplies</li>
        </ul>
      </div>
      <div className={Styles.productsContainer}>
        <div className={Styles.products}>
          <div className={Styles.items}>
            <div className={Styles.image}>1</div>
            <p>Products name</p>
            <p>Products total</p>
          </div>
          <div className={Styles.items}>
            <div className={Styles.image}>1</div>
            <p>Products name</p>
            <p>Products total</p>
          </div>
          <div className={Styles.items}>
            <div className={Styles.image}>1</div>
            <p>Products name</p>
            <p>Products total</p>
          </div>
          <div className={Styles.items}>
            <div className={Styles.image}>1</div>
            <p>Products name</p>
            <p>Products total</p>
          </div>
        </div>
      </div>
      <div className={Styles.button}>
        <button>See More</button>
      </div>
    </div>
  );
};

export default OurProduct;
