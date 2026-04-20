/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";

const VEHICLE_RATES: Record<string, { rate: number; label: string }> = {
  motorcycle: { rate: 30, label: "MOTORCYCLE" },
  van: { rate: 45, label: "VAN" },
  lorry: { rate: 65, label: "LORI KECIL" },
};

const TESTIMONIALS = [
  {
    stars: 5,
    quote: "The flexibility of CarryOn allowed me to clear my debts while still spending time with my family. The app is intuitive and the payouts are always on time.",
    name: "Ahmad Rizwan",
    role: "DRIVER SINCE 2022 • KL",
    avatar: "/assets/avatar-ahmad.jpg",
  },
  {
    stars: 5,
    quote: "I run a small van fleet and CarryOn has been our best source of consistent jobs. The route optimization saves us so much on fuel costs every month.",
    name: "Sarah Tan",
    role: "FLEET OWNER • PENANG",
    avatar: "/assets/avatar-sarah.jpg",
  },
  {
    stars: 4,
    quote: "Safety was my biggest concern, but the verified profiles and real-time support make me feel secure even during night deliveries. Highly recommended.",
    name: "Kumar Das",
    role: "DRIVER SINCE 2023 • JOHOR",
    avatar: "/assets/avatar-david.jpg",
  },
];

const STEPS = [
  {
    step: "01",
    label: "STEP ONE",
    title: "Sign Up",
    desc: "Complete our quick online form with your basic details and vehicle information.",
    icon: "grid",
  },
  {
    step: "02",
    label: "STEP TWO",
    title: "Verification",
    desc: "Our team reviews your documents (License, IC, Vehicle Permit) within 24 hours.",
    icon: "doc",
  },
  {
    step: "03",
    label: "STEP THREE",
    title: "Training",
    desc: "Collect your starter kit and attend a brief virtual orientation on app usage.",
    icon: "headphones",
  },
  {
    step: "04",
    label: "STEP FOUR",
    title: "Start Earning",
    desc: "Accept your first load from the live dashboard and start generating revenue.",
    icon: "rocket",
    active: true,
  },
];

const BENEFITS = [
  {
    icon: "wallet",
    title: "Weekly Payouts",
    desc: "No more waiting. Get your earnings settled directly into your bank account every single week.",
  },
  {
    icon: "shield",
    title: "Full Insurance",
    desc: "Stay protected on every mile. We provide comprehensive goods-in-transit and personal accident coverage.",
  },
  {
    icon: "fuel",
    title: "Fuel Incentives",
    desc: "Exclusive partnerships with major fuel providers to help you save on your biggest operating cost.",
  },
  {
    icon: "support",
    title: "24/7 Support",
    desc: "Our dedicated road support team is always just a tap away, ensuring you're never stranded.",
  },
];

