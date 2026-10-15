// サイトに載せる文言・料金・実績はすべてここで管理する（single source of truth）

export const site = {
  url: "https://shosei-ueda.com",
  nameJa: "上田将生",
  nameEn: "Shosei Ueda",
  role: "Webサイト制作",
  description:
    "飲食店・店舗のホームページ制作。スマホで見やすく、更新もしやすいサイトを、ご相談から公開まで一人で丁寧に担当します。",
  // 収集ボット対策として、メールアドレスは分割して持ち、クライアント側で組み立てる
  emailUser: "shosei",
  emailDomain: "shosei-ueda.com",
} as const;

export type Work = {
  title: string;
  kind: string;
  kindEn: string;
  url: string;
  appStoreUrl?: string;
  image: string;
  imageAlt: string;
  summary: string;
  points: string[];
  stack: string[];
};

export const works: Work[] = [
  {
    title: "焼肉 天空",
    kind: "店舗公式サイト",
    kindEn: "Restaurant Website",
    url: "https://tenkoo-yasu.com/",
    image: "/works/tenkoo.png",
    imageAlt: "焼肉 天空 公式サイトのトップページ",
    summary:
      "滋賀県野洲市の焼肉店から依頼を受けて制作した公式サイト。お店の夜の雰囲気が伝わるデザインにしました。",
    points: ["メニュー・コース・営業時間をトップページから確認できる構成", "スマホからそのまま電話予約できるボタン"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Collecie",
    kind: "Webアプリ・iOSアプリ（自社開発）",
    kindEn: "Web & iOS App",
    url: "https://www.collecie.com/",
    appStoreUrl: "https://apps.apple.com/jp/app/collecie/id6796202962",
    image: "/works/collecie.png",
    imageAlt: "コインランドリー集金管理アプリ Collecie の紹介ページ",
    summary:
      "家業のコインランドリーで紙のノートに付けていた集金記録を、スマホで入力・自動集計できるようにしたアプリ。Web版に加えてiOS版もApp Storeで公開しています。企画から運用まで一人で行っています。",
    points: ["ログイン・店舗ごとのデータ管理", "売上の自動集計とグラフ表示", "iOS版をApp Storeで公開中"],
    stack: ["Next.js", "React", "Supabase"],
  },
];

export const services = [
  {
    title: "お店のホームページ",
    body: "メニュー・営業時間・地図・写真など、来店前のお客さまが知りたいことを分かりやすくまとめます。",
  },
  {
    title: "スマホ対応",
    body: "QRコードや検索から来る人の多くはスマホです。小さな画面でも読みやすく、電話や地図にすぐ届く作りにします。",
  },
  {
    title: "公開後の更新・保守",
    body: "メニューや価格の変更、お知らせの追加など、公開後の修正もお任せいただけます。",
  },
  {
    title: "業務用のWebアプリ",
    body: "紙やExcelで行っている記録・集計を、スマホで入力できる仕組みにすることもできます。",
  },
];

export const plans = [
  { name: "1ページのサイト", price: "3万円〜", note: "お店の紹介・アクセスを1ページにまとめたもの" },
  { name: "店舗サイト（〜5ページ）", price: "5万円〜", note: "トップ・メニュー・店舗情報・お知らせなど" },
  { name: "更新・保守", price: "月3,000円〜", note: "文言や写真の差し替え、動作の確認" },
];

export const priceNotes = [
  "金額は目安です。内容をうかがってからお見積もりします。",
  "ドメイン（URL）などの維持費は別途かかります。",
];

export const steps = [
  { title: "ご相談", body: "メールでお気軽にどうぞ。どんなサイトにしたいか、お話をうかがいます。" },
  { title: "お見積もり", body: "ページ数や内容をもとに、金額と公開までの流れをお伝えします。" },
  { title: "制作", body: "写真や文章をいただき、デザインと制作を進めます。" },
  { title: "確認・修正", body: "実際の画面をスマホで見ていただき、気になる点を直します。" },
  { title: "公開", body: "インターネットに公開します。公開後の更新もご相談ください。" },
];

export const profile = {
  lines: [
    "立命館大学 理工学部 物理科学科 4回生。計算物理学を専攻し、2027年からは大学院に進学します。",
    "アルバイト先の焼肉店のサイト制作をきっかけに、Web制作のご依頼をお受けしています。研究でもプログラミングを使っており、仕組みから丁寧に作ることを大切にしています。",
  ],
};
