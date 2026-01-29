import React from "react";
import Link from "next/link";
// internal
import LogoText from "@/components/common/logo-text";
import FooterSocial from "./footer-social";
import FooterNewsletterForm from "./footer-newsletter-form";

const FooterOne = () => {
  return (
    <div className="footer-one">
      <div className="container">
        <div className="inner-wrapper">
          <div className="row justify-content-between">
            <div className="col-xl-4 col-md-3 footer-intro mb-30">
              <div className="logo mb-15 d-lg-none">
                <LogoText white />
              </div>
              <p className="text-white lh-sm mb-35">
                Top-rated{" "}
                <span className="opacity-50">
                  business <br /> consultancy for your success
                </span>
              </p>
              {/* social link */}
              <ul className="style-none d-flex align-items-center social-icon">
                <FooterSocial />
              </ul>
              {/* social link */}
            </div>
            <div className="col-xl-2 col-md-3 col-sm-4 mb-20">
              <h5 className="footer-title">Links</h5>
              <ul className="footer-nav-link style-none">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/pricing">Pricing Plan</Link>
                </li>
                <li>
                  <Link href="/about-us">About us</Link>
                </li>
                <li>
                  <Link href="/service-v1">Our services</Link>
                </li>
              </ul>
            </div>
            <div className="col-xl-2 col-md-3 col-sm-4 mb-20">
              <h5 className="footer-title">Company</h5>
              <ul className="footer-nav-link style-none">
                <li>
                  <Link href="/about-us-2">About us</Link>
                </li>
                <li>
                  <Link href="/blog">Blogs</Link>
                </li>
                <li>
                  <Link href="/faq">FAQ’s</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="col-xl-2 col-md-3 col-sm-4 mb-20">
              <h5 className="footer-title">Support</h5>
              <ul className="footer-nav-link style-none">
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/refund-policy">Refund Policy</Link>
                </li>
                <li>
                  <Link href="/cart">Cart</Link>
                </li>
                <li>
                  <Link href="/checkout">Checkout</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="bottom-footer">
          <div className="row align-items-center">
            <div className="col-lg-5 order-lg-last mb-15">
              <div className="footer-newsletter float-xl-end">
                <h5 className="footer-title">Subscribe Newsletter</h5>
                <FooterNewsletterForm />
              </div>
            </div>
            <div className="col-lg-7 order-lg-first mb-15">
              <div className="d-none d-lg-inline-block mb-25">
                <LogoText white />
              </div>
              <div className="d-xl-flex align-items-center">
                <ul className="style-none bottom-nav d-flex flex-wrap justify-content-center justify-content-lg-start order-lg-last">
                  <li>
                    <Link href="/privacy-policy">Privacy</Link>
                  </li>
                  <li>
                    <Link href="/refund-policy">Refunds</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
                <div className="copyright me-xl-4 lg-mt-10 order-lg-first">
                  Copyright @{new Date().getFullYear()} xaviro
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterOne;
