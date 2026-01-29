import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/header-two";
import FooterThree from "@/layout/footer/footer-three";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import shape from "@/assets/images/shape/shape_26.svg";
import {
  getDummyProductsByCategory,
  isTechProduct,
  mapDummyProductToAppProduct,
} from "@/lib/dummyjson";
import ProductItem from "@/components/shop/product-item";

export const metadata: Metadata = {
  title: "Category",
};

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug: slugParam } = await params;
  const slug = decodeURIComponent(slugParam);
  const res = await getDummyProductsByCategory(slug, {
    limit: 100,
    skip: 0,
  }).catch(() => null);
  const products = res
    ? res.products.filter(isTechProduct).map(mapDummyProductToAppProduct)
    : [];

  return (
    <Wrapper>
      <div className="main-page-wrapper">
        <HeaderTwo />
        <main>
          <BreadcrumbOne
            title={`Category: ${slug}`}
            subtitle="Browse products in this category"
            page="Category"
            bg_img="/assets/images/media/img_47.jpg"
            shape={shape}
          />

          <div className="product-section-one mt-80 mb-150 lg-mb-60">
            <div className="container">
              {products.length === 0 ? (
                <div className="text-center pt-40">
                  <h3>No products found in this category.</h3>
                </div>
              ) : (
                <div className="row gx-xxl-5">
                  {products.map((product, i) => (
                    <div
                      key={product.id}
                      className="col-lg-4 col-sm-6 wow fadeInUp"
                      data-wow-delay={`0.${i}s`}
                    >
                      <ProductItem product={product} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </main>
        <FooterThree style_2={true} />
      </div>
    </Wrapper>
  );
}
