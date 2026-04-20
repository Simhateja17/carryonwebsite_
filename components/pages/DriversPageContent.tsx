/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";

const ONBOARDING_STEPS = [
  {
    num: "01",
    title: "Sign up",
    desc: "Complete our digital application in under 5 minutes.",
    icon: "grid",
  },
  {
    num: "02",
    title: "Get verified",
    desc: "Automated background checks and vehicle precision audits.",
    icon: "shield",
  },
  {
    num: "03",
    title: "Accept orders",
    desc: "Select high-yield routes directly through the Driver App.",
    icon: "check",
  },
  {
    num: "04",
    title: "Earn",
    desc: "Instant payout capabilities for every successful delivery.",
    icon: "wallet",
  },
];

const FLEET_BENEFITS = [
  {
    icon: "calendar",
    title: "Flexibility",
    desc: "Choose shifts that fit your life. No mandatory minimum hours.",
  },
  {
    icon: "bank",
    title: "Weekly Payouts",
    desc: "Direct deposit processed every Friday morning with transparency.",
  },
  {
    icon: "bolt",
    title: "High Volume",
    desc: "Access to a dense network of deliveries ensuring zero downtime.",
  },
  {
    icon: "route",
    title: "Smart Routing",
    desc: "AI-driven route selection to maximize earnings per mile.",
  },
];

const DRIVER_HUB_FEATURES = [
  {
    icon: "bell",
    title: "Instant Order Alerts",
    desc: "Real-time alerts for nearby high-value shipments with transparent pricing and instant acceptance.",
  },
  {
    icon: "navigation",
    title: "Fleet Navigation",
    desc: "Turn-by-turn routing optimized for heavy fleet vehicles, including traffic avoidance and dock locations.",
  },
  {
    icon: "chart",
    title: "Real-time Earnings",
    desc: "Visual dashboards displaying daily totals, projected income, and detailed fuel efficiency reports.",
  },
];

const FAQS = [
  {
    q: "How do I get paid?",
    a: "We process earnings weekly via direct deposit. Every Friday morning, your funds from the previous week's completed deliveries are initiated to your linked bank account. Instant payout options are also available for qualified platinum partners.",
  },
  {
    q: "What documents are required?",
    a: "You'll need a valid driver's license, vehicle registration, proof of insurance, and a clean background check. Commercial vehicles may require additional permits depending on your region.",
  },
  {
    q: "Can I work part-time?",
    a: "Absolutely. CarryOn is designed for maximum flexibility. You can work as little or as much as you want — there are no minimum hour requirements. Set your own schedule and earn on your terms.",
  },
];

