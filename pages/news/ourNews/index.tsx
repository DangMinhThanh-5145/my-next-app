import Image from "next/image";
import React from "react";
import Styles from "./OurNews.module.css";
import OurNewsIcon from "../../../src/assets/icons/ourNews.svg";
import { GetServerSideProps } from "next";
import { Pages } from "../../api/pages";

export interface OurNewsProps {
  title: String;
  list: Array<Pages>;
}
export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`https://mic.t-solution.vn/api/v2/pages`);
  const data = await res.json();
  return { props: { data } };
};

const OurNews = (props: OurNewsProps) => {
  return (
    <div className={Styles.ourNewsContainer}>
      <div className={Styles.icons}>
        <Image src={OurNewsIcon} alt="Our News Icon" />
      </div>
      <div className={Styles.newsList}>
        <div className={Styles.newsItem}>
          <div className={Styles.image}>1</div>
          <p>Awesome collection</p>
          <p>Date and Time</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
        <div className={Styles.newsItem}>
          <div className={Styles.image}>1</div>
          <p>Awesome collection</p>
          <p>Date and Time</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
        <div className={Styles.newsItem}>
          <div className={Styles.image}>1</div>
          <p>Awesome collection</p>
          <p>Date and Time</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
      <div className={Styles.button}>
        <button>See More</button>
      </div>
    </div>
  );
};

export default OurNews;
