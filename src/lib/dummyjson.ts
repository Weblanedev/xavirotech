export type DummyJsonProduct = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand?: string;
  thumbnail: string;
  images: string[];
};

export type DummyJsonProductsResponse = {
  products: DummyJsonProduct[];
  total: number;
  skip: number;
  limit: number;
};

// ---- catalog filtering (tech-only) ----
// You can tweak these lists to control what shows in the store.
export const TECH_CATEGORY_ALLOWLIST = new Set<string>([
  // DummyJSON has "laptops"
  "laptops",
  // DummyJSON has "smartphones"
  "smartphones",
  // accessories-like categories (DummyJSON uses this name)
  "mobile-accessories",
]);

export function isTechProduct(p: DummyJsonProduct): boolean {
  const category = (p.category ?? "").toLowerCase();
  // Strict category allowlist only (prevents kitchen/home items leaking in via keywords).
  return TECH_CATEGORY_ALLOWLIST.has(category);
}

const DUMMYJSON_BASE_URL = "https://dummyjson.com";

async function fetchDummyJson<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${DUMMYJSON_BASE_URL}${path}`, init);
  if (!res.ok) {
    throw new Error(`DummyJSON request failed: ${res.status} ${res.statusText}`);
  }
  return (await res.json()) as T;
}

export async function getDummyProducts(params?: {
  limit?: number;
  skip?: number;
}): Promise<DummyJsonProductsResponse> {
  const limit = params?.limit ?? 30;
  const skip = params?.skip ?? 0;
  return await fetchDummyJson<DummyJsonProductsResponse>(
    `/products?limit=${encodeURIComponent(limit)}&skip=${encodeURIComponent(skip)}`,
    { cache: "no-store" }
  );
}

export async function getDummyProductById(id: number): Promise<DummyJsonProduct> {
  return await fetchDummyJson<DummyJsonProduct>(`/products/${id}`, {
    cache: "no-store",
  });
}

export type DummyJsonCategory =
  | string
  | {
      slug?: string;
      name?: string;
      url?: string;
    };

export function normalizeDummyCategory(c: DummyJsonCategory): string {
  if (typeof c === "string") return c;
  if (c?.slug) return c.slug;
  if (c?.name) return c.name;
  if (c?.url) {
    try {
      const u = new URL(c.url);
      return u.pathname.split("/").filter(Boolean).pop() ?? "";
    } catch {
      return "";
    }
  }
  return "";
}

export async function getDummyCategories(): Promise<DummyJsonCategory[]> {
  return await fetchDummyJson<DummyJsonCategory[]>(`/products/categories`, {
    cache: "no-store",
  });
}

export async function getDummyProductsByCategory(
  category: string,
  params?: { limit?: number; skip?: number }
): Promise<DummyJsonProductsResponse> {
  const limit = params?.limit ?? 30;
  const skip = params?.skip ?? 0;
  return await fetchDummyJson<DummyJsonProductsResponse>(
    `/products/category/${encodeURIComponent(category)}?limit=${encodeURIComponent(
      limit
    )}&skip=${encodeURIComponent(skip)}`,
    { cache: "no-store" }
  );
}

// ---- mapping to app product type ----
import type { IProduct } from "@/types/product-d-t";

export function mapDummyProductToAppProduct(p: DummyJsonProduct): IProduct {
  const relatedImages = p.images?.length ? p.images : [p.thumbnail];
  return {
    id: p.id,
    img: p.thumbnail,
    title: p.title,
    category: p.category,
    brand: p.brand,
    price: p.price,
    discount: Math.max(0, Math.min(1, p.discountPercentage / 100)),
    quantity: p.stock,
    old_price:
      p.discountPercentage > 0
        ? Number((p.price / (1 - p.discountPercentage / 100)).toFixed(2))
        : undefined,
    sm_desc: p.description,
    related_images: relatedImages,
    details: {
      specifications: p.description,
      main_features: [
        p.brand ? `Brand: ${p.brand}` : `Category: ${p.category}`,
        `Rating: ${p.rating}`,
        `In stock: ${p.stock}`,
      ],
    },
    reviews: [],
  };
}

