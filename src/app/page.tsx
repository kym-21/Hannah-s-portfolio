"use client";

import { FormEvent, useEffect, useState } from 'react';

type Article = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  readTime: string;
  detail: string;
  highlights: string[];
};

type ContactFormState = {
  name: string;
  email: string;
  phone: string;
  matterType: string;
  description: string;
};

const strengths = [
  {
    title: 'Property law excellence',
    description: 'Real estate documentation and conveyancing support handled with consistency and precision.',
    proof: 'Practice-tested at AMCO Properties',
    href: '#services',
  },
  {
    title: 'Judicial experience',
    description: 'Procedural fluency and courtroom discipline applied to practical client strategy.',
    proof: 'Court practice in Limuru Law Courts',
    href: '#experience',
  },
  {
    title: 'Legal precision',
    description: 'Briefs, records, and advisory writing delivered with clarity and exacting detail.',
    proof: 'Drafting standards built for trust',
    href: '#contact',
  },
];

const services = [
  'Property law & conveyancing counsel',
  'Real estate transaction strategy',
  'Contract drafting & negotiation',
  'Legal research & written advocacy',
  'Compliance & regulatory guidance',
  'Litigation support & case management',
];

const articles: Article[] = [
  {
    slug: 'property-sale-agreement-checklist',
    title: 'What to check before signing a property sale agreement',
    category: 'Property Law',
    summary:
      'A practical legal checklist covering title review, contractual red flags, and the due diligence steps that protect buyers and sellers.',
    readTime: '4 min read',
    detail:
      'The strongest property agreements are built on careful checks before the parties commit. Title verification, ownership history, encumbrances, completion timelines, and payment safeguards all matter before signatures go on the page.',
    highlights: ['Title checks before signing', 'Flags hidden contract risk', 'Protects both buyer and seller'],
  },
  {
    slug: 'why-due-diligence-matters',
    title: 'Why due diligence matters in real estate transactions',
    category: 'Transactions',
    summary:
      'An article-style overview of the legal and commercial risks that surface when conveyancing is rushed or poorly documented.',
    readTime: '5 min read',
    detail:
      'Due diligence slows the deal down just enough to stop expensive mistakes. It helps confirm the land status, validates the parties, and makes sure the legal steps match the commercial promise.',
    highlights: ['Confirms land status', 'Reduces transaction risk', 'Supports clean completion'],
  },
  {
    slug: 'building-trust-in-practice',
    title: 'How a young lawyer builds trust in a professional practice',
    category: 'Career Notes',
    summary:
      'A reflection on communication, responsiveness, and professional discipline in the early stages of legal practice.',
    readTime: '3 min read',
    detail:
      'Trust grows when legal work is clear, timely, and well explained. Responsiveness, proper follow-up, and calm judgment matter just as much as the technical answer behind the advice.',
    highlights: ['Clear and timely communication', 'Calm professional judgment', 'Follow-through builds trust'],
  },
];

const timeline = [
  {
    year: 'Present',
    role: 'Legal associate, AMCO Properties',
    detail:
      'Supporting property and real estate matters through conveyancing coordination, contract review, and day-to-day legal documentation.',
  },
  {
    year: 'Prior',
    role: 'Court Practice, Law Courts in Limuru',
    detail:
      'Practical courtroom exposure through case management support, procedural drafting, and attendance in judicial proceedings.',
  },
  {
    year: 'Foundation',
    role: 'MKU School of Law',
    detail:
      'Rigorous legal education grounding in constitutional law, property law, civil procedure, and professional ethics. Focus on legal scholarship and written advocacy.',
  },
];

const principles = [
  {
    label: 'Precision-led counsel',
    value: 'Meticulous attention to legal detail. Every matter handled with clarity, timeliness, and structural rigor.',
  },
  {
    label: 'Discretion & trust',
    value: 'A composed, professional presence for matters of consequence. Confidentiality and integrity at every turn.',
  },
  {
    label: 'Contemporary practice',
    value: 'Modern legal expertise delivered with timeless professionalism. A portfolio built for client confidence.',
  },
];

