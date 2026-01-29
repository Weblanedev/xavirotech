
export const animationCreate = () => {
  if (typeof window !== "undefined") {
    import("wowjs").then((module) => {
      // wowjs export differs by bundler/version:
      // - module.WOW (most common)
      // - module.default (sometimes the constructor)
      // - module.default.WOW (older/commonjs interop)
      const WowCtor: any =
        (module as any).WOW ?? (module as any).default ?? (module as any).default?.WOW;

      if (typeof WowCtor !== "function") return;
      new WowCtor({ live: false }).init();
    });
  }
};

export const calculateDiscountedPrice = (price:number, discount:number) => {
  // Supports both:
  // - discount as percentage (e.g. 15 means 15%)
  // - discount as fraction (e.g. 0.15 means 15%)
  const d = discount <= 1 ? discount : discount / 100;
  return (price - price * d).toFixed(2);
};