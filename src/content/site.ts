// サイトに載せる文言・料金・実績はすべてここで管理する（single source of truth）
// 事例の文言は、本人の回答（2026-10-16 の記入シート）と公開中のサイトで確認できた事実だけで書く。数字は作らない。

export const site = {
  url: "https://shosei-ueda.com",
  nameJa: "上田将生",
  nameEn: "Shosei Ueda",
  role: "Web制作",
  area: "滋賀県",
  description:
    "お店のこと、お客さまに伝わっていますか。伝えたいことを整理して、見やすく探しやすいホームページにまとめます。滋賀県のお店のホームページ制作を、ご相談から公開まで一人で担当します。",
  // 収集ボット対策として、メールアドレスは分割して持ち、クライアント側で組み立てる
  emailUser: "shosei",
  emailDomain: "shosei-ueda.com",
} as const;

/** 「こんなお悩みはありませんか」。誰にでも当てはまる抽象度で書き、具体例は事例（cases）にだけ書く */
export const worries = [
  { icon: "unclear", text: "お店の魅力や情報が、お客さまに伝わっていない" },
  { icon: "repeat", text: "同じ問い合わせの対応に、時間を取られている" },
  { icon: "outdated", text: "ホームページが無い、または古いままになっている" },
  { icon: "manual", text: "記録や集計などの手作業に、手間がかかっている" },
] as const;

export type CaseStudy = {
  id: string;
  title: string;
  kind: string;
  url: string;
  appStoreUrl?: string;
  image: string;
  imageAlt: string;
  problem: string;
  action: string;
  result: string;
  stack: string[];
};

export const cases: CaseStudy[] = [
  {
    id: "tenku",
    title: "焼肉 天空",
    kind: "店舗公式サイト（滋賀県野洲市）",
    url: "https://tenkoo-yasu.com/",
    image: "/works/tenkoo.png",
    imageAlt: "焼肉 天空 公式サイトのトップページ",
    problem:
      "お店の公式な情報がどこにもなく、ネット上の情報は食べログだけでした。コースの内容や駐車場の場所について、営業中によく電話がかかってきていました。",
    action:
      "店主さんが一番伝えたい「近江牛の一頭買い」をトップで大きく見せる構成にしました。コース料理（予約の方法・予算・飲み放題）と、店舗とは別の場所にある駐車場の案内を、それぞれのページにまとめました。",
    result:
      "店主さんによると、電話でのお問い合わせが減り、営業中に電話で手を止められることがなくなりました。",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "isoda",
    title: "有限会社いそだ設備",
    kind: "設備工事会社の公式サイト（滋賀県草津市）",
    url: "https://isodasetsubi.com/",
    image: "/works/isoda.png",
    imageAlt: "有限会社いそだ設備 公式サイトのトップページ",
    problem:
      "10年ほど前に作られたホームページは、スマホで見ると画面からはみ出して読みにくい状態でした。給排水からリフォーム・外構まで手がける工事の幅広さも、伝わりにくくなっていました。",
    action:
      "11種類の工事を一覧にまとめ、それぞれに詳しいページを作りました。地域で長く仕事を続けてきた会社らしい、落ち着いた信頼感のあるデザインにし、スマホでも読みやすくしました。",
    result:
      "スマホからでも、どんな工事を頼める会社なのかがすぐに分かるようになりました。2026年9月に公開しています。",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Cloudflare"],
  },
  {
    id: "collecie",
    title: "Collecie",
    kind: "コインランドリーの集金管理アプリ（自社開発）",
    url: "https://www.collecie.com/",
    appStoreUrl: "https://apps.apple.com/jp/app/collecie/id6796202962",
    image: "/works/collecie.png",
    imageAlt: "コインランドリー集金管理アプリ Collecie の紹介ページ",
    problem:
      "家業のコインランドリーでは、手書きの売上表をわざわざExcelに入力し直す二度手間がありました。月ごとや機械ごとに売上を比べることもできませんでした。",
    action:
      "スマホで集金額を入力すると、自動で集計されるアプリを作りました。Web版に加えて、iOS版も App Store で公開しています。",
    result:
      "過去の売上をすぐ見返せるようになり、機械の故障も記録できるようになりました。手書きより集金が楽になり、家族の誰が見ても確認しやすくなりました。",
    stack: ["Next.js", "Expo（React Native）", "Supabase"],
  },
];

/** お客様の声。本人の確認と掲載許可が取れたものだけを入れる（空なら表示しない） */
export const testimonials: { body: string; from: string }[] = [];

export const steps = [
  { title: "ご相談", body: "メールでご連絡ください。お店に伺い、対面でお話を聞きます。" },
  { title: "困りごとの整理", body: "お店が伝えたいことと、お客さまが知りたいことを一緒に整理します。" },
  { title: "完成イメージ", body: "1週間ほどで、スマホで実際に触れる完成イメージをお見せします。" },
  { title: "確認・修正", body: "画面を見ながら、気になるところを直していきます。" },
  { title: "公開", body: "写真や文章がそろっていれば、最短2週間で公開できます。" },
];

/** 研究で身についた考え方と、お店にとっての意味 */
export const strengths = [
  {
    title: "原因を筋道立てて切り分ける",
    body: "困りごとの原因を整理して、ホームページで解決すべきことを決めます。",
  },
  {
    title: "仮説を立てて確かめる",
    body: "「こうすれば伝わるはず」と考えたら、完成イメージで確かめてから作ります。",
  },
  {
    title: "数字で効果を確かめる",
    body: "アクセス数など、確かめられる数字があれば一緒に見て、次に直すところを考えます。",
  },
];

export const profile = {
  lines: [
    "立命館大学 理工学部 物理科学科の4回生です。計算物理学を専攻し、プログラミングでシミュレーションをしながら仮説を確かめる研究をしています。2027年からは大学院に進学します。",
    "アルバイト先の焼肉店のホームページ制作をきっかけに、Web制作のご依頼をお受けしています。",
  ],
};

/** 対面での相談へのこだわり（進め方の冒頭に表示） */
export const consultation = {
  title: "ご相談は、対面で。",
  body: "メールや画面越しだけで済ませず、お店に伺って直接お話を聞くことを大切にしています。お店の雰囲気や、言葉にしにくい想いまで受け取ってから作るためです。",
};

export const plans = [
  { name: "1ページのサイト", price: "3万円〜", note: "お店の紹介・アクセスを1ページにまとめたもの" },
  { name: "店舗サイト（〜5ページ）", price: "5万円〜", note: "トップ・メニュー・店舗情報・お知らせなど" },
  { name: "Webアプリ制作", price: "10万円〜", note: "記録や集計など、お店の仕事をスマホで行える仕組み" },
  { name: "更新・保守", price: "月3,000円〜", note: "文言や写真の差し替え、動作の確認" },
];

export const priceNotes = [
  "金額はすべて税込です。",
  "金額は目安です。内容をうかがってからお見積もりします。",
  "ドメイン（URL）などの維持費は別途かかります。",
];
