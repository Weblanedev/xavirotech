import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/header-two";
import FooterThree from "@/layout/footer/footer-three";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import shape from "@/assets/images/shape/shape_26.svg";
import { getDummyProducts, isTechProduct } from "@/lib/dummyjson";

export const metadata: Metadata = {
  title: "Categories",
};

export default async function CategoriesPage() {
  const res = await getDummyProducts({ limit: 100, skip: 0 }).catch(() => null);
  const categories = Array.from(
    new Set(
      (res?.products ?? [])
        .filter(isTechProduct)
        .map((p) => p.category)
        .filter(Boolean),
    ),
  );
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        <HeaderTwo />
        <main>
          <BreadcrumbOne
            title="Shop Categories"
            subtitle="Browse laptops, computers and accessories by category"
            page="Categories"
            bg_img="/assets/images/media/img_47.jpg"
            shape={shape}
          />

          <div className="container mt-80 mb-120">
            <div className="row g-3">
              {categories.map((c) => (
                <div key={c} className="col-lg-3 col-md-4 col-sm-6">
                  <Link
                    href={`/category/${encodeURIComponent(c)}`}
                    className="d-block p-4 border rounded-3 h-100"
                  >
                    <div className="fw-500 text-dark">{c}</div>
                    <div className="text-muted">View products</div>
                  </Link>
                </div>
              ))}
              {categories.length === 0 && (
                <div className="col-12 text-center">
                  <h4>No categories available right now.</h4>
                  <Link href="/shop" className="btn-ten tran3s mt-20">
                    Go to shop
                  </Link>
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
