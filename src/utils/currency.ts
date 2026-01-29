/**
 * Currency utilities: USD (source) → NGN (display).
 * Uses approximate rate 1 USD = 1550 NGN.
 */
const USD_TO_NGN = 1550;

/** Convert USD amount to NGN. */
export function usdToNgn(usd: number): number {
  return usd * USD_TO_NGN;
}

/**
 * Format a USD amount as Naira (₦) with commas, no decimals for whole numbers.
 * Pass the USD value; conversion is done inside.
 */
export function formatNaira(usd: number): string {
  const ngn = usdToNgn(usd);
  if (Number.isInteger(ngn)) {
    return `₦${ngn.toLocaleString()}`;
  }
  return `₦${ngn.toLocaleString("en-NG", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
}

/**
 * Format NGN amount only (when you already have NGN value).
 */
export function formatNairaAmount(ngn: number): string {
  const rounded = Math.round(ngn);
  return `₦${rounded.toLocaleString()}`;
}