export function ContactSalesPageContent() {
  const [vehicle, setVehicle] = useState("motorcycle");
  const [hours, setHours] = useState(40);
  const rate = VEHICLE_RATES[vehicle]?.rate || 30;
  const weekly = rate * hours;

  return (
    <>
      <main className="cs-main">
        {/* ── HERO ─ */}
        <section className="cs-hero">
          <div className="cs-hero__shell">
            <div className="cs-hero__grid">
              <div className="cs-hero__copy">
                <span className="cs-hero__trust">
                  <span className="cs-hero__trust-dot" />
                  TRUSTED BY 5,000+ DRIVERS ACROSS MALAYSIA
                </span>
                <h1 className="cs-hero__title">
                  Drive Your Future<br />
                  with <span className="cs-blue">Carry</span>On
                </h1>
                <p className="cs-hero__desc">
                  Turn your miles into money. Flexible hours, steady demand, and an ecosystem built for your success.
                </p>
                <div className="cs-hero__btns">
                  <button type="button" className="cs-btn cs-btn--primary">Start Your Application</button>
                  <button type="button" className="cs-btn cs-btn--light">How it works</button>
                </div>
              </div>
              <div className="cs-hero__visual">
                <img
                  src="/assets/driver-hero-new.png"
                  alt="Professional CarryOn driver"
                  className="cs-hero__img"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── EARNINGS CALCULATOR ── */}
        <section className="cs-earnings">
          <div className="cs-earnings__shell">
            <div className="cs-earnings__grid">
              <div className="cs-earnings__copy">
                <h2 className="cs-earnings__title">See How Much You Can Earn</h2>
                <p className="cs-earnings__desc">
                  Our transparent payout system ensures you know exactly what to expect. Use the calculator to estimate your weekly revenue based on vehicle type and availability.
                </p>
                <div className="cs-earnings__perks">
                  <div className="cs-perk">
                    <div className="cs-perk__icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2F80ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="M2 10h20" />
                      </svg>
                    </div>
                    <div>
                      <h4>Weekly Payouts</h4>
                      <p>Fast, reliable transfers every Monday.</p>
                    </div>
                  </div>
                  <div className="cs-perk">
                    <div className="cs-perk__icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2F80ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                        <polyline points="17 6 23 6 23 12" />
                      </svg>
                    </div>
                    <div>
                      <h4>Peak Hour Bonuses</h4>
                      <p>Earn extra during high-demand windows.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cs-earnings__card">
                <div className="cs-calc__label">VEHICLE TYPE</div>
                <div className="cs-calc__vehicles">
                  {(["motorcycle", "van", "lorry"] as const).map((v) => (
                    <button
                      key={v}
                      type="button"
                      className={`cs-calc__veh ${vehicle === v ? "is-active" : ""}`}
                      onClick={() => setVehicle(v)}
                    >
                      {v === "motorcycle" && (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="5" cy="17" r="3" />
                          <circle cx="19" cy="17" r="3" />
                          <path d="M5 17l3-7h4l2 4h5" />
                        </svg>
                      )}
                      {v === "van" && (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M1 3h15v13H1z" />
                          <path d="M16 8h4l3 3v5h-7V8z" />
                          <circle cx="5.5" cy="18.5" r="2.5" />
                          <circle cx="18.5" cy="18.5" r="2.5" />
                        </svg>
                      )}
                      {v === "lorry" && (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M1 3h12v14H1z" />
                          <path d="M13 9h5l3 3v5h-8V9z" />
                          <circle cx="5.5" cy="19.5" r="2.5" />
                          <circle cx="18.5" cy="19.5" r="2.5" />
                        </svg>
                      )}
                      <span>{VEHICLE_RATES[v].label}</span>
                    </button>
                  ))}
                </div>
                <div className="cs-calc__hours">
                  <div className="cs-calc__hours-label">
                    <span>ESTIMATED HOURS PER WEEK</span>
                    <span className="cs-calc__hours-value">{hours} HRS</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="60"
                    value={hours}
                    onChange={(e) => setHours(Number(e.target.value))}
                    className="cs-calc__slider"
                  />
                </div>
                <div className="cs-calc__result">
                  <span className="cs-calc__result-label">Potential Weekly Earnings</span>
                  <div className="cs-calc__amount">
                    RM{weekly.toLocaleString()} <span className="cs-calc__per">/ week*</span>
                  </div>
                  <p className="cs-calc__note">
                    *Estimates based on average driver performance. Individual results may vary based on location and timing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── BENEFITS ── */}
        <section className="cs-benefits">
          <div className="cs-benefits__shell">
            <span className="cs-section-label">THE DRIVER ECOSYSTEM</span>
            <h2 className="cs-section-title">Built for Hour Security and Growth</h2>
            <div className="cs-benefits__grid">
              {BENEFITS.map((b, i) => (
                <div key={i} className="cs-benefit-card">
                  <div className="cs-benefit-card__icon">
                    {b.icon === "wallet" && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2F80ED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="M2 10h20" />
                        <circle cx="17" cy="15" r="1.5" fill="#2F80ED" />
                      </svg>
                    )}
                    {b.icon === "shield" && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2F80ED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path d="M9 12l2 2 4-4" />
                      </svg>
                    )}
                    {b.icon === "fuel" && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2F80ED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 22V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
                        <path d="M15 10h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2 2 2 0 0 0 2-2V9l-3-4" />
                        <path d="M3 22h12" />
                      </svg>
                    )}
                    {b.icon === "support" && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2F80ED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                        <path d="M12 8v4l3 3" />
                      </svg>
                    )}
                  </div>
                  <h3>{b.title}</h3>
                  <p>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── JOURNEY STEPS ── */}
        <section className="cs-journey">
          <div className="cs-journey__shell">
            <h2 className="cs-journey__title">Your Journey Starts Here</h2>
            <p className="cs-journey__desc">
              From application to first earning in as little as 48 hours. Follow our streamlined onboarding process designed for busy professionals.
            </p>
            <div className="cs-steps">
              {STEPS.map((s, i) => (
                <div key={i} className={`cs-step ${s.active ? "cs-step--active" : ""}`}>
                  <div className="cs-step__top">
                    <span className="cs-step__label">{s.label}</span>
                    <span className="cs-step__num">{s.step}</span>
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <div className="cs-step__icon">
                    {s.icon === "grid" && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="7" height="7" />
                        <rect x="14" y="3" width="7" height="7" />
                        <rect x="3" y="14" width="7" height="7" />
                        <rect x="14" y="14" width="7" height="7" />
                      </svg>
                    )}
                    {s.icon === "doc" && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                      </svg>
                    )}
                    {s.icon === "headphones" && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                      </svg>
                    )}
                    {s.icon === "rocket" && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                      </svg>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SAFETY ── */}
        <section className="cs-safety">
          <div className="cs-safety__shell">
            <div className="cs-safety__grid">
              <div className="cs-safety__visual">
                <div className="cs-safety__shield">
                  <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="200" cy="200" r="180" stroke="#E3F0FF" strokeWidth="1" strokeDasharray="6 6" />
                    <circle cx="200" cy="200" r="140" stroke="#E3F0FF" strokeWidth="1" strokeDasharray="4 8" />
                    <circle cx="200" cy="200" r="100" stroke="#E3F0FF" strokeWidth="1" />
                    <path d="M200 60 L200 340" stroke="#E3F0FF" strokeWidth="1" strokeDasharray="4 4" />
                    <path d="M60 200 L340 200" stroke="#E3F0FF" strokeWidth="1" strokeDasharray="4 4" />
                    <path d="M200 100 L280 140 L280 220 C280 280 200 320 200 320 C200 320 120 280 120 220 L120 140 Z" fill="#2F80ED" opacity="0.15" />
                    <path d="M200 120 L265 155 L265 215 C265 265 200 300 200 300 C200 300 135 265 135 215 L135 155 Z" fill="#2F80ED" opacity="0.3" />
                    <path d="M200 140 L250 170 L250 210 C250 250 200 280 200 280 C200 280 150 250 150 210 L150 170 Z" fill="#2F80ED" />
                    <path d="M175 210 L195 230 L230 190" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M165 195 L180 195 L185 185 L195 205 L205 180 L215 195 L235 195" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
                    <circle cx="200" cy="195" r="4" fill="#fff" />
                  </svg>
                  <div className="cs-safety__badge cs-safety__badge--sos">
                    <span className="cs-safety__badge-icon">+</span>
                    <div>
                      <span className="cs-safety__badge-title">Emergency</span>
                      <span className="cs-safety__badge-desc">Rapid Action</span>
                    </div>
                  </div>
                  <div className="cs-safety__badge cs-safety__badge--tracking">
                    <span className="cs-safety__badge-icon">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2F80ED" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M12 2v4M12 18v4M2 12h4M18 12h4" /></svg>
                    </span>
                    <div>
                      <span className="cs-safety__badge-title">Live Tracking</span>
                      <span className="cs-safety__badge-desc">Always visible</span>
                    </div>
                  </div>
                  <div className="cs-safety__badge cs-safety__badge--verified">
                    <span className="cs-safety__badge-icon">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2F80ED" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                    </span>
                    <div>
                      <span className="cs-safety__badge-title">Verified Drivers</span>
                      <span className="cs-safety__badge-desc">Background checked</span>
                    </div>
                  </div>
                  <div className="cs-safety__badge cs-safety__badge--insurance">
                    <span className="cs-safety__badge-icon">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2F80ED" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                    </span>
                    <div>
                      <span className="cs-safety__badge-title">Full Insurance</span>
                      <span className="cs-safety__badge-desc">Every delivery</span>
                    </div>
                  </div>
                  <div className="cs-safety__badge cs-safety__badge--record">
                    <span className="cs-safety__badge-dot" />
                    98% Safety Record • 12K+ Deliveries
                  </div>
                </div>
              </div>
              <div className="cs-safety__copy">
                <span className="cs-section-label">DRIVER PROTECTION</span>
                <h2 className="cs-safety__title">Safety Isn't a Feature, It's Our Core Promise</h2>
                <div className="cs-safety__items">
                  <div className="cs-safety__item">
                    <div className="cs-safety__item-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2F80ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                        <path d="M2 17l10 5 10-5" />
                        <path d="M2 12l10 5 10-5" />
                      </svg>
                    </div>
                    <div>
                      <h4>Emergency SOS Button</h4>
                      <p>Instant connection to our 24/7 security dispatch and local authorities at a single tap.</p>
                    </div>
                  </div>
                  <div className="cs-safety__item">
                    <div className="cs-safety__item-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2F80ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <h4>Real-Time Monitoring</h4>
                      <p>Every journey is tracked via GPS. If you're stationary for too long, we reach out to check in.</p>
                    </div>
                  </div>
                  <div className="cs-safety__item">
                    <div className="cs-safety__item-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2F80ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    <div>
                      <h4>Verified Customers</h4>
                      <p>We vet every business and individual requester to ensure you're always working in a secure environment.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="cs-testimonials">
          <div className="cs-testimonials__shell">
            <span className="cs-section-label">VOICES FROM THE ROAD</span>
            <div className="cs-testimonials__header">
              <h2 className="cs-section-title">Our Fleet, Their Words</h2>
              <div className="cs-testimonials__nav">
                <button type="button" className="cs-testimonials__nav-btn" aria-label="Previous">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12" />
                    <polyline points="12 19 5 12 12 5" />
                  </svg>
                </button>
                <button type="button" className="cs-testimonials__nav-btn" aria-label="Next">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="cs-testimonials__grid">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="cs-testimonial-card">
                  <div className="cs-testimonial-card__stars">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <span key={si} className={si < t.stars ? "cs-star--filled" : "cs-star--empty"}>★</span>
                    ))}
                  </div>
                  <blockquote className="cs-testimonial-card__text">"{t.quote}"</blockquote>
                  <div className="cs-testimonial-card__author">
                    <img src={t.avatar} alt={t.name} className="cs-testimonial-card__avatar" width="48" height="48" />
                    <div>
                      <span className="cs-testimonial-card__name">{t.name}</span>
                      <span className="cs-testimonial-card__role">{t.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="cs-cta">
          <div className="cs-cta__shell">
            <h2 className="cs-cta__title">Ready to join the fleet? Your journey starts here.</h2>
            <div className="cs-cta__btns">
              <button type="button" className="cs-btn cs-btn--white">Start Your Application</button>
              <button type="button" className="cs-btn cs-btn--ghost">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Driver App
              </button>
            </div>
            <p className="cs-cta__note">NO ACTIVATION FEES • NO COMMITMENTS • FULL FLEXIBILITY</p>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="cs-footer">
        <div className="cs-footer__shell">
          <div className="cs-footer__grid">
            <div className="cs-footer__brand">
              <span className="cs-footer__logo">CarryOn</span>
              <p>High-performance logistics solutions for the modern world. Precision at every mile.</p>
            </div>
            <div className="cs-footer__col">
              <h4>COMPANY</h4>
              <ul>
                <li><a href="/about">ABOUT US</a></li>
                <li><a href="#">SAFETY</a></li>
                <li><a href="#">CAREERS</a></li>
              </ul>
            </div>
            <div className="cs-footer__col">
              <h4>LEGAL</h4>
              <ul>
                <li><a href="/privacy">PRIVACY POLICY</a></li>
                <li><a href="/terms">TERMS OF SERVICE</a></li>
              </ul>
            </div>
            <div className="cs-footer__col">
              <h4>SUPPORT</h4>
              <ul>
                <li><a href="#">HELP CENTER</a></li>
                <li><a href="#">CONTACT SUPPORT</a></li>
              </ul>
            </div>
          </div>
          <div className="cs-footer__bottom">
            <span>© 2024 CARRYON LOGISTICS. ALL RIGHTS RESERVED.</span>
            <div className="cs-footer__socials">
              <a href="#" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              <a href="#" aria-label="Globe">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
