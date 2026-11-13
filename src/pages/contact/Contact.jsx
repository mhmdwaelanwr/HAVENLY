// Contact – all colors come from the @theme tokens:
// charcoal, ivory, sand, warm-gold, dark-gold, dark-surface.
import { Link } from "react-router";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiArrowUpRight,
  FiChevronDown,
  FiShield,
} from "react-icons/fi";

const contactDetails = [
  {
    icon: FiMapPin,
    label: "Headquarters",
    lines: ["New Cairo, Egypt", "Downtown Architectural District"],
  },
  {
    icon: FiPhone,
    label: "Direct Line",
    lines: ["+20 123 456 7890"],
  },
  {
    icon: FiMail,
    label: "Electronic Mail",
    lines: ["concierge@havenly.com"],
  },
  {
    icon: FiClock,
    label: "Office Hours",
    lines: ["Sunday - Thursday", "9:00 AM - 6:00 PM"],
  },
];

const inputBase =
  "w-full border border-sand/40 bg-white/50 dark:bg-dark-surface/50 " +
  "px-4 py-3.5 font-sans text-sm text-charcoal dark:text-ivory " +
  "placeholder:text-charcoal/40 dark:placeholder:text-ivory/35 " +
  "dark:border-sand/20 backdrop-blur-sm outline-none transition-all duration-300 " +
  "focus:border-warm-gold focus:bg-white dark:focus:bg-dark-surface focus:ring-1 focus:ring-warm-gold/40";

const labelBase =
  "mb-2 block font-sans text-[11px] font-medium uppercase tracking-[0.2em] " +
  "text-charcoal/70 dark:text-ivory/70";

