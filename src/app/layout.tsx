import type { Metadata } from "next";
import { site } from "@/content/site";
import { RevealObserver } from "@/components/RevealObserver";
import { Intro } from "@/components/Intro";
import "./globals.css";

const title = `${site.shopName}（${site.nameJa}）| ${site.area}の${site.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description: site.description,
  openGraph: {
    title,
    description: site.description,
    url: site.url,
    siteName: site.shopName,
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja" className="h-full antialiased" suppressHydrationWarning>
      <head>
        {/* 描画前に付ける。JS が動く環境でだけ [data-reveal] を隠し、スクロールで浮かび上がらせる。
            オープニング（Intro）は、動きを減らす設定でなく、このタブで初めて開いたときだけ出す。
            クリックすると飛ばせる */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var d=document.documentElement;if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;d.classList.add('reveal-ready');try{if(sessionStorage.getItem('intro-seen'))return;sessionStorage.setItem('intro-seen','1')}catch(e){}d.classList.add('intro');addEventListener('DOMContentLoaded',function(){var e=document.getElementById('intro');if(e)e.addEventListener('click',function(){d.classList.remove('intro')})})})()`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Intro />
        {children}
        <RevealObserver />
      </body>
    </html>
  );
}
