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
          <p className="eyebrow">STAY SMART. TRAVEL BETTER.</p>

          <h1>
            Find your stay.
            <br />
            <span>Compare before you book.</span>
          </h1>

          <p className="description">
            Discover hotels, homestays and accommodations in one simple place.
            Compare your options before making a booking.
          </p>

          <div className="search-box">
            <div className="search-field">
              <label>Where</label>
              <input
                type="text"
                placeholder="Where are you going?"
              />
            </div>

            <div className="search-field">
              <label>Check in</label>
              <input type="date" />
            </div>

            <div className="search-field">
              <label>Check out</label>
              <input type="date" />
            </div>

            <div className="search-field">
              <label>Guests</label>
              <select defaultValue="2">
                <option value="1">1 guest</option>
                <option value="2">2 guests</option>
                <option value="3">3 guests</option>
                <option value="4">4 guests</option>
                <option value="5">5+ guests</option>
              </select>
            </div>

            <button type="button">Search</button>
          </div>
        </div>
      </section>

      <section className="intro">
        <p className="eyebrow">WHY CARISTAY?</p>

        <h2>
          One place to discover
          <br />
          your next stay.
        </h2>

        <div className="features">
          <div>
            <h3>Compare</h3>
            <p>
              See different accommodation options before deciding where to
              stay.
            </p>
          </div>

          <div>
            <h3>Discover</h3>
            <p>
              Find hotels, homestays and other places that match your trip.
            </p>
          </div>

          <div>
            <h3>Book smarter</h3>
            <p>
              Make your decision with clearer information in one convenient
              place.
            </p>
          </div>
        </div>
      </section>

      <footer>
        <div className="logo">
          Cari<span>Stay</span>
        </div>
        <p>© 2026 CariStay. Find your stay. Compare before you book.</p>
      </footer>
    </main>
  );
}