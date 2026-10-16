import type { Metadata } from "next";
import { site } from "@/content/site";
import { RevealObserver } from "@/components/RevealObserver";
import "./globals.css";

const title = `${site.nameJa} | ${site.area}の${site.role}`;

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
    <html lang="ja" className="h-full antialiased" suppressHydrationWarning>
      <head>
        {/* 描画前に付ける。JS が動く環境でだけ [data-reveal] を隠し、スクロールで浮かび上がらせる */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('reveal-ready')",
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <RevealObserver />
      </body>
    </html>
  );
}
