import React from "react";
import Image from "next/image";
import Mission from "../../../src/assets/icons/aboutMission.svg";
import Styles from "./Mission.module.css";

export interface AboutMissionProps {}

const AboutMission = (props: AboutMissionProps) => {
  return (
    <div className={Styles.missionContainer}>
      <div className={Styles.title}>
        <Image src={Mission} alt="About Mission" />
      </div>
      <div className={Styles.image}>Image</div>
      <div>
        <p>What is Lorem Ipsum?</p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div>
        <p>What is Lorem Ipsum?</p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
};

export default AboutMission;
