/**
 * Fallback for dev 404 on /_next/static/css/app/layout.css.
 * Next.js sometimes requests this path in dev; global styles come from globals.scss in root layout.
 */
export async function GET() {
  return new Response("/* layout.css fallback - styles from globals.scss */", {
    headers: {
      "Content-Type": "text/css",
      "Cache-Control": "no-store",
    },
  });
}