export function DriversPageContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <main className="drv-main">
        {/* ── HERO ── */}
        <section className="drv-hero">
          <div className="drv-hero__shell">
            <div className="drv-hero__grid">
              <div className="drv-hero__copy">
                <h1 className="drv-hero__title">
                  Your Fleet. Your Schedule. Your Success.
                </h1>
                <p className="drv-hero__desc">
                  Join the premier logistics network. Leverage advanced route optimization and precision analytics to maximize your earnings on your own terms.
                </p>
                <button type="button" className="drv-btn drv-btn--primary">Apply to Drive</button>
              </div>
              <div className="drv-hero__visual">
                <div className="drv-hero__fleet">
                  <img
                    src="/assets/driver-hero-new.png"
                    alt="CarryOn delivery fleet"
                    className="drv-hero__img"
                  />
                </div>
                <div className="drv-hero__badge">
                  <div className="drv-hero__badge-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2F80ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 3h15v13H1z" />
                      <path d="M16 8h4l3 3v5h-7V8z" />
                      <circle cx="5.5" cy="18.5" r="2.5" />
                      <circle cx="18.5" cy="18.5" r="2.5" />
                    </svg>
                  </div>
                  <div>
                    <span className="drv-hero__badge-label">ACTIVE DRIVERS</span>
                    <span className="drv-hero__badge-value">12,400+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="drv-stats">
          <div className="drv-stats__shell">
            <div className="drv-stats__grid">
              <div className="drv-stat-card">
                <span className="drv-stat-card__label">AVG MONTHLY EARNINGS</span>
                <span className="drv-stat-card__value">$4,200+</span>
                <span className="drv-stat-card__sub">Average weekly earnings based on active drivers</span>
                <span className="drv-stat-card__note">Based on top-performing driver partners across major metro hubs.</span>
              </div>
              <div className="drv-stat-card">
                <span className="drv-stat-card__label">INCENTIVES</span>
                <span className="drv-stat-card__value">Up to 25%</span>
                <span className="drv-stat-card__sub">Bonus yield calculated per completed delivery phase</span>
                <span className="drv-stat-card__note">Performance bonuses for precision delivery and safety milestones.</span>
              </div>
              <div className="drv-stat-card">
                <span className="drv-stat-card__label">FLEXIBLE HOURS</span>
                <span className="drv-stat-card__value">24 / 7</span>
                <span className="drv-stat-card__sub">Maximum flexibility across all regional dispatch hubs</span>
                <span className="drv-stat-card__note">You define the shifts. Full control over your logistics lifestyle.</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── ONBOARDING ── */}
        <section className="drv-onboarding">
          <div className="drv-onboarding__shell">
            <h2 className="drv-onboarding__title">Precision Onboarding</h2>
            <div className="drv-onboarding__line" />
            <div className="drv-onboarding__steps">
              {ONBOARDING_STEPS.map((s, i) => (
                <div key={i} className="drv-onboarding__step">
                  <div className={`drv-onboarding__icon ${i === 0 ? "is-active" : ""}`}>
                    {s.icon === "grid" && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="7" height="7" />
                        <rect x="14" y="3" width="7" height="7" />
                        <rect x="3" y="14" width="7" height="7" />
                        <rect x="14" y="14" width="7" height="7" />
                      </svg>
                    )}
                    {s.icon === "shield" && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path d="M9 12l2 2 4-4" />
                      </svg>
                    )}
                    {s.icon === "check" && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    )}
                    {s.icon === "wallet" && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="M2 10h20" />
                        <circle cx="17" cy="15" r="1.5" fill="currentColor" />
                      </svg>
                    )}
                  </div>
                  <span className="drv-onboarding__num">{s.num}</span>
                  <h3 className="drv-onboarding__step-title">{s.title}</h3>
                  <p className="drv-onboarding__step-desc">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MODERN FLEET ── */}
        <section className="drv-fleet">
          <div className="drv-fleet__shell">
            <div className="drv-fleet__grid">
              <div className="drv-fleet__copy">
                <h2 className="drv-fleet__title">Designed for the Modern Fleet.</h2>
                <p className="drv-fleet__desc">
                  We provide a platform for professional growth and logistics efficiency. Our benefits are built around your financial stability and operational success.
                </p>
                <div className="drv-fleet__benefits">
                  {FLEET_BENEFITS.map((b, i) => (
                    <div key={i} className="drv-fleet__benefit">
                      <div className="drv-fleet__benefit-icon">
                        {b.icon === "calendar" && (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2F80ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                          </svg>
                        )}
                        {b.icon === "bank" && (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2F80ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 21h18" />
                            <path d="M3 10h18" />
                            <path d="M12 3l9 7H3l9-7z" />
                            <path d="M5 21V10" />
                            <path d="M19 21V10" />
                            <path d="M9 21V10" />
                            <path d="M15 21V10" />
                          </svg>
                        )}
                        {b.icon === "bolt" && (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2F80ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                          </svg>
                        )}
                        {b.icon === "route" && (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2F80ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="6" cy="19" r="3" />
                            <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
                            <circle cx="18" cy="5" r="3" />
                          </svg>
                        )}
                      </div>
                      <div>
                        <h4>{b.title}</h4>
                        <p>{b.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <a href="#" className="drv-fleet__link">
                  Explore all driver benefits
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
              <div className="drv-fleet__visual">
                <div className="drv-fleet__phone">
                  <div className="drv-fleet__phone-frame">
                    <div className="drv-fleet__phone-notch" />
                    <div className="drv-fleet__phone-screen">
                      <div className="drv-fleet__phone-map">
                        <svg viewBox="0 0 200 160" fill="none">
                          <rect width="200" height="160" rx="8" fill="#E8F0FE" />
                          <path d="M30 120 Q60 80 100 90 Q140 100 170 60" stroke="#2F80ED" strokeWidth="2" strokeDasharray="4 4" fill="none" />
                          <circle cx="70" cy="95" r="5" fill="#2F80ED" />
                          <circle cx="70" cy="95" r="10" fill="#2F80ED" opacity="0.2" />
                          <path d="M70 95 L70 75 L90 65" stroke="#2F80ED" strokeWidth="1.5" fill="none" />
                        </svg>
                      </div>
                      <div className="drv-fleet__phone-order">
                        <span className="drv-fleet__phone-order-label">Order assigned</span>
                      </div>
                      <div className="drv-fleet__phone-stats">
                        <div className="drv-fleet__phone-stat">
                          <span className="drv-fleet__phone-stat-label">Earnings</span>
                          <span className="drv-fleet__phone-stat-value">RM 85</span>
                        </div>
                        <div className="drv-fleet__phone-stat">
                          <span className="drv-fleet__phone-stat-label">Orders</span>
                          <span className="drv-fleet__phone-stat-value">12</span>
                        </div>
                      </div>
                      <div className="drv-fleet__phone-next">
                        <span className="drv-fleet__phone-next-label">Next Order</span>
                        <span className="drv-fleet__phone-next-addr">7186-2241 • 3.2 km</span>
                        <button className="drv-fleet__phone-next-btn">Accept</button>
                      </div>
                    </div>
                  </div>
                  <div className="drv-fleet__phone-float drv-fleet__phone-float--left">
                    <span>Smart Dispatch</span>
                    <span className="drv-fleet__phone-float-sub">Order assigned</span>
                  </div>
                  <div className="drv-fleet__phone-float drv-fleet__phone-float--right">
                    <span>24/7 Support</span>
                    <span className="drv-fleet__phone-float-sub">Always on</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── DRIVER HUB ── */}
        <section className="drv-hub">
          <div className="drv-hub__shell">
            <div className="drv-hub__grid">
              <div className="drv-hub__visual">
                <div className="drv-hub__servers">
                  <svg viewBox="0 0 300 200" fill="none">
                    <rect x="20" y="40" width="60" height="120" rx="8" fill="#E3F0FF" />
                    <rect x="28" y="50" width="44" height="8" rx="4" fill="#2F80ED" opacity="0.3" />
                    <rect x="28" y="66" width="44" height="8" rx="4" fill="#2F80ED" opacity="0.3" />
                    <rect x="28" y="82" width="44" height="8" rx="4" fill="#2F80ED" opacity="0.3" />
                    <rect x="28" y="98" width="44" height="8" rx="4" fill="#2F80ED" opacity="0.3" />
                    <rect x="28" y="114" width="44" height="8" rx="4" fill="#2F80ED" opacity="0.3" />
                    <rect x="28" y="130" width="44" height="8" rx="4" fill="#2F80ED" opacity="0.3" />
                    <circle cx="50" cy="44" r="3" fill="#2F80ED" />
                    <circle cx="50" cy="146" r="3" fill="#2F80ED" />

                    <rect x="120" y="60" width="60" height="80" rx="8" fill="#2F80ED" />
                    <rect x="130" y="72" width="40" height="6" rx="3" fill="#fff" opacity="0.4" />
                    <rect x="130" y="84" width="40" height="6" rx="3" fill="#fff" opacity="0.4" />
                    <rect x="130" y="96" width="40" height="6" rx="3" fill="#fff" opacity="0.4" />
                    <rect x="130" y="108" width="40" height="6" rx="3" fill="#fff" opacity="0.4" />
                    <circle cx="150" cy="124" r="6" fill="#fff" opacity="0.5" />
                    <circle cx="150" cy="64" r="3" fill="#fff" opacity="0.6" />

                    <rect x="220" y="40" width="60" height="120" rx="8" fill="#E3F0FF" />
                    <rect x="228" y="50" width="44" height="8" rx="4" fill="#2F80ED" opacity="0.3" />
                    <rect x="228" y="66" width="44" height="8" rx="4" fill="#2F80ED" opacity="0.3" />
                    <rect x="228" y="82" width="44" height="8" rx="4" fill="#2F80ED" opacity="0.3" />
                    <rect x="228" y="98" width="44" height="8" rx="4" fill="#2F80ED" opacity="0.3" />
                    <rect x="228" y="114" width="44" height="8" rx="4" fill="#2F80ED" opacity="0.3" />
                    <rect x="228" y="130" width="44" height="8" rx="4" fill="#2F80ED" opacity="0.3" />
                    <circle cx="250" cy="44" r="3" fill="#2F80ED" />
                    <circle cx="250" cy="146" r="3" fill="#2F80ED" />

                    <circle cx="80" cy="30" r="4" fill="#2F80ED" opacity="0.4" />
                    <circle cx="220" cy="30" r="4" fill="#2F80ED" opacity="0.4" />
                    <line x1="80" y1="34" x2="80" y2="40" stroke="#2F80ED" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" />
                    <line x1="220" y1="34" x2="220" y2="40" stroke="#2F80ED" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" />
                  </svg>
                </div>
              </div>
              <div className="drv-hub__copy">
                <h2 className="drv-hub__title">The Precision Driver Hub</h2>
                <p className="drv-hub__desc">
                  Everything you need to succeed, packed into a powerful mobile experience.
                </p>
                <div className="drv-hub__features">
                  {DRIVER_HUB_FEATURES.map((f, i) => (
                    <div key={i} className="drv-hub__feature">
                      <div className="drv-hub__feature-icon">
                        {f.icon === "bell" && (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2F80ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                          </svg>
                        )}
                        {f.icon === "navigation" && (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2F80ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="3 11 22 2 13 21 11 13 3 11" />
                          </svg>
                        )}
                        {f.icon === "chart" && (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2F80ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                          </svg>
                        )}
                      </div>
                      <div>
                        <h4>{f.title}</h4>
                        <p>{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SUPPORT & PROTECTION ── */}
        <section className="drv-support">
          <div className="drv-support__shell">
            <div className="drv-support__grid">
              <div className="drv-support__card drv-support__card--blue">
                <div className="drv-support__card-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="M12 8v4l3 3" />
                  </svg>
                </div>
                <h3>24/7 Priority Support</h3>
                <p>A dedicated dispatcher team is always on standby to assist with route issues or delivery complications via phone or in-app chat.</p>
              </div>
              <div className="drv-support__card drv-support__card--light">
                <div className="drv-support__card-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2F80ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <h3>Emergency Protection</h3>
                <p>Comprehensive insurance coverage and roadside assistance are included for every active partner on the platform for total peace of mind.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIAL ── */}
        <section className="drv-testimonial">
          <div className="drv-testimonial__shell">
            <div className="drv-testimonial__card">
              <div className="drv-testimonial__quote-mark">"</div>
              <div className="drv-testimonial__avatar">
                <img src="/assets/avatar-marcus.jpg" alt="Marcus Chen" width="56" height="56" />
              </div>
              <div className="drv-testimonial__stars">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <blockquote className="drv-testimonial__text">
                "CarryOn transformed my logistics business. The route optimization alone saves me two hours a day, which means more time with my family and more money in my pocket."
              </blockquote>
              <div className="drv-testimonial__author">
                <span className="drv-testimonial__name">MARCUS CHEN</span>
                <span className="drv-testimonial__role">Austin, TX • Partner since 2021</span>
                <span className="drv-testimonial__deliveries">5,000+ Precision Deliveries completed</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="drv-faq">
          <div className="drv-faq__shell">
            <h2 className="drv-faq__title">Frequently Asked Questions</h2>
            <div className="drv-faq__items">
              {FAQS.map((faq, i) => (
                <div key={i} className="drv-faq__item">
                  <button
                    type="button"
                    className="drv-faq__question"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    {faq.q}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`drv-faq__chevron ${openFaq === i ? "is-open" : ""}`}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  {openFaq === i && (
                    <div className="drv-faq__answer">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="drv-cta">
          <div className="drv-cta__shell">
            <div className="drv-cta__bar" />
            <h2 className="drv-cta__title">Ready to Start Driving?</h2>
            <p className="drv-cta__desc">
              Join the fleet today and experience the precision of the CarryOn network.
            </p>
            <div className="drv-cta__btns">
              <button type="button" className="drv-btn drv-btn--primary">Apply Now</button>
              <button type="button" className="drv-btn drv-btn--light">Contact Support</button>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="drv-footer">
        <div className="drv-footer__bar" />
        <div className="drv-footer__shell">
          <div className="drv-footer__grid">
            <div className="drv-footer__brand">
              <span className="drv-footer__logo">CARRYON</span>
              <p>Precision in every mile. Excellence in every delivery. The future of logistics is here.</p>
            </div>
            <div className="drv-footer__col">
              <h4>Solutions</h4>
              <ul>
                <li><a href="#">Fleet Solutions</a></li>
                <li><a href="#">Enterprise Hub</a></li>
                <li><a href="#">Pricing Models</a></li>
              </ul>
            </div>
            <div className="drv-footer__col">
              <h4>Careers</h4>
              <ul>
                <li><a href="/drivers">Driver Careers</a></li>
                <li><a href="#">Corporate Roles</a></li>
              </ul>
            </div>
            <div className="drv-footer__col">
              <h4>Support</h4>
              <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="drv-footer__bottom">
            <span>© 2024 CarryOn Logistics. Precision in Motion.</span>
            <button type="button" className="drv-footer__apply">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Apply to Drive
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}
