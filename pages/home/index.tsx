import React from "react";
import Footer from "../../src/components/footer";
import Header from "../../src/components/header";
import Banner from "./bannerHome";
import CategoriesHome from "./categoriesHome";
import NewsHome from "./newsHome";

export interface HomePageProps {}

const HomePage = (props: HomePageProps) => {
  return (
    <div>
      <Header />
      <Banner />
      <CategoriesHome />
      <NewsHome />
      <Footer />
    </div>
  );
};

export default HomePage;
