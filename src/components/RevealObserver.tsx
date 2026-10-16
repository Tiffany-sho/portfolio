"use client";

import { useEffect } from "react";

/**
 * [data-reveal] の要素が画面に入ったら .is-in を付ける（一度だけ）。
 * スクロール位置が瞬時に飛んだとき（ページ内リンクの即時移動・リロード時の位置復元など）は、
 * 飛び越した要素が「画面に入った」と判定されないため、スクロールのたびに画面より上へ過ぎた要素も表示済みにする。
 */
export function RevealObserver() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    // 監視が動いている印。globals.css の 2.5 秒の保険はこれが無いときだけ働く
    document.documentElement.classList.add("reveal-observing");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));

    let frame = 0;
    const revealPassed = () => {
      frame = 0;
      for (const el of els) {
        if (!el.classList.contains("is-in") && el.getBoundingClientRect().bottom < 0) {
          el.classList.add("is-in");
          io.unobserve(el);
        }
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(revealPassed);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    revealPassed();

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
  return null;
}
