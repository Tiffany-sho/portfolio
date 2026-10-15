import Image from "next/image";
import { EmailLink } from "@/components/EmailLink";
import { plans, priceNotes, profile, services, site, steps, works } from "@/content/site";

const sections = [
  { id: "works", en: "Works", ja: "制作実績" },
  { id: "service", en: "Service", ja: "できること" },
  { id: "price", en: "Price", ja: "料金の目安" },
  { id: "flow", en: "Flow", ja: "制作の流れ" },
  { id: "profile", en: "Profile", ja: "プロフィール" },
  { id: "contact", en: "Contact", ja: "お問い合わせ" },
] as const;

type SectionId = (typeof sections)[number]["id"];

const pad = (n: number) => String(n).padStart(2, "0");

function SectionHead({ id }: { id: SectionId }) {
  const index = sections.findIndex((s) => s.id === id);
  const section = sections[index];
  return (
    <header className="mb-12 flex items-baseline gap-4 border-t border-ink pt-4 sm:mb-16">
      <span className="font-display text-sm tracking-widest text-muted">{pad(index + 1)}</span>
      <h2 className="flex flex-1 flex-wrap items-baseline gap-x-4 gap-y-1">
        <span className="font-display text-4xl italic leading-none sm:text-6xl">{section.en}</span>
        <span className="font-mincho text-sm tracking-[0.2em] text-muted">{section.ja}</span>
      </h2>
    </header>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 bg-paper/90 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between border-b border-rule px-4 sm:px-8">
          <a href="#" className="font-display text-lg tracking-[0.25em] uppercase">
            {site.nameEn}
          </a>
          <nav aria-label="ページ内リンク">
            <ul className="flex gap-5 font-display text-base sm:gap-8">
              {sections
                .filter((s) => s.id === "works" || s.id === "price" || s.id === "contact")
                .map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="hover:text-accent">
                      {s.en}
                    </a>
                  </li>
                ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 sm:px-8">
        {/* Hero */}
        <section className="pt-10 pb-20 sm:pt-16 sm:pb-28">
          <div className="flex items-center justify-between font-display text-sm tracking-[0.2em] text-muted uppercase">
            <span>
              Web Design<span className="hidden sm:inline"> &amp; Development</span>
            </span>
            <span>Portfolio</span>
          </div>
          <div className="mt-3 border-t border-ink" />

          <h1 className="mt-14 font-mincho text-[2.6rem] leading-[1.35] font-semibold tracking-wide sm:mt-20 sm:text-7xl sm:leading-[1.3] lg:text-[5.5rem]">
            お店の魅力が、
            <br />
            {/* 句の途中で改行されないよう、句ごとに折り返す */}
            <span className="inline-block">ちゃんと伝わる</span>
            <span className="inline-block">
              ホームページを<span className="text-accent">。</span>
            </span>
          </h1>

          <div className="mt-14 grid gap-10 border-t border-rule pt-8 sm:mt-20 md:grid-cols-12">
            <p className="text-[0.95rem] leading-loose text-muted md:col-span-6">{site.description}</p>
            <div className="flex flex-col items-start gap-4 md:col-span-5 md:col-start-8 md:items-end">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 border-b border-ink pb-1 font-mincho text-lg"
              >
                メールで相談する（無料）
                <span aria-hidden className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
              <p className="font-mincho text-sm text-muted">
                {site.nameJa}
                <span className="ml-2 font-display">{site.nameEn}</span>
              </p>
            </div>
          </div>

          {/* 目次 */}
          <nav aria-label="目次" className="mt-16 sm:mt-20">
            <ol className="grid grid-cols-2 border-t border-rule sm:grid-cols-3 lg:grid-cols-6">
              {sections.map((s, i) => (
                <li key={s.id} className="border-b border-rule">
                  <a
                    href={`#${s.id}`}
                    className="flex items-baseline gap-3 py-4 pr-4 hover:text-accent"
                  >
                    <span className="font-display text-xs text-muted">{pad(i + 1)}</span>
                    <span className="font-display text-xl italic">{s.en}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </section>

        {/* Works */}
        <section id="works" className="scroll-mt-14 pb-24 sm:pb-32">
          <SectionHead id="works" />
          <div className="space-y-20 sm:space-y-28">
            {works.map((work, i) => (
              <article key={work.title} className="grid gap-8 md:grid-cols-12 md:gap-10">
                <a
                  href={work.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group block overflow-hidden md:col-span-8 ${i % 2 === 1 ? "md:order-2" : ""}`}
                >
                  <Image
                    src={work.image}
                    alt={work.imageAlt}
                    width={1280}
                    height={800}
                    sizes="(min-width: 1152px) 720px, (min-width: 768px) 66vw, 100vw"
                    className="h-auto w-full grayscale-[15%] transition duration-500 group-hover:scale-[1.02] group-hover:grayscale-0"
                  />
                </a>
                <div className="flex flex-col md:col-span-4">
                  <p className="font-display text-6xl leading-none text-accent italic">No.{pad(i + 1)}</p>
                  <h3 className="mt-6 font-mincho text-3xl font-semibold">{work.title}</h3>
                  <p className="mt-2 font-display text-base tracking-wider text-muted italic">
                    {work.kindEn}
                    <span className="ml-2 font-sans text-xs not-italic">／{work.kind}</span>
                  </p>
                  <p className="mt-6 text-[0.95rem] leading-loose">{work.summary}</p>
                  <ul className="mt-5 space-y-2 border-t border-rule pt-5 text-sm text-muted">
                    {work.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span aria-hidden>—</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 font-display text-sm tracking-wider text-muted" aria-label="使用技術">
                    {work.stack.join(" / ")}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
                    <a
                      href={work.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-b border-ink pb-0.5 font-display text-lg italic hover:border-accent hover:text-accent"
                    >
                      Visit site →
                    </a>
                    {work.appStoreUrl && (
                      <a
                        href={work.appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-b border-ink pb-0.5 font-display text-lg italic hover:border-accent hover:text-accent"
                      >
                        App Store →
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Service */}
        <section id="service" className="scroll-mt-14 pb-24 sm:pb-32">
          <SectionHead id="service" />
          <ol className="grid border-t border-rule md:grid-cols-2">
            {services.map((service, i) => (
              <li
                key={service.title}
                className={`border-b border-rule py-8 md:px-8 ${i % 2 === 0 ? "md:border-r md:pl-0" : "md:pr-0"}`}
              >
                <p className="font-display text-sm text-muted">{pad(i + 1)}</p>
                <h3 className="mt-2 font-mincho text-2xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-loose text-muted">{service.body}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Price — 品書き風 */}
        <section id="price" className="scroll-mt-14 pb-24 sm:pb-32">
          <SectionHead id="price" />
          <div className="bg-paper-deep px-5 py-10 sm:px-14 sm:py-14">
            <p className="text-center font-mincho text-sm tracking-[0.5em] text-muted">お品書き</p>
            <ul className="mt-10 space-y-10">
              {plans.map((plan) => (
                <li key={plan.name}>
                  <p className="flex items-baseline gap-3">
                    <span className="font-mincho text-lg font-semibold sm:text-2xl">{plan.name}</span>
                    <span aria-hidden className="mb-1.5 flex-1 border-b border-dotted border-ink/40" />
                    <span className="font-mincho text-xl font-semibold text-accent sm:text-3xl">{plan.price}</span>
                  </p>
                  <p className="mt-2 text-sm text-muted">{plan.note}</p>
                </li>
              ))}
            </ul>
            <ul className="mt-12 space-y-1 border-t border-rule pt-6 text-xs leading-relaxed text-muted sm:text-sm">
              {priceNotes.map((note) => (
                <li key={note}>※ {note}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Flow */}
        <section id="flow" className="scroll-mt-14 pb-24 sm:pb-32">
          <SectionHead id="flow" />
          <ol className="grid border-t border-ink md:grid-cols-5">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="grid grid-cols-[3.5rem_1fr] gap-x-2 border-b border-rule py-6 md:block md:border-r md:border-b-0 md:px-5 md:py-8 md:first:pl-0 md:last:border-r-0"
              >
                <p className="font-display text-4xl leading-none text-accent italic md:text-5xl">{i + 1}</p>
                <div>
                  <h3 className="font-mincho text-xl font-semibold md:mt-6">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Profile */}
        <section id="profile" className="scroll-mt-14 pb-24 sm:pb-32">
          <SectionHead id="profile" />
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="font-mincho text-4xl font-semibold tracking-widest">{site.nameJa}</p>
              <p className="mt-2 font-display text-xl tracking-[0.2em] text-muted uppercase">{site.nameEn}</p>
            </div>
            <div className="space-y-5 text-[0.95rem] leading-loose md:col-span-7 md:col-start-6">
              {profile.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-14 pb-24 sm:pb-32">
          <SectionHead id="contact" />
          <p className="font-mincho text-3xl leading-snug font-semibold sm:text-5xl sm:leading-snug">
            <span className="inline-block">ご相談、</span>
            <span className="inline-block">お待ちしています。</span>
          </p>
          <p className="mt-6 max-w-xl text-[0.95rem] leading-loose text-muted">
            「まだ何も決まっていない」段階でも大丈夫です。ご相談・お見積もりは無料です。
          </p>
          <div className="mt-12 border-y border-ink py-8">
            <p className="font-display text-sm tracking-[0.2em] text-muted uppercase">Mail</p>
            <EmailLink className="mt-2 inline-block font-display text-[1.6rem] break-all hover:text-accent sm:text-5xl" />
          </div>
        </section>
      </main>

      <footer className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-8">
        <div className="flex items-center justify-between border-t border-rule pt-6 font-display text-sm text-muted">
          <span className="tracking-[0.2em] uppercase">{site.nameEn}</span>
          <span>© 2026</span>
        </div>
      </footer>
    </>
  );
}
