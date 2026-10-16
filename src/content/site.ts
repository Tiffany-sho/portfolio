// サイトに載せる文言・料金・実績はすべてここで管理する（single source of truth）
// 事例の文言は、本人の回答（2026-10-16 の記入シート）と公開中のサイトで確認できた事実だけで書く。数字は作らない。

export const site = {
  url: "https://shosei-ueda.com",
  nameJa: "上田将生",
  nameEn: "Shosei Ueda",
  role: "Web制作",
  area: "滋賀県",
  description:
    "滋賀県のお店のホームページ制作。電話でよく聞かれる営業時間やコース、駐車場の場所をホームページで先に伝え、営業中の手を止めない仕組みをつくります。",
  // 収集ボット対策として、メールアドレスは分割して持ち、クライアント側で組み立てる
  emailUser: "shosei",
  emailDomain: "shosei-ueda.com",
} as const;

/** 「こんなお悩みはありませんか」。下の2つの事例で実際にあった困りごとから書く */
export const worries = [
  "営業時間や定休日を、電話で何度も聞かれる",
  "コースの内容や予約の方法を、毎回口頭で説明している",
  "駐車場の場所が分かりにくく、問い合わせが多い",
  "紙に書いた記録を、Excelに入力し直している",
];

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
  { title: "ご相談", body: "メールでご連絡ください。滋賀県内ならお店に伺ってお話を聞きます。" },
  { title: "困りごとの整理", body: "電話でよく聞かれること、伝えたいことを一緒に書き出します。" },
  { title: "完成イメージ", body: "1週間ほどで、スマホで実際に触れる完成イメージをお見せします。" },
  { title: "確認・修正", body: "画面を見ながら、気になるところを直していきます。" },
  { title: "公開", body: "写真や文章がそろっていれば、最短2週間で公開できます。" },
];

/** 研究で身についた考え方と、お店にとっての意味 */
export const strengths = [
  {
    title: "原因を筋道立てて切り分ける",
    body: "「なぜ電話が多いのか」を、聞かれる内容から整理して、ホームページで答えるべきことを決めます。",
  },
  {
    title: "仮説を立てて確かめる",
    body: "「この情報を載せれば問い合わせが減るはず」と考えたら、完成イメージで確かめてから作ります。",
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

export const plans = [
  { name: "1ページのサイト", price: "3万円〜", note: "お店の紹介・アクセスを1ページにまとめたもの" },
  { name: "店舗サイト（〜5ページ）", price: "5万円〜", note: "トップ・メニュー・店舗情報・お知らせなど" },
  { name: "更新・保守", price: "月3,000円〜", note: "文言や写真の差し替え、動作の確認" },
];

export const priceNotes = [
  "金額はすべて税込です。",
  "金額は目安です。内容をうかがってからお見積もりします。",
  "ドメイン（URL）などの維持費は別途かかります。",
];
