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
    slug: 'buying-an-apartment-in-kenya',
    title: 'Buying an Apartment in Kenya?',
    category: 'Property Law',
    summary: 'Sectional titles, service charges, and the buyer checks that prevent costly surprises.',
    readTime: '6 min read',
    detail: `Buying an Apartment in Kenya?

What you need to know about sectional titles, service charges, and your rights as a unit owner

By Hannah Kamau, LLB  |  Legal Practitioner, AMCCO Properties Ltd

May 2026  |  Real Estate & Conveyancing  |  4 min read

Apartment living in Nairobi is booming. From Westlands to Kilimani to Syokimau, new developments are rising across the city, and an increasing number of Kenyans and diaspora investors are choosing to buy units rather than rent. But buying an apartment is legally quite different from buying a standalone piece of land — and many buyers do not realise this until after they have signed.

This guide explains the legal framework for apartment ownership in Kenya, what a sectional title means, and what you need to check before buying a unit.

What is a Sectional Title?

When you buy an apartment in Kenya, you are not buying land in the traditional sense. You are buying a section of a larger building — your specific unit — together with a share in the common areas of the development, such as the lobby, corridors, parking areas, gardens, and roof.

The legal framework for this is the Sectional Properties Act, 2020, which replaced the older and more cumbersome apartment ownership regime. Under the Act, each unit in a development is registered separately with its own individual title deed — called a sectional title. This means you can mortgage, sell, or transfer your unit independently of the other units in the building.

💡 Before the Sectional Properties Act 2020, many Kenyan apartment purchases were structured as long-term leases rather than outright ownership. If you are buying a unit in an older development, check whether your title will be a sectional title or a leasehold interest — they have different legal implications.

What Do You Own and What is Shared?

Your sectional title covers your unit — the interior space from the inner surface of the walls, floor, and ceiling. Everything within those boundaries is yours. The structure of the building itself — the walls, roof, foundations, and common areas — belongs to the Body Corporate, which is the legal entity formed by all the unit owners in the development.

This means that decisions about the common areas, building maintenance, and shared facilities are made collectively by all unit owners through the Body Corporate. Every unit owner automatically becomes a member of the Body Corporate when they purchase their unit.

Service Charges and Levies

As a unit owner, you will be required to contribute to the upkeep of the common areas and shared facilities through service charges or levies. These cover costs such as security, cleaning, landscaping, lift maintenance, generator fuel, water for common areas, and building insurance.

Service charges are ongoing obligations — they do not end when your mortgage is paid off. Before buying a unit, ask for a breakdown of the current service charges and check whether they are up to date. Outstanding service charge debts can be a headache to resolve after purchase.

⚠️  Outstanding service charges can in some circumstances affect your ability to sell or mortgage your unit in the future. Always request a clearance certificate from the developer or Body Corporate confirming that service charges are fully paid before completing your purchase.

What to Check Before Buying

Beyond the standard land search and due diligence steps, buying an apartment requires some additional checks:

Confirm the developer has the necessary approvals — including planning permission, architectural approval from the National Construction Authority, and an occupation certificate if the building is already complete.

Ask for the Sectional Plan — the official registered document that defines the boundaries of each unit and the common areas. Your unit's boundaries should match what you can see physically.

Review the Management Rules — these govern how the Body Corporate operates, including how decisions are made, how disputes are resolved, and what restrictions apply to unit owners (for instance, restrictions on short-term rentals or keeping pets).

Check what amenities are included and whether they are part of the registered development or informal additions — a rooftop gym promised during sales may not be a legally guaranteed feature of your purchase.

If buying off-plan (before construction is complete), check the developer's track record, the completion timeline, and what happens if the developer fails to deliver. Have your lawyer review the off-plan sale agreement carefully — these agreements often favour developers.

Off-Plan Purchases: Opportunity and Risk

Buying off-plan — purchasing a unit before or during construction — is common in Nairobi and can offer attractive pricing compared to completed units. But it carries significant risk. Developers have been known to delay projects, change specifications, or in worst cases, abandon developments entirely.

Protect yourself by ensuring that your deposit is held in an escrow account rather than paid directly to the developer, that the sale agreement includes penalty clauses for delays, and that your lawyer confirms the developer holds a clean title to the land on which the development is being built.

💡 Ask for references from previous developments by the same developer. If they have delivered other projects on time and to the promised standard, that is a good sign. If you cannot find any completed projects, be very cautious.

Financing Your Apartment Purchase

Most banks in Kenya will lend against a sectional title unit, subject to a valuation. The loan-to-value ratio is typically between 70% and 90%, meaning you will need to provide between 10% and 30% as a deposit. Your bank will require a copy of the sectional title and may conduct their own due diligence checks.

Note that stamp duty on apartment purchases is calculated at 4% of the value of your unit — the same rate as other urban property purchases.

The Bottom Line

Apartment ownership in Kenya, done right, is a solid investment and a great way to own property in high-demand urban areas without the cost of a standalone house. The Sectional Properties Act 2020 has significantly improved the legal framework, making unit ownership cleaner and more secure than it used to be.

As with all property purchases, the key is doing your homework — confirming the developer's credibility, reviewing all documentation carefully, and working with a lawyer who understands the sectional property framework. An apartment is a home and an investment. Both deserve proper protection.

Hannah Kamau is a legal practitioner specialising in conveyancing and property transactions at AMCCO Properties Ltd, Nairobi. She writes on property law, legal technology, and access to justice in Kenya and across Africa.
`,
    highlights: ['Confirm developer approvals and sectional plan', 'Check service charges and clearance certificates', 'Understand Body Corporate rules and shared liabilities'],
  },
  {
    slug: 'so-you-want-to-buy-land-in-kenya',
    title: 'So You Want to Buy Land in Kenya?',
    category: 'Property Law',
    summary: 'A plain-English guide from finding a plot to holding the title deed.',
    readTime: '5 min read',
    detail: `So You Want to Buy Land in Kenya?

A plain-English guide to the process — from finding the plot to holding the title deed

By Hannah Kamau, LLB  |  Legal Practitioner, AMCCO Properties Ltd

May 2026  |  Real Estate & Conveyancing  |  4 min read

Buying land in Kenya is one of the most significant financial decisions a person or family will ever make. It can also be one of the most confusing — full of legal jargon, bureaucratic steps, and, if you are not careful, costly mistakes. I work in conveyancing every day, and I have seen deals go beautifully and deals go very wrong. This guide is my attempt to give you the honest, plain-English version of how the process works.

💡 Whether you are buying a quarter-acre plot in Kiambu or a piece of land in the coast, the legal process is largely the same. What changes is the specific documents and consents required.

Step 1: Find Your Land and Agree on a Price

This sounds obvious, but the negotiation stage is where many buyers make their first mistake: agreeing to a price and paying a deposit before doing any legal checks. Do not do this. Before any money changes hands, you need to verify that the land actually exists, that the person selling it actually owns it, and that there are no problems hiding in the title.

Once you have identified the land and agreed in principle on a price, the next step is to appoint a lawyer. Do not use the seller's lawyer — appoint your own. Your lawyer's job is to protect your interests, not facilitate the transaction.

Step 2: Conduct a Land Search

A land search is conducted at the relevant Land Registry and tells you who the registered owner of the land is, whether there are any mortgages or charges on the title, and whether there are any cautions or restrictions affecting the land. This is the single most important step in the process.

Your lawyer will conduct the search using the title number provided by the seller. The result is an official document from the Land Registry confirming the current state of the title. If the person claiming to sell you the land is not the registered owner — walk away immediately.

⚠️  Fraud in land transactions is real and common in Kenya. Title deed forgery, impersonation of owners, and double sales of the same land do happen. A proper land search is your first line of defence.

Step 3: Sign a Sale Agreement

Once the search comes back clean, your lawyer will draft a Sale Agreement — a legally binding contract setting out the agreed purchase price, the deposit amount, the completion date, and the conditions of the sale. Both parties sign this document. The buyer typically pays a deposit of 10% of the purchase price at this stage.

Read the Sale Agreement carefully before signing. If there is anything you do not understand, ask your lawyer to explain it. This document governs the entire transaction.

Step 4: Further Due Diligence

While the Sale Agreement is in place, your lawyer will carry out additional checks — including a survey to confirm the boundaries of the land, obtaining consent to transfer if required (for instance, from a county government for agricultural land), and confirming that land rates and rent are up to date. Outstanding rates or rent must be cleared before the transfer can be registered.

Step 5: Pay the Purchase Price and Stamp Duty

On the agreed completion date, the balance of the purchase price is paid. This should always be paid through your lawyer's client account — never directly to the seller in cash. Once payment is confirmed, the Transfer Instrument is prepared and signed by both parties.

Before the transfer can be registered, stamp duty must be paid to the Kenya Revenue Authority. Stamp duty is calculated at 4% of the property value in municipalities and urban areas, and 2% in rural areas. Your lawyer will handle the stamp duty assessment and payment process.

Step 6: Registration

The final step is lodging the signed Transfer Instrument at the Land Registry for registration. Once the Registrar processes the transfer, a new title deed is issued in your name. At this point, you are the legal owner of the land.

The entire process, from signing the Sale Agreement to receiving your title deed, typically takes between three weeks and three months, depending on how quickly all parties and government offices respond.

💡 Keep copies of every document — the Sale Agreement, search results, stamp duty receipts, and your title deed. Store your title deed in a safe place. A lost title deed is a serious problem and replacing it is a lengthy process.

A Final Word

Buying land in Kenya does not have to be frightening — but it does require patience, the right professional support, and a commitment to following the process properly. Cutting corners to save time or money almost always costs more in the long run. Work with a reputable lawyer, never pay before you search, and trust the process.

Hannah Kamau is a legal practitioner specialising in conveyancing and property transactions at AMCCO Properties Ltd, Nairobi. She writes on property law, legal technology, and access to justice in Kenya and across Africa.
`,
    highlights: ['Always conduct a land search', 'Appoint your own lawyer', 'Pay through a lawyer/client account'],
  },
  {
    slug: 'due-diligence-in-property-what-to-check-before-you-buy',
    title: 'Why Due Diligence Matters',
    category: 'Property Law',
    summary: 'A practical checklist: title, identity, rates, surveys, cautions, and planning permissions.',
    readTime: '6 min read',
    detail: `Due Diligence in Property: What to Check Before You Buy

The checks that separate smart buyers from sorry ones

By Hannah Kamau, LLB  |  Legal Practitioner, AMCCO Properties Ltd

May 2026  |  Real Estate & Conveyancing  |  4 min read

I have sat across the table from buyers who lost their life savings to land fraud. I have also sat with buyers who almost walked into a disaster — and were saved by a thorough due diligence process. The difference between these two groups is almost always not intelligence or wealth. It is whether they did their homework before signing anything.

Due diligence simply means checking everything before you commit. In property transactions, it means verifying the land, the seller, the title, and the physical condition of the property before you pay a single shilling. Here is what that looks like in practice.

1. Verify the Title Deed

The title deed is the most important document in a land transaction. It proves ownership. But title deeds in Kenya can be forged, and the consequences of buying land on a fake title are devastating — you could lose everything with no legal recourse against the fraudster.

Your lawyer must conduct an official search at the Land Registry using the title number on the deed. The search will confirm whether the title is genuine, who the registered owner is, and whether there are any encumbrances — mortgages, cautions, or restrictions — on the property.

⚠️  Never rely on a copy of a title deed shown to you by the seller. Always conduct an independent official search at the Land Registry. This is non-negotiable.

2. Confirm the Seller's Identity

Even if the title is genuine, you need to confirm that the person selling you the land is actually the registered owner — or is properly authorised to sell on the owner's behalf. Ask for the seller's national ID and compare the name against the title deed and the official search results. If they do not match, stop.

Where a company is selling, verify that the company is registered with the Business Registration Service and that the individuals signing on its behalf are authorised to do so. Your lawyer can verify this through official company searches.

3. Check for Rates and Rent Arrears

Land in Kenya attracts annual land rates payable to the county government and, for leasehold land, land rent payable to the national government. If these payments are in arrears, the debt attaches to the land — meaning you as the new owner inherit the debt.

Before completing any purchase, obtain clearance certificates from the relevant county government and the National Land Commission confirming that all rates and rent are fully paid up to date.

4. Conduct a Physical Visit and Survey

Visit the land yourself. Walk the boundaries. Make sure what you are seeing on the ground matches what is described in the title deed and the survey map. Boundary disputes between neighbouring landowners are extremely common in Kenya, and many arise because a buyer never physically verified the boundaries before purchasing.

Engage a licensed surveyor to confirm the land measurements and boundaries against the registered survey plan. This is particularly important for agricultural land and larger plots where encroachment by neighbouring landowners may have occurred over time.

💡 Take photographs of the land during your visit and note any structures, fences, or developments — both on the land and on neighbouring plots. This creates a useful record if boundary disputes arise later.

5. Check for Cautions and Restrictions

A caution is an entry on the title register that warns potential buyers that a third party has a claim over the land. A restriction limits what can be done with the land. Both will appear on an official search and both are serious red flags that require legal advice before proceeding.

Common reasons for cautions include ongoing inheritance disputes, unpaid loans secured against the land, and court orders. Do not purchase land with a caution until your lawyer has thoroughly investigated and resolved it.

6. Verify Land Use and Planning Permissions

Land in Kenya is zoned for different uses — agricultural, residential, commercial, industrial. Buying land designated for agricultural use with the intention of developing residential apartments, for example, requires a change of use approval from the relevant county government — a process that is neither quick nor guaranteed.

Check the zoning of the land against your intended use. Your lawyer can obtain this information from the relevant county planning department. Do not assume that because a seller tells you the land is suitable for your purpose, it legally is.

7. Investigate the Neighbourhood

This is the due diligence step that lawyers cannot do for you. Talk to the neighbours. Ask how long they have been there, whether there have been any disputes about the land, and who they know the seller to be. Local knowledge is often the earliest warning system for fraud.

Also check the neighbourhood's development trajectory — planned infrastructure, proximity to amenities, and any compulsory acquisition proposals by government. The KENHA (Kenya National Highways Authority) website and the relevant county government are useful starting points.

⚠️  Government compulsory acquisition can happen to any land along planned road or infrastructure corridors. Before buying along major road routes, check whether your intended plot falls within an acquisition corridor.

The Bottom Line

Due diligence is not bureaucracy for its own sake. It is the process by which you protect what may be the most significant investment of your life. No reputable lawyer will advise you to skip any of these steps, and no trustworthy seller will object to you taking the time to do them properly.

If a seller is pressuring you to move quickly, pay first, or skip the legal checks — that pressure itself is a red flag. Legitimate sellers understand and respect the due diligence process. Anyone who does not is telling you something important.

Hannah Kamau is a legal practitioner specialising in conveyancing and property transactions at AMCCO Properties Ltd, Nairobi. She writes on property law, legal technology, and access to justice in Kenya and across Africa.
`,
    highlights: ['Verify title deeds independently', 'Conduct a physical survey of boundaries', 'Obtain clearance for rates and rent'],
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

  const parseArticleDetail = (detail: string, title: string) => {
    const blocks = detail
      .replace(/\r/g, '')
      .trim()
      .split(/\n\s*\n+/)
      .map((block) => block.trim())
      .filter(Boolean);

    const contentBlocks = blocks.filter(
      (block) =>
        block !== title &&
        !block.startsWith(`${title} `) &&
        !/^By\s|^May\s\d{4}|^June\s\d{4}|^July\s\d{4}|^August\s\d{4}|^September\s\d{4}|^October\s\d{4}|^November\s\d{4}|^December\s\d{4}|^January\s\d{4}|^February\s\d{4}|^March\s\d{4}|^April\s\d{4}/i.test(block)
    );

    return contentBlocks.map((block) => {
      if (/^[💡⚠️]/.test(block)) {
        return { kind: 'quote' as const, text: block.replace(/\s+/g, ' ').trim() };
      }

      if (!/[.!?]$/.test(block) && block.split(/\s+/).length <= 8) {
        return { kind: 'heading' as const, text: block.replace(/\s+/g, ' ').trim() };
      }

      return {
        kind: 'paragraph' as const,
        text: block
          .replace(/\n/g, ' ')
          .replace(/\s+/g, ' ')
          .trim(),
      };
    });
  };

  const renderArticleBlocks = (detail: string, title: string) =>
    parseArticleDetail(detail, title).map((block, index) => {
      if (block.kind === 'heading') {
        return (
          <h2 key={`${title}-${block.text}-${index}`} className="display-font mt-12 mb-6 text-2xl sm:text-3xl font-bold tracking-[-0.03em] text-ink border-t border-line/40 pt-8">
            {block.text}
          </h2>
        );
      }

      if (block.kind === 'quote') {
        return (
          <blockquote
            key={`${title}-${block.text}-${index}`}
            className="my-10 rounded-2xl border-l-5 border-gold bg-gradient-to-r from-gold/12 to-gold/6 px-6 py-5 text-base leading-8 text-ink shadow-sm font-medium"
          >
            <p className="m-0">{block.text}</p>
          </blockquote>
        );
      }

      return (
        <p key={`${title}-${block.text}-${index}`} className="mb-7 text-[1.08rem] leading-8 text-stone/85 letter-spacing-0.5">
          {block.text}
        </p>
      );
    });

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
                Articles
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
                  <article key={article.slug} className="article-card group flex h-full flex-col rounded-[2rem] border border-line/50 bg-white/90 p-6 text-left shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-gold/40 hover:bg-white hover:shadow-lg">
                    <div className="card-body flex flex-1 flex-col">
                      <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.26em] font-semibold">
                        <span className="rounded-full bg-gold/12 px-3 py-1.5 text-gold">{article.category}</span>
                        <span className="text-stone/60">{article.readTime}</span>
                      </div>
                      <h3 className="display-font mt-5 text-3xl font-bold leading-snug tracking-[-0.02em] text-ink">
                        {article.title}
                      </h3>
                      <p className="mt-4 text-[0.95rem] leading-7 text-stone/80">{article.summary}</p>

                      <button
                        type="button"
                        onClick={() => handleArticleOpen(article)}
                        className="mt-auto inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold to-gold/85 px-6 py-2.5 text-sm font-bold text-ink shadow-md transition hover:from-gold/95 hover:to-gold/90 hover:shadow-lg active:scale-95"
                      >
                        <span>Read</span>
                        <svg className="h-3.5 w-3.5 transition group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </button>
                    </div>

                    <div className="card-footer mt-4 pt-3 border-t border-line/40 text-xs text-stone/60 font-medium">
                      <span className="text-gold/80 transition group-hover:text-gold group-hover:translate-x-0.5">Explore →</span>
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

      </div>

      {openArticle && (
        <div className="fixed inset-0 z-50 flex flex-col bg-ink/40 backdrop-blur-sm animate-fade-in">
          <button
            type="button"
            onClick={handleArticleClose}
            className="absolute right-5 top-5 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white/95 transition hover:border-ink/20 hover:bg-white shadow-lg"
            aria-label="Close article"
          >
            <svg className="h-5 w-5 text-ink" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="w-full flex-1 rounded-b-[2.5rem] border-b border-line bg-white shadow-2xl overflow-hidden animate-slide-up">
            <div className="article-modal-content relative h-full overflow-y-auto">
              <div className="mx-auto max-w-3xl px-6 pb-12 pt-24 sm:px-10 sm:pb-16 sm:pt-24 lg:px-12">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-[0.65rem] uppercase tracking-[0.28em] text-gold font-semibold">{openArticle.category}</span>
                      <span className="text-[0.65rem] uppercase tracking-[0.28em] text-stone font-semibold">{openArticle.readTime}</span>
                    </div>

                    <h1 className="display-font text-5xl sm:text-6xl font-semibold leading-tight tracking-[-0.03em] text-ink mb-8">
                      {openArticle.title}
                    </h1>

                    <div className="mx-auto max-w-3xl pt-2">
                      <div className="mx-auto max-w-2xl">
                        {renderArticleBlocks(openArticle.detail, openArticle.title)}

                        <div className="my-12 grid gap-4 sm:grid-cols-3">
                          {openArticle.highlights.map((highlight) => (
                            <div key={highlight} className="rounded-2xl border border-gold/20 bg-gradient-to-br from-gold/10 to-white px-6 py-6 shadow-sm">
                              <p className="text-base font-medium leading-7 text-ink">{highlight}</p>
                            </div>
                          ))}
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
        </div>
      )}
    </main>
  );
}

