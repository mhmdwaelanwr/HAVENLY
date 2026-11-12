import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import heroHouse from "../../assets/hero-house.svg";
import villaImage from "../../assets/property-villa.svg";
import apartmentImage from "../../assets/property-apartment.svg";
import skylineImage from "../../assets/property-skyline.svg";
import "./Home.css";

// Temporary sample listings for the home page until the Properties API is ready.
const featuredProperties = [
  {
    id: 1,
    name: "Modern Family Villa",
    location: "Fifth Settlement · New Cairo",
    price: "8,900,000",
    details: "4 beds · 3 baths · 320 m²",
    image: villaImage,
  },
  {
    id: 2,
    name: "Garden View Apartment",
    location: "Sheikh Zayed · Giza",
    price: "5,200,000",
    details: "3 beds · 2 baths · 180 m²",
    image: apartmentImage,
  },
  {
    id: 3,
    name: "Skyline Residence",
    location: "New Capital · Cairo",
    price: "7,400,000",
    details: "3 beds · 3 baths · 240 m²",
    image: skylineImage,
  },
];

function Home() {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [purpose, setPurpose] = useState("buy");
  const [propertyType, setPropertyType] = useState("all");
  const [price, setPrice] = useState("any");

  function handleSearch(event) {
    event.preventDefault();

    const params = new URLSearchParams();
    if (location.trim()) params.set("location", location.trim());
    params.set("purpose", purpose);
    if (propertyType !== "all") params.set("type", propertyType);
    if (price !== "any") params.set("price", price);

    navigate("/properties?" + params.toString());
  }

  return (
    <main className="home-page">
      <section className="home-hero" aria-labelledby="home-heading">
        <div className="home-hero-art">
          <img src={heroHouse} alt="Illustration of a modern house" />
        </div>
        <div className="home-hero-overlay" />
        <div className="home-container home-hero-content">
          <p className="hero-eyebrow">THE ART OF FINDING HOME</p>
          <h1 id="home-heading">Find a place<br />that feels like yours.</h1>
          <p className="hero-description">
            Explore thoughtfully selected homes across Egypt.<br />
            Discover spaces that make every day feel exceptional.
          </p>
          <p className="hero-bottom-caption">
            <span aria-hidden="true" /> A NEW WAY TO DISCOVER YOUR PLACE
          </p>
        </div>
      </section>

      <section className="home-search-section" aria-label="Search for properties">
        <div className="home-container">
          <form className="home-search-form" onSubmit={handleSearch}>
            <label className="search-field">
              <span>LOCATION</span>
              <input
                type="text"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                placeholder="Where would you like to live?"
              />
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
              <select value={propertyType} onChange={(event) => setPropertyType(event.target.value)}>
                <option value="all">All properties</option>
                <option value="villa">Villa</option>
                <option value="apartment">Apartment</option>
              </select>
            </label>
            <label className="search-field">
              <span>PRICE RANGE</span>
              <select value={price} onChange={(event) => setPrice(event.target.value)}>
                <option value="any">Any price</option>
                <option value="under-5m">Under EGP 5M</option>
                <option value="5m-10m">EGP 5M–10M</option>
                <option value="over-10m">Over EGP 10M</option>
              </select>
            </label>
            <button className="home-search-button" type="submit">
              Search properties <span aria-hidden="true">↗</span>
            </button>
          </form>
        </div>
      </section>

      <section className="home-container featured-section" aria-labelledby="featured-heading">
        <div className="featured-heading-row">
          <div>
            <p className="section-eyebrow">CURATED HOMES</p>
            <h2 id="featured-heading">Featured properties</h2>
            <p className="section-description">
              Browse homes designed around comfort, location, and a life well lived.
            </p>
          </div>
          <Link className="section-link" to="/properties">
            Explore all properties <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="featured-grid">
          {featuredProperties.map((property) => (
            <Link to={"/properties/" + property.id} className="featured-card" key={property.id}>
              <div className="featured-card-image">
                <img src={property.image} alt={property.name} loading="lazy" />
                <span className="sale-tag">FOR SALE</span>
                <span className="favorite-symbol" aria-hidden="true">♡</span>
              </div>
              <div className="featured-card-body">
                <p className="property-location">{property.location}</p>
                <h3>{property.name}</h3>
                <p className="property-price">EGP {property.price}</p>
                <p className="property-details">{property.details}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-benefits" aria-label="Why choose HAVENLY">
        <div className="home-container benefits-grid">
          <div>
            <span>01</span>
            <h3>Search with ease</h3>
            <p>Filter by neighborhood, price, and lifestyle.</p>
          </div>
          <div>
            <span>02</span>
            <h3>Save &amp; compare</h3>
            <p>Shortlist your favorites at your own pace.</p>
          </div>
          <div>
            <span>03</span>
            <h3>Connect directly</h3>
            <p>Contact listing owners and agents easily.</p>
          </div>
        </div>
      </section>

      <section className="home-container lifestyle-section" aria-labelledby="lifestyle-heading">
        <p className="section-eyebrow">FIND WHAT FEELS LIKE HOME</p>
        <h2 id="lifestyle-heading">A home for every chapter.</h2>
        <div className="lifestyle-grid">
          <Link className="lifestyle-card" to="/properties?type=villa">
            <span>VILLAS</span>
            <h3>Distinctive villas</h3>
            <p>Discover thoughtful spaces <span aria-hidden="true">↗</span></p>
          </Link>
          <Link className="lifestyle-card lifestyle-card-secondary" to="/properties?type=apartment">
            <span>APARTMENTS</span>
            <h3>City living, refined</h3>
            <p>Explore elegant apartments <span aria-hidden="true">↗</span></p>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
