import React from "react";
import Footer from "../../src/components/footer";
import Header from "../../src/components/header";
import OurProduct from "./ourProduct";

export interface ProductPageProps {}

const ProductPage = (props: ProductPageProps) => {
  return (
    <div>
      <Header />
      <OurProduct />
      <Footer />
    </div>
  );
};

export default ProductPage;
