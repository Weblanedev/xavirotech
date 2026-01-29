import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/header-two";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import FooterThree from "@/layout/footer/footer-three";
import shop_bg from "@/assets/images/media/img_47.jpg";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import shape from "@/assets/images/shape/shape_26.svg";
import ProductDetailsArea from "@/components/shop/product-details/product-details-area";
import NewsletterBanner from "@/components/newsletter/newsletter-banner";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Shop Details Page",
};

const ShopDetailsPage = () => {
  redirect("/shop");
};

export default ShopDetailsPage;
