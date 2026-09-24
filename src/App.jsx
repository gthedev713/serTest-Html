import { useEffect, useState } from "react";
import "./App.css";

const services = [
  ["01", "Signature Cut", "$35", "Precision cut, styling and hot towel finish."],
  ["02", "Skin Fade", "$40", "Ultra-clean fade with razor-sharp detailing."],
  ["03", "Beard Sculpt", "$25", "Shape, trim, line-up and conditioning."],
  ["04", "Full Service", "$55", "Haircut, beard sculpt and hot towel treatment."],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mouse, setMouse] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const move = (event) => {
      setMouse({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setMenuOpen(false);
  };

  return (
    <div
      className="site"
      style={{
        "--mouse-x": `${mouse.x}%`,
        "--mouse-y": `${mouse.y}%`,
      }}
    >
      <div className="cursor-glow" />

      <nav className="nav">
        <button className="logo" onClick={() => scrollTo("home")}>
          NOIR<span>.</span>
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <button onClick={() => scrollTo("services")}>Services</button>
          <button onClick={() => scrollTo("story")}>Story</button>
          <button onClick={() => scrollTo("booking")}>Book</button>
        </div>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Открыть меню"
        >
          <span />
          <span />
        </button>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-grid" />

          <div className="hero-content">
            <p className="eyebrow reveal">Premium barbering / 2026</p>

            <h1 className="hero-title">
              <span className="line reveal delay-1">CUT</span>
              <span className="line reveal delay-2">
                <i>DIFFERENT.</i>
              </span>
            </h1>

            <div className="hero-bottom reveal delay-3">
              <p>
                Classic barbering.
                <br />
                Modern attitude.
              </p>

              <button
                className="circle-button"
                onClick={() => scrollTo("booking")}
              >
                <span>BOOK</span>
                <span>NOW ↗</span>
              </button>
            </div>
          </div>

          <div className="hero-number">01 — 04</div>

          <div className="scroll-indicator">
            <span />
            SCROLL
          </div>
        </section>

        <section className="marquee">
          <div className="marquee-track">
            <span>PRECISION</span>
            <b>✦</b>
            <span>CRAFT</span>
            <b>✦</b>
            <span>STYLE</span>
            <b>✦</b>
            <span>PRECISION</span>
            <b>✦</b>
            <span>CRAFT</span>
            <b>✦</b>
            <span>STYLE</span>
            <b>✦</b>
          </div>
        </section>

        <section className="services section" id="services">
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / Services</p>
              <h2>
                THE
                <br />
                <em>MENU.</em>
              </h2>
            </div>

            <p className="heading-description">
              No shortcuts. No rushed appointments. Just precision,
              personality and a finish worth coming back for.
            </p>
          </div>

          <div className="service-list">
            {services.map(([number, name, price, description]) => (
              <article className="service-card" key={number}>
                <span className="service-number">{number}</span>

                <div className="service-name">
                  <h3>{name}</h3>
                  <p>{description}</p>
                </div>

                <strong>{price}</strong>

                <span className="arrow">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section className="story section" id="story">
          <div className="story-visual">
            <div className="portrait">
              <div className="portrait-circle">
                <span>NOIR</span>
              </div>

              <div className="portrait-label">
                EST.
                <br />
                2014
              </div>
            </div>
          </div>

          <div className="story-copy">
            <p className="eyebrow">02 / The story</p>

            <h2>
              BUILT
              <br />
              ON <em>CRAFT.</em>
            </h2>

            <p className="large-copy">
              NOIR was created around one simple idea: a barber shop should
              feel like more than a haircut.
            </p>

            <p>
              From the first consultation to the final detail, every cut is
              treated as a piece of craftsmanship. Old-school technique,
              contemporary style and an atmosphere designed to slow things
              down.
            </p>

            <div className="stats">
              <div>
                <strong>12+</strong>
                <span>Years</span>
              </div>
              <div>
                <strong>8K</strong>
                <span>Clients</span>
              </div>
              <div>
                <strong>5.0</strong>
                <span>Rating</span>
              </div>
            </div>
          </div>
        </section>

        <section className="booking section" id="booking">
          <div className="booking-inner">
            <div>
              <p className="eyebrow">03 / Reservation</p>

              <h2>
                YOUR
                <br />
                <em>CHAIR.</em>
              </h2>

              <p className="booking-copy">
                Ready for a sharper version of yourself?
                Reserve your chair.
              </p>
            </div>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                alert("Запрос на запись отправлен.");
              }}
            >
              <label>
                NAME
                <input type="text" placeholder="Your name" required />
              </label>

              <label>
                SERVICE
                <select defaultValue="" required>
                  <option value="" disabled>
                    Choose service
                  </option>
                  {services.map((service) => (
                    <option key={service[0]} value={service[1]}>
                      {service[1]} — {service[2]}
                    </option>
                  ))}
                </select>
              </label>

              <div className="form-row">
                <label>
                  DATE
                  <input type="date" required />
                </label>

                <label>
                  TIME
                  <input type="time" required />
                </label>
              </div>

              <button className="submit-button" type="submit">
                REQUEST APPOINTMENT <span>↗</span>
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-logo">NOIR<span>.</span></div>

        <p>
          Premium barbering
          <br />
          Since 2014
        </p>

        <button onClick={() => scrollTo("home")}>BACK TO TOP ↑</button>
      </footer>
    </div>
  );
}

export default App;
