// NotFound – 404 page shown for any unmatched route.
// Full-bleed property photo with a dark overlay and a centered glass card.
// Uses only the tokens defined in @theme: charcoal, ivory, sand, warm-gold.
import { useState } from "react";
import { Link } from "react-router";
import { FiHome, FiArrowRight } from "react-icons/fi";

// Background property photo (swap for a local asset in production)
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=80";

export default function NotFound() {
  // Local UI state only: fall back to a solid dark background if the image fails
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-charcoal px-6 py-16">
      {/* Background photo */}
      {!imageFailed && (
        <img
          src={HERO_IMAGE}
          alt=""
          aria-hidden="true"
          onError={() => setImageFailed(true)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      {/* Dark gradient overlay for text contrast */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/60 to-charcoal/90"
      />

      {/* Glass card */}
      <section
        aria-labelledby="not-found-title"
        className="relative w-full max-w-2xl rounded-[2rem] border border-sand/30 bg-ivory/10 px-8 py-14 text-center shadow-2xl backdrop-blur-md sm:px-14"
      >
        <p className="text-sm font-medium uppercase tracking-[0.35em] text-sand">
          Havenly
        </p>

        {/* Big 404 */}
        <p
          aria-hidden="true"
          className="mt-4 font-serif text-8xl font-bold leading-none text-sand sm:text-9xl"
        >
          404
        </p>

        <div className="mx-auto my-6 h-px w-24 bg-warm-gold" />

        <h1
          id="not-found-title"
          className="font-serif text-3xl font-semibold text-ivory sm:text-4xl"
        >
          This home is{" "}
          <span className="italic text-sand">off the market</span>
        </h1>

        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-ivory/80">
          The page you&apos;re looking for doesn&apos;t exist or has been
          moved. Let&apos;s take you back to find your next place.
        </p>

        {/* Plain Link styled with theme tokens, so the color is always Havenly gold */}
        <Link
          to="/"
          className="group mt-10 inline-flex items-center gap-3 rounded-full bg-warm-gold px-8 py-4 text-base font-semibold text-ivory shadow-lg shadow-black/30 transition-all duration-300 hover:bg-sand hover:text-charcoal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand"
        >
          <FiHome aria-hidden="true" className="text-xl" />
          Back to Home
          <FiArrowRight
            aria-hidden="true"
            className="text-xl transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </section>
    </main>
  );
}