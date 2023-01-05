import React from "react";
import Logo from "../../assets/icons/logo.svg";
import styles from "../../../styles/Footer.module.css";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Image from "next/image";

export interface FooterProps {}

const Footer = (props: FooterProps) => {
  return (
    <footer>
      <div className={styles.footerContainer}>
        <div className={styles.box} style={{ marginLeft: 50 }}>
          <Image src={Logo} alt="Logo" height={115} style={{ marginTop: 65 }} />
        </div>
        <div className={styles.box}>
          <ul>
            <li>
              <h3>Menu</h3>
            </li>
            <li>News</li>
            <li>About</li>
            <li>Gallery</li>
          </ul>
        </div>
        <div className={styles.box}>
          <ul>
            <li>
              <h3>Products</h3>
            </li>
            <li>Chalkboard Chalk</li>
            <li>School Supplies and Student Tools</li>
            <li>Office Supplies</li>
            <li>Art Supplies</li>
          </ul>
        </div>
        <div className={styles.box} style={{ marginRight: 50 }}>
          <ul>
            <li>
              <h3>Address</h3>
            </li>
            <li>
              <MapOutlinedIcon />
              373A Tran Phu St, Ward 8, District 5, HCM City
            </li>
            <li>
              <EmailOutlinedIcon />
              vanphong@tbgdphanmic.vn
            </li>
            <li>
              <LocalPhoneOutlinedIcon />
              +(84) 28 3924 1814
            </li>
            <li>
              <FacebookOutlinedIcon />
              <InstagramIcon />
              <LinkedInIcon />
              <TwitterIcon />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
