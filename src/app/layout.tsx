import type { Metadata } from "next";
import { site } from "@/content/site";
import "./globals.css";

// 日本語Webフォントは @font-face だけで CSS が約100KB 増え表示を遅らせるため、
// 端末の標準フォント（iPhone: ヒラギノ / Android: Noto Sans CJK / Windows: 游ゴシック）を使う

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
    <html lang="ja" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
