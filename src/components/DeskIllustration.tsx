// 名刺と同じ「机を真上から見た線画」（ノートPC・コーヒー・観葉植物・スマホ・ノートとペン）
export function DeskIllustration({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 140 102"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g transform="rotate(-8 62 46)">
        <rect x="34" y="8" width="54" height="34" rx="3" />
        <rect x="38" y="12" width="46" height="26" rx="1.5" />
        <path d="M44 20 l-4 4 4 4 M78 20 l4 4 -4 4 M64 18 l-6 13" />
        <rect x="31" y="44" width="60" height="34" rx="4" />
        <path d="M37 51 h48 M37 57 h48 M37 63 h48" />
        <path d="M43 51 v12 M49 51 v12 M55 51 v12 M61 51 v12 M67 51 v12 M73 51 v12 M79 51 v12" />
        <rect x="52" y="67" width="18" height="8" rx="1.5" />
      </g>
      <circle cx="117" cy="30" r="11" />
      <circle cx="117" cy="30" r="7" />
      <path d="M128 27 q7 3 0 7" />
      <path d="M114 28 q3 -3 6 0" />
      <circle cx="116" cy="78" r="8" />
      <path d="M116 78 q-4 -14 -14 -16 q2 12 14 16 M116 78 q2 -15 12 -19 q1 13 -12 19 M116 78 q14 -4 20 4 q-12 6 -20 -4 M116 78 q-14 2 -18 11 q12 2 18 -11" />
      <g transform="rotate(14 14 62)">
        <rect x="6" y="46" width="17" height="30" rx="3.5" />
        <path d="M12 50 h5 M12 72 h5" />
      </g>
      <g transform="rotate(-4 60 92)">
        <rect x="38" y="84" width="30" height="16" rx="1.5" />
        <path d="M43 89 h20 M43 94 h14" />
      </g>
      <path d="M74 98 l20 -10 M94 88 l3 -1.5 -1 3 z" />
    </svg>
  );
}