const contactEmail = 'njerik103@gmail.com';
const contactPhone = '+254719445603';
const contactPhoneDisplay = '+254 719 445 603';
const whatsappHref = `https://wa.me/254719445603?text=${encodeURIComponent('Hello Hannah, I would like to discuss a legal matter.')}`;
const matterTypeOptions = [
  'Property sale agreement',
  'Conveyancing / transfer',
  'Contract review',
  'Litigation support',
  'Commercial advisory',
  'Other matter',
];
const defaultContactForm: ContactFormState = {
  name: '',
  email: '',
  phone: '',
  matterType: '',
  description: '',
};

export default function Home() {
  const [openArticleSlug, setOpenArticleSlug] = useState<string | null>(null);
  const [contactForm, setContactForm] = useState<ContactFormState>(defaultContactForm);

  const openArticle = articles.find((article) => article.slug === openArticleSlug) ?? null;

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', Boolean(openArticle));

    if (openArticle) {
      // Scroll modal to top when article opens
      setTimeout(() => {
        const modalContent = document.querySelector('.article-modal-content');
        if (modalContent) {
          modalContent.scrollTop = 0;
        }
      }, 0);
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenArticleSlug(null);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove('overflow-hidden');
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [openArticle]);

  const handleArticleOpen = (article: Article) => {
    setOpenArticleSlug(article.slug);
  };

  const handleArticleClose = () => {
    setOpenArticleSlug(null);
  };

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = `${contactForm.matterType || 'Legal inquiry'} from ${contactForm.name || 'a visitor'}`;
    const body = [
      `Name: ${contactForm.name}`,
      `Email: ${contactForm.email}`,
      `Phone: ${contactForm.phone}`,
      `Matter type: ${contactForm.matterType}`,
      '',
      contactForm.description,
    ].join('\n');

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main id="top" className="relative">
      <div className="viewport-zoom mx-auto flex w-full max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-10">
        <header className="flex items-center justify-between gap-4 border-b border-line/80 pb-5 pt-4">
          <a href="#top" className="group flex items-center gap-3 text-left">
            <span className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-[1.35rem] border border-gold/25 bg-white/85 shadow-sm">
              <span className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(182,141,64,0.24),transparent_72%)]" />
              <svg viewBox="0 0 64 64" className="relative h-8 w-8 text-gold" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M32 12v24" />
                <path d="M23 20l9-8 9 8" />
                <path d="M17 24h30" />
                <path d="M21 24l-8 14" />
                <path d="M43 24l8 14" />
                <path d="M16 38c4 0 8-3 8-7" />
                <path d="M48 38c-4 0-8-3-8-7" />
                <path d="M19 48h26" />
                <path d="M24 48c0-6 3-10 8-12 5 2 8 6 8 12" />
              </svg>
            </span>
            <span>
              <span className="display-font block text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-4xl">Hannah Law</span>
              <span className="mt-1 block text-[0.65rem] uppercase tracking-[0.28em] text-stone">Property & commercial counsel</span>
            </span>
          </a>
          <div className="ml-auto flex items-center gap-4 md:gap-6">
            <nav className="hidden items-center gap-6 text-base font-medium text-stone md:flex">
              <a className="transition hover:text-ink" href="#profile">Profile</a>
              <a className="transition hover:text-ink" href="#services">Services</a>
              <a className="transition hover:text-ink" href="#articles">Articles</a>
            </nav>
            <a
              href="#contact"
              className="rounded-full border border-ink/15 bg-white/70 px-4 py-2 text-base font-medium text-ink transition hover:border-ink/30 hover:bg-white"
            >
              Contact
            </a>
          </div>
        </header>

        <section className="relative grid gap-10 min-h-screen items-center py-10 lg:grid-cols-[0.88fr_1.12fr] lg:py-10">
          <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
            <div className="absolute top-20 -left-32 w-80 h-80 rounded-full bg-gradient-to-br from-gold/20 to-transparent blur-3xl" />
            <div className="absolute bottom-20 -right-40 w-96 h-96 rounded-full bg-gradient-to-tl from-gold/15 to-transparent blur-3xl" />
          </div>
          <div className="flex flex-col self-start justify-start pt-2 lg:pt-4 lg:pr-8 xl:pr-12">
            <p className="slide-up inline-flex w-fit items-center gap-2 rounded-full border border-gold/20 bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-gold shadow-sm" data-delay="1">
              Emerging legal practice
            </p>
            <h1 className="display-font slide-up mt-8 text-4xl font-semibold leading-tight tracking-[-0.03em] text-ink sm:text-5xl" data-delay="2">
              Focused on real estate & commercial law
            </h1>
            <p className="slide-up mt-6 max-w-lg text-lg leading-8 text-stone sm:text-xl" data-delay="2">
              Early-career legal support for property transactions, conveyancing, and commercial contracts, grounded in practical court exposure.
            </p>
            <div className="slide-up mt-10 flex flex-wrap gap-3" data-delay="3">
              <a
                href="#contact"
                className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition hover:bg-ink/90 shadow-sm hover:shadow-md"
              >
                Schedule consultation
              </a>
              <a
                href="#articles"
                className="rounded-full border border-ink/15 bg-white/70 px-6 py-3 text-sm font-semibold text-ink transition hover:border-ink/30 hover:bg-white shadow-sm hover:shadow-md"
              >
                View insights
              </a>
            </div>
            
            <div className="slide-up mt-12 grid gap-3 sm:grid-cols-3" data-delay="3">
              {[
                { label: '3', desc: 'Core Focus Areas' },
                { label: 'Early', desc: 'Career Stage' },
                { label: 'Growing', desc: 'Practice' },
              ].map(({ label, desc }) => (
                <div key={label} className="rounded-2xl border border-line bg-white/80 backdrop-blur p-4 text-center shadow-sm hover:shadow-md transition">
                  <p className="display-font text-3xl font-semibold text-gold">{label}</p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-stone font-medium">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <aside id="profile" className="relative fade-in" data-delay="1">
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-gold/25 via-gold/10 to-transparent blur-2xl" />
            <div className="absolute -inset-3 -z-10 rounded-[2.2rem] border border-gold/20" />
            <div className="rounded-[2rem] border border-line bg-white/95 p-8 shadow-lg backdrop-blur-xl border-l-4 border-l-gold">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[0.65rem] uppercase tracking-[0.28em] text-stone font-semibold">Profile</p>
                  <h2 className="display-font mt-3 text-5xl text-ink leading-tight">Hannah Njeri</h2>
                  <p className="mt-3 text-base font-semibold text-gold">Early-career Lawyer | Real Estate & Commercial Law</p>
                </div>
                <div className="rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/20 to-transparent backdrop-blur px-4 py-3 text-right shadow-sm">
                  <p className="text-xs uppercase tracking-[0.24em] text-gold font-bold">Based in</p>
                  <p className="mt-2 text-sm font-semibold text-ink">Nairobi, Kenya</p>
                </div>
              </div>

              <div className="mt-8 grid gap-3">
                <div className="rounded-xl bg-gradient-to-br from-paper/60 to-paper/40 backdrop-blur p-4 border border-line/30">
                  <p className="text-xs uppercase tracking-[0.22em] text-stone font-bold">Practice focus</p>
                  <p className="mt-2 text-sm leading-6 text-ink font-medium">
                    Real estate transactions, property conveyancing, commercial contracts, and compliance advisory.
                  </p>
                </div>
                <div className="rounded-xl bg-gradient-to-br from-paper/60 to-paper/40 backdrop-blur p-4 border border-line/30">
                  <p className="text-xs uppercase tracking-[0.22em] text-stone font-bold">Specialization</p>
                  <p className="mt-2 text-sm leading-6 text-ink font-medium">Real estate transactions, property law, and commercial contracts</p>
                </div>
                <div className="rounded-xl bg-gradient-to-br from-paper/60 to-paper/40 backdrop-blur p-4 border border-line/30">
                  <p className="text-xs uppercase tracking-[0.22em] text-stone font-bold">Judicial experience</p>
                  <p className="mt-2 text-sm leading-6 text-ink font-medium">Courtroom practice at the Law Courts in Limuru</p>
                </div>
              </div>

              <div className="mt-8 grid gap-2 sm:grid-cols-3">
                {[
                  ['3', 'Core focus areas'],
                  ['Early', 'Career stage'],
                  ['Growing', 'Client portfolio'],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-xl border border-gold/20 bg-gradient-to-br from-gold/10 to-transparent backdrop-blur px-4 py-4 text-center shadow-sm hover:shadow-md transition">
                    <p className="display-font text-3xl font-bold text-gold">{value}</p>
                    <p className="mt-1 text-xs uppercase tracking-wide text-stone font-semibold">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </section>

        <section id="articles" className="pt-0 pb-6">
          <div className="mb-4 flex items-end justify-between gap-6 border-b border-line pb-3">
            <div className="fade-in" data-delay="1">
              <p className="text-[0.65rem] uppercase tracking-[0.28em] text-stone">Insights & expertise</p>
              <h2 className="display-font mt-3 text-4xl font-semibold tracking-[-0.03em] text-ink sm:text-5xl">
                Articles & legal thinking.
              </h2>
            </div>
            <div className="fade-in flex flex-col items-end justify-end gap-2" data-delay="2">
              <p className="text-xs uppercase tracking-[0.22em] text-stone font-medium">Get notified</p>
              <a href="#contact" className="inline-flex rounded-full border border-gold/30 bg-white/70 px-4 py-2 text-sm font-semibold text-gold transition hover:border-gold/50 hover:bg-white shadow-sm hover:shadow-md">
                Subscribe for insights
              </a>
            </div>
          </div>

          <div className="articles-deck fade-in" data-delay="2">
            <div className="articles-hover-bridge absolute inset-0 z-0" aria-hidden="true" />
            <div className="articles-stage-note pointer-events-none absolute left-0 top-6 hidden w-[14rem] rounded-[1.35rem] border border-gold/15 bg-white/80 px-4 py-4 text-left shadow-sm backdrop-blur md:block lg:block">
              <p className="text-[0.62rem] uppercase tracking-[0.26em] text-gold font-semibold">Legal articles</p>
              <p className="mt-2 text-sm font-medium leading-6 text-ink">
                Short, practical notes on property law, drafting, and client care.
              </p>
            </div>
            <div className="articles-stage-quote pointer-events-none absolute left-1/2 top-10 hidden w-[16rem] -translate-x-1/2 rounded-[1.35rem] border border-line bg-white/85 px-5 py-4 text-center shadow-sm backdrop-blur md:block lg:block">
              <p className="text-[0.62rem] uppercase tracking-[0.26em] text-stone font-semibold">Client focus</p>
              <p className="mt-2 text-sm font-medium leading-6 text-ink">
                Clear answers, calm guidance, and responsive follow-up.
              </p>
            </div>
            <div className="articles-callout pointer-events-none absolute left-0 top-1/2 hidden w-[17rem] -translate-y-1/2 rounded-[1.5rem] border border-gold/15 bg-white/80 px-5 py-4 text-left shadow-sm backdrop-blur lg:block">
              <p className="text-[0.62rem] uppercase tracking-[0.26em] text-gold font-semibold">Client guidance</p>
              <p className="mt-2 text-sm font-medium leading-6 text-ink">
                A steady hand for property transactions, clear drafting, and practical commercial advice.
              </p>
              <div className="mt-4 space-y-2 border-t border-gold/10 pt-4 text-xs uppercase tracking-[0.18em] text-stone">
                <p>Quick responses</p>
                <p>Clear communication</p>
                <p>Trusted follow-through</p>
              </div>
            </div>

            <div className="articles-cards">
              {articles.map((article) => {
                const isOpen = openArticleSlug === article.slug;

                return (
                  <article key={article.slug} className="article-card group rounded-[1.75rem] border border-line bg-white p-6 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft">
                    <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.22em] text-gold">
                      <span>{article.category}</span>
                      <span className="text-stone">{article.readTime}</span>
                    </div>
                    <h3 className="display-font mt-4 text-3xl font-semibold leading-tight text-ink">{article.title}</h3>
                    <p className="mt-4 text-base leading-7 text-stone">{article.summary}</p>

                    <button
                      type="button"
                      onClick={() => handleArticleOpen(article)}
                      className="mt-6 inline-flex rounded-full border border-ink/15 bg-white/70 px-4 py-2 text-sm font-semibold text-ink transition hover:border-ink/30 hover:bg-white shadow-sm hover:shadow-md"
                    >
                      Read article
                    </button>

                    <div className="mt-4 flex items-center justify-between gap-3 border-t border-line/60 pt-4 text-xs uppercase tracking-[0.18em] text-stone">
                      <span>Article preview</span>
                      <span className="font-semibold text-ink transition group-hover:text-gold">Read more</span>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-y border-line py-8">
          <div className="mb-5 flex items-end justify-between gap-5">
            <div className="fade-in" data-delay="1">
              <p className="text-[0.65rem] uppercase tracking-[0.28em] text-stone">Trust signals</p>
              <h3 className="display-font mt-2 text-3xl tracking-[-0.03em] text-ink sm:text-4xl">Why clients trust Hannah.</h3>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {strengths.map((item, idx) => (
              <article
                key={item.title}
                className="fade-in group rounded-3xl border border-line bg-white/80 p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-md"
                data-delay={String((idx + 1) % 4)}
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">{item.title}</p>
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-gold/25 bg-gold/10 text-xs font-semibold text-gold">
                    {idx + 1}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-stone">{item.description}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.18em] text-ink/65">{item.proof}</p>
                <a
                  href={item.href}
                  className="mt-4 inline-flex text-xs font-semibold uppercase tracking-[0.18em] text-ink transition group-hover:text-gold"
                >
                  Learn more
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="py-16 lg:py-20">
          <div className="fade-in mb-10 text-center" data-delay="1">
            <p className="text-[0.65rem] uppercase tracking-[0.28em] text-stone">Professional experience</p>
            <h2 className="display-font mt-3 text-4xl font-semibold tracking-[-0.03em] text-ink sm:text-5xl">
              A legal foundation built on clarity, discipline, and trust.
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-stone">
              Key milestones in Hannah&apos;s legal practice, from courtroom experience to high-value
              real estate and commercial matters.
            </p>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-line lg:block" />
            <div className="space-y-5">
              {timeline.map((item, idx) => (
                <article
                  key={item.role}
                  className={`experience-item ${idx % 2 === 0 ? 'experience-left' : 'experience-right'}`}
                >
                  <div className="experience-card rounded-[1.75rem] border border-line bg-white/80 p-6 shadow-sm">
                    <div className="grid gap-4 sm:grid-cols-[150px_1fr]">
                      <div className="display-font text-3xl font-semibold text-gold">{item.year}</div>
                      <div>
                        <h3 className="text-lg font-semibold text-ink">{item.role}</h3>
                        <p className="mt-2 text-base leading-7 text-stone">{item.detail}</p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="pb-12">
          <div className="fade-in mb-6" data-delay="1">
            <p className="text-[0.65rem] uppercase tracking-[0.28em] text-stone">Practice areas</p>
            <h3 className="display-font mt-3 text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-4xl">
              Core legal services
            </h3>
          </div>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, idx) => (
              <div
                key={service}
                className="fade-in rounded-2xl border border-line bg-white/75 px-4 py-4 text-base font-medium text-ink shadow-sm"
                data-delay={String((idx % 3) + 1)}
              >
                {service}
              </div>
            ))}
          </div>
        </section>

        <section className="pb-16">
          <div className="fade-in relative overflow-hidden rounded-[1.5rem] border border-ink/10 bg-ink px-5 py-7 text-paper shadow-soft sm:rounded-[2rem] sm:px-6 sm:py-8 lg:p-10" data-delay="1">
            <div className="pointer-events-none absolute -top-20 right-0 h-72 w-72 rounded-full bg-gradient-to-br from-gold/25 to-transparent blur-3xl" />
            <div className="relative grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.28em] text-paper/70">Professional counsel</p>
                <h2 className="display-font mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                  Disciplined legal expertise, delivered with integrity and professionalism.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-paper/80 sm:text-lg">
                  Hannah provides focused legal support in property and commercial matters,
                  with strong drafting discipline and a client-centered working style developed through
                  active practice and courtroom exposure.
                </p>
                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  {[
                    ['Prompt', 'Communication'],
                    ['1:1', 'Direct support'],
                    ['Confidential', 'Client matters'],
                  ].map(([value, label]) => (
                    <div key={label} className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur">
                      <p className="display-font text-2xl font-semibold text-gold">{value}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-paper/70">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div id="contact" className="rounded-[1.25rem] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.14),rgba(255,255,255,0.04))] p-5 backdrop-blur-xl sm:rounded-[1.5rem] sm:p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-paper/70">Contact</p>
                <h3 className="display-font mt-3 text-2xl text-paper sm:text-3xl">Start a legal conversation</h3>
                <p className="mt-3 text-sm leading-6 text-paper/75">
                  Available for consultations, retainer engagements, and strategic partnerships. Call or WhatsApp directly, or send a structured inquiry below.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <a href={`tel:${contactPhone}`} className="group flex items-center justify-between gap-3 rounded-xl border border-white/12 bg-white/6 px-4 py-3 text-paper transition hover:border-gold/40 hover:bg-white/10">
                    <span className="text-xs uppercase tracking-[0.18em] text-paper/70">Call</span>
                    <span className="text-sm font-semibold text-gold transition group-hover:text-gold/85">{contactPhoneDisplay}</span>
                  </a>
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-3 rounded-xl border border-white/12 bg-white/6 px-4 py-3 text-paper transition hover:border-gold/40 hover:bg-white/10">
                    <span className="text-xs uppercase tracking-[0.18em] text-paper/70">WhatsApp</span>
                    <span className="text-sm font-semibold text-gold transition group-hover:text-gold/85">Open chat</span>
                  </a>
                </div>

                <form className="mt-6 grid gap-4" onSubmit={handleContactSubmit}>
                  <div className="grid gap-4 lg:grid-cols-2">
                    <label className="grid gap-2 text-xs uppercase tracking-[0.18em] text-paper/70">
                      Name
                      <input
                        autoComplete="name"
                        value={contactForm.name}
                        onChange={(event) => setContactForm((current) => ({ ...current, name: event.target.value }))}
                        required
                        placeholder="Your full name"
                        className="w-full rounded-xl border border-white/12 bg-white/6 px-4 py-3 text-base text-paper placeholder:text-paper/40 outline-none transition focus:border-gold/40 focus:bg-white/10 sm:text-sm"
                      />
                    </label>
                    <label className="grid gap-2 text-xs uppercase tracking-[0.18em] text-paper/70">
                      Email
                      <input
                        type="email"
                        autoComplete="email"
                        value={contactForm.email}
                        onChange={(event) => setContactForm((current) => ({ ...current, email: event.target.value }))}
                        required
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-white/12 bg-white/6 px-4 py-3 text-base text-paper placeholder:text-paper/40 outline-none transition focus:border-gold/40 focus:bg-white/10 sm:text-sm"
                      />
                    </label>
                    <label className="grid gap-2 text-xs uppercase tracking-[0.18em] text-paper/70">
                      Phone
                      <input
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        value={contactForm.phone}
                        onChange={(event) => setContactForm((current) => ({ ...current, phone: event.target.value }))}
                        required
                        placeholder="+254 700 000 000"
                        className="w-full rounded-xl border border-white/12 bg-white/6 px-4 py-3 text-base text-paper placeholder:text-paper/40 outline-none transition focus:border-gold/40 focus:bg-white/10 sm:text-sm"
                      />
                    </label>
                    <label className="grid gap-2 text-xs uppercase tracking-[0.18em] text-paper/70">
                      Matter type
                      <div className="relative">
                        <select
                          value={contactForm.matterType}
                          onChange={(event) => setContactForm((current) => ({ ...current, matterType: event.target.value }))}
                          required
                          className="w-full appearance-none rounded-xl border border-white/12 bg-[rgba(255,255,255,0.08)] px-4 py-3 pr-11 text-base text-paper outline-none transition focus:border-gold/40 focus:bg-white/10 sm:text-sm"
                        >
                          <option value="" className="text-ink">Select matter type</option>
                          {matterTypeOptions.map((option) => (
                            <option key={option} value={option} className="text-ink">
                              {option}
                            </option>
                          ))}
                        </select>
                        <svg
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                          className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-paper/75"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m5 7 5 5 5-5" />
                        </svg>
                      </div>
                    </label>
                  </div>
                  <label className="grid gap-2 text-xs uppercase tracking-[0.18em] text-paper/70">
                    Brief description
                    <textarea
                      value={contactForm.description}
                      onChange={(event) => setContactForm((current) => ({ ...current, description: event.target.value }))}
                      required
                      rows={4}
                      placeholder="Share the issue, timeline, and any documents already available."
                      className="w-full rounded-2xl border border-white/12 bg-white/6 px-4 py-3 text-base text-paper placeholder:text-paper/40 outline-none transition focus:border-gold/40 focus:bg-white/10 sm:text-sm"
                    />
                  </label>

                  <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <button type="submit" className="w-full rounded-full bg-gold px-5 py-2.5 text-center text-sm font-semibold text-ink transition hover:bg-gold/90 sm:w-auto">
                      Send inquiry
                    </button>
                    <a href="#articles" className="w-full rounded-full border border-white/20 px-5 py-2.5 text-center text-sm font-semibold text-paper transition hover:border-white/35 hover:bg-white/10 sm:w-auto">
                      Review insights
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {openArticle && (
          <div className="fixed inset-0 z-50 flex flex-col bg-ink/40 backdrop-blur-sm animate-fade-in">
            <div className="w-full flex-1 rounded-b-[2.5rem] border-b border-line bg-white shadow-2xl overflow-hidden animate-slide-up">
              <div className="article-modal-content relative h-full overflow-y-auto">
                {/* Close button */}
                <button
                  type="button"
                  onClick={handleArticleClose}
                  className="sticky top-6 right-6 float-right z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 bg-white/95 transition hover:border-ink/20 hover:bg-white shadow-lg"
                  aria-label="Close article"
                >
                  <svg className="h-5 w-5 text-ink" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Article content */}
                <div className="mx-auto max-w-3xl px-6 py-12 sm:px-10 sm:py-16 lg:px-12">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-[0.65rem] uppercase tracking-[0.28em] text-gold font-semibold">{openArticle.category}</span>
                      <span className="text-[0.65rem] uppercase tracking-[0.28em] text-stone font-semibold">{openArticle.readTime}</span>
                    </div>

                    <h1 className="display-font text-5xl sm:text-6xl font-semibold leading-tight tracking-[-0.03em] text-ink mb-8">
                      {openArticle.title}
                    </h1>

                    <div className="prose prose-lg max-w-none">
                      <p className="text-lg leading-8 text-stone mb-8">
                        {openArticle.detail}
                      </p>

                      <div className="my-12">
                        <h2 className="display-font text-2xl font-semibold text-ink mb-6">Key points</h2>
                        <div className="grid gap-4 sm:grid-cols-3">
                          {openArticle.highlights.map((highlight) => (
                            <div key={highlight} className="rounded-2xl border border-gold/20 bg-gradient-to-br from-gold/10 to-white px-6 py-6">
                              <p className="text-base font-medium leading-7 text-ink">{highlight}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="border-t border-line pt-12 pb-8">
                        <h2 className="display-font text-2xl font-semibold text-ink mb-6">Next steps</h2>
                        <p className="text-base leading-7 text-stone mb-8">
                          Have questions about this topic or need tailored legal guidance? Reach out to discuss how these principles apply to your situation.
                        </p>
                        <div className="flex flex-wrap gap-4">
                          <a 
                            href="#contact" 
                            className="inline-flex rounded-full bg-ink px-8 py-3.5 text-base font-semibold text-paper transition hover:bg-ink/90 shadow-md hover:shadow-lg"
                          >
                            Ask about this topic
                          </a>
                          <button
                            type="button"
                            onClick={handleArticleClose}
                            className="inline-flex rounded-full border border-ink/20 bg-white px-8 py-3.5 text-base font-semibold text-ink transition hover:border-ink/40 hover:bg-white/80 shadow-md hover:shadow-lg"
                          >
                            Back to articles
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </main>
  );
}

