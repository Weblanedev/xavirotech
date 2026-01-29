"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
// internal
import Navbar from "./navbar";
import LogoText from "@/components/common/logo-text";
import icon_1 from "@/assets/images/icon/icon_14.svg";
import icon_2 from "@/assets/images/icon/icon_15.svg";
import useSticky from "@/hooks/use-sticky";

const HeaderOne = () => {
  const { sticky } = useSticky();
  return (
    <>
      <header
        className={`theme-main-menu menu-overlay menu-style-two sticky-menu sticky-top ${sticky ? "fixed" : ""}`}
        style={{ zIndex: 1030 }}
      >
        <div className="gap-fix info-row">
          <div className="d-md-flex justify-content-between">
            <div className="greetings text-center">
              <span className="opacity-50">Hello!!</span>{" "}
              <span className="fw-500">Welcome to Xaviro.</span>
            </div>
            <ul className="style-none d-none d-md-flex contact-info">
              <li className="d-flex align-items-center">
                <Image src={icon_1} alt="icon" className="lazy-img icon me-2" />
                <Link href="mailto:Accounts@xavirotech.com" className="fw-500">
                  Accounts@xavirotech.com
                </Link>
              </li>
              <li className="d-flex align-items-center">
                <Image src={icon_2} alt="icon" className="lazy-img icon me-2" />
                <Link href="tel:09096361527" className="fw-500">
                  09096361527
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="inner-content gap-fix">
          <div className="top-header position-relative">
            <div className="d-flex align-items-center">
              <div className="logo order-lg-0">
                <LogoText />
              </div>
              <nav className="navbar navbar-expand-lg p0 ms-lg-5 order-lg-2 ms-auto">
                <button
                  className="navbar-toggler d-block d-lg-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  {/* header navbar start */}
                  <Navbar />
                  {/* header navbar end */}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderOne;
