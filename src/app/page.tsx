import Image from "next/image";
import { EmailLink } from "@/components/EmailLink";
import { plans, priceNotes, profile, services, site, steps, works } from "@/content/site";

const nav = [
  { href: "#works", label: "実績" },
  { href: "#price", label: "料金" },
  { href: "#contact", label: "お問い合わせ" },
];

function SectionTitle({ en, ja }: { en: string; ja: string }) {
  return (
    <div className="mb-8">
      <p className="text-xs font-medium tracking-[0.2em] text-accent">{en}</p>
      <h2 className="mt-1 text-2xl font-bold text-ink sm:text-3xl">{ja}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 border-b border-line bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
          <a href="#" className="font-bold text-ink">
            {site.nameJa}
          </a>
          <nav aria-label="ページ内リンク">
            <ul className="flex gap-4 text-sm text-muted sm:gap-6">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-ink">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="mx-auto max-w-5xl px-4 pt-16 pb-20 sm:px-6 sm:pt-24 sm:pb-28">
          <p className="text-sm font-medium text-accent">{site.role}</p>
          <h1 className="mt-4 text-[1.9rem] leading-snug font-bold text-ink sm:text-5xl sm:leading-tight">
            お店の魅力が、
            <br />
            {/* スマホ幅で「ホーム/ページ」の途中で改行されないよう、句ごとに折り返す */}
            <span className="inline-block">ちゃんと伝わる</span>
            <span className="inline-block">ホームページを。</span>
          </h1>
          <p className="mt-6 max-w-xl leading-relaxed text-muted">{site.description}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-7 font-medium text-accent-ink hover:opacity-90"
            >
              メールで相談する（無料）
            </a>
            <a
              href="#works"
              className="inline-flex h-12 items-center justify-center rounded-full border border-line bg-surface px-7 font-medium text-ink hover:border-ink"
            >
              制作実績を見る
            </a>
          </div>
          <p className="mt-10 text-sm text-muted">
            {site.nameJa}（{site.nameEn}）
          </p>
        </section>

        <section id="works" className="scroll-mt-14 border-t border-line bg-surface">
          <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
            <SectionTitle en="WORKS" ja="制作実績" />
            <div className="grid gap-12 md:grid-cols-2 md:gap-8">
              {works.map((work) => (
                <article key={work.title}>
                  <a
                    href={work.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block overflow-hidden rounded-lg border border-line"
                  >
                    <Image
                      src={work.image}
                      alt={work.imageAlt}
                      width={1280}
                      height={800}
                      sizes="(min-width: 768px) 480px, 100vw"
                      className="h-auto w-full transition-transform duration-300 hover:scale-[1.02]"
                    />
                  </a>
                  <p className="mt-5 text-xs font-medium text-accent">{work.kind}</p>
                  <h3 className="mt-1 text-xl font-bold text-ink">{work.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{work.summary}</p>
                  <ul className="mt-4 space-y-1 text-sm text-foreground">
                    {work.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span aria-hidden className="text-accent">
                          ・
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label="使用技術">
                    {work.stack.map((tech) => (
                      <li key={tech} className="rounded-full bg-background px-3 py-1 text-xs text-muted">
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={work.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm font-medium text-accent underline underline-offset-4"
                  >
                    サイトを見る
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-line">
          <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
            <SectionTitle en="SERVICE" ja="できること" />
            <div className="grid gap-4 sm:grid-cols-2">
              {services.map((service) => (
                <div key={service.title} className="rounded-lg border border-line bg-surface p-6">
                  <h3 className="font-bold text-ink">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{service.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="price" className="scroll-mt-14 border-t border-line bg-surface">
          <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
            <SectionTitle en="PRICE" ja="料金の目安" />
            <dl className="divide-y divide-line border-y border-line">
              {plans.map((plan) => (
                <div key={plan.name} className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-6">
                  <dt className="font-bold text-ink sm:w-56">{plan.name}</dt>
                  <dd className="text-2xl font-bold text-accent sm:w-36">{plan.price}</dd>
                  <dd className="text-sm text-muted">{plan.note}</dd>
                </div>
              ))}
            </dl>
            <ul className="mt-5 space-y-1 text-sm text-muted">
              {priceNotes.map((note) => (
                <li key={note}>※ {note}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-line">
          <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
            <SectionTitle en="FLOW" ja="制作の流れ" />
            <ol className="grid gap-4 md:grid-cols-5">
              {steps.map((step, i) => (
                <li key={step.title} className="rounded-lg border border-line bg-surface p-5">
                  <p className="text-sm font-bold text-accent">STEP {i + 1}</p>
                  <h3 className="mt-1 font-bold text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-t border-line bg-surface">
          <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
            <SectionTitle en="PROFILE" ja="プロフィール" />
            <p className="text-lg font-bold text-ink">
              {site.nameJa}
              <span className="ml-3 text-sm font-normal text-muted">{site.nameEn}</span>
            </p>
            <div className="mt-4 max-w-2xl space-y-3 leading-relaxed text-muted">
              {profile.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-14 bg-ink text-white">
          <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6">
            <p className="text-xs font-medium tracking-[0.2em] text-white/70">CONTACT</p>
            <h2 className="mt-1 text-2xl font-bold sm:text-3xl">お問い合わせ</h2>
            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-white/80">
              「まだ何も決まっていない」段階でも大丈夫です。ご相談・お見積もりは無料です。
            </p>
            <EmailLink className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-white px-7 font-medium break-all text-ink hover:bg-white/90" />
          </div>
        </section>
      </main>

      <footer className="bg-ink pb-8 text-center text-xs text-white/60">
        © 2026 {site.nameEn}
      </footer>
    </>
  );
}
