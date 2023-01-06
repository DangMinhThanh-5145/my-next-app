import React from "react";
import Footer from "../../src/components/footer";
import Header from "../../src/components/header";
import OurGallery from "./ourGallery";

export interface GalleryPageProps {}

const GalleryPage = (props: GalleryPageProps) => {
  return (
    <div>
      <Header />
      <OurGallery />
      <Footer />
    </div>
  );
};

export default GalleryPage;
