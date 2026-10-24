import { site } from "@/content/site";
import { biwaPath } from "@/content/biwa";

/**
 * 開いたときのオープニング：白地に水色の線で琵琶湖を描き → 屋号を出し → 絵ごと拡大しながら消える。
 * 動きは CSS だけ（globals.css の「オープニング」）。出すかどうかは layout の先頭スクリプトが
 * html.intro を付けて決める（開くたび・再読み込みのたびに出す。動きを減らす設定・JS が動かない、のときは出さない）。
 * 読み上げには関係ない飾りなので aria-hidden。クリックで飛ばせる（layout のスクリプト）
 */
export function Intro() {
  return (
    // クラス名は html.intro（出すかどうかの目印）とぶつからないよう intro-overlay にする
    <div id="intro" className="intro-overlay" aria-hidden="true">
      <div className="intro-mark">
        {/* 湖の線がある範囲（x 14.7〜49.4, y 4.5〜59.1）に線の太さぶんの余白を足して切り出す */}
        <svg viewBox="12 2 40 60" className="intro-lake">
          <path d={biwaPath} pathLength={1} />
        </svg>
        <p className="intro-name font-mincho">{site.shopName}</p>
      </div>
    </div>
  );
}
