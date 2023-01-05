import React from "react";
import Image from "next/image";
import Styles from "./News.module.css";
import NewsBanner from "../../../src/assets/icons/newsBanner.svg";

export interface NewsHomeProps {}

const NewsHome = (props: NewsHomeProps) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Image src={NewsBanner} alt="News Banner" />
      </div>
      <div className={Styles.newsContainer}>
        <div className={Styles.items}>
          <div
            style={{ backgroundColor: "#B1B5C3", height: 240, borderRadius: 8 }}
          ></div>
          <p>Awesome collection</p>
          <p>1</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
        <div className={Styles.items}>
          <div
            style={{ backgroundColor: "#B1B5C3", height: 240, borderRadius: 8 }}
          ></div>
          <p>Awesome collection</p>
          <p>1</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
        <div className={Styles.items}>
          <div
            style={{ backgroundColor: "#B1B5C3", height: 240, borderRadius: 8 }}
          ></div>
          <p>Awesome collection</p>
          <p>1</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", margin: 80 }}>
        <button
          style={{
            backgroundColor: "#00A859",
            width: 132,
            height: 38,
            borderRadius: 20,
            border: "1px solid #00A859",
            color: "white",
            fontSize: 14,
            fontWeight: "bold",
          }}
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default NewsHome;
