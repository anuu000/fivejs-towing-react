import './App.css'

const PHONE = '(347) 443-8430'
const PHONE_HREF = 'tel:3474438430'

function TopBar() {
  return (
    <div className="top-bar">
      <span className="top-bar-text">Available 24 hours — 7 days a week</span>
      <div className="top-bar-divider" />
      <a href={PHONE_HREF} className="top-bar-number">{PHONE}</a>
    </div>
  )
}

function Nav() {
  return (
    <nav aria-label="Main navigation">
      <a href="#" className="nav-logo" aria-label="Five J's Towing - Home">Five <span>J's</span> Towing</a>
      <a href={PHONE_HREF} className="nav-cta" aria-label="Call Five J's Towing now">{PHONE}</a>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <div className="hero-eyebrow">Bronx &amp; All Five Boroughs</div>
        <h1>Bronx's Most Trusted<br /><em>Tow Service</em></h1>
        <p className="hero-desc">
          Stuck on the road? Five J's Automotive — the Bronx's most trusted towing company —
          has been getting drivers home safely for over 30 years. One call is all it takes.
        </p>
        <div className="hero-actions">
          <a href={PHONE_HREF} className="btn-call">{PHONE}</a>
          <a href="#services" className="btn-ghost-link">View Services</a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <div className="stat-n">30+</div>
            <div className="stat-l">Years in Bronx</div>
          </div>
          <div className="stat">
            <div className="stat-n">24/7</div>
            <div className="stat-l">Emergency Response</div>
          </div>
          <div className="stat">
            <div className="stat-n">5</div>
            <div className="stat-l">Boroughs Served</div>
          </div>
        </div>
      </div>
      <div className="hero-right">
        <img
          src="/hero-tow-truck.png"
          alt="Modern flatbed tow truck driving in the Bronx"
        />
      </div>
    </section>
  )
}

const SERVICES = [
  {
    num: '01',
    name: 'Emergency Towing',
    desc: 'Stuck anywhere in the Bronx or five boroughs? Our flatbed trucks respond fast. We handle cars, SUVs, trucks, and motorcycles with full care.',
  },
  {
    num: '02',
    name: 'Flatbed Towing',
    desc: 'Low-clearance vehicles, luxury cars, or accident scenes — our flatbed equipment ensures your vehicle arrives without any additional damage.',
  },
  {
    num: '03',
    name: 'Roadside Assistance',
    desc: 'Dead battery, flat tire, or out of gas — our crew handles common roadside situations on the spot without needing a full tow.',
  },
  {
    num: '04',
    name: 'Accident Recovery',
    desc: 'After a collision, we safely transport your vehicle to our facility or any repair shop of your choice and assist with documentation.',
  },
  {
    num: '05',
    name: 'Lockout Service',
    desc: "Keys locked inside? We respond quickly and get you back in your vehicle so you're not stranded on the street any longer than necessary.",
  },
  {
    num: '06',
    name: 'Insurance Towing',
    desc: 'We work directly with most major carriers and can help guide you through the claims process from the roadside all the way to the shop.',
  },
]

