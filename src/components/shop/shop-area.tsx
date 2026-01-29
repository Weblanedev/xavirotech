"use client";
import React, { useMemo, useState, useEffect } from "react";
import Link from "next/link";
// internal
import usePagination from "@/hooks/use-pagination";
import { IProduct } from "@/types/product-d-t";
import Pagination from "@/ui/pagination";
import ProductItem from "./product-item";
import {
  getDummyCategories,
  getDummyProducts,
  isTechProduct,
  mapDummyProductToAppProduct,
  normalizeDummyCategory,
} from "@/lib/dummyjson";

const ShopArea = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [sort, setSort] = useState<"default" | "low" | "high" | "new">(
    "default",
  );
  const [loading, setLoading] = useState(true);

  const filteredAndSortedProducts = useMemo(() => {
    let list = [...products];
    if (selectedCategory) {
      list = list.filter((p) => p.category === selectedCategory);
    }
    if (sort === "low") {
      list.sort((a, b) => Number(a.price) - Number(b.price));
    } else if (sort === "high") {
      list.sort((a, b) => Number(b.price) - Number(a.price));
    } else if (sort === "new") {
      list.sort((a, b) => Number(b.id) - Number(a.id));
    }
    return list;
  }, [products, selectedCategory, sort]);

  const { currentItems, handlePageClick, pageCount } = usePagination<IProduct>(
    filteredAndSortedProducts,
    9,
  );

  useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        setLoading(true);
        const [productsRes, cats] = await Promise.all([
          getDummyProducts({ limit: 100, skip: 0 }),
          getDummyCategories(),
        ]);
        if (!mounted) return;
        const techProducts = productsRes.products.filter(isTechProduct);
        setProducts(techProducts.map(mapDummyProductToAppProduct));
        const normalized = cats
          .map(normalizeDummyCategory)
          .map((c) => c.trim())
          .filter(Boolean);
        // categories should only come from the products we actually show
        setCategories(
          Array.from(
            new Set(techProducts.map((p) => p.category).filter(Boolean)),
          ),
        );
      } catch {
        if (!mounted) return;
        setProducts([]);
        setCategories([]);
      } finally {
        if (!mounted) return;
        setLoading(false);
      }
    }
    load();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="product-section-one mt-150 lg-mt-80 mb-150 lg-mb-60">
      <div className="container">
        <div className="shop-page-header d-lg-flex align-items-center justify-content-between">
          <p className="m0 md-pb-20">
            {loading ? (
              <>Loading products…</>
            ) : (
              <>
                Showing{" "}
                <span className="fw-500 text-dark">
                  1–{currentItems.length}
                </span>{" "}
                of{" "}
                <span className="fw-500 text-dark">
                  {filteredAndSortedProducts.length}
                </span>{" "}
                results
              </>
            )}
          </p>
          <ul className="shop-filter-one style-none d-md-flex align-items-center">
            <li className="me-md-3 sm-mb-10">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as any)}
                className="theme-select-menu"
              >
                <option value="default">Sort</option>
                <option value="low">Price: low to high</option>
                <option value="high">Price: high to low</option>
                <option value="new">Newest</option>
              </select>
            </li>
            <li className="me-md-3 sm-mb-10">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="theme-select-menu"
              >
                <option value="">All categories</option>
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </li>
          </ul>
        </div>

        <div className="products-wrapper mt-40">
          {!loading && filteredAndSortedProducts.length === 0 && (
            <div className="text-center pt-20 pb-20">
              <h4>No products found.</h4>
              <p className="m0">
                Try choosing a different category or{" "}
                <Link href="/categories">browse all categories</Link>.
              </p>
            </div>
          )}

          <div className="row gx-xxl-5">
            {currentItems?.map((product, i) => (
              <div
                key={product.id}
                className="col-lg-4 col-sm-6 wow fadeInUp"
                data-wow-delay={`0.${i}s`}
              >
                <ProductItem product={product} />
              </div>
            ))}
          </div>

          <div className="pagination-one mt-30 lg-mt-10">
            <Pagination
              handlePageClick={handlePageClick}
              pageCount={pageCount}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopArea;
