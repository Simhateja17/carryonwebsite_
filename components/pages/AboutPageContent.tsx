/* eslint-disable @next/next/no-img-element */

export function AboutPageContent() {
  return (
    <>
      <main className="a-main">
            {/*311-3880 / 3882 Hero*/}
            <section className="a-hero">
              <div className="a-hero__shell">
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
                    {/*311-3888*/}
                    <div className="a-hero__btns">
                      <a href="/riders" className="a-btn a-btn--primary">Book Delivery</a>
                      <a href="/drivers" className="a-btn a-btn--outline">Become Driver</a>
                    </div>
                    {/*311-3894*/}
                    <div className="a-hero__proof">
                      <div className="a-hero__avatars" aria-hidden="true">
                        <span className="a-hero__av a-hero__av--photo" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&q=80')` }}></span>
                        <span className="a-hero__av a-hero__av--photo" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop&q=80')` }}></span>
                        <span className="a-hero__av a-hero__av--photo" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1560250097-0b93528c311a?w=96&h=96&fit=crop&q=80')` }}></span>
                        <span className="a-hero__av a-hero__av--count">+10k</span>
                      </div>
                      <span className="a-hero__proof-text">Trusted by 10,000+ users worldwide</span>
                    </div>
                  </div>
                  <div className="a-hero__visual" aria-hidden="true">
                    <div className="a-hero__visual-inner">
                      <span className="a-hero__future">FUTURE</span>
                      <p className="a-hero__visual-tag">Next-gen logistics</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
      
            {/*311-3908 Mission & Vision*/}
            <section className="a-mission">
              <div className="a-mission__grid">
                <article className="a-mission__card">
                  <span className="a-mission__label">Our mission</span>
                  <h2 className="a-mission__head">To simplify logistics through technology.</h2>
                  <p className="a-mission__body">
                    To simplify logistics through technology by connecting riders, drivers, and businesses into one seamless delivery network. We remove the friction from moving items across cities, ensuring every delivery is a premium experience.
                  </p>
                </article>
                <article className="a-mission__card a-mission__card--vision">
                  <span className="a-mission__label">Our vision</span>
                  <h2 className="a-mission__head">To become the most reliable globally.</h2>
                  <p className="a-mission__body">
                    We are building the operating system for modern logistics—unifying last-mile, freight, and enterprise workflows so businesses everywhere can move goods with confidence, speed, and transparency.
                  </p>
                </article>
              </div>
            </section>
      
            {/*311-3924 Stats*/}
            <section className="a-stats">
              <div className="a-stats__grid">
                <div className="a-stats__item">
                  <span className="a-stats__num">12K+</span>
                  <span className="a-stats__label">Active Riders</span>
                </div>
                <div className="a-stats__item">
                  <span className="a-stats__num">5K+</span>
                  <span className="a-stats__label">Businesses</span>
                </div>
                <div className="a-stats__item">
                  <span className="a-stats__num">98%</span>
                  <span className="a-stats__label">Delivery Success</span>
                </div>
              </div>
            </section>
      
            {/*311-3940 Pricing*/}
            <section className="a-pricing">
              <div className="a-pricing__head">
                <span className="a-pricing__kicker">Transparent pricing</span>
                <h2 className="a-pricing__title">Simple, predictable fares for every load</h2>
              </div>
              <div className="a-pricing__grid">
                <article className="a-price__card">
                  <span className="a-price__pill">Best for small deliveries</span>
                  <div className="a-price__icon" aria-hidden="true">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#2F80ED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="5.5" cy="17.5" r="3.5" />
                      <circle cx="18.5" cy="17.5" r="3.5" />
                      <path d="M15 6a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v1h7V6z" />
                      <path d="M9 7l3 10.5" />
                      <path d="M15 7l1.5 5.5" />
                      <path d="M9.5 12h5" />
                    </svg>
                  </div>
                  <h3 className="a-price__name">Bike</h3>
                  <p className="a-price__desc">Perfect for documents, small parcels, and urgent city deliveries.</p>
                  <p className="a-price__base">$5.00<span>base fare</span></p>
                  <ul className="a-price__features">
                    <li><span className="a-price__feat-label">Rate per km</span><span className="a-price__feat-value">$0.50</span></li>
                    <li><span className="a-price__feat-label">Max Weight</span><span className="a-price__feat-value">5kg</span></li>
                    <li><span className="a-price__feat-label">Handling Fee</span><span className="a-price__feat-value">Included</span></li>
                  </ul>
                  <button type="button" className="a-price__cta a-price__cta--outline">Select Bike</button>
                </article>
                <article className="a-price__card a-price__card--featured">
                  <span className="a-price__pill a-price__pill--popular">Most popular</span>
                  <div className="a-price__icon a-price__icon--featured" aria-hidden="true">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 3h10v11H1z" />
                      <path d="M11 8h5l3 3v4h-6V8z" />
                      <circle cx="5.5" cy="17.5" r="2.5" />
                      <circle cx="17.5" cy="17.5" r="2.5" />
                    </svg>
                  </div>
                  <h3 className="a-price__name">Pickup</h3>
                  <p className="a-price__desc">Medium goods, furniture, and residential move appliances.</p>
                  <p className="a-price__base">$15.00<span>base fare</span></p>
                  <ul className="a-price__features">
                    <li><span className="a-price__feat-label">Rate per km</span><span className="a-price__feat-value">$1.20</span></li>
                    <li><span className="a-price__feat-label">Max Weight</span><span className="a-price__feat-value">500kg</span></li>
                    <li><span className="a-price__feat-label">Insurance</span><span className="a-price__feat-value">Up to $500</span></li>
                  </ul>
                  <button type="button" className="a-price__cta">Select Pickup</button>
                </article>
                <article className="a-price__card">
                  <span className="a-price__pill">Best for heavy loads</span>
                  <div className="a-price__icon" aria-hidden="true">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#2F80ED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 4h12v10H1z" />
                      <path d="M13 9h5l3 3v3h-6V9z" />
                      <circle cx="5.5" cy="17.5" r="2.5" />
                      <circle cx="18.5" cy="17.5" r="2.5" />
                    </svg>
                  </div>
                  <h3 className="a-price__name">Truck</h3>
                  <p className="a-price__desc">Heavy commercial transport and complete business relocations.</p>
                  <p className="a-price__base">$45.00<span>base fare</span></p>
                  <ul className="a-price__features">
                    <li><span className="a-price__feat-label">Rate per km</span><span className="a-price__feat-value">$2.50</span></li>
                    <li><span className="a-price__feat-label">Max Weight</span><span className="a-price__feat-value">3500kg</span></li>
                    <li><span className="a-price__feat-label">Loading Help</span><span className="a-price__feat-value">Optional</span></li>
                  </ul>
                  <button type="button" className="a-price__cta a-price__cta--outline">Select Truck</button>
                </article>
              </div>
            </section>
      
            {/*311-4064 Precision*/}
            <section className="a-precision">
              <div className="a-precision__grid">
                <div className="a-precision__copy">
                  <h2 className="a-precision__title">Precision in Every Quote</h2>
                  <div className="a-precision__items">
                    <div className="a-precision__item">
                      <span className="a-precision__icon" aria-hidden="true">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="11" cy="11" r="7" />
                          <path d="M21 21l-4.35-4.35" />
                        </svg>
                      </span>
                      <div>
                        <h3 className="a-precision__item-title">Absolute Transparency</h3>
                        <p className="a-precision__item-desc">
                          The price you see is the price you pay. Our algorithm calculates distance and volume instantly with no hidden surcharges or surprise fees.
                        </p>
                      </div>
                    </div>
                    <div className="a-precision__item">
                      <span className="a-precision__icon" aria-hidden="true">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                          <path d="M9 12l2 2 4-4" />
                        </svg>
                      </span>
                      <div>
                        <h3 className="a-precision__item-title">No Surge Pricing</h3>
                        <p className="a-precision__item-desc">
                          Unlike ride-sharing, we keep logistics stable. Rain or peak hours, our rates remain consistent for your business planning and peace of mind.
                        </p>
                      </div>
                    </div>
                  </div>
                  <a href="/riders" className="a-precision__link">View Full Pricing Guide →</a>
                </div>
                <div className="a-precision__visual">
                  <div className="a-precision__frame">
                    <img
                      className="a-precision__img"
                      src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=960&amp;h=720&amp;fit=crop&amp;q=80"
                      width="960"
                      height="720"
                      alt=""
                      loading="lazy"
                    />
                    <div className="a-precision__float-card">
                      <span className="a-precision__float-kicker">Live telemetry</span>
                      <p className="a-precision__float-text">
                        Real-time GPS tracking and driver analytics included with every shipment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
      
            {/*311-4098 Contact*/}
            <section className="a-contact" id="contact">
              <div className="a-contact__grid">
                <div className="a-contact__form-wrap">
                  <h2 className="a-contact__title">Get in Touch</h2>
                  <form className="a-contact__form" action="#" method="post">
                    <label className="a-field">
                      <span className="a-field__label">Full name</span>
                      <input type="text" name="name" className="a-field__input" placeholder="John Doe" autoComplete="name" />
                    </label>
                    <div className="a-field a-field--email">
                      <label className="a-field__inner">
                        <span className="a-field__label">Email address</span>
                        <input
                          type="email"
                          name="email"
                          id="contact-email"
                          className="a-field__input"
                          placeholder="john@example.com"
                          autoComplete="email"
                          aria-describedby="contact-email-hint"
                        />
                      </label>
                      <p id="contact-email-hint" className="a-field__hint">We'll get back to you within 24 hours</p>
                    </div>
                    <label className="a-field">
                      <span className="a-field__label">Your message</span>
                      <textarea
                        name="message"
                        className="a-field__input a-field__input--area"
                        rows={4}
                        placeholder="How can we help with your logistics?"
                      ></textarea>
                    </label>
                    <button type="submit" className="a-contact__submit">Send Message</button>
                  </form>
                </div>
                <div className="a-contact__info">
                  <div className="a-contact__info-block">
                    <h3 className="a-contact__info-title">Support &amp; Inquiries</h3>
                    <div className="a-contact__row">
                      <span className="a-contact__icon" aria-hidden="true">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                      </span>
                      <a href="mailto:support@carryon.logistics">support@carryon.logistics</a>
                    </div>
                    <div className="a-contact__row">
                      <span className="a-contact__icon" aria-hidden="true">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path
                            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                          />
                        </svg>
                      </span>
                      <a href="tel:+15552345644">+1 (555) 234-LOGI</a>
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
                    <p className="a-contact__motto-quote">“Reliability is not an act, it’s a habit.”</p>
                    <cite className="a-contact__motto-cite">— Our Operations Motto</cite>
                  </blockquote>
                </div>
              </div>
            </section>
      
            {/*311-4155 FAQ*/}
            <section className="a-faq">
              <div className="a-faq__inner">
                <h2 className="a-faq__title">Frequently Asked Questions</h2>
                <div className="a-faq__list">
                  <details className="a-faq__item" open>
                    <summary className="a-faq__q">
                      <span>How is my delivery price calculated?</span>
                      <span className="a-faq__chev" aria-hidden="true"></span>
                    </summary>
                    <div className="a-faq__a">
                      <p>Price combines distance, vehicle type, and service level. You always see the full quote before you confirm—no surge surprises after booking.</p>
                    </div>
                  </details>
                  <details className="a-faq__item">
                    <summary className="a-faq__q">
                      <span>How do I track my shipment?</span>
                      <span className="a-faq__chev" aria-hidden="true"></span>
                    </summary>
                    <div className="a-faq__a"><p>Use the CarryOn app or your tracking link for live map updates and milestone notifications.</p></div>
                  </details>
                  <details className="a-faq__item">
                    <summary className="a-faq__q">
                      <span>Do you offer enterprise contracts?</span>
                      <span className="a-faq__chev" aria-hidden="true"></span>
                    </summary>
                    <div className="a-faq__a"><p>Yes. Volume pricing, API access, and dedicated account managers are available for qualified partners.</p></div>
                  </details>
                  <details className="a-faq__item">
                    <summary className="a-faq__q">
                      <span>What regions do you serve?</span>
                      <span className="a-faq__chev" aria-hidden="true"></span>
                    </summary>
                    <div className="a-faq__a"><p>We operate across major metros with expanding coverage—check availability in the app by entering your pickup address.</p></div>
                  </details>
                  <details className="a-faq__item">
                    <summary className="a-faq__q">
                      <span>How do I become a driver partner?</span>
                      <span className="a-faq__chev" aria-hidden="true"></span>
                    </summary>
                    <div className="a-faq__a"><p>Apply through our Drivers page. We verify credentials, insurance, and vehicle suitability before onboarding.</p></div>
                  </details>
                </div>
              </div>
            </section>
      
            {/*311-4196 Policies*/}
            <section className="a-policies">
              <div className="a-policies__grid">
                <div className="a-policies__col">
                  <h2 className="a-policies__title">Terms of Service</h2>
                  <p className="a-policies__text">
                    By using CarryOn, you agree to our transit policies regarding prohibited items, handling requirements, and liability limits. We ensure every user and driver operates within a framework of safety and professional conduct. Our terms are designed to protect both the sender and the handler.
                  </p>
                  <a href="#" className="a-policies__link">Read full policy <span aria-hidden="true">→</span></a>
                </div>
                <div className="a-policies__col">
                  <h2 className="a-policies__title">Privacy Policy</h2>
                  <p className="a-policies__text">
                    We collect only what we need to run safe, reliable deliveries—contact details, route data, and payment information protected with industry-standard encryption. You control marketing preferences and can request data export or deletion subject to legal retention rules.
                  </p>
                  <a href="#" className="a-policies__link">Read full policy <span aria-hidden="true">→</span></a>
                </div>
              </div>
            </section>
      
            {/*311-4215 CTA*/}
            <section className="a-cta">
              <div className="a-cta__inner">
                <h2 className="a-cta__title">Ready to Get Started?</h2>
                <p className="a-cta__desc">
                  Join thousands of businesses and individuals who trust CarryOn for their daily logistics needs and experience the future of delivery.
                </p>
                <div className="a-cta__btns">
                  <a href="#" className="a-cta__btn a-cta__btn--primary">Register Now</a>
                  <a href="#" className="a-cta__btn a-cta__btn--outline">Contact Sales</a>
                </div>
              </div>
            </section>
          </main>
      
          {/*311-4227 Footer*/}
          <footer className="a-footer">
            <div className="a-footer__shell">
              <div className="a-footer__grid">
                <div className="a-footer__brand">
                  <a href="/" className="a-footer__logo">CarryOn</a>
                  <p className="a-footer__brand-copy">
                    © 2024 CarryOn Logistics.<br />
                    Precision in Motion.<br />
                    Providing high-end logistics solutions globally.
                  </p>
                </div>
                <div className="a-footer__col">
                  <h3 className="a-footer__head">Resources</h3>
                  <ul className="a-footer__links">
                    <li><a href="#">Sitemap</a></li>
                    <li><a href="/about#contact">Contact Us</a></li>
                    <li><a href="/riders">Pricing Plans</a></li>
                  </ul>
                </div>
                <div className="a-footer__col">
                  <h3 className="a-footer__head">Legal</h3>
                  <ul className="a-footer__links">
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Cookie Policy</a></li>
                  </ul>
                </div>
                <div className="a-footer__col a-footer__col--hq">
                  <div className="a-footer__hq">
                    <div className="a-footer__globe" aria-hidden="true">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                    </div>
                    <p className="a-footer__hq-label">Global HQ • Logistics City</p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
    </>
  );
}
