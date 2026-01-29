import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/header-two";
import FooterThree from "@/layout/footer/footer-three";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import shop_bg from "@/assets/images/media/img_47.jpg";
import shape from "@/assets/images/shape/shape_26.svg";

export const metadata: Metadata = {
  title: "Refund & Return Policy - Xaviro",
};

export default function RefundPolicyPage() {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        <HeaderTwo />
        <main>
          <BreadcrumbOne
            title="Refund & Return Policy"
            subtitle="Returns, refunds, and exchanges"
            page="Refund Policy"
            bg_img={shop_bg}
            shape={shape}
          />

          <div className="container mt-80 mb-120">
            <div className="bg-white p-4 p-lg-5 rounded-3">
              <h1 className="text-4xl fw-bold text-dark mb-8 text-center">
                Refund & Return Policy
              </h1>

              <p className="text-muted mb-6">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
              </p>

              <section className="mb-8">
                <h2 className="h3 fw-semibold text-dark mb-4">Return Policy</h2>
                <p className="text-dark mb-4">
                  We want you to be completely satisfied with your purchase. If
                  you are not satisfied, you may return most items within 30
                  days of delivery for a full refund or exchange.
                </p>

                <h3 className="h4 fw-semibold text-dark mb-3">
                  Conditions for Returns
                </h3>
                <ul
                  className="list-disc ps-4 text-dark mb-4"
                  style={{ listStyle: "disc" }}
                >
                  <li className="mb-2">
                    Items must be unused, unworn, and in their original
                    packaging
                  </li>
                  <li className="mb-2">
                    Items must have all tags and labels attached
                  </li>
                  <li className="mb-2">
                    Items must be in the same condition as when received
                  </li>
                  <li className="mb-2">
                    Proof of purchase (order number or receipt) is required
                  </li>
                  <li className="mb-2">
                    Returns must be initiated within 30 days of delivery
                  </li>
                </ul>

                <h3 className="h4 fw-semibold text-dark mb-3">
                  Items Not Eligible for Return
                </h3>
                <ul
                  className="list-disc ps-4 text-dark mb-4"
                  style={{ listStyle: "disc" }}
                >
                  <li className="mb-2">
                    Items that have been used, worn, or damaged
                  </li>
                  <li className="mb-2">
                    Items without original packaging or tags
                  </li>
                  <li className="mb-2">Personalized or customized items</li>
                  <li className="mb-2">
                    Items purchased more than 30 days ago
                  </li>
                  <li className="mb-2">Gift cards and promotional items</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="h3 fw-semibold text-dark mb-4">
                  How to Return an Item
                </h2>
                <ol
                  className="list-decimal ps-4 text-dark mb-4"
                  style={{ listStyle: "decimal" }}
                >
                  <li className="mb-2">
                    Contact our customer service team at{" "}
                    <a
                      href="mailto:Accounts@xavirotech.com"
                      className="text-primary text-decoration-underline"
                    >
                      Accounts@xavirotech.com
                    </a>{" "}
                    or call <a href="tel:09096361527">09096361527</a> to
                    initiate a return
                  </li>
                  <li className="mb-2">
                    Provide your order number and reason for return
                  </li>
                  <li className="mb-2">
                    You will receive a Return Authorization (RA) number and
                    instructions
                  </li>
                  <li className="mb-2">
                    Package the item securely with the RA number visible on the
                    package
                  </li>
                  <li className="mb-2">
                    Ship the item to the address provided in the return
                    instructions
                  </li>
                  <li className="mb-2">
                    We recommend using a trackable shipping method as we are not
                    responsible for lost return packages
                  </li>
                </ol>
              </section>

              <section className="mb-8">
                <h2 className="h3 fw-semibold text-dark mb-4">Refund Policy</h2>
                <p className="text-dark mb-4">
                  Once we receive and inspect your returned item, we will
                  process your refund within 5-7 business days.
                </p>

                <h3 className="h4 fw-semibold text-dark mb-3">Refund Method</h3>
                <p className="text-dark mb-4">
                  Refunds will be issued to the original payment method used for
                  the purchase. Please note that it may take additional time for
                  the refund to appear in your account, depending on your bank
                  or payment provider.
                </p>

                <h3 className="h4 fw-semibold text-dark mb-3">Refund Amount</h3>
                <ul
                  className="list-disc ps-4 text-dark mb-4"
                  style={{ listStyle: "disc" }}
                >
                  <li className="mb-2">
                    Full refund of the item price for items returned in original
                    condition
                  </li>
                  <li className="mb-2">
                    Original shipping costs are non-refundable unless the item
                    is defective or we made an error
                  </li>
                  <li className="mb-2">
                    Return shipping costs are the responsibility of the customer
                    unless the item is defective or we made an error
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="h3 fw-semibold text-dark mb-4">Exchanges</h2>
                <p className="text-dark mb-4">
                  If you need to exchange an item for a different size, color,
                  or style, please contact our customer service team. Exchanges
                  are subject to product availability. If the item you want is
                  not available, we will process a refund instead.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="h3 fw-semibold text-dark mb-4">
                  Defective or Damaged Items
                </h2>
                <p className="text-dark mb-4">
                  If you receive a defective or damaged item, please contact us
                  immediately with photos of the damage. We will arrange for a
                  replacement or full refund, and we will cover all return
                  shipping costs.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="h3 fw-semibold text-dark mb-4">
                  Processing Time
                </h2>
                <ul
                  className="list-disc ps-4 text-dark mb-4"
                  style={{ listStyle: "disc" }}
                >
                  <li className="mb-2">
                    <strong>Return Processing:</strong> 5-7 business days after
                    we receive your returned item
                  </li>
                  <li className="mb-2">
                    <strong>Refund Processing:</strong> 3-5 business days after
                    approval
                  </li>
                  <li className="mb-2">
                    <strong>Credit Card Refunds:</strong> 5-10 business days to
                    appear in your account
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="h3 fw-semibold text-dark mb-4">Contact Us</h2>
                <p className="text-dark mb-4">
                  For questions about returns or refunds, please contact us:
                </p>
                <ul className="list-unstyled text-dark">
                  <li className="mb-2">
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:Accounts@xavirotech.com"
                      className="text-primary text-decoration-underline"
                    >
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
                  <li className="mb-2">
                    <strong>Hours:</strong> Monday - Friday, 9AM - 6PM WAT
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
