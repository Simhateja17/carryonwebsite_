/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export function HomePageContent() {
  return (
    <>
      <main>

        {/* HERO */}
        <section className="section-hero">
          <div className="hero-inner">
            <div className="hero-copy">
              <h1 className="hero-title">
                Smart Logistics for<br />
                <span className="hero-title__accent">Malaysia&apos;s</span> Growing<br />
                Economy
              </h1>
              <p className="hero-lead">
                Seamless deliveries across Kuala Lumpur, Penang, and<br />
                beyond. Precision-engineered for efficiency.
              </p>
              <div className="hero-btns">
                <button type="button" className="btn btn-primary">Book Delivery</button>
                <button type="button" className="btn btn-ghost-blue">Track Shipment</button>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-img-wrap">
                <img src="/assets/hero-truck.jpg" alt="CarryOn logistics truck" width={720} height={438} />
              </div>
              <div className="hero-badge hero-badge--bl">
                <div className="hero-badge__icon">
                  <img src="/assets/icon-pin.svg" width={16} height={20} alt="" />
                </div>
                <div className="hero-badge__body">
                  <p className="hero-badge__label">REAL-TIME STATUS</p>
                  <p className="hero-badge__value">Live tracking enabled</p>
                </div>
              </div>
              <div className="hero-badge hero-badge--tr">
                <div className="hero-badge__icon hero-badge__icon--sm">
                  <img src="/assets/icon-delivery.svg" width={16} height={20} alt="" />
                </div>
                <p className="hero-badge__value">Fast delivery across KL</p>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="section-stats" aria-label="Key metrics">
          <div className="layout">
            <div className="stats-strip">
              <div className="stats-item">
                <p className="stats-value">50K+</p>
                <p className="stats-label">DELIVERIES ACROSS MALAYSIA</p>
              </div>
              <div className="stats-item">
                <p className="stats-value">99.9%</p>
                <p className="stats-label">ACCURACY RATE</p>
              </div>
              <div className="stats-item">
                <p className="stats-value">2.4k</p>
                <p className="stats-label">ACTIVE FLEET PARTNERS</p>
              </div>
              <div className="stats-item">
                <p className="stats-value">15+</p>
                <p className="stats-label">MAJOR HUB CITIES</p>
              </div>
            </div>
          </div>
        </section>

        {/* ECOSYSTEM */}
        <section className="section-ecosystem">
          <div className="layout">
            <div className="eco-header">
              <h2 className="eco-title">The CarryOn Ecosystem</h2>
              <p className="eco-subtitle">Connecting Malaysia&apos;s logistics network through a unified digital infrastructure.</p>
            </div>
            <div className="eco-grid">
              <article className="eco-card">
                <div className="eco-card__img">
                  <img src="/assets/eco-riders.jpg" alt="Rider on motorcycle" width={600} height={207} />
                </div>
                <div className="eco-card__body">
                  <h3>Riders</h3>
                  <p>Swift last-mile delivery experts specialized in navigating the urban landscape.</p>
                  <Link href="/riders" className="link-more">
                    Learn more
                    <img src="/assets/icon-arrow.png" width={9} height={9} alt="" />
                  </Link>
                </div>
              </article>
              <article className="eco-card">
                <div className="eco-card__img">
                  <img src="/assets/eco-drivers.jpg" alt="Driver with hardhat" width={600} height={207} />
                </div>
                <div className="eco-card__body">
                  <h3>Drivers</h3>
                  <p>Heavy-duty transport and fleet management for interstate logistics across Malaysia.</p>
                  <Link href="/drivers" className="link-more">
                    Learn more
                    <img src="/assets/icon-arrow.png" width={9} height={9} alt="" />
                  </Link>
                </div>
              </article>
              <article className="eco-card">
                <div className="eco-card__img">
                  <img src="/assets/eco-business.jpg" alt="Business logistics" width={600} height={207} />
                </div>
                <div className="eco-card__body">
                  <h3>Business</h3>
                  <p>Scalable enterprise solutions for supply chain optimization and retail distribution.</p>
                  <Link href="#" className="link-more">
                    Learn more
                    <img src="/assets/icon-arrow.png" width={9} height={9} alt="" />
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="section-process">
          <div className="layout">
            <div className="process-header">
              <div className="process-header__left">
                <span className="process-kicker">THE PROCESS</span>
                <h2 className="process-title">Four Steps to Delivery</h2>
              </div>
              <p className="process-subtitle">Seamlessly integrated from the moment you book until the final handover.</p>
            </div>
            <div className="process-steps">
              <div className="process-step">
                <div className="process-step__num process-step__num--active">1</div>
                <h3 className="process-step__title">Enter Details</h3>
                <p className="process-step__desc">Provide pickup and drop-off locations with a few simple taps.</p>
              </div>
              <div className="process-step">
                <div className="process-step__num">2</div>
                <h3 className="process-step__title">Choose Vehicle</h3>
                <p className="process-step__desc">Select from bike to heavy-duty trucks based on your cargo size.</p>
              </div>
              <div className="process-step">
                <div className="process-step__num">3</div>
                <h3 className="process-step__title">Track Live</h3>
                <p className="process-step__desc">Monitor your driver in real-time with precise GPS telemetry.</p>
              </div>
              <div className="process-step">
                <div className="process-step__num">4</div>
                <h3 className="process-step__title">Delivered</h3>
                <p className="process-step__desc">Secure confirmation and digital receipt upon successful arrival.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES ZIGZAG */}
        <section className="section-features">
          <div className="layout">
            <div className="feature-row">
              <div className="feature-copy">
                <p className="feature-kicker">LIVE VISIBILITY</p>
                <h2>Real-Time Tracking Across Malaysia</h2>
                <p>Our satellite-linked GPS system provides minute-by-minute updates. Whether your cargo is in the heart of KL or traveling through the Titiwangsa Range, you are always in control.</p>
              </div>
              <div className="feature-media">
                <img src="/assets/feature-map.jpg" alt="Malaysia tracking map" width={576} height={576} />
              </div>
            </div>

            <div className="feature-row feature-row--reverse">
              <div className="feature-media">
                <img src="/assets/feature-analytics.jpg" alt="Predictive analytics dashboard" width={576} height={576} />
              </div>
              <div className="feature-copy">
                <p className="feature-kicker">EFFICIENCY FIRST</p>
                <h2>Smart Predictive Analytics</h2>
                <p>We use AI to predict traffic patterns and weather disruptions, rerouting your shipments in real-time to ensure deadlines are met without compromise.</p>
              </div>
            </div>

            <div className="feature-row">
              <div className="feature-copy">
                <p className="feature-kicker">PEACE OF MIND</p>
                <h2>Secure &amp; Trusted Deliveries</h2>
                <p>Every shipment is insured and handled by certified professionals. Our secure-lock technology and chain-of-custody protocols provide end-to-end transparency.</p>
              </div>
              <div className="feature-media">
                <img src="/assets/feature-delivery.jpg" alt="Secure delivery" width={576} height={576} />
              </div>
            </div>
          </div>
        </section>

        {/* SOLUTIONS */}
        <section className="section-solutions">
          <div className="layout">
            <div className="solutions-header">
              <h2>Solutions Tailored for Malaysia</h2>
              <p>We understand the local landscape, from the north to the south.</p>
            </div>
            <div className="solutions-grid">
              <div className="solution-card">
                <div className="solution-card__icon">
                  <img src="/assets/icon-rider.svg" width={36} height={21} alt="" />
                </div>
                <h3>Riders</h3>
                <p>Earn on your own terms. Join our network of agile urban delivery partners.</p>
                <Link href="/riders" className="btn btn-outline-blue">Join as Rider</Link>
              </div>
              <div className="solution-card">
                <div className="solution-card__icon">
                  <img src="/assets/icon-driver.svg" width={33} height={24} alt="" />
                </div>
                <h3>Drivers</h3>
                <p>Manage your truck or fleet with our advanced dispatching technology.</p>
                <Link href="/drivers" className="btn btn-outline-blue">Join as Driver</Link>
              </div>
              <div className="solution-card">
                <div className="solution-card__icon">
                  <img src="/assets/icon-business.svg" width={30} height={27} alt="" />
                </div>
                <h3>Businesses</h3>
                <p>Scale your operations with Malaysia&apos;s most reliable logistics partner.</p>
                <Link href="#" className="btn btn-primary">Open Business Account</Link>
              </div>
            </div>
          </div>
        </section>

        {/* APP */}
        <section className="section-app">
          <div className="layout">
            <div className="app-header">
              <h2>CarryOn App — Deliver Anywhere</h2>
              <p>The entire logistics network in the palm of your hand.</p>
            </div>
            <div className="app-content">
              <ul className="app-features">
                <li className="app-feature">
                  <div className="app-feature__icon">
                    <img src="/assets/icon-track.svg" width={32} height={36} alt="" />
                  </div>
                  <div>
                    <h4>Track deliveries</h4>
                    <p>Pinpoint precision for every shipment.</p>
                  </div>
                </li>
                <li className="app-feature">
                  <div className="app-feature__icon">
                    <img src="/assets/icon-book.svg" width={33} height={37} alt="" />
                  </div>
                  <div>
                    <h4>Book instantly</h4>
                    <p>Go from quote to booking in under 60 seconds.</p>
                  </div>
                </li>
                <li className="app-feature">
                  <div className="app-feature__icon">
                    <img src="/assets/icon-updates.svg" width={36} height={36} alt="" />
                  </div>
                  <div>
                    <h4>Live updates</h4>
                    <p>Push notifications for every milestone.</p>
                  </div>
                </li>
              </ul>
              <div className="app-phone">
                <div className="phone-frame">
                  <div className="phone-notch"></div>
                  <div className="phone-screen">
                    <img src="/assets/app-phone.jpg" alt="CarryOn app" width={288} height={580} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INFRASTRUCTURE */}
        <section className="section-infra">
          <div className="layout">
            <div className="infra-inner">
              <div className="infra-copy">
                <h2>Built for Modern Infrastructure</h2>
                <ul className="infra-list">
                  <li className="infra-item">
                    <div className="infra-item__icon">
                      <img src="/assets/icon-api.svg" width={22} height={22} alt="" />
                    </div>
                    <div>
                      <h4>Seamless API Integration</h4>
                      <p>Connect your e-commerce platform directly to our fleet.</p>
                    </div>
                  </li>
                  <li className="infra-item">
                    <div className="infra-item__icon">
                      <img src="/assets/icon-globe.svg" width={20} height={20} alt="" />
                    </div>
                    <div>
                      <h4>Global Delivery</h4>
                      <p>Extending Malaysian business to international markets.</p>
                    </div>
                  </li>
                  <li className="infra-item">
                    <div className="infra-item__icon">
                      <img src="/assets/icon-compliance.svg" width={16} height={20} alt="" />
                    </div>
                    <div>
                      <h4>Compliance Ready</h4>
                      <p>Meeting all regulatory standards for logistics in Malaysia.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="infra-media">
                <img src="/assets/infra-facility.jpg" alt="Modern logistics facility" width={472} height={472} />
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="section-testimonials">
          <div className="layout">
            <h2 className="testimonials-title">Trusted by Businesses</h2>
            <div className="testimonials-grid">
              <article className="testimonial-card">
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, i) => (
                    <img key={i} src="/assets/icon-star.svg" width={20} height={19} alt="★" />
                  ))}
                </div>
                <blockquote>
                  &ldquo;CarryOn improved our delivery speed in KL significantly. Their tracking is the best in the market.&rdquo;
                </blockquote>
                <div className="testimonial-author">
                  <div className="testimonial-author__avatar">
                    <img src="/assets/avatar-ahmad.jpg" width={48} height={48} alt="Ahmad Rizal" />
                  </div>
                  <div>
                    <strong>Ahmad Rizal</strong>
                    <span>Logistics Manager, TechGlobal</span>
                  </div>
                </div>
              </article>
              <article className="testimonial-card">
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, i) => (
                    <img key={i} src="/assets/icon-star.svg" width={20} height={19} alt="★" />
                  ))}
                </div>
                <blockquote>
                  &ldquo;The most reliable service for our e-commerce business. The integration was seamless and support is 10/10.&rdquo;
                </blockquote>
                <div className="testimonial-author">
                  <div className="testimonial-author__avatar">
                    <img src="/assets/avatar-linh.jpg" width={48} height={48} alt="Linh Tan" />
                  </div>
                  <div>
                    <strong>Linh Tan</strong>
                    <span>Founder, UrbanStyle Malaysia</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="section-cta">
          <div className="layout">
            <div className="cta-panel">
              <div className="cta-overlay" aria-hidden="true"></div>
              <h2>Ready to navigate the future?</h2>
              <p>Join thousands of businesses and drivers who are setting a new standard for global logistics excellence.</p>
              <button type="button" className="btn btn-cta-white">Get Started Now</button>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-inner">
          <span className="footer-brand">CarryOn Malaysia</span>
          <nav className="footer-nav" aria-label="Footer">
            <Link href="#">PRIVACY POLICY</Link>
            <Link href="#">TERMS OF SERVICE</Link>
            <Link href="#">FLEET PARTNERS</Link>
            <Link href="#">CONTACT US</Link>
          </nav>
          <span className="footer-copy">© 2024 CARRYON MALAYSIA. PRECISION LOGISTICS SOLUTIONS.</span>
        </div>
      </footer>
    </>
  );
}
