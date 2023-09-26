"use client";

import React, { useState } from "react";
import styles from "./navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import Button from "../button/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.links}>
          <li className={styles.logo}>
            <Link href="/">
              <Image src="/nav-logo.png" alt="logo" width={96} height={54} />
            </Link>
          </li>
          <li className={styles.link}>
            <Link href="/">Hulu Ad Blocker</Link>
          </li>
          <li className={styles.link}>
            <Link href="#about">ABOUT </Link>
          </li>
          <li className={styles.link}>
            <Link href="#accordian">FAQ</Link>
          </li>
          <li className={styles.link}>
            <Link href="/support">Support</Link>
          </li>
        </ul>
        <ul className={styles.links}>
          <li className={styles.link}>
            <Button />
          </li>
        </ul>

        <div
          className={`${styles.mobileMenuBtn}  ${isOpen && styles.animate}`}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className={`${styles.line} ${styles.firstLine}`}></span>
          <span className={`${styles.line} ${styles.middleLine}`}></span>
          <span className={`${styles.line} ${styles.lastLine}`}></span>
        </div>
      </nav>

      {isOpen && (
        <div className={styles.mobile}>
          <div className={styles.logo}>
            <Link href="/">
              <Image
                src="/nav-logo.png"
                alt="logo"
                width={50}
                height={50}
                style={{ mixBlendMode: "multiply", borderRadius: "50%" }}
              />
            </Link>
          </div>
          <ul className={styles.links}>
            <li className={styles.link}>
              <Link href="/">Hulu Ad Blocker</Link>
            </li>
            <li className={styles.link}>
              <Link href="#about">ABOUT </Link>
            </li>
            <li className={styles.link}>
              <Link href="#accordian">FAQ</Link>
            </li>
            <li className={styles.link}>
              <Link href="/support">Support</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
