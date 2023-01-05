import Image from "next/image";
import React from "react";
import Logo from "../../assets/icons/logo.svg";
import styles from "../../../styles/Home.module.css";

export interface HeaderProps {}

const Header = (props: HeaderProps) => {
  return (
    <div className={styles.main}>
      <div className={styles.box} style={{ marginLeft: 50 }}>
        <Image src={Logo} alt="Logo" height={50} />
      </div>
      <div className={styles.box}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Products</li>
          <li>News</li>
          <li>Gallery</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className={styles.box}>
        <form>
          <input placeholder="Search" style={{ height: 24, width: 250 }} />
        </form>
      </div>
    </div>
  );
};

export default Header;