export default function Contact() {
  return (
    <main className="bg-ivory dark:bg-charcoal text-charcoal dark:text-ivory font-sans transition-colors duration-300">
      {/* ───────────── HERO ───────────── */}
      <section className="relative isolate overflow-hidden bg-charcoal">
        {/* cinematic gradient overlay */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-charcoal via-charcoal to-dark-surface" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklab,var(--color-warm-gold)_28%,transparent),transparent_60%)]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />

        {/* architectural linework */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 opacity-[0.07] [background-image:linear-gradient(to_right,var(--color-ivory)_1px,transparent_1px)] [background-size:96px_100%]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[8%] top-0 -z-10 hidden h-full w-px bg-gradient-to-b from-transparent via-warm-gold/60 to-transparent lg:block"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 -z-10 hidden h-px w-1/3 bg-gradient-to-r from-warm-gold/60 to-transparent lg:block"
        />

        <div className="mx-auto max-w-7xl px-6 pb-20 pt-32 sm:px-8 sm:pb-24 sm:pt-40 lg:px-12 lg:pb-32 lg:pt-48">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-warm-gold" />
            <p className="font-sans text-xs font-medium uppercase tracking-widest text-warm-gold sm:text-sm">
              Get in Touch
            </p>
          </div>

          <h1 className="mt-8 max-w-4xl font-serif text-5xl font-bold leading-[1.05] tracking-tight text-ivory sm:text-6xl lg:text-7xl xl:text-8xl">
            Let’s Start a{"  "}
            <span className="italic text-warm-gold">Conversation.</span>
          </h1>

          <p className="mt-8 max-w-xl font-sans text-base font-light leading-relaxed text-ivory/70 sm:text-lg">
            Whether you're looking for your next architectural masterpiece or
            have questions about listing, our team is here for you.
          </p>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-sand/30 to-transparent" />
      </section>

      {/* ───────────── MAIN CONTENT ───────────── */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
            {/* ── Left: Form ── */}
            <div className="lg:col-span-7">
              <div className="mb-10 flex items-end justify-between gap-6 border-b border-sand/30 pb-6">
                <div>
                  <p className="font-sans text-xs font-medium uppercase tracking-widest text-warm-gold">
                    Inquiry
                  </p>
                  <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
                    Send us a message
                  </h2>
                </div>
                <span
                  aria-hidden="true"
                  className="hidden font-serif text-6xl font-light italic leading-none text-warm-gold/25 sm:block"
                >
                  01
                </span>
              </div>

              <form className="space-y-7">
                <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
                  <div>
                    <label htmlFor="fullName" className={labelBase}>
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="Your full name"
                      autoComplete="name"
                      className={inputBase}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className={labelBase}>
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="text"
                      placeholder="you@example.com"
                      autoComplete="email"
                      className={inputBase}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className={labelBase}>
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="text"
                      placeholder="+20 000 000 0000"
                      autoComplete="tel"
                      className={inputBase}
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className={labelBase}>
                      Subject / Inquiry Type
                    </label>
                    <div className="relative">
                      <select
                        id="subject"
                        name="subject"
                        defaultValue=""
                        className={`${inputBase} cursor-pointer appearance-none pr-11`}
                      >
                        <option value="" disabled>
                          Select an inquiry
                        </option>
                        <option value="buying">Buying</option>
                        <option value="selling">Selling</option>
                        <option value="renting">Renting</option>
                        <option value="general">General</option>
                      </select>
                      <FiChevronDown
                        aria-hidden="true"
                        className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-warm-gold"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className={labelBase}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about the property, the vision, or your question..."
                    className={`${inputBase} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-warm-gold py-4 text-sm font-medium uppercase tracking-wider text-ivory transition-all duration-300 hover:bg-dark-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-warm-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ivory dark:focus-visible:ring-offset-charcoal"
                >
                  Send Message
                </button>

                <p className="text-center font-sans text-xs text-charcoal/50 dark:text-ivory/45">
                  Your details are used solely to respond to your inquiry.
                </p>
              </form>
            </div>

            {/* ── Right: Direct Info ── */}
            <aside className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <div className="relative border border-sand/30 bg-white/70 p-8 shadow-[0_20px_60px_-30px_rgba(31,31,31,0.25)] backdrop-blur-xl dark:border-sand/15 dark:bg-dark-surface/60 dark:shadow-[0_20px_60px_-30px_rgba(0,0,0,0.6)] sm:p-10">
                  {/* gold corner accents */}
                  <span
                    aria-hidden="true"
                    className="absolute -left-px -top-px h-8 w-8 border-l-2 border-t-2 border-warm-gold"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-px -right-px h-8 w-8 border-b-2 border-r-2 border-warm-gold"
                  />

                  <p className="font-sans text-xs font-medium uppercase tracking-widest text-warm-gold">
                    Direct Contact
                  </p>
                  <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight">
                    Reach us directly
                  </h2>

                  <ul className="mt-8 divide-y divide-sand/30 dark:divide-sand/15">
                    {contactDetails.map(({ icon: Icon, label, lines }) => (
                      <li
                        key={label}
                        className="group flex items-start gap-5 py-6 first:pt-0 last:pb-0"
                      >
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-sand/40 bg-ivory/70 text-warm-gold transition-all duration-300 group-hover:border-warm-gold group-hover:bg-warm-gold group-hover:text-ivory dark:border-sand/20 dark:bg-charcoal/60">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div className="min-w-0">
                          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-charcoal/70! dark:text-ivory/70!">
                            {label}
                          </p>
                          {lines.map((line) => (
                            <p
                              key={line}
                              className="mt-1.5 break-words font-serif text-lg leading-snug text-charcoal! first:mt-2 dark:text-ivory!"
                            >
                              {line}
                            </p>
                          ))}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* secondary editorial card */}
                <Link
                  to="/properties"
                  className="group mt-6 flex items-center justify-between border border-sand/30 bg-transparent px-8 py-6 transition-all duration-300 hover:border-warm-gold hover:bg-warm-gold/5 dark:border-sand/15"
                >
                  <div>
                    <p className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-warm-gold">
                      Prefer to browse first?
                    </p>
                    <p className="mt-1.5 font-serif text-xl">
                      Explore our collection
                    </p>
                  </div>
                  <FiArrowUpRight className="h-6 w-6 text-warm-gold transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ───────────── CLOSING BANNER ───────────── */}
      <section className="border-t border-sand/30 bg-ivory dark:border-sand/15 dark:bg-dark-surface">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-16 lg:px-12">
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-5">
              <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center border border-warm-gold/50 text-warm-gold">
                <FiShield className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
                  Prompt response. Absolute discretion.
                </h3>
                <p className="mt-3 max-w-xl font-sans text-sm leading-relaxed text-charcoal/65 dark:text-ivory/60 sm:text-base">
                  Every inquiry is handled personally by our team and treated
                  with complete confidentiality. Expect to hear from us within
                  one business day.
                </p>
              </div>
            </div>

            <p className="font-serif text-lg italic text-warm-gold md:text-right">
              — The HAVENLY Team
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}