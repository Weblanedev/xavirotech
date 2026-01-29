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
import {
  getDummyProductById,
  isTechProduct,
  mapDummyProductToAppProduct,
} from "@/lib/dummyjson";

export const metadata: Metadata = {
  title: "Shop Details Page",
};

// const ShopDetailsPage = ({ params }: { params: { id: string } }) => {
const ShopDetailsPage = async ({ params }: any) => {
  const id = Number(params?.id);
  let product = null as any;
  if (!Number.isNaN(id)) {
    try {
      const p = await getDummyProductById(id);
      product = isTechProduct(p) ? mapDummyProductToAppProduct(p) : null;
    } catch {
      product = null;
    }
  }
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbOne
            title="Our Product Showcase"
            subtitle="Meet our products, guiding you through financial intricacies with precision"
            page="Shop"
            bg_img={shop_bg}
            shape={shape}
          />
          {/* breadcrumb end */}

          {/* shop details area start */}
          {product ? (
            <ProductDetailsArea product={product} />
          ) : (
            <div className="container">
              <div className="mt-80 mb-80 text-center">
                <h3>Not Found Any Product this id {params.id}</h3>
              </div>
            </div>
          )}
          {/* shop details area end */}

          {/* fancy banner three start */}
          <FancyBannerThree />
          {/* fancy banner three end */}

          {/* news letter start */}
          <NewsletterBanner />
          {/* news letter end */}
        </main>

        {/* footer start */}
        <FooterThree style_2={true} />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default ShopDetailsPage;
