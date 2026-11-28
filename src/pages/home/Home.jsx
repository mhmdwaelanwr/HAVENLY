import { useState } from "react";
import { FiArrowUpRight, FiHeart, FiMapPin, FiSearch } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import heroHouse from "../../assets/hero-house.svg";
import villaArtwork from "../../assets/property-villa.svg";
import apartmentArtwork from "../../assets/property-apartment.svg";
import { properties } from "../../data/properties";
import "./Home.css";

const heroPhoto = "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&auto=format&fit=crop&q=85";

function PropertyImage({ src, fallback, alt = "", eager = false }) {
  const [failed, setFailed] = useState(false);

  return (
    <img
      src={failed || !src ? fallback : src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : "auto"}
      onError={() => setFailed(true)}
    />
  );
}

function HomeSearch() {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [purpose, setPurpose] = useState("buy");
  const [type, setType] = useState("all");
  const [price, setPrice] = useState("any");
  const types = [...new Set(properties.map((property) => property.type))];
  const locations = [...new Set(properties.map((property) => property.location))];

  function handleSearch(event) {
    event.preventDefault();
    const params = new URLSearchParams();
    if (location.trim()) params.set("location", location.trim());
    params.set("purpose", purpose);
    if (type !== "all") params.set("type", type);
    if (purpose === "buy" && price !== "any") params.set("price", price);
    navigate("/properties?" + params.toString());
  }

  return (
    <section className="home-search-section" aria-label="Find a property">
      <div className="home-container">
        <form className="home-search-form" onSubmit={handleSearch}>
          <label className="search-field">
            <span>LOCATION</span>
            <div className="search-input-row">
              <FiMapPin aria-hidden="true" />
              <input
                type="text"
                list="home-locations"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                placeholder="City or neighborhood"
              />
              <datalist id="home-locations">
                {locations.map((name) => <option key={name} value={name} />)}
              </datalist>
            </div>
          </label>
          <label className="search-field">
            <span>I'M LOOKING TO</span>
            <select value={purpose} onChange={(event) => setPurpose(event.target.value)}>
              <option value="buy">Buy a property</option>
              <option value="rent">Rent a property</option>
            </select>
          </label>
          <label className="search-field">
            <span>PROPERTY TYPE</span>
            <select value={type} onChange={(event) => setType(event.target.value)}>
              <option value="all">All properties</option>
              {types.map((name) => <option key={name} value={name.toLowerCase()}>{name}</option>)}
            </select>
          </label>
          <label className="search-field">
            <span>PRICE RANGE</span>
            <select
              value={purpose === "rent" ? "any" : price}
              disabled={purpose === "rent"}
              onChange={(event) => setPrice(event.target.value)}
            >
              <option value="any">Any price</option>
              <option value="under-5m">Under EGP 5M</option>
              <option value="5m-10m">EGP 5M–10M</option>
              <option value="over-10m">Over EGP 10M</option>
            </select>
          </label>
          <button className="home-search-button" type="submit">
            <FiSearch aria-hidden="true" /> Search properties
          </button>
        </form>
        <div className="home-popular">
          <span>Explore locations:</span>
          {locations.slice(0, 4).map((name) => (
            <Link key={name} to={"/properties?" + new URLSearchParams({ location: name })}>
              {name.split(",")[0]}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedCard({ property, actions }) {
  const saved = actions.favoriteIds.includes(property.id);
  const fallback = property.type.toLowerCase() === "apartment" ? apartmentArtwork : villaArtwork;

  return (
    <article className="featured-card">
      <Link to={`/properties/${property.id}`} className="featured-card-link">
        <div className="featured-card-image">
          <PropertyImage key={property.image} src={property.image} fallback={fallback} alt={property.title} />
          <span className="sale-tag">{property.purpose === "rent" ? "FOR RENT" : "FOR SALE"}</span>
        </div>
        <div className="featured-card-body">
          <p className="home-property-location"><FiMapPin aria-hidden="true" /> {property.location}</p>
          <h3>{property.title}</h3>
          <p className="home-property-price">EGP {Number(property.price).toLocaleString("en-US")}</p>
          <p className="home-property-details">
            {property.bedrooms} beds · {property.bathrooms} baths · {property.area} m²
          </p>
          <span className="card-details-link">View property <FiArrowUpRight aria-hidden="true" /></span>
        </div>
      </Link>
      <button
        type="button"
        className="favorite-symbol"
        aria-label={(saved ? "Remove " : "Save ") + property.title}
        aria-pressed={saved}
        onClick={() => actions.onToggleFavorite(property.id)}
      >
        <FiHeart size={20} fill={saved ? "currentColor" : "none"} aria-hidden="true" />
      </button>
    </article>
  );
}

function LifestyleCard({ type, title, description, fallback }) {
  const listing = properties.find((property) => property.type.toLowerCase() === type);

  return (
    <Link className="lifestyle-card" to={"/properties?type=" + type}>
      <div className="lifestyle-photo">
        <PropertyImage src={listing?.image} fallback={fallback} />
      </div>
      <div className="lifestyle-copy">
        <span>{type === "villa" ? "VILLAS" : "APARTMENTS"}</span>
        <h3>{title}</h3>
        <p>{description} <FiArrowUpRight aria-hidden="true" /></p>
      </div>
    </Link>
  );
}

function Home({ actions }) {
  const featured = properties.filter((property) => property.featured);
  const listings = featured.length ? featured.slice(0, 3) : properties.slice(0, 3);

  return (
    <main className="home-page">
      <section className="home-hero" aria-labelledby="home-heading">
        <div className="home-hero-art">
          <PropertyImage src={heroPhoto} fallback={heroHouse} eager />
        </div>
        <div className="home-hero-overlay" />
        <div className="home-container home-hero-content">
          <p className="hero-eyebrow">THE ART OF FINDING HOME</p>
          <h1 id="home-heading">Find a place<br />that feels like yours.</h1>
          <p className="hero-description">
            Explore homes across Egypt, discover your favorite neighborhoods,
            and find the right space for your next chapter.
          </p>
          <p className="hero-bottom-caption"><span aria-hidden="true" /> FIND YOUR PLACE</p>
        </div>
      </section>

      <HomeSearch />

      <section className="home-container featured-section" aria-labelledby="featured-heading">
        <div className="featured-heading-row">
          <div>
            <p className="section-eyebrow">CURATED HOMES</p>
            <h2 id="featured-heading">{featured.length ? "Featured properties" : "Explore properties"}</h2>
            <p className="section-description">Find spaces designed around comfort, location and your lifestyle.</p>
          </div>
          <Link className="section-link" to="/properties">
            Explore all properties <FiArrowUpRight aria-hidden="true" />
          </Link>
        </div>
        <div className="featured-grid">
          {listings.map((property) => <FeaturedCard key={property.id} property={property} actions={actions} />)}
          {listings.length === 0 && <p className="section-description">No properties available yet.</p>}
        </div>
      </section>

      <section className="home-benefits" aria-label="How HAVENLY works">
        <div className="home-container benefits-grid">
          <div>
            <span>01 / DISCOVER</span>
            <h3>Search with ease</h3>
            <p>Filter homes by neighborhood, budget and property type.</p>
            <Link to="/properties">Browse properties <FiArrowUpRight aria-hidden="true" /></Link>
          </div>
          <div>
            <span>02 / SHORTLIST</span>
            <h3>Save &amp; compare</h3>
            <p>Keep the homes you like and compare their details side by side.</p>
            <Link to="/favorites">Your favorites <FiArrowUpRight aria-hidden="true" /></Link>
          </div>
          <div>
            <span>03 / CONNECT</span>
            <h3>Take the next step</h3>
            <p>Find owner and agent details on each property page.</p>
            <Link to="/properties">Find a home <FiArrowUpRight aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="home-container lifestyle-section" aria-labelledby="lifestyle-heading">
        <p className="section-eyebrow">FIND WHAT FEELS LIKE HOME</p>
        <h2 id="lifestyle-heading">A home for every chapter.</h2>
        <div className="lifestyle-grid">
          <LifestyleCard type="villa" title="Distinctive villas" description="Discover thoughtful spaces" fallback={villaArtwork} />
          <LifestyleCard type="apartment" title="City living, refined" description="Explore elegant apartments" fallback={apartmentArtwork} />
        </div>
      </section>
    </main>
  );
}

export default Home;
