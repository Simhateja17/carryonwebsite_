/* eslint-disable @next/next/no-img-element */

export function RidersPageContent() {
  return (
    <>
      <main>
      
            {/*══════════════════════════════════════════════════════════════
                 HERO — Figma 311-3165 / 311-3167 / 311-3168 / 311-3170
                 2-col grid, max-width 1280px, padding 64px 32px, gap 48px
                 ══════════════════════════════════════════════════════════════*/}
            <section className="r-hero">
              {/*311-3191: decorative blur blob*/}
              <div className="r-hero__blob" aria-hidden="true"></div>
      
              {/*311-3167: 2-col grid container*/}
              <div className="r-hero__grid">
      
                {/*311-3168: left column — flex col, gap 31px*/}
                <div className="r-hero__copy">
      
                  {/*311-3170: heading — Manrope 800, 60px, black + blue*/}
                  <h1 className="r-hero__title">
                    Precision Logistics<br />
                    <span className="r-hero__title--blue">for Every Mile.</span>
                  </h1>
      
                  {/*311-3171 / 3172: description container + text*/}
                  <div className="r-hero__desc-wrap">
                    <p className="r-hero__desc">
                      Experience the next generation of delivery. Real-time
                      tracking, transparent pricing, and a fleet ready to move
                      your world.
                    </p>
                  </div>
      
                  {/*311-3173: button group*/}
                  <div className="r-hero__btns">
                    <a href="/book-delivery" className="r-btn r-btn--primary">
                      Book Delivery
                      <img src="/assets/icon-book-delivery.svg" width={16} height={16} alt="" />
                    </a>
                    <a href="#pricing" className="r-btn r-btn--ghost">
                      View Pricing
                    </a>
                  </div>

                  {/*Trust badge — stacked avatars + label*/}
                  <div className="r-hero__trust">
                    <div className="r-hero__avatars">
                      <img src="/assets/rider-avatar1.jpg" width={40} height={40} alt="" className="r-hero__avatar" />
                      <img src="/assets/rider-avatar2.jpg" width={40} height={40} alt="" className="r-hero__avatar" />
                      <img src="/assets/rider-avatar3.jpg" width={40} height={40} alt="" className="r-hero__avatar" />
                    </div>
                    <span className="r-hero__trust-label">TRUSTED BY 10K+ RIDERS</span>
                  </div>
      
                </div>{/*/r-hero__copy*/}
      
                {/*311-3176: right column — phone mockup with map*/}
                <div className="r-hero__visual">
                  <div className="r-phone">
                    <div className="r-phone__frame">
                      <div className="r-phone__screen">
                        <img src="/assets/rider-hero-map.jpg" alt="" className="r-phone__map-img" />
                        <div className="r-phone__pin">
                          <img src="/assets/icon-map-pin.svg" width={36} height={40} alt="" />
                        </div>
                        <div className="r-phone__status-card">
                          <div className="r-phone__status-top">
                            <span className="r-phone__status-badge">IN TRANSIT</span>
                            <span className="r-phone__status-eta">Arrival: 12:45 PM</span>
                          </div>
                          <div className="r-phone__status-row">
                            <img src="/assets/icon-transit.svg" width={20} height={20} alt="" />
                            <div className="r-phone__status-info">
                              <span className="r-phone__status-name">James Wilson</span>
                              <span className="r-phone__status-sub">WhiteFord Transit · KM-4402</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="r-phone__notch"></div>
                    </div>
                  </div>
                </div>{/*/r-hero__visual*/}
      
              </div>{/*/r-hero__grid*/}
            </section>
      
            {/*══════════════════════════════════════════════════════════════
                 VERSATILE SOLUTIONS — Figma 311-3218 to 311-3232
                 bg rgba(166,210,243,0.20), padding 96px 0
                 3-col card grid, grid-template-rows 290px
                 ══════════════════════════════════════════════════════════════*/}
            <section className="r-solutions">
              <div className="r-solutions__wrap">
      
                {/*311-3220: header group — flex col, center, gap 16.5px*/}
                <div className="r-solutions__header">
                  {/*311-3221: kicker — Manrope 700, 12px, #2F80ED, 2.4px tracking*/}
                  <span className="r-kicker">VERSATILE SOLUTIONS</span>
                  {/*311-3222 / 3223: title wrap + text*/}
                  <div className="r-solutions__title-wrap">
                    <h2 className="r-section-title">Tailored to Your Delivery Needs</h2>
                  </div>
                </div>
      
                {/*311-3224: 3-col cards grid — repeat(3,1fr), gap 32px, rows 290px*/}
                <div className="r-solutions__grid">
      
                  {/*311-3225: card — padding 40px, radius 16px, white, shadow*/}
                  <article className="r-solutions__card">
                    <div className="r-solutions__card-icon">
                      <img src="/assets/icon-usecase1.svg" width={22} height={25} alt="" />
                    </div>
                    <div className="r-solutions__card-body">
                      <h3 className="r-solutions__card-title">Parcel Delivery</h3>
                      <p className="r-solutions__card-desc">Perfect for documents, small gifts, or everyday essentials that need to get there fast.</p>
                    </div>
                  </article>

                  <article className="r-solutions__card">
                    <div className="r-solutions__card-icon">
                      <img src="/assets/icon-usecase2.svg" width={25} height={22} alt="" />
                    </div>
                    <div className="r-solutions__card-body">
                      <h3 className="r-solutions__card-title">Business Shipments</h3>
                      <p className="r-solutions__card-desc">Scalable logistics for retail, e-commerce, and corporate supply chains with bulk rates.</p>
                    </div>
                  </article>

                  <article className="r-solutions__card">
                    <div className="r-solutions__card-icon">
                      <img src="/assets/icon-usecase3.svg" width={27} height={22} alt="" />
                    </div>
                    <div className="r-solutions__card-body">
                      <h3 className="r-solutions__card-title">Personal Moves</h3>
                      <p className="r-solutions__card-desc">Easily transport furniture or household items across the city without the stress.</p>
                    </div>
                  </article>
      
                </div>{/*/r-solutions__grid*/}
              </div>{/*/r-solutions__wrap*/}
            </section>
      
            {/*══════════════════════════════════════════════════════════════
                 FOUR STEPS TO DELIVERY — Figma 311-3249 to 311-3264
                 max-width 1280px, padding 96px 32px, gap 64px
                 ══════════════════════════════════════════════════════════════*/}
            <section className="r-steps" id="how">
              <div className="r-steps__wrap">
      
                {/*Header row — kicker+title on left, desc on right*/}
                <div className="r-steps__header">
                  <div className="r-steps__header-left">
                    <span className="r-kicker">THE PROCESS</span>
                    <h2 className="r-steps__title">Four Steps to Delivery</h2>
                  </div>
                  <div className="r-steps__header-desc">
                    <p>Seamlessly integrated from the moment you book until the final handover.</p>
                  </div>
                </div>

                {/*Steps 4-col grid — connector line runs behind the boxes*/}
                <div className="r-steps__grid">
                  <div className="r-steps__connector" aria-hidden="true"></div>

                  {/*Step 1 — solid blue box (active)*/}
                  <div className="r-steps__item">
                    <div className="r-steps__icon r-steps__icon--active">
                      <span className="r-steps__num">1</span>
                    </div>
                    <h3 className="r-steps__item-title">Enter Details</h3>
                    <p className="r-steps__item-desc">Provide pickup and drop-off locations with a few simple taps.</p>
                  </div>

                  {/*Step 2 — outlined box*/}
                  <div className="r-steps__item">
                    <div className="r-steps__icon r-steps__icon--outline">
                      <span className="r-steps__num">2</span>
                    </div>
                    <h3 className="r-steps__item-title">Choose Vehicle</h3>
                    <p className="r-steps__item-desc">Select from bike to heavy-duty trucks based on your cargo size.</p>
                  </div>

                  {/*Step 3 — outlined box*/}
                  <div className="r-steps__item">
                    <div className="r-steps__icon r-steps__icon--outline">
                      <span className="r-steps__num">3</span>
                    </div>
                    <h3 className="r-steps__item-title">Track Live</h3>
                    <p className="r-steps__item-desc">Monitor your driver in real-time with precise GPS telemetry.</p>
                  </div>

                  {/*Step 4 — outlined box*/}
                  <div className="r-steps__item">
                    <div className="r-steps__icon r-steps__icon--outline">
                      <span className="r-steps__num">4</span>
                    </div>
                    <h3 className="r-steps__item-title">Delivered</h3>
                    <p className="r-steps__item-desc">Secure confirmation and digital receipt upon successful arrival.</p>
                  </div>

                </div>{/*/r-steps__grid*/}
              </div>{/*/r-steps__wrap*/}
            </section>
      
            {/*══════════════════════════════════════════════════════════════
                 OUR PRECISION FLEET — Figma 311-3291 to 311-3305
                 background #2F80ED, padding 96px 0
                 fleet card grid (4 cols), cards with blur/glass style
                 ══════════════════════════════════════════════════════════════*/}
            <section className="r-fleet">
              <div className="r-fleet__wrap">
      
                {/*311-3294 / 3295 / 3296: header*/}
                <div className="r-fleet__header">
                  <div className="r-fleet__title-group">
                    {/*311-3296: title — Manrope 800, 36px, #FFF, -0.9px*/}
                    <h2 className="r-fleet__title">Our Precision Fleet</h2>
                  </div>
                  {/*311-3297 / 3298: subtitle — opacity 0.8, #C4D2FF, 16px*/}
                  <div className="r-fleet__subtitle-wrap">
                    <p className="r-fleet__subtitle">Built for speed, reliability, and cargo integrity.</p>
                  </div>
                </div>
      
                {/*311-3300: fleet cards grid — repeat(4,1fr), radius 16px, glass bg*/}
                <div className="r-fleet__grid">
      
                  <div className="r-fleet__card">
                    <div className="r-fleet__card-icon">
                      <img src="/assets/icon-bike.svg" width={48} height={32} alt="" />
                    </div>
                    <div className="r-fleet__card-info">
                      <h3 className="r-fleet__card-name">Bike</h3>
                      <p className="r-fleet__card-spec">Small packages &amp; documents</p>
                      <span className="r-fleet__card-badge">ULTRA FAST</span>
                    </div>
                  </div>

                  <div className="r-fleet__card r-fleet__card--featured">
                    <div className="r-fleet__card-icon">
                      <img src="/assets/icon-pickup.svg" width={44} height={32} alt="" />
                    </div>
                    <div className="r-fleet__card-info">
                      <h3 className="r-fleet__card-name">Pickup</h3>
                      <p className="r-fleet__card-spec">Medium loads &amp; appliances</p>
                      <span className="r-fleet__card-badge">MOST POPULAR</span>
                    </div>
                  </div>

                  <div className="r-fleet__card">
                    <div className="r-fleet__card-icon">
                      <img src="/assets/icon-truck-fleet.svg" width={32} height={40} alt="" />
                    </div>
                    <div className="r-fleet__card-info">
                      <h3 className="r-fleet__card-name">Truck</h3>
                      <p className="r-fleet__card-spec">Heavy goods &amp; industrial</p>
                      <span className="r-fleet__card-badge">HIGH CAPACITY</span>
                    </div>
                  </div>
      
                </div>{/*/r-fleet__grid*/}
              </div>{/*/r-fleet__wrap*/}
            </section>
      
            {/*══════════════════════════════════════════════════════════════
                 TRANSPARENT PRICING — Figma 311-3328 to 311-3342
                 2-col grid, max-width 1280px, padding 96px 32px, gap 64px
                 Left: copy + features · Right: pricing calculator UI
                 ══════════════════════════════════════════════════════════════*/}
            <section className="r-pricing">
              <div className="r-pricing__grid">
      
                {/*311-3329: left column — flex col, gap 16.5px*/}
                <div className="r-pricing__copy">
                  {/*311-3330: kicker — Manrope 700, 12px, #2F80ED, 2.4px, uppercase*/}
                  <span className="r-kicker">TRANSPARENCY FIRST</span>
                  {/*311-3332: heading — Manrope 800, 36px, #000, 45px, -0.9px*/}
                  <h2 className="r-pricing__title">Transparent pricing with no<br />hidden surprises.</h2>
                  {/*311-3334: body — Manrope 400, 18px, #000, 29.25px*/}
                  <p className="r-pricing__desc">
                    We believe in fair, distance-based pricing. Calculate your estimated
                    costs before you book, so you're always in control of your budget.
                  </p>
                  {/*311-3335: features list — flex col, gap 16px, padding-top 15.5px*/}
                  <ul className="r-pricing__features">
                    <li className="r-pricing__feature">
                      <span className="r-pricing__check" aria-hidden="true">
                        <svg className="r-pricing__check-icon" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="11" cy="11" r="11" fill="#2F80ED"/>
                          <path d="M6.5 11.2l2.8 2.8 6.2-6.2" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <span>No surge pricing during peak hours</span>
                    </li>
                    <li className="r-pricing__feature">
                      <span className="r-pricing__check" aria-hidden="true">
                        <svg className="r-pricing__check-icon" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="11" cy="11" r="11" fill="#2F80ED"/>
                          <path d="M6.5 11.2l2.8 2.8 6.2-6.2" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <span>Direct door-to-door transit rates</span>
                    </li>
                    <li className="r-pricing__feature">
                      <span className="r-pricing__check" aria-hidden="true">
                        <svg className="r-pricing__check-icon" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="11" cy="11" r="11" fill="#2F80ED"/>
                          <path d="M6.5 11.2l2.8 2.8 6.2-6.2" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <span>Complimentary insurance on all trips</span>
                    </li>
                  </ul>
                </div>{/*/r-pricing__copy*/}
      
                {/*Right: Price Estimator (screenshot / Figma 311-3328)*/}
                <div className="r-pricing__calc">
                  <div className="r-pricing__calc-card">
                    <h3 className="r-pricing__calc-title">Price Estimator</h3>
      
                    <div className="r-pricing__slider-block">
                      <label className="r-pricing__block-label" htmlFor="r-pricing-distance">Delivery distance (km)</label>
                      <input
                        type="range"
                        id="r-pricing-distance"
                        className="r-pricing__range"
                        min={5}
                        max={100}
                        defaultValue={52}
                        aria-valuemin={5}
                        aria-valuemax={100}
                        aria-valuenow={52}
                        aria-label="Delivery distance in kilometres"
                      />
                      <div className="r-pricing__slider-scale">
                        <span>5 KM</span>
                        <span>100 KM</span>
                      </div>
                    </div>
      
                    <div className="r-pricing__vehicle-select">
                      <span className="r-pricing__block-label">Vehicle selection</span>
                      <div className="r-pricing__vehicles" role="group" aria-label="Vehicle type">
                        <button type="button" className="r-pricing__vtype r-pricing__vtype--active">Bike</button>
                        <button type="button" className="r-pricing__vtype">Pickup</button>
                        <button type="button" className="r-pricing__vtype">Truck</button>
                      </div>
                    </div>
      
                    <div className="r-pricing__divider" aria-hidden="true"></div>
      
                    <div className="r-pricing__estimate">
                      <span className="r-pricing__est-label">Estimated Total</span>
                      <span className="r-pricing__est-price">$18.50</span>
                    </div>
      
                    <button type="button" className="r-pricing__cta">Book This Route</button>
                  </div>
                </div>
      
              </div>{/*/r-pricing__grid*/}
            </section>
      
            {/*══════════════════════════════════════════════════════════════
                 POWERFUL APP — Figma 311-3378 to 311-3394
                 bg rgba(166,210,243,0.20), 2-col grid, 0 32px padding, gap 80px
                 Left: phone mockup · Right: features
                 ══════════════════════════════════════════════════════════════*/}
            <section className="r-app">
              {/*311-3379: 2-col grid, max-width 1280px, padding 0 32px, gap 80px, rows 568px*/}
              <div className="r-app__grid">
      
                {/*Left col: app screenshot*/}
                <div className="r-app__phone-col">
                  <img src="/assets/rider-security-visual.png" alt="Delivery safety and tracking visual" className="r-app__screenshot" />
                </div>
      
                {/*311-3380: right column — flex col, gap 40px, col 2 span 1*/}
                <div className="r-app__copy">
      
                  {/*311-3381: heading group — flex col, gap 16.5px*/}
                  <div className="r-app__heading-group">
                    {/*311-3382: kicker — Manrope 700, 12px, #2F80ED, uppercase*/}
                    <span className="r-kicker">POWERFUL APP</span>
                    {/*311-3384: title — Manrope 800, 36px, #000, 45px, -0.9px*/}
                    <h2 className="r-app__title">Everything you need, right in your<br />pocket.</h2>
                  </div>
      
                  {/*311-3391: features list — flex col*/}
                  <div className="r-app__features">
      
                      <div className="r-app__feature">
                      <div className="r-app__feature-icon">
                        <img src="/assets/icon-notif.svg" width={20} height={20} alt="" />
                      </div>
                      <div className="r-app__feature-text">
                        <h4 className="r-app__feature-title">Instant Notifications</h4>
                        <p className="r-app__feature-desc">Get real-time updates for every milestone—from dispatch to door.</p>
                      </div>
                    </div>

                    <div className="r-app__feature">
                      <div className="r-app__feature-icon">
                        <img src="/assets/icon-payment.svg" width={22} height={16} alt="" />
                      </div>
                      <div className="r-app__feature-text">
                        <h4 className="r-app__feature-title">Easy Payments</h4>
                        <p className="r-app__feature-desc">Secure digital wallets, card payments, or business billing options.</p>
                      </div>
                    </div>

                    <div className="r-app__feature">
                      <div className="r-app__feature-icon">
                        <img src="/assets/icon-share-track.svg" width={20} height={20} alt="" />
                      </div>
                      <div className="r-app__feature-text">
                        <h4 className="r-app__feature-title">Live Share Tracking</h4>
                        <p className="r-app__feature-desc">Share live tracking links with your recipients for a seamless handover.</p>
                      </div>
                    </div>
      
                  </div>{/*/r-app__features*/}
                </div>{/*/r-app__copy*/}
      
              </div>{/*/r-app__grid*/}
            </section>
      
            {/*══════════════════════════════════════════════════════════════
                 YOUR TRUST IS OUR PRIORITY — Figma 311-3416 to 311-3427
                 max-width 1280px, padding 96px 32px, gap 64px
                 Kicker: SECURITY FIRST · 3-col cards, border #A6D2F3, radius 24px
                 ══════════════════════════════════════════════════════════════*/}
            <section className="r-trust">
              <div className="r-trust__wrap">
      
                {/*311-3417: header group — flex col, center, gap 16.5px*/}
                <div className="r-trust__header">
                  {/*311-3418: kicker*/}
                  <span className="r-kicker r-kicker--center">SECURITY FIRST</span>
                  {/*311-3419 / 3420: title*/}
                  <div className="r-trust__title-wrap">
                    <h2 className="r-section-title">Your Trust is Our Priority</h2>
                  </div>
                </div>
      
                {/*311-3421: 3-col grid — repeat(3,1fr), rows 235.50px, gap 32px*/}
                <div className="r-trust__grid">
      
                  {/*311-3422: card — padding 40px, radius 24px, border #A6D2F3*/}
                  <article className="r-trust__card">
                    <div className="r-trust__card-icon">
                      <img src="/assets/icon-verified.svg" width={24} height={30} alt="" />
                    </div>
                    <div className="r-trust__card-body">
                      <h3 className="r-trust__card-title">Verified Drivers</h3>
                      <p className="r-trust__card-desc">Every driver undergoes a rigorous background check and safety training program.</p>
                    </div>
                  </article>

                  <article className="r-trust__card">
                    <div className="r-trust__card-icon">
                      <img src="/assets/icon-secure-pay.svg" width={30} height={30} alt="" />
                    </div>
                    <div className="r-trust__card-body">
                      <h3 className="r-trust__card-title">Secure Payments</h3>
                      <p className="r-trust__card-desc">Industry-standard encryption for every transaction you make on our platform.</p>
                    </div>
                  </article>

                  <article className="r-trust__card">
                    <div className="r-trust__card-icon">
                      <img src="/assets/icon-247support.svg" width={30} height={27} alt="" />
                    </div>
                    <div className="r-trust__card-body">
                      <h3 className="r-trust__card-title">24/7 Support</h3>
                      <p className="r-trust__card-desc">Our dedicated concierge team is always online to assist with your delivery concerns.</p>
                    </div>
                  </article>
      
                </div>{/*/r-trust__grid*/}
              </div>{/*/r-trust__wrap*/}
            </section>
      
            {/*══════════════════════════════════════════════════════════════
                 TESTIMONIALS (HIGHLIGHTED) — Figma 311-3440 to 311-3454
                 bg rgba(166,210,243,0.20), padding 96px 32px
                 2-col grid, rows 273.50px, white cards radius 32px
                 ══════════════════════════════════════════════════════════════*/}
            <section className="r-testimonials-hl">
              <div className="r-testimonials-hl__grid">
      
                <article className="r-testimonials-hl__card">
                  <div className="r-testimonials-hl__quote-wrap">
                    <span className="r-testimonials-hl__mark" aria-hidden="true">&ldquo;</span>
                    <blockquote className="r-testimonials-hl__quote">
                      Fast and reliable delivery every time. CarryOn has completely changed how we handle our last-mile distribution.
                    </blockquote>
                  </div>
                  <div className="r-testimonials-hl__author">
                    <div className="r-testimonials-hl__avatar" role="img" aria-label=""></div>
                    <div className="r-testimonials-hl__author-info">
                      <span className="r-testimonials-hl__name">David Chen</span>
                      <span className="r-testimonials-hl__role">E-COMMERCE OWNER</span>
                    </div>
                  </div>
                </article>
      
                <article className="r-testimonials-hl__card">
                  <div className="r-testimonials-hl__quote-wrap">
                    <span className="r-testimonials-hl__mark" aria-hidden="true">&ldquo;</span>
                    <blockquote className="r-testimonials-hl__quote">
                      The tracking is the most precise I've seen in any logistics app. It's actually accurate to the minute.
                    </blockquote>
                  </div>
                  <div className="r-testimonials-hl__author">
                    <div className="r-testimonials-hl__avatar r-testimonials-hl__avatar--2" role="img" aria-label=""></div>
                    <div className="r-testimonials-hl__author-info">
                      <span className="r-testimonials-hl__name">Sarah Williams</span>
                      <span className="r-testimonials-hl__role">PROJECT MANAGER</span>
                    </div>
                  </div>
                </article>
      
              </div>
            </section>
      
            {/*FAQ — narrow column, blue panels, no heavy borders (screenshot)*/}
            <section className="r-faq">
              <div className="r-faq__container">
                <div className="r-faq__header">
                  <h2 className="r-faq__title">Frequently Asked Questions</h2>
                </div>
      
                <div className="r-faq__list">
                  <details className="r-faq__item" open>
                    <summary className="r-faq__question">
                      <span className="r-faq__q-text">How is the price calculated?</span>
                      <span className="r-faq__icon" aria-hidden="true">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
                      </span>
                    </summary>
                    <div className="r-faq__answer">
                      <p>Pricing is based on the distance between pickup and drop-off, the type of vehicle selected, and current demand. We provide a guaranteed price before you confirm your booking.</p>
                    </div>
                  </details>
      
                  <details className="r-faq__item">
                    <summary className="r-faq__question">
                      <span className="r-faq__q-text">Can I cancel my delivery?</span>
                      <span className="r-faq__icon" aria-hidden="true">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
                      </span>
                    </summary>
                    <div className="r-faq__answer">
                      <p>Yes. You can cancel free of charge before a driver is assigned. After assignment, a small cancellation fee may apply depending on how close the driver is to pickup.</p>
                    </div>
                  </details>
      
                  <details className="r-faq__item">
                    <summary className="r-faq__question">
                      <span className="r-faq__q-text">Are my items insured during transit?</span>
                      <span className="r-faq__icon" aria-hidden="true">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
                      </span>
                    </summary>
                    <div className="r-faq__answer">
                      <p>Every shipment includes baseline coverage. You can declare higher value items in the app for additional protection up to our stated limits.</p>
                    </div>
                  </details>
                </div>
              </div>
            </section>
      
            {/*What our riders say — stars, centered quote, location subtitle*/}
            <section className="r-reviews">
              <div className="r-reviews__wrap">
                <div className="r-reviews__header">
                  <span className="r-kicker r-kicker--center">CUSTOMER STORIES</span>
                  <div className="r-reviews__title-wrap">
                    <h2 className="r-section-title">What our riders say</h2>
                  </div>
                </div>
      
                <div className="r-reviews__grid">
                  <article className="r-reviews__card">
                    <div className="r-reviews__stars" aria-label="5 out of 5 stars">
                      {[...Array(5)].map((_, i) => (
                        <img key={i} src="/assets/icon-star.svg" width={20} height={19} alt="★" />
                      ))}
                    </div>
                    <blockquote className="r-reviews__quote">
                      Fast and reliable delivery every time. CarryOn has completely changed how we handle our last-mile distribution.
                    </blockquote>
                    <div className="r-reviews__author">
                      <img src="/assets/avatar-david.jpg" width={48} height={48} alt="David Chen" className="r-reviews__avatar" />
                      <div className="r-reviews__author-info">
                        <span className="r-reviews__name">David Chen</span>
                        <span className="r-reviews__role">E-commerce Owner &bull; Austin, TX</span>
                      </div>
                    </div>
                  </article>

                  <article className="r-reviews__card">
                    <div className="r-reviews__stars" aria-label="5 out of 5 stars">
                      {[...Array(5)].map((_, i) => (
                        <img key={i} src="/assets/icon-star.svg" width={20} height={19} alt="★" />
                      ))}
                    </div>
                    <blockquote className="r-reviews__quote">
                      The tracking is the most precise I&apos;ve seen in any logistics app. It&apos;s actually accurate to the minute.
                    </blockquote>
                    <div className="r-reviews__author">
                      <img src="/assets/avatar-sarah.jpg" width={48} height={48} alt="Sarah Williams" className="r-reviews__avatar" />
                      <div className="r-reviews__author-info">
                        <span className="r-reviews__name">Sarah Williams</span>
                        <span className="r-reviews__role">Project Manager &ndash; Chicago, IL</span>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </section>
      
            {/*══════════════════════════════════════════════════════════════
                 READY TO SEND CTA — Figma 311-3782 to 311-3792
                 background #2F80ED, centred content
                 Title 48px white 800 · Subtitle 20px white 400 · Buttons
                 ══════════════════════════════════════════════════════════════*/}
            <section className="r-cta">
              <div className="r-cta__card">
                {/*311-3782: decorative gradient overlay*/}
                <div className="r-cta__glow" aria-hidden="true"></div>
        
                {/*311-3783: content col — flex col, center, gap 32px*/}
                <div className="r-cta__content">
                {/*311-3784 / 3785: title group + text — Manrope 800, 48px, #FFF, -1.2px*/}
                <div className="r-cta__title-group">
                  <h2 className="r-cta__title">Ready to Send Your First Delivery?</h2>
                </div>
                {/*311-3787: subtitle — Manrope 400, 20px, #FFF, 28px*/}
                <p className="r-cta__desc">
                  Join thousands of riders who experience the precision of CarryOn every
                  single day.
                </p>
                {/*311-3788: button row — flex, center, gap 16px, padding-top 16px*/}
                  <div className="r-cta__btns">
                    <a href="/book-delivery" className="r-cta__btn r-cta__btn--primary">
                      Book Delivery
                    </a>
                    <a href="#pricing" className="r-cta__btn r-cta__btn--ghost">
                      View Pricing
                    </a>
                  </div>
                </div>
              </div>
            </section>
      
          </main>
      
          {/*══════════════════════════════════════════════════════════════
               FOOTER — Figma 311-3795 (wrap) + 4-col + bottom legal row
               ══════════════════════════════════════════════════════════════*/}
          <footer className="r-footer" id="contact">
      
            {/*311-3795: flex col, max-width 1280px, padding 80px 32px 48px, gap 64px*/}
            <div className="r-footer__wrap">
      
              <div className="r-footer__grid">
      
                <div className="r-footer__brand">
                  <a href="/" className="r-footer__logo">CarryOn</a>
                  <p className="r-footer__brand-copy">
                    Precision logistics for every mile. Sending anything, anywhere made simple and reliable.
                  </p>
                  <div className="r-footer__social" aria-label="Social media">
                    <a href="#" className="r-footer__social-link" aria-label="Twitter">
                      <img src="/assets/icon-social1.svg" width={20} height={20} alt="" />
                    </a>
                    <a href="#" className="r-footer__social-link" aria-label="LinkedIn">
                      <img src="/assets/icon-social2.svg" width={20} height={20} alt="" />
                    </a>
                    <a href="#" className="r-footer__social-link" aria-label="Facebook">
                      <img src="/assets/icon-social3.svg" width={20} height={20} alt="" />
                    </a>
                  </div>
                </div>
      
                <div className="r-footer__col">
                  <h4 className="r-footer__col-head">Services</h4>
                  <ul className="r-footer__col-list">
                    <li><a href="#">On-Demand Delivery</a></li>
                    <li><a href="#">Scheduled Routes</a></li>
                    <li><a href="#">Enterprise API</a></li>
                    <li><a href="#">Warehousing</a></li>
                    <li><a href="#">Custom Fleet</a></li>
                  </ul>
                </div>
      
                <div className="r-footer__col">
                  <h4 className="r-footer__col-head">Company</h4>
                  <ul className="r-footer__col-list">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Sustainability</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Press Kit</a></li>
                    <li><a href="#">Safety Report</a></li>
                  </ul>
                </div>
      
                <div className="r-footer__col">
                  <h4 className="r-footer__col-head">Support</h4>
                  <ul className="r-footer__col-list">
                    <li><a href="#">Help Center</a></li>
                    <li><a href="#">Partner with Us</a></li>
                    <li><a href="#">Contact Support</a></li>
                    <li><a href="#">Fleet Login</a></li>
                  </ul>
                </div>
      
              </div>
      
              <div className="r-footer__bottom">
                <p className="r-footer__copy">© 2024 CarryOn Logistics. All rights reserved.</p>
                <nav className="r-footer__legal" aria-label="Legal">
                  <a href="/privacy">Privacy Policy</a>
                  <a href="/terms">Terms of Service</a>
                  <a href="#">Cookie Policy</a>
                </nav>
              </div>
      
            </div>
          </footer>
    </>
  );
}
