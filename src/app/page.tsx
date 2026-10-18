import type { CSSProperties } from "react";
import Image from "next/image";
import { DeskIllustration } from "@/components/DeskIllustration";
import { EmailLink } from "@/components/EmailLink";
import {
  ConsultIllustration,
  MailIllustration,
  StudyIllustration,
  WorryIcon,
} from "@/components/Illustrations";
import {
  cases,
  consultation,
  plans,
  priceNotes,
  profile,
  site,
  steps,
  strengths,
  testimonials,
  worries,
} from "@/content/site";

const nav = [
  { href: "#cases", label: "事例" },
  { href: "#price", label: "料金" },
  { href: "#contact", label: "お問い合わせ" },
];

function SectionHead({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <header data-reveal className="mb-10 sm:mb-14">
      <p className="text-xs font-bold tracking-[0.18em] text-teal-text">{eyebrow}</p>
      <h2 className="mt-2 font-mincho text-2xl leading-snug font-semibold text-teal-deep sm:text-[2rem]">
        {title}
      </h2>
      {lead && (
        <p className="mt-4 max-w-2xl leading-loose text-muted">{lead}</p>
      )}
    </header>
  );
}

/** 時間差で現れる項目の順番（CSS の --i） */
const order = (i: number) => ({ "--i": i }) as CSSProperties;

