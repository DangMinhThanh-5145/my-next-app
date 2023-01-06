import Image from "next/image";
import React from "react";
import Logo from "../../assets/icons/logo.svg";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";

export interface HeaderProps {}

const Header = (props: HeaderProps) => {
  return (
    <div className={styles.main}>
      <div className={styles.box} style={{ marginLeft: 50 }}>
        <Image src={Logo} alt="Logo" height={50} />
      </div>
      <div className={styles.box}>
        <ul>
          <li>
            <Link href="/home" style={{ textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" style={{ textDecoration: "none" }}>
              About
            </Link>
          </li>
          <li>
            <Link href="/product" style={{ textDecoration: "none" }}>
              Products
            </Link>
          </li>
          <li>
            <Link href="/news" style={{ textDecoration: "none" }}>
              News
            </Link>
          </li>
          <li>
            <Link href="/gallery" style={{ textDecoration: "none" }}>
              Gallery
            </Link>
          </li>
          <li>
            <Link href="/contact" style={{ textDecoration: "none" }}>
              Contact
            </Link>
          </li>
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
