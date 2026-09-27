import "./globals.css";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <nav className="navbar">
          <div className="logo">
            Cari<span>Stay</span>
          </div>

          <div className="nav-links">
            <span>How it works</span>
            <span>About CariStay</span>
          </div>
        </nav>

        <div className="hero-content">
          <h1>
            Find your stay.
            <br />
            <span>Compare before you book.</span>
          </h1>

          <p>
            Compare hotel prices across multiple booking platforms in one place.
          </p>

          <div className="search-box">
            <div className="search-field">
              <label>DESTINATION</label>
              <input
                type="text"
                placeholder="Where do you want to stay?"
              />
            </div>

            <div className="search-field">
              <label>CHECK-IN</label>
              <input type="date" />
            </div>

            <div className="search-field">
              <label>CHECK-OUT</label>
              <input type="date" />
            </div>

            <div className="search-field">
              <label>GUESTS</label>
              <select>
                <option>1 Room, 2 Guests</option>
                <option>1 Room, 1 Guest</option>
                <option>1 Room, 3 Guests</option>
                <option>2 Rooms, 4 Guests</option>
              </select>
            </div>

            <button className="search-button">
              Search
            </button>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Why CariStay?</h2>

        <p className="section-subtitle">
          Search once. Compare prices. Choose where to book.
        </p>

        <div className="features">
          <div className="feature">
            <h3>🔎 Compare Prices</h3>
            <p>
              See hotel prices from different booking platforms in one place.
            </p>
          </div>

          <div className="feature">
            <h3>💰 Find Better Deals</h3>
            <p>
              Make it easier to discover competitive hotel prices.
            </p>
          </div>

          <div className="feature">
            <h3>🔗 Book Direct</h3>
            <p>
              Choose your preferred platform and continue your booking there.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}