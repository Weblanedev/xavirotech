import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderThree from "@/layout/header/header-three";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import FooterThree from "@/layout/footer/footer-three";
import shape from "@/assets/images/shape/shape_25.svg";

export const metadata: Metadata = {
  title: "About Us - Xaviro Limited",
  description:
    "High-end tech, low-end pricing. Learn about Xaviro Limited and our mission.",
};

const AboutUsPage = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        <HeaderThree />
        <main>
          <BreadcrumbOne
            title="About Xaviro"
            subtitle="High-end tech, low-end pricing. We bring quality technology within reach."
            page="About Us"
            bg_img="/assets/images/media/img_26.jpg"
            shape={shape}
            style_2={true}
          />

          <section className="about-content light-bg pt-120 lg-pt-80 pb-120 lg-pb-80">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-10">
                  <div className="title-one text-center mb-50 lg-mb-30">
                    <h2 className="fw-bold">Who we are</h2>
                  </div>
                  <p className="text-lg text-center mb-30">
                    Xaviro Limited is a technology company focused on making
                    premium tech accessible. We believe everyone deserves
                    reliable, high-quality products and services without premium
                    price tags.
                  </p>
                  <p className="text-lg text-center mb-50">
                    From hardware and software to support and consulting, we
                    combine quality with affordability so businesses and
                    individuals can grow without compromise.
                  </p>

                  <div className="title-one text-center mb-40 lg-mb-25">
                    <h2 className="fw-bold">What we do</h2>
                  </div>
                  <p className="text-lg text-center mb-50">
                    We offer a range of technology products and solutions:
                    quality devices, software, and ongoing support. Our goal is
                    to provide value—great performance and reliability at fair
                    prices.
                  </p>

                  <div className="title-one text-center mb-40 lg-mb-25">
                    <h2 className="fw-bold">Our commitment</h2>
                  </div>
                  <ul className="style-none text-lg text-center mb-0">
                    <li className="mb-15">Quality products and services</li>
                    <li className="mb-15">Transparent, fair pricing</li>
                    <li className="mb-15">Reliable support when you need it</li>
                    <li>Building long-term relationships with our customers</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </main>
        <FooterThree />
      </div>
    </Wrapper>
  );
};

export default AboutUsPage;