const caseLabels = [
  { key: "problem", label: "課題" },
  { key: "action", label: "解決策" },
  { key: "result", label: "結果" },
] as const;

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 border-b border-line bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
          <a
            href="#"
            className="font-mincho text-lg font-semibold tracking-widest text-teal-deep"
          >
            {site.nameJa}
          </a>
          <nav aria-label="ページ内リンク">
            <ul className="flex gap-4 text-sm text-muted sm:gap-7">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-teal-deep">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* ファーストビュー */}
        <section className="mx-auto grid max-w-5xl items-center gap-10 px-4 pt-14 pb-16 sm:px-6 md:grid-cols-[1.15fr_1fr] md:pt-20 md:pb-24">
          <div className="hero-in">
            <p className="text-sm font-bold tracking-[0.12em] text-teal-text">
              {site.area}の{site.role}
            </p>
            {/* 語の途中で改行されないよう、句ごとに inline-block にして句の切れ目でだけ折り返す */}
            <h1 className="mt-4 font-mincho text-[clamp(1.4rem,7.3vw,1.75rem)] leading-[1.5] font-semibold text-teal-deep sm:text-[2.4rem]">
              <span className="inline-block">お店の困りごとを、</span>
              <span className="inline-block">ホームページで</span>
              <span className="inline-block">解決します。</span>
            </h1>
            <p className="mt-6 max-w-xl leading-loose text-muted">
              {site.description}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-md bg-teal-deep px-7 font-bold text-white transition-colors duration-500 hover:bg-teal"
              >
                メールで相談する（無料）
              </a>
              <a
                href="#cases"
                className="inline-flex h-12 items-center justify-center rounded-md border border-teal px-7 font-bold text-teal-deep transition-colors duration-500 hover:bg-mist"
              >
                事例を見る
              </a>
            </div>
          </div>
          {/* スマホでは見出しより上（一番上）、PC では右側 */}
          <DeskIllustration className="draw order-first mx-auto w-full max-w-[300px] text-teal md:order-none md:max-w-[420px]" />
        </section>

        {/* お悩み */}
        <section className="bg-teal-deep text-white">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
            {/* 濃い青緑の上に淡いパネルを置き、お悩みを線で描いた円に1つずつ収める */}
            <div className="rounded-sm bg-mist px-3 py-12 text-ink sm:px-10 sm:py-16">
              <p data-reveal className="text-center text-xs font-bold tracking-[0.18em] text-teal-text">
                WORRIES
              </p>
              <h2
                data-reveal
                className="mt-2 text-center font-mincho text-2xl font-semibold text-teal-deep sm:text-[2rem]"
              >
                こんなお悩みは
                <br className="sm:hidden" />
                ありませんか？
              </h2>
              {/* 幅 360px 未満では円が小さくなり文字が収まらないため1列にする */}
              <ul className="mx-auto mt-10 grid max-w-[13rem] gap-3 min-[360px]:max-w-[22rem] min-[360px]:grid-cols-2 sm:max-w-none sm:gap-6 md:grid-cols-4">
                {worries.map((w, i) => (
                  <li
                    key={w.icon}
                    data-reveal
                    style={{ ...order(i), "--icon-bg": "var(--mist)" } as CSSProperties}
                    className="flex aspect-square flex-col items-center justify-center rounded-full border border-teal/40 px-2 text-center text-xs leading-relaxed sm:text-sm"
                  >
                    {/* --icon-bg はパネルの色（時計アイコンの塗り用） */}
                    <WorryIcon name={w.icon} className="mb-1.5 h-8 w-8 text-teal sm:mb-2 sm:h-11 sm:w-11" />
                    <span>
                      {w.lines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <p data-reveal className="mt-10 leading-loose text-white">
              下の{cases.length}つの事例は、どれも実際にあった困りごとを、Webで減らしたものです。
            </p>
          </div>
        </section>

        {/* 事例 */}
        <section id="cases" className="scroll-mt-14">
          <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-24">
            <SectionHead eyebrow="CASES" title="困りごとを、こう解決しました" />
            <div className="space-y-20">
              {cases.map((c, i) => (
                <article data-reveal key={c.id} aria-labelledby={`case-${c.id}`}>
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b-2 border-teal pb-3">
                    <span className="text-sm font-bold text-teal-text">
                      事例 {i + 1}
                    </span>
                    <h3
                      id={`case-${c.id}`}
                      className="font-mincho text-2xl font-semibold text-teal-deep"
                    >
                      {c.title}
                    </h3>
                    <span className="text-sm text-muted">{c.kind}</span>
                  </div>

                  <div className="mt-8 grid gap-8 md:grid-cols-[1fr_1.1fr] md:gap-10">
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block self-start overflow-hidden rounded-md border border-line"
                    >
                      <Image
                        src={c.image}
                        alt={c.imageAlt}
                        width={1280}
                        height={800}
                        sizes="(min-width: 1024px) 460px, (min-width: 768px) 46vw, 100vw"
                        className="h-auto w-full transition duration-300 group-hover:scale-[1.02]"
                      />
                    </a>

                    <div className="grid gap-5">
                      <dl className="grid gap-5">
                        {caseLabels.map(({ key, label }) => (
                          <div
                            key={key}
                            className={
                              key === "result"
                                ? "rounded-md bg-mist px-5 py-4"
                                : "border-l-2 border-line pl-5"
                            }
                          >
                            <dt className="text-sm font-bold text-teal-text">
                              {label}
                            </dt>
                            <dd
                              className={`mt-1 leading-loose ${key === "result" ? "font-bold text-teal-deep" : ""}`}
                            >
                              {c[key]}
                            </dd>
                          </div>
                        ))}
                      </dl>
                      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
                        <a
                          href={c.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-grow font-bold text-teal-deep"
                        >
                          サイトを見る
                        </a>
                        {c.appStoreUrl && (
                          <a
                            href={c.appStoreUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-grow font-bold text-teal-deep"
                          >
                            App Store で見る
                          </a>
                        )}
                        <span className="text-muted">
                          {c.stack.join(" / ")}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {testimonials.length > 0 && (
              <div className="mt-20 grid gap-4">
                {testimonials.map((t) => (
                  <figure key={t.from} data-reveal className="rounded-md bg-mist px-6 py-6">
                    <blockquote className="font-mincho text-lg leading-loose text-teal-deep">
                      「{t.body}」
                    </blockquote>
                    <figcaption className="mt-3 text-sm text-muted">
                      {t.from}
                    </figcaption>
                  </figure>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* 進め方 */}
        <section className="bg-mist">
          <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-24">
            <SectionHead
              eyebrow="FLOW"
              title="ご相談から公開まで"
              lead="作り始める前に、お店が伝えたいことと、お客さまが知りたいことを一緒に整理します。"
            />
            <div
              data-reveal
              className="mb-10 grid items-center gap-6 rounded-md border-l-4 border-teal bg-white px-6 py-6 sm:px-8 md:grid-cols-[1fr_240px]"
            >
              <div>
                <p className="font-mincho text-xl font-semibold text-teal-deep sm:text-2xl">
                  {consultation.title}
                </p>
                <p className="mt-3 max-w-3xl leading-loose text-ink">{consultation.body}</p>
              </div>
              <ConsultIllustration className="mx-auto w-full max-w-[240px] text-teal" />
            </div>
            <ol className="grid gap-4 md:grid-cols-5">
              {steps.map((s, i) => (
                <li key={s.title} data-reveal style={order(i)} className="rounded-md bg-white p-5">
                  <p className="text-sm font-bold text-teal-text">STEP {i + 1}</p>
                  <h3 className="mt-1 font-bold text-teal-deep">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {s.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 私について */}
        <section>
          <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-24">
            <SectionHead eyebrow="ABOUT" title="私について" />
            <div className="grid gap-10 md:grid-cols-[1fr_1.6fr]">
              <div data-reveal>
                <p className="font-mincho text-3xl font-semibold tracking-widest text-teal-deep">
                  {site.nameJa}
                </p>
                <p className="mt-2 text-sm tracking-[0.25em] text-muted">
                  {site.nameEn.toUpperCase()}
                </p>
                <p className="mt-6 text-sm text-muted">
                  対応エリア：
                  <span className="font-bold text-ink">{site.area}</span>
                  （ご相談は対面で伺います）
                </p>
                <StudyIllustration className="mt-8 w-full max-w-[300px] text-teal" />
              </div>
              <div>
                <div data-reveal style={order(1)} className="space-y-4 leading-loose">
                  {profile.lines.map((l) => (
                    <p key={l}>{l}</p>
                  ))}
                </div>
                <h3 data-reveal className="mt-10 font-bold text-teal-deep">
                  研究で身についたことを、お店のために
                </h3>
                <ul className="mt-4 grid gap-3">
                  {strengths.map((s, i) => (
                    <li key={s.title} data-reveal style={order(i)} className="border-l-2 border-teal pl-5">
                      <p className="font-bold">{s.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        {s.body}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 料金 */}
        <section id="price" className="scroll-mt-14 bg-mist">
          <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-24">
            <SectionHead eyebrow="PRICE" title="料金の目安" />
            <ul data-reveal className="divide-y divide-line rounded-md bg-white px-5 sm:px-8">
              {plans.map((p) => (
                <li
                  key={p.name}
                  className="flex flex-col gap-1 py-6 sm:flex-row sm:items-baseline sm:gap-6"
                >
                  <span className="font-bold text-teal-deep sm:w-56">
                    {p.name}
                  </span>
                  <span className="font-mincho text-2xl font-semibold text-teal-deep sm:w-36">
                    {p.price}
                  </span>
                  <span className="text-sm text-muted">{p.note}</span>
                </li>
              ))}
            </ul>
            <ul data-reveal style={order(1)} className="mt-5 space-y-1 text-sm text-muted">
              {priceNotes.map((n) => (
                <li key={n}>※ {n}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* お問い合わせ */}
        <section id="contact" className="scroll-mt-14 bg-teal-deep text-white">
          <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 sm:py-24">
            <div data-reveal>
              <MailIllustration className="mx-auto mb-6 w-full max-w-[220px] text-white/85" />
            </div>
            <p className="text-xs font-bold tracking-[0.18em] text-white/85">
              CONTACT
            </p>
            <h2 data-reveal className="mt-2 font-mincho text-2xl font-semibold sm:text-[2rem]">
              まずはお気軽にご相談ください
            </h2>
            <p data-reveal className="mx-auto mt-5 max-w-xl leading-loose text-white/85">
              「まだ何も決まっていない」段階でも大丈夫です。ご相談・お見積もりは無料です。
            </p>
            <div data-reveal style={order(1)}>
              <EmailLink className="mt-9 inline-flex min-h-12 items-center justify-center rounded-md bg-white px-7 py-3 font-bold break-all text-teal-deep transition-colors duration-500 hover:bg-mist" />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-teal-deep pb-8 text-center text-xs text-white/60">
        © 2026 {site.nameEn}
      </footer>
    </>
  );
}
