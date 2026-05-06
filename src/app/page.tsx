const strengths = [
  {
    title: 'Property law excellence',
    description: 'Real estate documentation and conveyancing support handled with consistency and precision.',
    proof: 'Practice-tested at AMCO Properties',
    href: '#profile',
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

const articles = [
  {
    title: 'What to check before signing a property sale agreement',
    category: 'Property Law',
    summary:
      'A practical legal checklist covering title review, contractual red flags, and the due diligence steps that protect buyers and sellers.',
    readTime: '4 min read',
  },
  {
    title: 'Why due diligence matters in real estate transactions',
    category: 'Transactions',
    summary:
      'An article-style overview of the legal and commercial risks that surface when conveyancing is rushed or poorly documented.',
    readTime: '5 min read',
  },
  {
    title: 'How a young lawyer builds trust in a professional practice',
    category: 'Career Notes',
    summary:
      'A reflection on communication, responsiveness, and professional discipline in the early stages of legal practice.',
    readTime: '3 min read',
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

export default function Home() {
  return (
    <main className="relative">
      <div className="mx-auto flex w-full max-w-6xl flex-col px-5 py-6 sm:px-8 lg:px-10 viewport-zoom">
        <header className="flex items-center justify-between border-b border-line/80 pb-5 pt-4">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.28em] text-stone">Legal Portfolio</p>
            <p className="mt-2 text-lg font-medium text-ink">Hannah Njeri</p>
          </div>
          <div className="ml-auto flex items-center gap-4 md:gap-6">
            <nav className="hidden items-center gap-6 text-base font-medium text-stone md:flex">
              <a className="transition hover:text-ink" href="#profile">Profile</a>
              <a className="transition hover:text-ink" href="#experience">Experience</a>
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
              {articles.map((article) => (
                <article key={article.title} tabIndex={0} className="article-card group rounded-[1.75rem] border border-line bg-white p-6 shadow-sm transition hover:shadow-soft">
                  <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.22em] text-gold">
                    <span>{article.category}</span>
                    <span className="text-stone">{article.readTime}</span>
                  </div>
                  <h3 className="display-font mt-4 text-3xl font-semibold leading-tight text-ink">{article.title}</h3>
                  <p className="mt-4 text-base leading-7 text-stone">{article.summary}</p>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex text-sm font-semibold text-ink underline decoration-gold/40 underline-offset-4 transition group-hover:decoration-gold"
                  >
                    Ask for the full article
                  </a>
                </article>
              ))}
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

        <section className="pb-12">
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
                  Available for consultations, retainer engagements, and strategic partnerships.
                </p>

                <div className="mt-6 grid gap-3">
                  <a href="mailto:njerik103@gmail.com" className="group flex flex-col items-start gap-2 rounded-xl border border-white/12 bg-white/6 px-4 py-3 text-paper transition hover:border-gold/40 hover:bg-white/10 sm:flex-row sm:items-center sm:justify-between">
                    <span className="text-xs uppercase tracking-[0.18em] text-paper/70">Email</span>
                    <span className="text-sm font-semibold text-gold transition group-hover:text-gold/85 break-all sm:break-normal sm:text-right">njerik103@gmail.com</span>
                  </a>
                  <a href="https://www.linkedin.com/in/njeri-kamau05/?originalSubdomain=ke" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-start gap-2 rounded-xl border border-white/12 bg-white/6 px-4 py-3 text-paper transition hover:border-gold/40 hover:bg-white/10 sm:flex-row sm:items-center sm:justify-between">
                    <span className="text-xs uppercase tracking-[0.18em] text-paper/70">LinkedIn</span>
                    <span className="text-sm font-semibold text-gold transition group-hover:text-gold/85">Njeri Kamau</span>
                  </a>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a href="mailto:njerik103@gmail.com" className="w-full rounded-full bg-gold px-5 py-2.5 text-center text-sm font-semibold text-ink transition hover:bg-gold/90 sm:w-auto">
                    Book consultation
                  </a>
                  <a href="#articles" className="w-full rounded-full border border-white/20 px-5 py-2.5 text-center text-sm font-semibold text-paper transition hover:border-white/35 hover:bg-white/10 sm:w-auto">
                    Review insights
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
