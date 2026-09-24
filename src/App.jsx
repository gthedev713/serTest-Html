import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    name: "Signature Cut",
    description: "Precision haircut with styling and hot towel finish.",
    price: "$35",
  },
  {
    number: "02",
    name: "Skin Fade",
    description: "Ultra-clean fade with detailed finishing.",
    price: "$40",
  },
  {
    number: "03",
    name: "Beard Sculpt",
    description: "Shape, trim, line-up and conditioning treatment.",
    price: "$25",
  },
  {
    number: "04",
    name: "Full Service",
    description: "Haircut, beard sculpt and premium hot towel finish.",
    price: "$55",
  },
];

function App() {
  const handleBooking = () => {
    alert("Booking system ready to be connected.");
  };

  return (
    <div className="app">
      <nav className="navbar">
        <a href="#" className="logo">
          NOIR<span>.</span>
        </a>

        <div className="navLinks">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#book">Book</a>
        </div>

        <a href="#book" className="navButton">
          BOOK NOW
        </a>
      </nav>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="heroNoise" />
          <div className="heroGlow glowOne" />
          <div className="heroGlow glowTwo" />

          <motion.div
            className="heroRing ringOne"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            className="heroRing ringTwo"
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <div className="heroContent">
            <motion.div
              className="eyebrow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              EST. 2014 — PREMIUM BARBERING
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              CUT
              <br />
              <span>DIFFERENT.</span>
            </motion.h1>

            <motion.p
              className="heroDescription"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              Precision cuts. Classic craft.
              <br />
              Modern attitude.
            </motion.p>

            <motion.div
              className="heroButtons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <a href="#book" className="primaryButton">
                BOOK YOUR CHAIR
                <span>↗</span>
              </a>

              <a href="#services" className="secondaryButton">
                EXPLORE SERVICES
              </a>
            </motion.div>
          </div>

          <motion.div
            className="scrollIndicator"
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            <span />
            SCROLL TO EXPLORE
          </motion.div>

          <div className="heroSide">
            BARBER SHOP
            <br />
            ATHENS
          </div>
        </section>

        {/* MARQUEE */}
        <section className="marquee">
          <div className="marqueeTrack">
            <span>SHARP CUTS</span>
            <b>✦</b>
            <span>CLEAN FADES</span>
            <b>✦</b>
            <span>CLASSIC SHAVES</span>
            <b>✦</b>
            <span>GOOD STYLE</span>
            <b>✦</b>
            <span>SHARP CUTS</span>
            <b>✦</b>
            <span>CLEAN FADES</span>
            <b>✦</b>
            <span>CLASSIC SHAVES</span>
            <b>✦</b>
          </div>
        </section>

        {/* SERVICES */}
        <section className="services" id="services">
          <div className="sectionHeader">
            <div>
              <div className="eyebrow">01 / SERVICES</div>

              <h2>
                THE
                <br />
                <em>CRAFT.</em>
              </h2>
            </div>

            <p>
              No shortcuts. No rushed appointments.
              Every detail is finished with precision.
            </p>
          </div>

          <div className="serviceGrid">
            {services.map((service, index) => (
              <motion.article
                className="serviceCard"
                key={service.name}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
              >
                <div className="serviceTop">
                  <span>{service.number}</span>
                  <span>{service.price}</span>
                </div>

                <div className="serviceIcon">✦</div>

                <h3>{service.name}</h3>

                <p>{service.description}</p>

                <div className="serviceArrow">↗</div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section className="about" id="about">
          <div className="aboutVisual">
            <motion.div
              className="aboutCircle"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div>NOIR</div>
            </motion.div>

            <div className="verticalText">
              PRECISION / STYLE / CRAFT
            </div>
          </div>

          <div className="aboutContent">
            <div className="eyebrow">02 / THE STANDARD</div>

            <h2>
              OLD SCHOOL
              <br />
              <em>CRAFT.</em>
            </h2>

            <p>
              We believe a haircut should be more than a haircut.
              It should be an experience — a ritual built around
              detail, confidence and style.
            </p>

            <div className="stats">
              <div>
                <strong>12+</strong>
                <span>YEARS</span>
              </div>

              <div>
                <strong>8K</strong>
                <span>CLIENTS</span>
              </div>

              <div>
                <strong>5.0</strong>
                <span>RATING</span>
              </div>
            </div>
          </div>
        </section>

        {/* BOOKING */}
        <section className="booking" id="book">
          <div className="bookingGlow" />

          <motion.div
            className="bookingContent"
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <div className="eyebrow">03 / YOUR CHAIR AWAITS</div>

            <h2>
              READY
              <br />
              <em>FOR A CUT?</em>
            </h2>

            <p>
              Pick a time. Sit down. Leave looking sharp.
            </p>

            <button
              type="button"
              className="bookingButton"
              onClick={handleBooking}
            >
              BOOK APPOINTMENT ↗
            </button>
          </motion.div>
        </section>
      </main>

      <footer>
        <div className="footerLogo">
          NOIR<span>.</span>
        </div>

        <p>PRECISION BARBERING / ATHENS</p>

        <small>© 2026 NOIR BARBERSHOP</small>
      </footer>
    </div>
  );
}

export default App;
