import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

// 欧文の見出し・番号だけ Web フォントにする（latin サブセットのみなので軽い）。
// 日本語は端末標準の明朝・ゴシックを使う
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  weight: ["400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const title = `${site.nameJa} | ${site.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description: site.description,
  openGraph: {
    title,
    description: site.description,
    url: site.url,
    siteName: site.nameJa,
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja" className={`${cormorant.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
