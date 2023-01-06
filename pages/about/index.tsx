import React from "react";
import Footer from "../../src/components/footer";
import Header from "../../src/components/header";
import AboutMission from "./aboutMission";
import AboutStory from "./aboutStory";

export interface AboutPageProps {}

const AboutPage = (props: AboutPageProps) => {
  return (
    <div>
      <Header />
      <AboutStory />
      <AboutMission />
      <Footer />
    </div>
  );
};

export default AboutPage;
