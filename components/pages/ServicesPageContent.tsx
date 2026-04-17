/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";

export function ServicesPageContent() {
  const [distance, setDistance] = useState(5);
  const [vehicle, setVehicle] = useState<"bike" | "pickup" | "truck">("bike");

  const rates = { bike: { base: 8, perKm: 1.2 }, pickup: { base: 15, perKm: 2.5 }, truck: { base: 25, perKm: 4.8 } };
  const r = rates[vehicle];
  const total = (r.base + r.perKm * distance).toFixed(2);

  return (
    <main>

      {/* ── HERO ── */}
      <section className="sv-hero">
        <div className="sv-hero__grid">
          <div className="sv-hero__copy">
            <div className="sv-kicker-badge">ENTERPRISE INFRASTRUCTURE</div>
            <h1 className="sv-hero__title">
              The<br />
              Infrastructure<br />
              for <span className="sv-blue">Global</span><br />
              <span className="sv-blue">Logistics</span>
            </h1>
            <p className="sv-hero__lead">
              High-performance bulk delivery and fleet management solutions for
              modern enterprises. Scalable, reliable, and developer-first.
            </p>
            <button type="button" className="sv-btn sv-btn--primary sv-btn--hero">Contact Sales</button>
            <div className="sv-hero__track">
              <div className="sv-track__input-wrap">
                <img src="/assets/sv-icon-search.svg" width={18} height={18} alt="" className="sv-track__icon" />
                <input
                  type="text"
                  className="sv-track__input"
                  placeholder="Enter Tracking ID (e.g. CR-1234)"
                  aria-label="Tracking ID"
                />
              </div>
              <button type="button" className="sv-btn sv-btn--primary sv-btn--track">Track Order</button>
            </div>
          </div>
          <div className="sv-hero__visual">
            <div className="sv-hero__img-wrap">
              <div className="sv-hero__img-overlay" />
              <img
                src="/assets/sv-logistics-hub.jpg"
                alt="Global logistics infrastructure"
                className="sv-hero__img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── BULK DELIVERY SOLUTIONS — BENTO GRID ── */}
      <section className="sv-bulk">
        <div className="sv-bulk__shell">
          <div className="sv-bulk__header">
            <p className="sv-label">CORE CAPABILITIES</p>
            <h2 className="sv-h2">Bulk Delivery Solutions</h2>
          </div>
          <div className="sv-bulk__bento">
            {/* Feature 1: Large — top-left */}
            <div className="sv-bento-card sv-bento-card--large">
              <div className="sv-bento-card__top-row">
                <div className="sv-bento-icon">
                  <img src="/assets/sv-icon-bulk.svg" width={18} height={18} alt="" />
                </div>
                <span className="sv-badge sv-badge--outline">OPTIMIZED</span>
              </div>
              <h3 className="sv-h3">Bulk Order Processing</h3>
              <p className="sv-body">
                Process thousands of delivery requests simultaneously with our
                high-throughput orchestration engine. Zero latency, even at peak scale.
              </p>
            </div>

            {/* Feature 2: Route Opt — top-right, blue */}
            <div className="sv-bento-card sv-bento-card--blue">
              <div className="sv-bento-card__top">
                <img src="/assets/sv-icon-route.svg" width={27} height={27} alt="" />
                <h3 className="sv-h3 sv-h3--white">Route Optimization</h3>
                <p className="sv-body sv-body--white-80">
                  Proprietary ML algorithms reducing fuel consumption by 22% on average
                  across global fleets.
                </p>
              </div>
              <div className="sv-bento-metrics">
                <span className="sv-bento-metrics__label">LIVE METRICS</span>
                <span className="sv-bento-metrics__value">EST. SAVINGS: $2.4M</span>
              </div>
            </div>

            {/* Infra diagram — overlaps both rows */}
            <div className="sv-bento-diagram" aria-hidden="true">
              <img src="/assets/sv-infra-diagram.png" alt="" className="sv-bento-diagram__img" />
            </div>

            {/* Feature 3: Enterprise Support — bottom-left */}
            <div className="sv-bento-card sv-bento-card--support">
              <div className="sv-bento-icon">
                <img src="/assets/sv-icon-support.svg" width={20} height={18} alt="" />
              </div>
              <h3 className="sv-h3 sv-h3--sm">Enterprise Support</h3>
              <p className="sv-body sv-body--sm">
                24/7 dedicated engineering support and technical account managers for
                seamless operations.
              </p>
            </div>

            {/* Feature 4: Automated Compliance — bottom-right */}
            <div className="sv-bento-card sv-bento-card--compliance">
              <div className="sv-bento-card__content">
                <h3 className="sv-h3">Automated Compliance</h3>
                <p className="sv-body">
                  Built-in regulatory handling for regional transportation laws and
                  digital signature chains.
                </p>
              </div>
              <div className="sv-bento-bars" aria-hidden="true">
                <div className="sv-bento-bar" style={{ height: 96, background: "#2f80ed" }} />
                <div className="sv-bento-bar" style={{ height: 128, background: "#1d4ed8" }} />
                <div className="sv-bento-bar" style={{ height: 64, background: "#003d9b" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VERSATILE SOLUTIONS ── */}
      <section className="sv-versatile">
        <div className="sv-versatile__shell">
          <p className="sv-label sv-label--center">VERSATILE SOLUTIONS</p>
          <h2 className="sv-h2 sv-h2--center">Tailored to Your Delivery Needs</h2>
          <div className="sv-versatile__grid">
            <div className="sv-versatile__card">
              <div className="sv-versatile__icon">
                <img src="/assets/sv-icon-parcel.svg" width={22} height={25} alt="" />
              </div>
              <h3 className="sv-h3 sv-h3--sm">Parcel Delivery</h3>
              <p className="sv-body sv-body--gray">
                Perfect for documents, small gifts, or everyday essentials that need
                to get there fast.
              </p>
            </div>
            <div className="sv-versatile__card">
              <div className="sv-versatile__icon">
                <img src="/assets/sv-icon-biz.svg" width={25} height={23} alt="" />
              </div>
              <h3 className="sv-h3 sv-h3--sm">Business Shipments</h3>
              <p className="sv-body sv-body--gray">
                Scalable logistics for retail, e-commerce, and corporate supply chains
                with bulk rates.
              </p>
            </div>
            <div className="sv-versatile__card">
              <div className="sv-versatile__icon">
                <img src="/assets/sv-icon-personal.svg" width={28} height={23} alt="" />
              </div>
              <h3 className="sv-h3 sv-h3--sm">Personal Moves</h3>
              <p className="sv-body sv-body--gray">
                Easily transport furniture or household items across the city without
                the stress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRECISION FLEET ── */}
      <section className="sv-fleet">
        <div className="sv-fleet__shell">
          <h2 className="sv-h2 sv-h2--center sv-h2--white">Our Precision Fleet</h2>
          <p className="sv-fleet__sub">Built for speed, reliability, and cargo integrity.</p>
          <div className="sv-fleet__grid">
            {/* Bike — glass card */}
            <div className="sv-fleet__card sv-fleet__card--glass">
              <span className="sv-fleet__badge sv-fleet__badge--white">Best for documents</span>
              <img src="/assets/sv-icon-bike.svg" width={48} height={32} alt="Bike" className="sv-fleet__icon" />
              <p className="sv-fleet__name">Bike</p>
              <p className="sv-fleet__rate">From RM8/km</p>
              <span className="sv-fleet__tag">ULTRA FAST</span>
            </div>
            {/* Pickup — featured card */}
            <div className="sv-fleet__card sv-fleet__card--featured">
              <span className="sv-fleet__badge sv-fleet__badge--blue">Most Popular</span>
              <img src="/assets/sv-icon-pickup.svg" width={44} height={32} alt="Pickup" className="sv-fleet__icon" />
              <p className="sv-fleet__name sv-fleet__name--dark">Pickup</p>
              <p className="sv-fleet__rate sv-fleet__rate--blue">From RM15/km</p>
              <span className="sv-fleet__tag sv-fleet__tag--dark">BEST FOR SMALL FURNITURE</span>
            </div>
            {/* Truck — glass card */}
            <div className="sv-fleet__card sv-fleet__card--glass">
              <span className="sv-fleet__badge sv-fleet__badge--white">Best for heavy loads</span>
              <img src="/assets/sv-icon-truck.svg" width={32} height={40} alt="Truck" className="sv-fleet__icon" />
              <p className="sv-fleet__name">Truck</p>
              <p className="sv-fleet__rate">From RM25/km</p>
              <span className="sv-fleet__tag">HIGH CAPACITY</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRANSPARENT PRICING ── */}
      <section className="sv-pricing" id="pricing">
        <div className="sv-pricing__shell">
          <div className="sv-pricing__copy">
            <p className="sv-label">TRANSPARENCY FIRST</p>
            <h2 className="sv-pricing__title">Transparent pricing with no hidden surprises.</h2>
            <p className="sv-pricing__desc">
              We believe in fair, distance-based pricing. Calculate your estimated costs
              before you book, so you&rsquo;re always in control of your budget.
            </p>
            <ul className="sv-pricing__list">
              <li>
                <img src="/assets/sv-icon-checkmark.svg" width={20} height={20} alt="" />
                No surge pricing during peak hours
              </li>
              <li>
                <img src="/assets/sv-icon-checkmark.svg" width={20} height={20} alt="" />
                Direct door-to-door transit rates
              </li>
              <li>
                <img src="/assets/sv-icon-checkmark.svg" width={20} height={20} alt="" />
                Complimentary insurance on all trips
              </li>
            </ul>
          </div>
          <div className="sv-estimator">
            <div className="sv-estimator__header">
              <span className="sv-estimator__title">Price Estimator</span>
              <span className="sv-badge sv-badge--green">NO HIDDEN CHARGES</span>
            </div>
            <div className="sv-estimator__slider-group">
              <div className="sv-estimator__slider-top">
                <span className="sv-estimator__label">DELIVERY DISTANCE (KM)</span>
                <span className="sv-badge sv-badge--instant">Instant estimate</span>
              </div>
              <input
                type="range"
                min={1}
                max={100}
                value={distance}
                onChange={(e) => setDistance(Number(e.target.value))}
                className="sv-estimator__slider"
                aria-label="Delivery distance"
              />
              <div className="sv-estimator__range-row">
                <span>{distance} KM</span>
                <span>100 KM</span>
              </div>
            </div>
            <div className="sv-estimator__vehicle-group">
              <p className="sv-estimator__label">VEHICLE SELECTION</p>
              <div className="sv-estimator__vehicles">
                {(["bike", "pickup", "truck"] as const).map((v) => (
                  <button
                    key={v}
                    type="button"
                    className={`sv-estimator__veh ${vehicle === v ? "is-active" : ""}`}
                    onClick={() => setVehicle(v)}
                  >
                    {v.charAt(0).toUpperCase() + v.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            <div className="sv-estimator__total">
              <span>Estimated Total</span>
              <span className="sv-estimator__amount">RM{total}</span>
            </div>
            <button type="button" className="sv-btn sv-btn--primary sv-btn--full">Book Delivery</button>
          </div>
        </div>
      </section>

      {/* ── CUSTOMER STORIES ── */}
      <section className="sv-stories">
        <div className="sv-stories__shell">
          <p className="sv-label sv-label--center">CUSTOMER STORIES</p>
          <h2 className="sv-h2 sv-h2--center">What our riders say</h2>
          <div className="sv-stories__grid">
            <div className="sv-stories__card">
              <div className="sv-stars" aria-label="5 stars">⭐⭐⭐⭐⭐</div>
              <p className="sv-stories__quote">
                &ldquo;Fast and reliable delivery every time. CarryOn has completely changed
                how we handle our last-mile distribution.&rdquo;
              </p>
              <div className="sv-stories__author">
                <img src="/assets/avatar-david.jpg" width={56} height={56} alt="David Chen" className="sv-stories__avatar" />
                <div>
                  <p className="sv-stories__name">David Chen</p>
                  <p className="sv-stories__role">E-commerce Owner • Austin, TX</p>
                </div>
              </div>
            </div>
            <div className="sv-stories__card">
              <div className="sv-stars" aria-label="5 stars">⭐⭐⭐⭐⭐</div>
              <p className="sv-stories__quote">
                &ldquo;The tracking is the most precise I&rsquo;ve seen in any logistics app.
                It&rsquo;s actually accurate to the minute.&rdquo;
              </p>
              <div className="sv-stories__author">
                <img src="/assets/avatar-sarah.jpg" width={56} height={56} alt="Sarah Williams" className="sv-stories__avatar" />
                <div>
                  <p className="sv-stories__name">Sarah Williams</p>
                  <p className="sv-stories__role">Project Manager • Chicago, IL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="sv-cta-wrap">
        <div className="sv-cta">
          <h2 className="sv-cta__title">Ready to Send Your First Delivery?</h2>
          <p className="sv-cta__desc">
            Join thousands of riders who experience the precision of CarryOn every single day.
          </p>
          <div className="sv-cta__btns">
            <button type="button" className="sv-btn sv-btn--cta-white">Book Delivery</button>
            <button type="button" className="sv-btn sv-btn--cta-ghost">View Pricing</button>
          </div>
        </div>
      </section>

    </main>
  );
}
