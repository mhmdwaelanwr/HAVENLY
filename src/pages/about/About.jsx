// About – all colors come from the @theme tokens:
// charcoal, ivory, sand, warm-gold, dark-gold, dark-surface.
import { Link } from "react-router-dom";
import {
  FiSearch,
  FiColumns,
  FiMessageCircle,
  FiArrowDown,
  FiArrowUpRight,
  FiCheckCircle,
  FiShield,
  FiUserCheck,
  FiZap,
  FiEye,
  FiHeart,
  FiLock,
  FiLayers,
} from "react-icons/fi";

export default function About() {
  return (
    <main className="bg-ivory font-sans text-charcoal dark:bg-charcoal dark:text-ivory">
      {/* ------------------------------ HERO ------------------------------ */}
      <section className="relative isolate overflow-hidden pt-28 md:pt-32">
        <div className="absolute -left-40 top-20 -z-10 h-[30rem] w-[30rem] rounded-full bg-warm-gold/10 blur-3xl dark:bg-warm-gold/20" />
        <p
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-24 -z-10 select-none text-center font-serif text-[22vw] font-bold leading-none tracking-tighter text-warm-gold/[0.06] dark:text-ivory/[0.04]"
        >
          HAVENLY
        </p>

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 pb-20 sm:px-10 lg:grid-cols-12 lg:gap-10 lg:px-16 lg:pb-28">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-4">
              <span className="block h-px w-14 bg-warm-gold" />
              <p className="text-xs font-extrabold uppercase tracking-[0.35em] text-warm-gold">
                About Havenly
              </p>
            </div>

            <h1 className="mt-8 font-serif text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl xl:text-8xl">
              Finding home should feel{" "}
              <span className="italic text-warm-gold">different.</span>
            </h1>

            <p className="mt-8 max-w-lg text-base leading-relaxed text-charcoal/70 dark:text-ivory/70 md:text-lg">
              We bring property discovery, comparison and owner connections into
              one carefully designed experience.
            </p>

            <div className="mt-12 flex items-center gap-6">
              <div className="h-28 w-24 shrink-0 overflow-hidden rounded-t-full border border-sand dark:border-sand/30 sm:h-32 sm:w-28">
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
                  alt="Refined interior with natural light and warm materials"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="border-l border-sand pl-6 dark:border-sand/30">
                <p className="font-serif text-xl font-bold leading-snug sm:text-2xl">
                  Truthful photos.
                  <br />
                  Essential details.
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-warm-gold">
                  Discover · Compare · Connect
                </p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:col-span-6 lg:max-w-lg lg:justify-self-end">
            <div className="absolute -right-4 top-4 h-full w-full rounded-t-full border border-warm-gold/60 sm:-right-6 sm:top-6" />
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-t-full shadow-2xl shadow-black/20">
              <img
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80"
                alt="Modern luxury residence illuminated at twilight"
                className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />
            </div>

            <div className="absolute -left-4 bottom-16 flex items-center gap-3 border border-ivory/30 bg-ivory/40 px-5 py-4 shadow-xl backdrop-blur-xl dark:border-ivory/10 dark:bg-charcoal/50 sm:-left-12">
              <FiCheckCircle className="text-2xl text-warm-gold" />
              <div>
                <p className="font-serif text-base font-bold">
                  Verified Listings
                </p>
                <p className="text-[10px] uppercase tracking-[0.25em] text-charcoal/60 dark:text-ivory/60">
                  Curated with care
                </p>
              </div>
            </div>

            <div className="absolute -bottom-6 right-6 flex h-16 w-16 items-center justify-center rounded-full bg-warm-gold text-xl text-ivory shadow-xl sm:right-10 sm:h-20 sm:w-20 sm:text-2xl">
              <FiArrowDown />
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-warm-gold/50 to-transparent" />
        </div>
      </section>

      {/* --------------------------- WHY WE EXIST -------------------------- */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 md:py-28 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-warm-gold">
              Why We Exist
            </p>
            <h2 className="mt-5 font-serif text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              More than listings. A better way to belong.
            </h2>
          </div>

          <div className="flex items-end lg:col-span-6">
            <div className="border-l border-sand pl-6 dark:border-sand/30 md:pl-10">
              <p className="text-base leading-relaxed text-charcoal/75 dark:text-ivory/70 md:text-lg">
                HAVENLY is a property discovery concept built around clarity and
                trust. Explore homes that suit your needs, save favorites,
                compare options and reach the right owner or agent—all in one
                organized place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------- THREE PILLARS ------------------------ */}
      <section className="mx-auto max-w-7xl px-6 pb-24 sm:px-10 md:pb-32 lg:px-16">
        <div className="grid gap-6 md:grid-cols-3">
          <article className="group flex flex-col justify-between border border-sand/60 bg-white/70 p-8 transition-colors duration-300 hover:border-warm-gold dark:border-sand/20 dark:bg-ivory/5 dark:hover:border-warm-gold md:min-h-[22rem] md:p-10">
            <div className="flex items-start justify-between">
              <span className="font-serif text-5xl font-bold text-warm-gold/40 transition-colors duration-300 group-hover:text-warm-gold">
                01
              </span>
              <FiSearch className="text-2xl text-warm-gold" />
            </div>
            <div className="mt-16 md:mt-0">
              <span className="mb-5 block h-px w-10 bg-warm-gold transition-all duration-300 group-hover:w-20" />
              <h3 className="font-serif text-3xl font-bold">Discover</h3>
              <p className="mt-3 leading-relaxed text-charcoal/70 dark:text-ivory/65">
                Browse homes with truthful photos and essential details.
              </p>
            </div>
          </article>

          <article className="group flex flex-col justify-between border border-sand/60 bg-white/70 p-8 transition-colors duration-300 hover:border-warm-gold dark:border-sand/20 dark:bg-ivory/5 dark:hover:border-warm-gold md:min-h-[22rem] md:p-10">
            <div className="flex items-start justify-between">
              <span className="font-serif text-5xl font-bold text-warm-gold/40 transition-colors duration-300 group-hover:text-warm-gold">
                02
              </span>
              <FiColumns className="text-2xl text-warm-gold" />
            </div>
            <div className="mt-16 md:mt-0">
              <span className="mb-5 block h-px w-10 bg-warm-gold transition-all duration-300 group-hover:w-20" />
              <h3 className="font-serif text-3xl font-bold">Compare</h3>
              <p className="mt-3 leading-relaxed text-charcoal/70 dark:text-ivory/65">
                Understand the market efficiently before you decide.
              </p>
            </div>
          </article>

          <article className="group flex flex-col justify-between border border-sand/60 bg-white/70 p-8 transition-colors duration-300 hover:border-warm-gold dark:border-sand/20 dark:bg-ivory/5 dark:hover:border-warm-gold md:min-h-[22rem] md:p-10">
            <div className="flex items-start justify-between">
              <span className="font-serif text-5xl font-bold text-warm-gold/40 transition-colors duration-300 group-hover:text-warm-gold">
                03
              </span>
              <FiMessageCircle className="text-2xl text-warm-gold" />
            </div>
            <div className="mt-16 md:mt-0">
              <span className="mb-5 block h-px w-10 bg-warm-gold transition-all duration-300 group-hover:w-20" />
              <h3 className="font-serif text-3xl font-bold">Connect</h3>
              <p className="mt-3 leading-relaxed text-charcoal/70 dark:text-ivory/65">
                Move from inspiration to a real conversation.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* ----------------------------- OUR STORY --------------------------- */}
      <section className="border-t border-sand/40 bg-sand/20 py-24 dark:border-sand/15 dark:bg-dark-surface/60 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 sm:px-10 lg:grid-cols-12 lg:gap-12 lg:px-16">
          <div className="relative lg:col-span-6">
            <div className="relative aspect-[4/5] w-[85%] overflow-hidden sm:aspect-[5/4] sm:w-[88%]">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80"
                alt="Elegant living space with warm natural materials"
                className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-10 right-0 aspect-square w-[45%] overflow-hidden border-8 border-ivory shadow-2xl dark:border-dark-surface">
              <img
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80"
                alt="Architectural interior detail"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
            <div className="absolute -left-3 top-10 hidden border border-ivory/30 bg-ivory/40 px-5 py-4 shadow-xl backdrop-blur-xl dark:border-ivory/10 dark:bg-charcoal/50 sm:block">
              <p className="font-serif text-lg font-bold">A simpler search.</p>
              <p className="text-[10px] uppercase tracking-[0.25em] text-warm-gold">
                The idea behind HAVENLY
              </p>
            </div>
          </div>

          <div className="mt-10 lg:col-span-6 lg:mt-0 lg:pl-10">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-warm-gold">
              Our Story
            </p>
            <h2 className="mt-5 font-serif text-4xl font-bold leading-tight md:text-5xl">
              Born from a simple frustration.
            </h2>
            <span className="my-8 block h-px w-20 bg-warm-gold" />
            <div className="space-y-5 text-base leading-relaxed text-charcoal/75 dark:text-ivory/70 md:text-lg">
              <p>
                Searching for a home had become noisy and overwhelming. Great
                properties were buried under endless, look-alike listings, and
                reaching the right person took far too many steps.
              </p>
              <p>
                HAVENLY started as an idea to change that: one organized place
                to discover homes, compare options and speak directly with
                owners and agents, all wrapped in a design that feels calm and
                considered.
              </p>
              <p>
                Today, that idea guides everything we build. Clarity first,
                trust always, and beautiful spaces at the center.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------- OUR VALUES --------------------------- */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10 md:py-32 lg:px-16">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-warm-gold">
              Our Values
            </p>
            <h2 className="mt-5 font-serif text-4xl font-bold leading-tight md:text-5xl">
              What sets us <span className="italic text-warm-gold">apart.</span>
            </h2>
            <p className="mt-6 max-w-sm leading-relaxed text-charcoal/70 dark:text-ivory/65">
              The principles that shape every listing, feature and
              conversation on the platform.
            </p>
          </div>

          <div className="grid gap-x-12 sm:grid-cols-2 lg:col-span-8">
            <article className="group border-t border-sand/60 py-10 dark:border-sand/20">
              <div className="flex items-center justify-between">
                <span className="font-serif text-sm tracking-widest text-warm-gold">
                  01
                </span>
                <FiEye className="text-xl text-warm-gold transition-transform duration-300 group-hover:scale-125" />
              </div>
              <h3 className="mt-6 font-serif text-3xl font-bold">
                Transparency
              </h3>
              <p className="mt-3 leading-relaxed text-charcoal/70 dark:text-ivory/65">
                Honest photos, clear pricing and complete details. What you see
                is what you get.
              </p>
            </article>

            <article className="group border-t border-sand/60 py-10 dark:border-sand/20">
              <div className="flex items-center justify-between">
                <span className="font-serif text-sm tracking-widest text-warm-gold">
                  02
                </span>
                <FiLock className="text-xl text-warm-gold transition-transform duration-300 group-hover:scale-125" />
              </div>
              <h3 className="mt-6 font-serif text-3xl font-bold">Trust</h3>
              <p className="mt-3 leading-relaxed text-charcoal/70 dark:text-ivory/65">
                Every listing is reviewed so you can reach owners and agents
                with confidence.
              </p>
            </article>

            <article className="group border-t border-sand/60 py-10 dark:border-sand/20">
              <div className="flex items-center justify-between">
                <span className="font-serif text-sm tracking-widest text-warm-gold">
                  03
                </span>
                <FiLayers className="text-xl text-warm-gold transition-transform duration-300 group-hover:scale-125" />
              </div>
              <h3 className="mt-6 font-serif text-3xl font-bold">Design</h3>
              <p className="mt-3 leading-relaxed text-charcoal/70 dark:text-ivory/65">
                A calm, considered experience that treats every home as a work
                of architecture.
              </p>
            </article>

            <article className="group border-t border-sand/60 py-10 dark:border-sand/20">
              <div className="flex items-center justify-between">
                <span className="font-serif text-sm tracking-widest text-warm-gold">
                  04
                </span>
                <FiHeart className="text-xl text-warm-gold transition-transform duration-300 group-hover:scale-125" />
              </div>
              <h3 className="mt-6 font-serif text-3xl font-bold">Care</h3>
              <p className="mt-3 leading-relaxed text-charcoal/70 dark:text-ivory/65">
                We put people before properties, guiding each search with
                respect for your time.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* -------------------------- WHY CHOOSE US -------------------------- */}
      <section className="bg-charcoal py-24 text-ivory dark:bg-dark-surface md:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-sand">
              Why Choose Us
            </p>
            <h2 className="mt-5 font-serif text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              A platform you can{" "}
              <span className="italic text-sand">trust.</span>
            </h2>
          </div>

          <div className="mt-16 grid divide-y divide-sand/20 border-y border-sand/20 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
            <article className="group p-8 transition-colors duration-500 hover:bg-warm-gold/10 lg:p-10">
              <span className="flex h-14 w-14 items-center justify-center border border-warm-gold/60 text-2xl text-sand transition-colors duration-500 group-hover:bg-warm-gold group-hover:text-ivory">
                <FiShield />
              </span>
              <h3 className="mt-8 font-serif text-2xl font-bold">
                Trusted Listings
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ivory/65">
                Verified properties with accurate details, so you never waste
                time on ghost listings.
              </p>
            </article>

            <article className="group p-8 transition-colors duration-500 hover:bg-warm-gold/10 lg:p-10">
              <span className="flex h-14 w-14 items-center justify-center border border-warm-gold/60 text-2xl text-sand transition-colors duration-500 group-hover:bg-warm-gold group-hover:text-ivory">
                <FiSearch />
              </span>
              <h3 className="mt-8 font-serif text-2xl font-bold">
                Smart Discovery
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ivory/65">
                Filters and curated collections that surface homes matching the
                way you live.
              </p>
            </article>

            <article className="group p-8 transition-colors duration-500 hover:bg-warm-gold/10 lg:p-10">
              <span className="flex h-14 w-14 items-center justify-center border border-warm-gold/60 text-2xl text-sand transition-colors duration-500 group-hover:bg-warm-gold group-hover:text-ivory">
                <FiUserCheck />
              </span>
              <h3 className="mt-8 font-serif text-2xl font-bold">
                Direct Connections
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ivory/65">
                Reach the right owner or agent quickly, with no confusing
                middle steps.
              </p>
            </article>

            <article className="group p-8 transition-colors duration-500 hover:bg-warm-gold/10 lg:p-10">
              <span className="flex h-14 w-14 items-center justify-center border border-warm-gold/60 text-2xl text-sand transition-colors duration-500 group-hover:bg-warm-gold group-hover:text-ivory">
                <FiZap />
              </span>
              <h3 className="mt-8 font-serif text-2xl font-bold">
                Simple &amp; Fast
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ivory/65">
                A clean, uncluttered interface that takes you from idea to
                viewing in moments.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ---------------------------- STATISTICS --------------------------- */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10 md:py-32 lg:px-16">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-warm-gold">
              Statistics
            </p>
            <h2 className="mt-5 font-serif text-4xl font-bold leading-tight md:text-5xl">
              Our growing community.
            </h2>
          </div>
          <p className="max-w-sm leading-relaxed text-charcoal/70 dark:text-ivory/65">
            Numbers that reflect the trust people place in HAVENLY every day.
          </p>
        </div>

        <div className="grid border-y border-sand/60 dark:border-sand/20 md:grid-cols-3">
          <div className="group px-0 py-12 transition-colors duration-500 hover:bg-warm-gold/5 md:px-10">
            <p className="font-serif text-6xl font-bold text-warm-gold transition-transform duration-500 group-hover:translate-x-2 sm:text-7xl lg:text-8xl">
              1,200+
            </p>
            <div className="mt-5 flex items-center gap-4">
              <span className="h-px w-8 bg-warm-gold transition-all duration-500 group-hover:w-16" />
              <p className="text-xs uppercase tracking-[0.3em] text-charcoal/70 dark:text-ivory/70">
                Properties Listed
              </p>
            </div>
          </div>

          <div className="group border-t border-sand/60 px-0 py-12 transition-colors duration-500 hover:bg-warm-gold/5 dark:border-sand/20 md:border-l md:border-t-0 md:px-10">
            <p className="font-serif text-6xl font-bold text-warm-gold transition-transform duration-500 group-hover:translate-x-2 sm:text-7xl lg:text-8xl">
              850+
            </p>
            <div className="mt-5 flex items-center gap-4">
              <span className="h-px w-8 bg-warm-gold transition-all duration-500 group-hover:w-16" />
              <p className="text-xs uppercase tracking-[0.3em] text-charcoal/70 dark:text-ivory/70">
                Happy Clients
              </p>
            </div>
          </div>

          <div className="group border-t border-sand/60 px-0 py-12 transition-colors duration-500 hover:bg-warm-gold/5 dark:border-sand/20 md:border-l md:border-t-0 md:px-10">
            <p className="font-serif text-6xl font-bold text-warm-gold transition-transform duration-500 group-hover:translate-x-2 sm:text-7xl lg:text-8xl">
              50+
            </p>
            <div className="mt-5 flex items-center gap-4">
              <span className="h-px w-8 bg-warm-gold transition-all duration-500 group-hover:w-16" />
              <p className="text-xs uppercase tracking-[0.3em] text-charcoal/70 dark:text-ivory/70">
                Cities &amp; Prime Locations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------- CTA ------------------------------ */}
      <section className="relative isolate flex min-h-[80vh] items-center justify-center overflow-hidden bg-charcoal px-6 py-24">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=80"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-charcoal/90 via-charcoal/55 to-charcoal/60" />

        <div className="w-full max-w-3xl border border-ivory/20 bg-ivory/10 p-8 text-center shadow-2xl backdrop-blur-xl dark:border-ivory/10 dark:bg-charcoal/50 sm:p-14">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-sand">
            Start Today
          </p>
          <h2 className="mt-6 font-serif text-4xl font-bold leading-tight text-ivory sm:text-5xl md:text-6xl">
            Your next chapter starts here.
          </h2>
          <p className="mx-auto mt-6 max-w-md text-base text-ivory/80 md:text-lg">
            Explore our properties or get in touch. We&apos;ll help you find a
            place you&apos;ll love calling home.
          </p>

          <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            <Link
              to="/properties"
              className="group inline-flex items-center justify-center gap-3 bg-warm-gold px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-ivory transition-colors duration-300 hover:bg-dark-gold"
            >
              Explore Properties
              <FiArrowUpRight className="text-lg transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center border border-ivory/50 px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-ivory transition-colors duration-300 hover:border-ivory hover:bg-ivory/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}