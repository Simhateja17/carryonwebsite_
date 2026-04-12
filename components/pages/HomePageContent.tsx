/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export function HomePageContent() {
  return (
    <>
      <main>
            {/*Hero: Figma node 311-1945 — 12-col grid, 1536 / padding / 438px row*/}
            <section className="hero" id="about">
              <div className="hero-shell">
                <div className="hero-grid-figma">
                  <div className="hero-copy">
                    <h1 className="hero-title">
                      Precision logistics<br />
                      for the modern<br />
                      world.
                    </h1>
                    <p className="hero-lead">
                      Experience a high-end logistics ecosystem designed for speed, transparency, and
                      absolute reliability.
                    </p>
                    <div className="btn-group">
                      <button type="button" className="btn btn-primary">Start Shipping</button>
                      <button type="button" className="btn btn-sky">Drive with Us</button>
                      <button type="button" className="btn btn-outline-demo">View Demo</button>
                    </div>
                  </div>
                  <div className="hero-visual" aria-hidden="true">
                    <img
                      src="https://images.unsplash.com/photo-1519003722824-cd8dcea7d763?w=1400&q=85"
                      alt=""
                      width="900"
                      height="600"
                    />
                    <div className="telemetry-card">
                      <div className="telemetry-card__icon" aria-hidden="true">
                        <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="16" cy="16" r="14" stroke="#1a1a1a" strokeWidth="1.5" />
                          <path
                            d="M16 6v4M16 22v4M6 16h4M22 16h4"
                            stroke="#1a1a1a"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M16 16l7-5"
                            stroke="#1a1a1a"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                          />
                          <circle cx="16" cy="16" r="2" fill="#1a1a1a" />
                        </svg>
                      </div>
                      <div className="telemetry-card__body">
                        <p className="telemetry-card__label">Real-time telemetry</p>
                        <p className="telemetry-card__text">
                          Route optimization active for Fleet #742. Fuel efficiency up 14%.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
      
            {/*Stats: white metric cards (Figma-style layout)*/}
            <section className="stats" aria-label="Key metrics">
              <div className="layout stats-cards">
                <article className="stat-card">
                  <div className="stat-card__icon" aria-hidden="true">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.75" />
                      <path
                        d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <p className="stat-card__value">50+</p>
                  <p className="stat-card__label">Countries reached</p>
                </article>
                <article className="stat-card">
                  <div className="stat-card__icon" aria-hidden="true">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="14" r="7" stroke="currentColor" strokeWidth="1.75" />
                      <path d="M12 10v4l2.5 1.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                      <path d="M9 3h6M12 3v2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                    </svg>
                  </div>
                  <p className="stat-card__value">99.8%</p>
                  <p className="stat-card__label">On-time delivery</p>
                </article>
                <article className="stat-card">
                  <div className="stat-card__icon" aria-hidden="true">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="8" cy="8" r="2.6" stroke="currentColor" strokeWidth="1.75" />
                      <path
                        d="M2.5 20.5v-.5a4.5 4.5 0 0 1 4.5-4.5h2a4.5 4.5 0 0 1 4.5 4.5v.5"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                      />
                      <circle cx="16.5" cy="8" r="2.6" stroke="currentColor" strokeWidth="1.75" />
                      <path
                        d="M11 20.5v-.5a4.5 4.5 0 0 1 4.5-4.5h2a4.5 4.5 0 0 1 4.5 4.5v.5"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <p className="stat-card__value">12k+</p>
                  <p className="stat-card__label">Active drivers</p>
                </article>
                <article className="stat-card">
                  <div className="stat-card__icon" aria-hidden="true">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M4 18V11M9.5 18V8M15 18v-6M20.5 18v-9"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                      />
                      <path
                        d="M4 14l5.5-4L15 10l5.5-5"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="stat-card__value">$2.4B</p>
                  <p className="stat-card__label">Volume managed</p>
                </article>
              </div>
            </section>
      
            {/*Ecosystem: Figma 311-1995 / 311-1996 / 311-2001*/}
            <section className="section-ecosystem" id="solutions">
              <div className="ecosystem-frame">
                {/*311-1996: header group centered*/}
                <div className="ecosystem-header">
                  <h2 className="ecosystem-title">The CarryOn Ecosystem</h2>
                  {/*311-1999: 672px wrapper / 311-2000: text style*/}
                  <div className="ecosystem-subtitle-wrap">
                    <p className="ecosystem-subtitle">One unified platform for every player in the supply chain cycle.</p>
                  </div>
                </div>
                {/*311-2001: inline-grid, 3 cols, 362.5px row, 40px gap*/}
                <div className="eco-grid">
                  <article className="eco-card">
                    <div className="eco-card-img">
                      <img
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&q=85"
                        alt=""
                        width="600"
                        height="363"
                      />
                    </div>
                    <div className="eco-card-body">
                      <h3>For Riders</h3>
                      <p>Track every mile and enjoy white-glove delivery service right to your doorstep with zero friction.</p>
                      <a className="link-arrow" href="#">Learn more <span aria-hidden="true">→</span></a>
                    </div>
                  </article>
                  <article className="eco-card">
                    <div className="eco-card-img">
                      <img
                        src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=900&q=85"
                        alt=""
                        width="600"
                        height="363"
                      />
                    </div>
                    <div className="eco-card-body">
                      <h3>For Drivers</h3>
                      <p>Take control of your schedule and earnings with our precision routing and instant payment system.</p>
                      <a className="link-arrow" href="#">Learn more <span aria-hidden="true">→</span></a>
                    </div>
                  </article>
                  <article className="eco-card">
                    <div className="eco-card-img">
                      <img
                        src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=85"
                        alt=""
                        width="600"
                        height="363"
                      />
                    </div>
                    <div className="eco-card-body">
                      <h3>For Business</h3>
                      <p>Scalable enterprise solutions that integrate seamlessly with your existing ERP for total visibility.</p>
                      <a className="link-arrow" href="#">Learn more <span aria-hidden="true">→</span></a>
                    </div>
                  </article>
                </div>
              </div>
            </section>
      
            {/*Simplicity at scale*/}
            <section className="section-scale">
              <div className="layout">
                <div className="section-head">
                  <h2>Simplicity at scale</h2>
                  <p>Four steps from request to proof of delivery—transparent, secure, and fast.</p>
                </div>
                <div className="steps">
                  <div className="step">
                    <div className="step-num">1</div>
                    <h3>Request a quote</h3>
                    <p>Instant lane pricing with live capacity from vetted partners.</p>
                  </div>
                  <div className="step">
                    <div className="step-num">2</div>
                    <h3>Real-time matching</h3>
                    <p>AI-assisted dispatch pairs the right asset to your freight profile.</p>
                  </div>
                  <div className="step">
                    <div className="step-num">3</div>
                    <h3>Secure payment</h3>
                    <p>Escrow, milestones, and compliance checks built into every transaction.</p>
                  </div>
                  <div className="step">
                    <div className="step-num">4</div>
                    <h3>Track &amp; relax</h3>
                    <p>Live ETAs, geofenced milestones, and POD in your inbox.</p>
                  </div>
                </div>
              </div>
            </section>
      
            {/*Feature deep-dives*/}
            <section className="section-features">
              <div className="layout">
                <div className="feature-row">
                  <div className="feature-copy">
                    <h2>Omniscient tracking</h2>
                    <p>
                      See every hand-off on a single map—ocean, air, road, and last mile—with unified
                      event timelines.
                    </p>
                    <ul className="feature-list">
                      <li>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                        <span>Sub-minute telemetry refresh on supported lanes</span>
                      </li>
                      <li>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                        <span>Exception playbooks triggered before customers notice</span>
                      </li>
                      <li>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                        <span>Shareable tracking links with branded status pages</span>
                      </li>
                    </ul>
                  </div>
                  <div className="feature-media map-placeholder" role="img" aria-label="Route visualization"></div>
                </div>
      
                <div className="feature-row reverse">
                  <div className="feature-copy">
                    <h2>Predictive analytics</h2>
                    <p>
                      Forecast congestion, dwell time, and cost exposure using models trained on global
                      lane performance.
                    </p>
                    <ul className="feature-list">
                      <li>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                        <span>Scenario planning for peak seasons and disruptions</span>
                      </li>
                      <li>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                        <span>Benchmarking across carriers, regions, and SKUs</span>
                      </li>
                      <li>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                        <span>Executive snapshots delivered on your schedule</span>
                      </li>
                    </ul>
                  </div>
                  <div className="feature-media light">
                    <img
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80"
                      alt=""
                      width="600"
                      height="400"
                    />
                  </div>
                </div>
      
                <div className="feature-row">
                  <div className="feature-copy">
                    <h2>Uncompromising security</h2>
                    <p>
                      Zero-trust access, field-level encryption, and regional data residency for regulated
                      freight.
                    </p>
                    <ul className="feature-list">
                      <li>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                        <span>SOC 2 Type II and ISO-aligned controls</span>
                      </li>
                      <li>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                        <span>Role-based policies down to the shipment level</span>
                      </li>
                      <li>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                        <span>Immutable audit trails for customs and finance</span>
                      </li>
                    </ul>
                  </div>
                  <div className="feature-media shield-art" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="1.5">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </section>
      
            {/*Targeted solutions: Figma tokens border 1px #A6D2F3, bg rgba(166,210,243,.2), radius 16px*/}
            <section className="section-targeted" id="fleet">
              <div className="layout">
                <div className="section-head">
                  <span className="section-kicker">Targeted solutions</span>
                  <h2>Customized experiences for every user</h2>
                  <p>Pick the surface that matches your role—same network, tuned workflows.</p>
                </div>
                <div className="targeted-grid">
                  <article className="target-card">
                    <h3>For riders</h3>
                    <p>
                      Consumer-grade tracking, delivery preferences, and proactive notifications when
                      your package is on the move.
                    </p>
                  </article>
                  <article className="target-card">
                    <h3>For drivers</h3>
                    <p>
                      Optimized manifests, one-tap document capture, and transparent earnings with faster
                      settlement cycles.
                    </p>
                  </article>
                  <article className="target-card">
                    <h3>For businesses</h3>
                    <p>
                      Multi-facility controls, contract rate cards, and API-first automation for high
                      volume shippers.
                    </p>
                  </article>
                </div>
              </div>
            </section>
      
            {/*App: glow per Figma specs*/}
            <section className="section-app">
              <div className="app-glow" aria-hidden="true"></div>
              <div className="layout">
                <div className="section-head">
                  <h2>The app: Power in your pocket</h2>
                  <p>
                    Manage complex international supply chains or local deliveries with the same level of
                    precision and beauty.
                  </p>
                </div>
                <div className="app-showcase">
                  <div className="phone-frame">
                    <div className="phone-notch"><span></span></div>
                    <div className="phone-screen">
                      <img
                        src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80"
                        alt=""
                        width="400"
                        height="800"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
      
            {/*Logistics without friction*/}
            <section className="section-friction">
              <div className="layout friction-grid">
                <div className="friction-copy">
                  <h2>Logistics without the friction</h2>
                  <ul className="friction-list">
                    <li>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                      <div>
                        <strong>Driver verification</strong>
                        <span>Continuous credential checks and safety scores for every active carrier.</span>
                      </div>
                    </li>
                    <li>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                      <div>
                        <strong>Full liability coverage</strong>
                        <span>Tiered protection options with clear terms surfaced before you book.</span>
                      </div>
                    </li>
                    <li>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                      <div>
                        <strong>Seamless API integration</strong>
                        <span
                          >Connect CarryOn directly to your SAP, Oracle, or custom ERP systems with our
                          robust REST API.</span
                        >
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="friction-art" role="presentation"></div>
              </div>
            </section>
      
            {/*Testimonials: cards #A6D2F3, radius 24px*/}
            <section className="section-testimonials">
              <div className="layout">
                <div className="section-head">
                  <h2>Trusted on the road and in the boardroom</h2>
                  <p>Teams worldwide rely on CarryOn to keep promises to customers and crews.</p>
                </div>
                <div className="testimonial-grid">
                  <article className="testimonial-card">
                    <blockquote>
                      “CarryOn turned our fragmented carriers into a single command center. We cut
                      status meetings in half and finally trust our ETAs.”
                    </blockquote>
                    <div className="testimonial-author">
                      <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=128&q=80"
                        alt=""
                        width="52"
                        height="52"
                      />
                      <div>
                        <strong>Marcus Chen</strong>
                        <span>VP Logistics, Northwind Freight</span>
                      </div>
                    </div>
                  </article>
                  <article className="testimonial-card">
                    <blockquote>
                      “The driver interface is a game-changer. I no longer waste time on inefficient
                      routes or paperwork. Everything is digital, fast, and I get paid instantly.”
                    </blockquote>
                    <div className="testimonial-author">
                      <img
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=128&q=80"
                        alt=""
                        width="52"
                        height="52"
                      />
                      <div>
                        <strong>Sarah Jenkins</strong>
                        <span>Director of Operations, OmniCorp</span>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </section>
      
            {/*Final CTA: radius 48px, bg #2F80ED*/}
            <section className="section-final-cta" id="cta">
              <div className="layout">
                <div className="cta-panel">
                  <h2>Ready to navigate the future?</h2>
                  <p>
                    Join thousands of businesses and drivers who are setting a new standard for global
                    logistics excellence.
                  </p>
                  <div className="cta-buttons">
                    <button type="button" className="btn btn-white">Get started now</button>
                    <button type="button" className="btn btn-outline-white">Contact sales</button>
                  </div>
                </div>
              </div>
            </section>
          </main>
      
          <footer className="site-footer" id="contact">
            <div className="layout footer-grid">
              <div className="footer-brand">
                <Link href="/" className="footer-brand__name">
                  CarryOn
                </Link>
                <p className="footer-copy">
                  © 2024 CARRYON LOGISTICS. THE PRECISION NAVIGATOR. ALL RIGHTS RESERVED.
                </p>
              </div>
              <nav className="footer-col" aria-label="Product">
                <h4 className="footer-heading">Product</h4>
                <ul className="footer-links">
                  <li>
                    <Link href="/#solutions">Solutions</Link>
                  </li>
                  <li>
                    <Link href="/drivers">Drivers</Link>
                  </li>
                  <li>
                    <Link href="/#fleet">Enterprise</Link>
                  </li>
                </ul>
              </nav>
              <nav className="footer-col" aria-label="Company">
                <h4 className="footer-heading">Company</h4>
                <ul className="footer-links">
                  <li>
                    <Link href="/about#contact">Contact</Link>
                  </li>
                  <li>
                    <a href="#">Legal</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </nav>
              <div className="footer-col footer-col--newsletter">
                <h4 className="footer-heading">Newsletter</h4>
                <p className="footer-newsletter__tagline">Subscribe for logistics insights.</p>
                <form className="newsletter" action="#" method="get" aria-label="Newsletter">
                  <input type="email" name="email" placeholder="Email" autoComplete="email" />
                  <button type="submit" aria-label="Subscribe">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </footer>
    </>
  );
}