function ServicesSection() {
  return (
    <section className="services-section" id="services" aria-label="Towing and roadside services">
      <div className="services-top">
        <div>
          <div className="label">What We Do</div>
          <h2 className="heading">Towing &amp; <em>Roadside</em><br />Services</h2>
        </div>
        <a href={PHONE_HREF} className="nav-cta" style={{ flexShrink: 0 }}>{PHONE}</a>
      </div>
      <div className="services-grid">
        {SERVICES.map(s => (
          <div className="service-card" key={s.num}>
            <div className="service-num">{s.num}</div>
            <div className="service-name">{s.name}</div>
            <p className="service-desc">{s.desc}</p>
            <div className="service-tag">24 / 7</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function CallStrip({ label, text }) {
  return (
    <div className="call-strip">
      <div>
        <div className="call-strip-label">{label}</div>
        <div className="call-strip-text">{text}</div>
      </div>
      <a href={PHONE_HREF} className="call-strip-number">{PHONE}</a>
    </div>
  )
}

const ABOUT_FEATURES = [
  { title: 'Fast Arrival', sub: 'Average 30-minute response in the Bronx' },
  { title: 'No Hidden Fees', sub: 'Transparent pricing, always upfront' },
  { title: 'Licensed & Insured', sub: 'Fully certified operators on every call' },
  { title: 'All 5 Boroughs', sub: 'Manhattan, Brooklyn, Queens, Staten Island' },
]

function AboutSection() {
  return (
    <section className="about-section" id="about" aria-label="About Five J's Towing">
      <div className="about-image-wrap">
        <img
          src="/fj123.png"
          alt="Five J's Tow Truck with American Flag decals"
        />
        <div className="about-image-caption">
          <span>Est. 1990s</span>
          809 Zerega Ave, Bronx NY
        </div>
      </div>
      <div>
        <div className="label">About Us</div>
        <h2 className="heading">Family-Owned,<br /><em>Bronx Built</em></h2>
        <p className="body-text">
          At Five J's Automotive, we have been a pillar of the Bronx community for over three
          decades. What started as a small family operation has grown into the borough's
          most trusted towing and automotive service — without ever losing the personal touch
          that defines us.
        </p>
        <p className="body-text" style={{ marginTop: '18px' }}>
          Our drivers know these streets. We prioritize honest communication, fair pricing, and
          treating every vehicle like it is our own. And since we are also a full collision repair
          shop, we are with you from the roadside to the finished repair.
        </p>
        <div className="about-features">
          {ABOUT_FEATURES.map(f => (
            <div className="about-feat" key={f.title}>
              <div className="feat-title">{f.title}</div>
              <div className="feat-sub">{f.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const TESTIMONIALS = [
  {
    name: 'Maria C.',
    source: 'Bronx, NY',
    featured: true,
    text: "I was rear-ended on the Cross Bronx at 11pm and completely panicked. Five J's picked up immediately, arrived in under 25 minutes, and handled everything with total professionalism. They genuinely care about their customers.",
  },
  {
    name: 'Darius R.',
    source: 'Soundview, Bronx',
    featured: false,
    text: 'These guys are the real deal. Called at 6am with a dead battery on my way to work — they were there in 20 minutes, got me going, and I made it in on time. Honest price with no upselling whatsoever.',
  },
  {
    name: 'Tamika L.',
    source: 'Hunts Point, Bronx',
    featured: false,
    text: "My car broke down on the Bruckner and a friend recommended Five J's. The driver was careful with my vehicle and got it to the shop without any issues. Very professional from start to finish.",
  },
  {
    name: 'Jorge P.',
    source: 'Morris Park, Bronx',
    featured: false,
    text: 'Family business that truly acts like family. They remembered my name the second time I called. The flatbed was handled perfectly for my BMW — careful, no damage, exactly what I needed.',
  },
  {
    name: 'Angela V.',
    source: 'Tremont, Bronx',
    featured: false,
    text: 'Fast, affordable, and no nonsense. I have used them twice — both times they showed up exactly when they said they would. They also helped me deal with my insurance company directly.',
  },
  {
    name: 'Kevin S.',
    source: 'Pelham Bay, Bronx',
    featured: false,
    text: "Five J's has been my go-to for years. They towed my car at 2am after an accident and the driver was calm and professional throughout. Their shop fixed the car too and it came back perfect.",
  },
]

function TestimonialsSection() {
  return (
    <section className="testimonials-section" id="reviews" aria-label="Customer reviews">
      <div className="testimonials-top">
        <div>
          <div className="label">Customer Reviews</div>
          <h2 className="heading">What Bronx Drivers<br /><em>Are Saying</em></h2>
        </div>
        <a href={PHONE_HREF} className="nav-cta" style={{ flexShrink: 0 }}>{PHONE}</a>
      </div>
      <div className="testimonials-grid">
        {TESTIMONIALS.map(t => (
          <div className={`t-card${t.featured ? ' featured' : ''}`} key={t.name}>
            <div>
              <div className="t-stars">★ ★ ★ ★ ★</div>
              <p className="t-text">"{t.text}"</p>
            </div>
            <div className="t-author-line">
              <div>
                <div className="t-name">{t.name}</div>
                <div className="t-source">{t.source}</div>
              </div>
              <div className="t-google">Google</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function LocationSection() {
  return (
    <section className="location-section" id="location">
      <div>
        <div className="label">Find Us</div>
        <h2 className="heading">Located in the<br /><em>Heart of the Bronx</em></h2>
        <p className="body-text">
          We are at 809 Zerega Ave — easy to find, and if you cannot come to us, we will come
          to you anywhere in New York City.
        </p>
        <div className="location-details">
          <div className="detail-row">
            <div className="detail-index">01</div>
            <div>
              <div className="detail-label">Address</div>
              <address className="detail-value" style={{ fontStyle: 'normal' }}>
                <a href="https://maps.google.com/?q=809+Zerega+Ave+Bronx+NY+10473" target="_blank" rel="noopener noreferrer">
                  809 Zerega Ave, Bronx, NY 10473
                </a>
              </address>
            </div>
          </div>
          <div className="detail-row">
            <div className="detail-index">02</div>
            <div>
              <div className="detail-label">Call for a Tow</div>
              <div className="detail-value">
                <a href={PHONE_HREF}>{PHONE}</a>
              </div>
            </div>
          </div>
          <div className="detail-row">
            <div className="detail-index">03</div>
            <div>
              <div className="detail-label">Shop Hours</div>
              <div className="detail-value">
                Monday – Friday&nbsp;&nbsp;8:00 am – 5:00 pm<br />
                <strong>Tow service available 24 hours, 7 days</strong>
              </div>
            </div>
          </div>
          <div className="detail-row">
            <div className="detail-index">04</div>
            <div>
              <div className="detail-label">Service Area</div>
              <div className="detail-value">Bronx, Manhattan, Brooklyn, Queens, Staten Island</div>
            </div>
          </div>
        </div>
        <a
          href="https://maps.google.com/?q=809+Zerega+Ave+Bronx+NY+10473"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta"
          style={{ display: 'inline-block', marginTop: '36px' }}
        >
          Get Directions
        </a>
      </div>
      <div className="location-map-wrap">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.573!2d-73.841!3d40.832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f3c3d1a7e2bb%3A0xabcdef1234567890!2s809+Zerega+Ave%2C+Bronx%2C+NY+10473!5e0!3m2!1sen!2sus!4v1"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Five J's Automotive Location"
        />
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="label">24 hours — 7 days a week</div>
      <h2>Need a Tow<br /><em>Right Now?</em></h2>
      <p>One call and we are on our way. Serving the Bronx and all five boroughs.</p>
      <a href={PHONE_HREF} className="phone-link">{PHONE}</a>
      <br />
      <a
        href="https://fivejsbronx.com"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-white"
      >
        Visit Our Full Website
      </a>
    </section>
  )
}

function Footer() {
  return (
    <footer>
      <div className="footer-logo"><b>Five J's</b> Towing</div>
      <div className="footer-meta">
        <address style={{ fontStyle: 'normal', display: 'inline' }}>809 Zerega Ave, Bronx NY 10473</address>
        {' '}— &copy; {new Date().getFullYear()} Five J's Automotive. Bronx's Most Trusted Tow Service.
      </div>
      <div className="footer-links">
        <a href="https://fivejsbronx.com" target="_blank" rel="noopener noreferrer">Main Website</a>
        <a href="https://fivejsbronx.com/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <header>
        <TopBar />
        <Nav />
      </header>
      <main>
        <Hero />
        <ServicesSection />
        <CallStrip label="Call us anytime, day or night" text="Need a tow right now?" />
        <AboutSection />
        <TestimonialsSection />
        <CallStrip label="Licensed tow operators, all five boroughs" text="Stranded? We will come to you." />
        <LocationSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
