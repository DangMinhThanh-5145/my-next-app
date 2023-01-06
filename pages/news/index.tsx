import React from "react";
import Footer from "../../src/components/footer";
import Header from "../../src/components/header";
import OurNews from "./ourNews";

export interface NewsPageProps {}

const NewsPage = (props: NewsPageProps) => {
  return (
    <div>
      <Header />
      <OurNews />
      <Footer />
    </div>
  );
};

export default NewsPage;
