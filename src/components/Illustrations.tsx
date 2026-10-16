// ファーストビューの机の線画と同じタッチ（真上から見た構図・丸い線端・currentColor）のイラスト群。
// 大きいイラストは .sketch を付け、画面に入ったとき（[data-reveal].is-in）に線を引くように描く（globals.css）。
// 各図形の pathLength=1 はその描画アニメーション用。

type Props = { className?: string };

const big = {
  viewBox: "0 0 140 102",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const small = { ...big, viewBox: "0 0 48 48", strokeWidth: 2.2 };

/** ご相談は、対面で。：テーブルを挟んだ2つの席・2つのカップ・ノートとペン */
export function ConsultIllustration({ className }: Props) {
  return (
    <svg className={`sketch ${className ?? ""}`} {...big}>
      <circle pathLength={1} cx="70" cy="51" r="33" />
      <rect pathLength={1} x="18" y="38" width="12" height="26" rx="4" />
      <rect pathLength={1} x="110" y="38" width="12" height="26" rx="4" />
      <circle pathLength={1} cx="51" cy="41" r="6" />
      <circle pathLength={1} cx="51" cy="41" r="3.5" />
      <path pathLength={1} d="M45.5 43.5 q-4 1 -3 -4" />
      <circle pathLength={1} cx="93" cy="67" r="6" />
      <circle pathLength={1} cx="93" cy="67" r="3.5" />
      <path pathLength={1} d="M98.5 64.5 q4 -1 3 4" />
      <g transform="rotate(-8 70 54)">
        <rect pathLength={1} x="59" y="45" width="24" height="18" rx="1.5" />
        <path pathLength={1} d="M63 50 h16 M63 54 h12 M63 58 h14" />
      </g>
      <path pathLength={1} d="M50 66 l13 -5 M63 61 l2.2 -0.8 -0.8 2 z" />
    </svg>
  );
}

/** 私について：開いた本・グラフを描いた方眼ノート・鉛筆・マグカップ・眼鏡 */
export function StudyIllustration({ className }: Props) {
  return (
    <svg className={`sketch ${className ?? ""}`} {...big}>
      <g transform="rotate(-6 40 52)">
        <path pathLength={1} d="M12 30 q14 -6 28 0 v42 q-14 -6 -28 0 z" />
        <path pathLength={1} d="M40 30 q14 -6 28 0 v42 q-14 -6 -28 0 z" />
        <path
          pathLength={1}
          d="M17 38 q9 -3 18 0 M17 45 q9 -3 18 0 M17 52 q9 -3 18 0 M45 38 q9 -3 18 0 M45 45 q9 -3 18 0 M45 52 q9 -3 18 0"
        />
      </g>
      <g transform="rotate(7 102 38)">
        <rect pathLength={1} x="80" y="16" width="44" height="40" rx="2" />
        <path pathLength={1} d="M86 50 V22 M86 50 H119" />
        <path pathLength={1} d="M86 42 q5 -16 10 -6 q5 10 10 -8 q4 -12 10 -2" />
        <path pathLength={1} d="M91 50 v-1.5 M97 50 v-1.5 M103 50 v-1.5 M109 50 v-1.5 M115 50 v-1.5" />
      </g>
      <path pathLength={1} d="M78 86 l30 -12 M108 74 l4 -1.6 -1.6 3.6 z M80 84.8 l-2.5 1.2" />
      <circle pathLength={1} cx="122" cy="80" r="9" />
      <circle pathLength={1} cx="122" cy="80" r="5.5" />
      <path pathLength={1} d="M131 77 q6 3 0 7" />
      <circle pathLength={1} cx="28" cy="88" r="6" />
      <circle pathLength={1} cx="46" cy="88" r="6" />
      <path pathLength={1} d="M34 87 q3 -2 6 0 M22 87 l-8 -4 M52 87 l8 -4" />
    </svg>
  );
}

/** お問い合わせ：封筒と手紙、紙飛行機 */
export function MailIllustration({ className }: Props) {
  return (
    <svg className={`sketch ${className ?? ""}`} {...big}>
      <g transform="rotate(-8 52 60)">
        <rect pathLength={1} x="18" y="38" width="64" height="42" rx="3" />
        <path pathLength={1} d="M18 41 l32 22 l32 -22" />
        <path pathLength={1} d="M18 78 l22 -18 M82 78 l-22 -18" />
        <path pathLength={1} d="M28 38 v-10 h44 v10" />
        <path pathLength={1} d="M36 32 h28" />
      </g>
      <path pathLength={1} d="M96 30 l34 -14 l-12 30 l-8 -10 z M110 36 l20 -20 M110 36 v10 l4 -6" />
      <path pathLength={1} d="M92 40 q-6 6 -2 12 M86 58 q-4 6 0 12" />
    </svg>
  );
}

/** お悩みの小さなアイコン */
export type WorryIconName = "unclear" | "repeat" | "outdated" | "manual";

export function WorryIcon({ name, className }: Props & { name: WorryIconName }) {
  return (
    <svg className={className} {...small}>
      {name === "unclear" && (
        <>
          <path d="M8 10 h32 a3 3 0 0 1 3 3 v16 a3 3 0 0 1 -3 3 h-18 l-8 7 v-7 h-6 a3 3 0 0 1 -3 -3 v-16 a3 3 0 0 1 3 -3 z" />
          <path d="M20 17 q0 -4 4 -4 q4 0 4 4 q0 3 -4 4 v2.5 M24 27.5 v0.1" />
        </>
      )}
      {name === "repeat" && (
        <>
          <path d="M12 14 q-4 4 0 12 q6 10 14 14 q6 2 9 -2 l-5 -6 l-4 3 q-5 -3 -8 -9 l3 -4 l-5 -6 z" />
          <path d="M30 8 a10 10 0 0 1 10 10 M40 18 l-3 -2.5 M40 18 l2.8 -3" />
          <path d="M28 14 a5 5 0 0 1 6 5" />
        </>
      )}
      {name === "outdated" && (
        <>
          <rect x="6" y="9" width="36" height="30" rx="3" />
          <path d="M6 16 h36" />
          <path d="M12 23 h12 M12 28 h8 M12 33 h10" />
          {/* 時計の下のブラウザの枠線を隠すため、置き場所の背景色（--icon-bg）で塗る */}
          <circle cx="36" cy="35" r="8" style={{ fill: "var(--icon-bg, transparent)" }} />
          <path d="M36 30.5 v4.5 l3 2" />
        </>
      )}
      {name === "manual" && (
        <>
          <rect x="10" y="9" width="24" height="32" rx="2" />
          <path d="M17 9 v-2 h10 v2" />
          <path d="M15 18 h14 M15 24 h14 M15 30 h9" />
          <path d="M30 40 l12 -14 l3 2.5 l-12 14 l-4 1 z M39 29.5 l3 2.5" />
        </>
      )}
    </svg>
  );
}
