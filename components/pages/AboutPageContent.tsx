/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useState } from "react";

const FAQ_ITEMS = [
  "How is my delivery price calculated?",
  "How long does delivery take?",
  "What is your cancellation policy?",
  "How do drivers get paid?",
  "Is my cargo insured during transit?",
  "What happens if delivery fails?",
];

export function AboutPageContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <main className="a-main">

        {/* ── HERO ── */}
        <section className="a-hero">
          <div className="a-hero__grid">
            <div className="a-hero__copy">
              <h1 className="a-hero__title">
                From last-mile delivery<br />
                to enterprise logistics<br />
                — all in one platform.
              </h1>
              <p className="a-hero__desc">
                CarryOn is redefining moving and delivery through precision technology and a fleet managed with editorial care. Experience a new standard in operational excellence.
              </p>
              <div className="a-hero__btns">
                <Link href="/book-delivery" className="a-btn a-btn--primary">Book Delivery</Link>
                <button type="button" className="a-btn a-btn--outline">Become Driver</button>
              </div>
              <div className="a-hero__proof">
                <div className="a-hero__avatars" aria-hidden="true">
                  <span className="a-hero__av"><img src="/assets/ab-avatar1.jpg" alt="" /></span>
                  <span className="a-hero__av"><img src="/assets/ab-avatar2.jpg" alt="" /></span>
                  <span className="a-hero__av"><img src="/assets/ab-avatar3.jpg" alt="" /></span>
                  <span className="a-hero__av a-hero__av--count">+10k</span>
                </div>
                <span className="a-hero__proof-text">Trusted by 10,000+ users worldwide</span>
              </div>
            </div>
            <div className="a-hero__visual">
              <img
                src="/assets/ab-future-logistics.svg"
                alt="CarryOn logistics dashboard"
                className="a-hero__img"
              />
            </div>
          </div>
        </section>

        {/* ── MISSION & VISION ── */}
        <section className="a-mission">
          <div className="a-mission__grid">
            <article className="a-mission__card">
              <span className="a-mission__label">OUR MISSION</span>
              <h2 className="a-mission__head">To simplify logistics through technology.</h2>
              <p className="a-mission__body">
                To simplify logistics through technology by connecting riders, drivers, and businesses into one seamless delivery network. We remove the friction from moving items across cities, ensuring every delivery is a premium experience.
              </p>
            </article>
            <article className="a-mission__card">
              <span className="a-mission__label">OUR VISION</span>
              <h2 className="a-mission__head">To become the most reliable globally.</h2>
              <p className="a-mission__body">
                CarryOn aims to set the global standard for logistics reliability, creating a world where distance is never a barrier to commerce or connection, fueled by data-driven precision.
              </p>
            </article>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="a-stats">
          <div className="a-stats__grid">
            <div className="a-stats__item">
              <span className="a-stats__num">12K+</span>
              <span className="a-stats__label">DELIVERIES COMPLETED</span>
            </div>
            <div className="a-stats__item">
              <span className="a-stats__num">5K+</span>
              <span className="a-stats__label">ACTIVE DRIVERS</span>
            </div>
            <div className="a-stats__item">
              <span className="a-stats__num">98%</span>
              <span className="a-stats__label">SUCCESS RATE</span>
            </div>
          </div>
        </section>

        {/* ── PRICING ── */}
        <section className="a-pricing">
          <div className="a-pricing__shell">
            <div className="a-pricing__head">
              <span className="a-pricing__kicker">TRANSPARENT PRICING</span>
              <h2 className="a-pricing__title">Simple, predictable fares for every load</h2>
            </div>
            <div className="a-pricing__grid">

              {/* Bike */}
              <article className="a-price__card">
                <span className="a-price__pill">BEST FOR SMALL DELIVERIES</span>
                <div className="a-price__icon-wrap">
                  <img src="/assets/ab-icon-bike.svg" width={30} height={20} alt="" />
                </div>
                <h3 className="a-price__name">Bike</h3>
                <p className="a-price__desc">Perfect for documents, small parcels, and urgent city deliveries.</p>
                <div className="a-price__base-row">
                  <span className="a-price__amount">$5.00</span>
                  <span className="a-price__base-label">base fare</span>
                </div>
                <ul className="a-price__features">
                  <li><span>Rate per km</span><span>$0.50</span></li>
                  <li><span>Max Weight</span><span>5kg</span></li>
                  <li><span>Handling Fee</span><span>Included</span></li>
                </ul>
                <button type="button" className="a-price__cta a-price__cta--outline">Select Bike</button>
              </article>

              {/* Pickup — featured */}
              <div className="a-price__featured-wrap">
                <article className="a-price__card a-price__card--featured">
                  <div className="a-price__popular-pill">MOST POPULAR</div>
                  <div className="a-price__icon-wrap a-price__icon-wrap--blue">
                    <img src="/assets/ab-icon-pickup.svg" width={28} height={20} alt="" />
                  </div>
                  <h3 className="a-price__name">Pickup</h3>
                  <p className="a-price__desc">Medium goods, furniture, and residential move appliances.</p>
                  <div className="a-price__base-row">
                    <span className="a-price__amount">$15.00</span>
                    <span className="a-price__base-label">base fare</span>
                  </div>
                  <ul className="a-price__features">
                    <li><span>Rate per km</span><span>$1.20</span></li>
                    <li><span>Max Weight</span><span>500kg</span></li>
                    <li><span>Insurance</span><span>Up to $500</span></li>
                  </ul>
                  <button type="button" className="a-price__cta a-price__cta--solid">Select Pickup</button>
                </article>
              </div>

              {/* Truck */}
              <article className="a-price__card">
                <span className="a-price__pill">BEST FOR HEAVY LOADS</span>
                <div className="a-price__icon-wrap">
                  <img src="/assets/ab-icon-truck.svg" width={25} height={23} alt="" />
                </div>
                <h3 className="a-price__name">Truck</h3>
                <p className="a-price__desc">Heavy commercial transport and complete business relocations.</p>
                <div className="a-price__base-row">
                  <span className="a-price__amount">$45.00</span>
                  <span className="a-price__base-label">base fare</span>
                </div>
                <ul className="a-price__features">
                  <li><span>Rate per km</span><span>$2.50</span></li>
                  <li><span>Max Weight</span><span>3500kg</span></li>
                  <li><span>Loading Help</span><span>Optional</span></li>
                </ul>
                <button type="button" className="a-price__cta a-price__cta--outline">Select Truck</button>
              </article>

            </div>
          </div>
        </section>

        {/* ── PRECISION IN EVERY QUOTE ── */}
        <section className="a-precision">
          <div className="a-precision__grid">
            <div className="a-precision__copy">
              <h2 className="a-precision__title">Precision in Every Quote</h2>
              <div className="a-precision__items">
                <div className="a-precision__item">
                  <div className="a-precision__icon-wrap">
                    <img src="/assets/ab-icon-transparency.svg" width={18} height={18} alt="" />
                  </div>
                  <div>
                    <h3 className="a-precision__item-title">Absolute Transparency</h3>
                    <p className="a-precision__item-desc">
                      The price you see is the price you pay. Our algorithm calculates distance and volume instantly with no hidden surcharges or surprise fees.
                    </p>
                  </div>
                </div>
                <div className="a-precision__item">
                  <div className="a-precision__icon-wrap">
                    <img src="/assets/ab-icon-nosurge.svg" width={16} height={20} alt="" />
                  </div>
                  <div>
                    <h3 className="a-precision__item-title">No Surge Pricing</h3>
                    <p className="a-precision__item-desc">
                      Unlike ride-sharing, we keep logistics stable. Rain or peak hours, our rates remain consistent for your business planning and peace of mind.
                    </p>
                  </div>
                </div>
              </div>
              <button type="button" className="a-precision__link">
                View Full Pricing Guide
                <img src="/assets/ab-icon-arrow.svg" width={9} height={9} alt="" />
              </button>
            </div>
            <div className="a-precision__visual">
              <div className="a-precision__frame">
                <img
                  src="/assets/ab-data-analytics.svg"
                  alt="Fare Estimator showing transparent pricing"
                  className="a-precision__img"
                />
                <div className="a-precision__float-card">
                  <span className="a-precision__float-kicker">LIVE TELEMETRY</span>
                  <p className="a-precision__float-text">
                    Real-time GPS tracking and driver analytics included with every shipment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE CARRYON ── */}
        <section className="a-why">
          <div className="a-why__shell">
            <div className="a-why__header">
              <h2 className="a-why__title">Why Choose CarryOn</h2>
              <p className="a-why__desc">Enterprise-grade features designed for the complexities of modern commerce.</p>
            </div>
            <div className="a-why__grid">
              <div className="a-why__card">
                <img src="/assets/ab-icon-realtime.svg" width={20} height={25} alt="" className="a-why__icon" />
                <h3 className="a-why__card-title">Real-time Tracking</h3>
                <p className="a-why__card-desc">Precision GPS tracking for every asset in your fleet, updated every second.</p>
              </div>
              <div className="a-why__card">
                <img src="/assets/ab-icon-ai.svg" width={24} height={25} alt="" className="a-why__icon" />
                <h3 className="a-why__card-title">AI Optimization</h3>
                <p className="a-why__card-desc">Machine learning algorithms that predict traffic and optimize routes dynamically.</p>
              </div>
              <div className="a-why__card">
                <img src="/assets/ab-icon-pricing.svg" width={28} height={20} alt="" className="a-why__icon" />
                <h3 className="a-why__card-title">Transparent Pricing</h3>
                <p className="a-why__card-desc">Upfront quotes with no hidden surcharges. Full cost visibility from start to finish.</p>
              </div>
              <div className="a-why__card">
                <img src="/assets/ab-icon-safety.svg" width={20} height={25} alt="" className="a-why__icon" />
                <h3 className="a-why__card-title">24/7 Safety</h3>
                <p className="a-why__card-desc">Dedicated monitoring and emergency response teams available around the clock.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section className="a-contact" id="contact">
          <div className="a-contact__grid">
            <div className="a-contact__form-wrap">
              <h2 className="a-contact__title">Get in Touch</h2>
              <form className="a-contact__form" action="#" method="post">
                <div className="a-field">
                  <label className="a-field__label" htmlFor="name">FULL NAME</label>
                  <input type="text" id="name" name="name" className="a-field__input" placeholder="John Doe" autoComplete="name" />
                </div>
                <div className="a-field">
                  <label className="a-field__label" htmlFor="email">EMAIL ADDRESS</label>
                  <input type="email" id="email" name="email" className="a-field__input" placeholder="john@example.com" autoComplete="email" />
                  <p className="a-field__hint">We&rsquo;ll get back to you within 24 hours</p>
                </div>
                <div className="a-field">
                  <label className="a-field__label" htmlFor="message">YOUR MESSAGE</label>
                  <textarea id="message" name="message" className="a-field__input a-field__input--area" rows={5} placeholder="How can we help with your logistics?"></textarea>
                </div>
                <button type="submit" className="a-contact__submit">Send Message</button>
              </form>
            </div>
            <div className="a-contact__info">
              <div className="a-contact__info-block">
                <h3 className="a-contact__info-title">Support &amp; Inquiries</h3>
                <div className="a-contact__rows">
                  <div className="a-contact__row">
                    <span className="a-contact__icon-wrap">
                      <img src="/assets/ab-icon-email.svg" width={20} height={16} alt="" />
                    </span>
                    <span className="a-contact__row-text">support@carryon.logistics</span>
                  </div>
                  <div className="a-contact__row">
                    <span className="a-contact__icon-wrap">
                      <img src="/assets/ab-icon-phone.svg" width={18} height={18} alt="" />
                    </span>
                    <span className="a-contact__row-text">+1 (555) 234-LOGI</span>
                  </div>
                </div>
              </div>
              <div className="a-contact__info-block">
                <h3 className="a-contact__info-title">Corporate Office</h3>
                <p className="a-contact__address">
                  400 Precision Way, Suite 200<br />
                  Tech Hub Plaza, Logistics City, LC 90210
                </p>
              </div>
              <blockquote className="a-contact__motto">
                <p className="a-contact__motto-quote">&ldquo;Reliability is not an act, it&rsquo;s a habit.&rdquo;</p>
                <cite className="a-contact__motto-cite">— Our Operations Motto</cite>
              </blockquote>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="a-faq">
          <div className="a-faq__inner">
            <h2 className="a-faq__title">Frequently Asked Questions</h2>
            <div className="a-faq__list">
              {FAQ_ITEMS.map((q, i) => (
                <div key={i} className="a-faq__item">
                  <button
                    type="button"
                    className="a-faq__q"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    <span>{q}</span>
                    <img
                      src="/assets/ab-icon-chevron.svg"
                      width={14}
                      height={14}
                      alt=""
                      className={`a-faq__chev ${openFaq === i ? "is-open" : ""}`}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="a-faq__a">
                      <p>Our team will respond with detailed information about this topic.</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TERMS & PRIVACY ── */}
        <section className="a-policies">
          <div className="a-policies__grid">
            <div className="a-policies__col">
              <h2 className="a-policies__title">Terms of Service</h2>
              <p className="a-policies__text">
                By using CarryOn, you agree to our transit policies regarding prohibited items, handling requirements, and liability limits. We ensure every user and driver operates within a framework of safety and professional conduct. Our terms are designed to protect both the sender and the handler.
              </p>
              <a href="/terms" className="a-policies__link">
                Read full policy
                <img src="/assets/ab-icon-arrow-sm.svg" width={8} height={8} alt="" />
              </a>
            </div>
            <div className="a-policies__col">
              <h2 className="a-policies__title">Privacy &amp; Data</h2>
              <p className="a-policies__text">
                Your location data and personal information are encrypted with enterprise-grade security. We only use data to facilitate successful deliveries and improve our logistics precision. We are committed to transparency and never sell your personal information to third parties.
              </p>
              <a href="/privacy" className="a-policies__link">
                Read full policy
                <img src="/assets/ab-icon-arrow-sm.svg" width={8} height={8} alt="" />
              </a>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="a-cta">
          <div className="a-cta__inner">
            <h2 className="a-cta__title">Ready to Get Started?</h2>
            <p className="a-cta__desc">
              Join thousands of businesses and individuals who trust CarryOn for their daily logistics needs and experience the future of delivery.
            </p>
            <div className="a-cta__btns">
              <Link href="/book-delivery" className="a-cta__btn a-cta__btn--primary">Book Delivery Now</Link>
              <button type="button" className="a-cta__btn a-cta__btn--outline">Become a Driver</button>
            </div>
          </div>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer className="a-footer">
        <div className="a-footer__grid">
          <div className="a-footer__brand">
            <p className="a-footer__logo">CarryOn</p>
            <p className="a-footer__brand-copy">
              © 2024 CarryOn Logistics. Precision in Motion. Providing high-end logistics solutions globally.
            </p>
          </div>
          <div className="a-footer__col">
            <h3 className="a-footer__head">RESOURCES</h3>
            <ul className="a-footer__links">
              <li><a href="#">Sitemap</a></li>
              <li><a href="/about#contact">Contact Us</a></li>
              <li><a href="/riders">Pricing Plans</a></li>
            </ul>
          </div>
          <div className="a-footer__col">
            <h3 className="a-footer__head">LEGAL</h3>
            <ul className="a-footer__links">
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
          <div className="a-footer__col a-footer__col--hq">
            <div className="a-footer__globe-btn">
              <img src="/assets/ab-icon-globe.svg" width={12} height={12} alt="" />
            </div>
            <p className="a-footer__hq-label">GLOBAL HQ • LOGISTICS CITY</p>
          </div>
        </div>
      </footer>
    </>
  );
}
