import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/header-two";
import FooterThree from "@/layout/footer/footer-three";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import shop_bg from "@/assets/images/media/img_47.jpg";
import shape from "@/assets/images/shape/shape_26.svg";

export const metadata: Metadata = {
  title: "Privacy Policy - Xaviro",
};

export default function PrivacyPolicyPage() {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        <HeaderTwo />
        <main>
          <BreadcrumbOne
            title="Privacy Policy"
            subtitle="How we collect, use, and protect your information"
            page="Privacy Policy"
            bg_img={shop_bg}
            shape={shape}
          />

          <div className="container mt-80 mb-120">
            <div className="bg-white p-4 p-lg-5 rounded-3">
              <h1 className="text-4xl fw-bold text-dark mb-8 text-center">
                Privacy Policy
              </h1>

              <p className="text-muted mb-6">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
              </p>

              <section className="mb-8">
                <h2 className="h3 fw-semibold text-dark mb-4">
                  1. Introduction
                </h2>
                <p className="text-dark mb-4">
                  Xaviro (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is
                  committed to protecting your privacy and ensuring you have a
                  positive experience on our website and in using our products
                  and services. This Privacy Policy explains how we collect,
                  use, disclose, and safeguard your information when you visit
                  our website and purchase our products.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="h3 fw-semibold text-dark mb-4">
                  2. Information We Collect
                </h2>
                <h3 className="h4 fw-semibold text-dark mb-3">
                  Personal Information
                </h3>
                <p className="text-dark mb-4">
                  We collect personal information that you provide directly to
                  us, including:
                </p>
                <ul
                  className="list-disc ps-4 text-dark mb-4"
                  style={{ listStyle: "disc" }}
                >
                  <li className="mb-2">
                    Name and contact information (email address, phone number)
                  </li>
                  <li className="mb-2">Shipping and billing addresses</li>
                  <li className="mb-2">
                    Payment information (processed securely through our payment
                    processors)
                  </li>
                  <li className="mb-2">
                    Account credentials if you create an account
                  </li>
                  <li className="mb-2">
                    Communications with us (customer service inquiries,
                    feedback)
                  </li>
                </ul>

                <h3 className="h4 fw-semibold text-dark mb-3">
                  Automatically Collected Information
                </h3>
                <p className="text-dark mb-4">
                  When you visit our website, we automatically collect certain
                  information, including:
                </p>
                <ul
                  className="list-disc ps-4 text-dark mb-4"
                  style={{ listStyle: "disc" }}
                >
                  <li className="mb-2">IP address and browser type</li>
                  <li className="mb-2">
                    Device information and operating system
                  </li>
                  <li className="mb-2">
                    Pages visited and time spent on our website
                  </li>
                  <li className="mb-2">Referring website addresses</li>
                  <li className="mb-2">
                    Cookies and similar tracking technologies
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="h3 fw-semibold text-dark mb-4">
                  3. How We Use Your Information
                </h2>
                <p className="text-dark mb-4">
                  We use the information we collect to:
                </p>
                <ul
                  className="list-disc ps-4 text-dark mb-4"
                  style={{ listStyle: "disc" }}
                >
                  <li className="mb-2">Process and fulfill your orders</li>
                  <li className="mb-2">
                    Send you order confirmations and shipping updates
                  </li>
                  <li className="mb-2">
                    Respond to your inquiries and provide customer support
                  </li>
                  <li className="mb-2">
                    Send you marketing communications (with your consent)
                  </li>
                  <li className="mb-2">
                    Improve our website and product offerings
                  </li>
                  <li className="mb-2">
                    Detect and prevent fraud and unauthorized access
                  </li>
                  <li className="mb-2">Comply with legal obligations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="h3 fw-semibold text-dark mb-4">
                  4. Information Sharing and Disclosure
                </h2>
                <p className="text-dark mb-4">
                  We do not sell your personal information. We may share your
                  information in the following circumstances:
                </p>
                <ul
                  className="list-disc ps-4 text-dark mb-4"
                  style={{ listStyle: "disc" }}
                >
                  <li className="mb-2">
                    <strong>Service Providers:</strong> We share information
                    with third-party service providers who perform services on
                    our behalf, such as payment processing, shipping, and email
                    delivery.
                  </li>
                  <li className="mb-2">
                    <strong>Legal Requirements:</strong> We may disclose
                    information if required by law or in response to valid
                    requests by public authorities.
                  </li>
                  <li className="mb-2">
                    <strong>Business Transfers:</strong> In the event of a
                    merger, acquisition, or sale of assets, your information may
                    be transferred.
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="h3 fw-semibold text-dark mb-4">
                  5. Data Security
                </h2>
                <p className="text-dark mb-4">
                  We implement appropriate technical and organizational security
                  measures to protect your personal information against
                  unauthorized access, alteration, disclosure, or destruction.
                  However, no method of transmission over the Internet or
                  electronic storage is 100% secure.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="h3 fw-semibold text-dark mb-4">
                  6. Your Rights
                </h2>
                <p className="text-dark mb-4">You have the right to:</p>
                <ul
                  className="list-disc ps-4 text-dark mb-4"
                  style={{ listStyle: "disc" }}
                >
                  <li className="mb-2">
                    Access and receive a copy of your personal information
                  </li>
                  <li className="mb-2">
                    Correct inaccurate or incomplete information
                  </li>
                  <li className="mb-2">
                    Request deletion of your personal information
                  </li>
                  <li className="mb-2">Opt-out of marketing communications</li>
                  <li className="mb-2">
                    Withdraw consent where processing is based on consent
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="h3 fw-semibold text-dark mb-4">7. Cookies</h2>
                <p className="text-dark mb-4">
                  We use cookies and similar tracking technologies to enhance
                  your experience on our website. You can control cookies
                  through your browser settings, but disabling cookies may
                  affect website functionality.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="h3 fw-semibold text-dark mb-4">
                  8. Children&apos;s Privacy
                </h2>
                <p className="text-dark mb-4">
                  Our website is not intended for children under the age of 18.
                  We do not knowingly collect personal information from
                  children.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="h3 fw-semibold text-dark mb-4">
                  9. Changes to This Privacy Policy
                </h2>
                <p className="text-dark mb-4">
                  We may update this Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy on
                  this page and updating the &quot;Last Updated&quot; date.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="h3 fw-semibold text-dark mb-4">
                  10. Contact Us
                </h2>
                <p className="text-dark mb-4">
                  If you have any questions about this Privacy Policy, please
                  contact us:
                </p>
                <ul className="list-unstyled text-dark">
                  <li className="mb-2">
                    <strong>Email:</strong>{" "}
                    <a href="mailto:Accounts@xavirotech.com">
                      Accounts@xavirotech.com
                    </a>
                  </li>
                  <li className="mb-2">
                    <strong>Phone:</strong>{" "}
                    <a href="tel:09096361527">09096361527</a>
                  </li>
                  <li className="mb-2">
                    <strong>Address:</strong> 3 Hassan Close, Benson, Ikorodu,
                    Lagos State
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </main>
        <FooterThree style_2={true} />
      </div>
    </Wrapper>
  );
}
