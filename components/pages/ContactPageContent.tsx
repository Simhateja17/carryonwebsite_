/* eslint-disable @next/next/no-img-element */

export function ContactPageContent() {
  return (
    <>
      <main>
      
            {/*══════════════════════════════════════════════════════════════
                 HERO — Figma 0-1 / 1-663
                 2-col grid, max-width 1280px, padding 64px 32px, gap 48px
                 ══════════════════════════════════════════════════════════════*/}
            <section className="c-hero">
              {/*1-663: decorative blur blob*/}
              <div className="c-hero__blob" aria-hidden="true"></div>
      
              {/*0-1: 2-col grid container*/}
              <div className="c-hero__grid">
      
                {/*1-663: left column — flex col, gap 24px*/}
                <div className="c-hero__copy">
      
                  {/*1-663: heading — Manrope 800, 60px, black + blue*/}
                  <h1 className="c-hero__title">
                    Get in Touch
                  </h1>
      
                  {/*1-663: description*/}
                  <p className="c-hero__desc">
                    Have questions? We're here to help. Reach out to our team
                    and we'll respond as soon as possible.
                  </p>
      
                </div>{/*/c-hero__copy*/}
      
                {/*1-663: right column — contact illustration*/}
                <div className="c-hero__visual">
                  <div className="c-hero__illustration">
                    <img src="/assets/sv-logistics-hub.jpg" alt="Customer support team" className="c-hero__img" />
                  </div>
                </div>{/*/c-hero__visual*/}
      
              </div>{/*/c-hero__grid*/}
            </section>
      
            {/*══════════════════════════════════════════════════════════════
                 CONTACT FORM — Figma 1-2378 / 1-2508
                 2-col layout: form + contact info
                 ══════════════════════════════════════════════════════════════*/}
            <section className="c-form-section">
              <div className="c-form-section__wrap">
      
                <div className="c-form-section__grid">
      
                  {/*1-2378: Contact Form*/}
                  <div className="c-form-card">
                    <div className="c-form-card__header">
                      <h2 className="c-form-card__title">Send us a Message</h2>
                      <p className="c-form-card__subtitle">Fill out the form below and we'll get back to you within 24 hours.</p>
                    </div>
      
                    <form className="c-form" action="#" method="POST">
                      <div className="c-form__row">
                        <div className="c-form__field">
                          <label htmlFor="firstName" className="c-form__label">First Name</label>
                          <input type="text" id="firstName" name="firstName" className="c-form__input" placeholder="John" required />
                        </div>
                        <div className="c-form__field">
                          <label htmlFor="lastName" className="c-form__label">Last Name</label>
                          <input type="text" id="lastName" name="lastName" className="c-form__input" placeholder="Doe" required />
                        </div>
                      </div>
      
                      <div className="c-form__field">
                        <label htmlFor="email" className="c-form__label">Email</label>
                        <input type="email" id="email" name="email" className="c-form__input" placeholder="john@example.com" required />
                      </div>
      
                      <div className="c-form__field">
                        <label htmlFor="phone" className="c-form__label">Phone (Optional)</label>
                        <input type="tel" id="phone" name="phone" className="c-form__input" placeholder="+1 (555) 000-0000" />
                      </div>
      
                      <div className="c-form__field">
                        <label htmlFor="subject" className="c-form__label">Subject</label>
                        <select id="subject" name="subject" className="c-form__select" required>
                          <option value="">Select a subject</option>
                          <option value="general">General Inquiry</option>
                          <option value="support">Customer Support</option>
                          <option value="partnership">Partnership Opportunities</option>
                          <option value="billing">Billing Question</option>
                          <option value="feedback">Feedback</option>
                        </select>
                      </div>
      
                      <div className="c-form__field">
                        <label htmlFor="message" className="c-form__label">Message</label>
                        <textarea id="message" name="message" className="c-form__textarea" rows={5} placeholder="How can we help you?" required></textarea>
                      </div>
      
                      <button type="submit" className="c-form__submit">
                        Send Message
                        <img src="/assets/ab-icon-arrow.svg" width={16} height={16} alt="" className="c-form__submit-icon" />
                      </button>
                    </form>
                  </div>{/*/c-form-card*/}
      
                  {/*1-2508: Contact Info Sidebar*/}
                  <div className="c-info-card">
                    <div className="c-info-card__header">
                      <h2 className="c-info-card__title">Contact Information</h2>
                      <p className="c-info-card__subtitle">Reach us through any of these channels</p>
                    </div>
      
                    <div className="c-info-card__content">
      
                      <div className="c-info-item">
                        <div className="c-info-item__icon">
                          <img src="/assets/icon-map-pin.svg" width={24} height={24} alt="" />
                        </div>
                        <div className="c-info-item__content">
                          <span className="c-info-item__label">Headquarters</span>
                          <span className="c-info-item__value">123 Logistics Blvd, Suite 400<br />San Francisco, CA 94105</span>
                        </div>
                      </div>
      
                      <div className="c-info-item">
                        <div className="c-info-item__icon">
                          <img src="/assets/ab-icon-phone.svg" width={24} height={24} alt="" />
                        </div>
                        <div className="c-info-item__content">
                          <span className="c-info-item__label">Phone</span>
                          <a href="tel:+18005551234" className="c-info-item__value">+1 (800) 555-1234</a>
                        </div>
                      </div>
      
                      <div className="c-info-item">
                        <div className="c-info-item__icon">
                          <img src="/assets/ab-icon-email.svg" width={24} height={24} alt="" />
                        </div>
                        <div className="c-info-item__content">
                          <span className="c-info-item__label">Email</span>
                          <a href="mailto:support@carryon.com" className="c-info-item__value">support@carryon.com</a>
                        </div>
                      </div>
      
                      <div className="c-info-item">
                        <div className="c-info-item__icon">
                          <img src="/assets/icon-247support.svg" width={24} height={24} alt="" />
                        </div>
                        <div className="c-info-item__content">
                          <span className="c-info-item__label">Support Hours</span>
                          <span className="c-info-item__value">24/7 Customer Support<br />Mon - Sun</span>
                        </div>
                      </div>
      
                    </div>
      
                    <div className="c-info-card__social">
                      <span className="c-info-card__social-label">Follow Us</span>
                      <div className="c-info-card__social-links">
                        <a href="#" className="c-social-link" aria-label="Twitter">
                          <img src="/assets/icon-social1.svg" width={20} height={20} alt="" />
                        </a>
                        <a href="#" className="c-social-link" aria-label="LinkedIn">
                          <img src="/assets/icon-social2.svg" width={20} height={20} alt="" />
                        </a>
                        <a href="#" className="c-social-link" aria-label="Facebook">
                          <img src="/assets/icon-social3.svg" width={20} height={20} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>{/*/c-info-card*/}
      
                </div>{/*/c-form-section__grid*/}
              </div>
            </section>
      
            {/*══════════════════════════════════════════════════════════════
                 FAQ SECTION — Figma 23-1372 / 30-1877
                 Accordion-style FAQ
                 ══════════════════════════════════════════════════════════════*/}
            <section className="c-faq">
              <div className="c-faq__wrap">
      
                <div className="c-faq__header">
                  <span className="c-kicker c-kicker--center">FAQ</span>
                  <h2 className="c-section-title">Frequently Asked Questions</h2>
                </div>
      
                <div className="c-faq__grid">
      
                  <div className="c-faq-col">
                    <details className="c-faq-item" name="faq-group">
                      <summary className="c-faq-item__summary">
                        <span className="c-faq-item__question">How do I track my delivery?</span>
                        <img src="/assets/icon-chevron-down.svg" width={20} height={20} alt="" className="c-faq-item__icon" />
                      </summary>
                      <div className="c-faq-item__content">
                        <p>You can track your delivery in real-time through our mobile app or website. Simply log in to your account and click on "Active Deliveries" to see the current status and estimated arrival time of your shipment.</p>
                      </div>
                    </details>
      
                    <details className="c-faq-item" name="faq-group">
                      <summary className="c-faq-item__summary">
                        <span className="c-faq-item__question">What are your delivery pricing options?</span>
                        <img src="/assets/icon-chevron-down.svg" width={20} height={20} alt="" className="c-faq-item__icon" />
                      </summary>
                      <div className="c-faq-item__content">
                        <p>We offer transparent, upfront pricing with no hidden fees. Prices are calculated based on distance, package size, and delivery speed. Use our pricing calculator in the app for an instant quote before booking.</p>
                      </div>
                    </details>
      
                    <details className="c-faq-item" name="faq-group">
                      <summary className="c-faq-item__summary">
                        <span className="c-faq-item__question">How do I become a delivery driver?</span>
                        <img src="/assets/icon-chevron-down.svg" width={20} height={20} alt="" className="c-faq-item__icon" />
                      </summary>
                      <div className="c-faq-item__content">
                        <p>To become a driver, visit our Drivers page and click "Apply to Drive." You'll need a valid driver's license, a reliable vehicle, and to pass a background check. The application process takes about 5-7 business days.</p>
                      </div>
                    </details>
      
                    <details className="c-faq-item" name="faq-group">
                      <summary className="c-faq-item__summary">
                        <span className="c-faq-item__question">What areas do you service?</span>
                        <img src="/assets/icon-chevron-down.svg" width={20} height={20} alt="" className="c-faq-item__icon" />
                      </summary>
                      <div className="c-faq-item__content">
                        <p>CarryOn operates in over 50 major metropolitan areas across the United States. Check our service area map in the app or enter your address during booking to confirm we serve your location.</p>
                      </div>
                    </details>
                  </div>
      
                  <div className="c-faq-col">
                    <details className="c-faq-item" name="faq-group">
                      <summary className="c-faq-item__summary">
                        <span className="c-faq-item__question">How do I file a claim for damaged items?</span>
                        <img src="/assets/icon-chevron-down.svg" width={20} height={20} alt="" className="c-faq-item__icon" />
                      </summary>
                      <div className="c-faq-item__content">
                        <p>If your item arrives damaged, contact our support team within 24 hours of delivery. Provide photos of the damage and your order number. We'll process your claim within 3-5 business days.</p>
                      </div>
                    </details>
      
                    <details className="c-faq-item" name="faq-group">
                      <summary className="c-faq-item__summary">
                        <span className="c-faq-item__question">Can I schedule a delivery for later?</span>
                        <img src="/assets/icon-chevron-down.svg" width={20} height={20} alt="" className="c-faq-item__icon" />
                      </summary>
                      <div className="c-faq-item__content">
                        <p>Yes! You can schedule deliveries up to 30 days in advance. Simply select your preferred pickup and delivery windows during the booking process.</p>
                      </div>
                    </details>
      
                    <details className="c-faq-item" name="faq-group">
                      <summary className="c-faq-item__summary">
                        <span className="c-faq-item__question">What payment methods do you accept?</span>
                        <img src="/assets/icon-chevron-down.svg" width={20} height={20} alt="" className="c-faq-item__icon" />
                      </summary>
                      <div className="c-faq-item__content">
                        <p>We accept all major credit cards (Visa, MasterCard, American Express, Discover), debit cards, and digital wallets including Apple Pay and Google Pay. Business accounts can also pay via invoice.</p>
                      </div>
                    </details>
      
                    <details className="c-faq-item" name="faq-group">
                      <summary className="c-faq-item__summary">
                        <span className="c-faq-item__question">How do I contact customer support?</span>
                        <img src="/assets/icon-chevron-down.svg" width={20} height={20} alt="" className="c-faq-item__icon" />
                      </summary>
                      <div className="c-faq-item__content">
                        <p>You can reach our 24/7 support team through the in-app chat, by calling +1 (800) 555-1234, or by emailing support@carryon.com. Average response time is under 5 minutes.</p>
                      </div>
                    </details>
                  </div>
      
                </div>
      
              </div>
            </section>
      
            {/*══════════════════════════════════════════════════════════════
                 MAP SECTION — Figma 30-1893 / 30-1909
                 Office locations map
                 ══════════════════════════════════════════════════════════════*/}
            <section className="c-map-section">
              <div className="c-map-section__wrap">
      
                <div className="c-map-section__header">
                  <span className="c-kicker c-kicker--center">Our Locations</span>
                  <h2 className="c-section-title">Find Us Near You</h2>
                  <p className="c-section-desc">Visit one of our regional offices or distribution centers</p>
                </div>
      
                <div className="c-locations-grid">
      
                  <div className="c-location-card">
                    <div className="c-location-card__map">
                      <img src="/assets/rider-hero-map.jpg" alt="San Francisco office location" className="c-location-card__map-img" />
                    </div>
                    <div className="c-location-card__content">
                      <h3 className="c-location-card__title">San Francisco (HQ)</h3>
                      <p className="c-location-card__address">123 Logistics Blvd, Suite 400<br />San Francisco, CA 94105</p>
                      <div className="c-location-card__hours">
                        <span className="c-location-card__hours-label">Hours:</span>
                        <span className="c-location-card__hours-value">Mon - Fri: 9AM - 6PM</span>
                      </div>
                      <a href="tel:+14155551234" className="c-location-card__phone">+1 (415) 555-1234</a>
                    </div>
                  </div>
      
                  <div className="c-location-card">
                    <div className="c-location-card__map">
                      <img src="/assets/feature-map.jpg" alt="New York office location" className="c-location-card__map-img" />
                    </div>
                    <div className="c-location-card__content">
                      <h3 className="c-location-card__title">New York</h3>
                      <p className="c-location-card__address">456 Commerce Street<br />New York, NY 10001</p>
                      <div className="c-location-card__hours">
                        <span className="c-location-card__hours-label">Hours:</span>
                        <span className="c-location-card__hours-value">Mon - Fri: 9AM - 6PM</span>
                      </div>
                      <a href="tel:+12125551234" className="c-location-card__phone">+1 (212) 555-1234</a>
                    </div>
                  </div>
      
                  <div className="c-location-card">
                    <div className="c-location-card__map">
                      <img src="/assets/feature-map.png" alt="Chicago office location" className="c-location-card__map-img" />
                    </div>
                    <div className="c-location-card__content">
                      <h3 className="c-location-card__title">Chicago</h3>
                      <p className="c-location-card__address">789 Distribution Ave<br />Chicago, IL 60601</p>
                      <div className="c-location-card__hours">
                        <span className="c-location-card__hours-label">Hours:</span>
                        <span className="c-location-card__hours-value">Mon - Fri: 8AM - 5PM</span>
                      </div>
                      <a href="tel:+13125551234" className="c-location-card__phone">+1 (312) 555-1234</a>
                    </div>
                  </div>
      
                </div>
      
              </div>
            </section>
      
            {/*══════════════════════════════════════════════════════════════
                 SUPPORT OPTIONS — Figma 30-1925 / 1-339
                 Multiple support channels
                 ══════════════════════════════════════════════════════════════*/}
            <section className="c-support">
              <div className="c-support__wrap">
      
                <div className="c-support__header">
                  <span className="c-kicker c-kicker--center">Support Options</span>
                  <h2 className="c-section-title">We're Here to Help</h2>
                  <p className="c-section-desc">Choose the support channel that works best for you</p>
                </div>
      
                <div className="c-support-grid">
      
                  <div className="c-support-card">
                    <div className="c-support-card__icon">
                      <img src="/assets/ab-icon-phone.svg" width={40} height={40} alt="" />
                    </div>
                    <h3 className="c-support-card__title">Call Us</h3>
                    <p className="c-support-card__desc">Speak directly with our support team</p>
                    <a href="tel:+18005551234" className="c-support-card__link">+1 (800) 555-1234</a>
                    <span className="c-support-card__availability">Available 24/7</span>
                  </div>
      
                  <div className="c-support-card c-support-card--featured">
                    <div className="c-support-card__ribbon">Fastest Response</div>
                    <div className="c-support-card__icon">
                      <img src="/assets/ab-icon-email.svg" width={40} height={40} alt="" />
                    </div>
                    <h3 className="c-support-card__title">Email Support</h3>
                    <p className="c-support-card__desc">Get detailed help via email</p>
                    <a href="mailto:support@carryon.com" className="c-support-card__link">support@carryon.com</a>
                    <span className="c-support-card__availability">Response within 2 hours</span>
                  </div>
      
                  <div className="c-support-card">
                    <div className="c-support-card__icon">
                      <img src="/assets/icon-247support.svg" width={40} height={40} alt="" />
                    </div>
                    <h3 className="c-support-card__title">Live Chat</h3>
                    <p className="c-support-card__desc">Chat with our support agents</p>
                    <button type="button" className="c-support-card__link">Start Chat</button>
                    <span className="c-support-card__availability">Average wait: 2 min</span>
                  </div>
      
                  <div className="c-support-card">
                    <div className="c-support-card__icon">
                      <img src="/assets/icon-api.svg" width={40} height={40} alt="" />
                    </div>
                    <h3 className="c-support-card__title">Help Center</h3>
                    <p className="c-support-card__desc">Browse articles and guides</p>
                    <a href="#" className="c-support-card__link">Visit Help Center</a>
                    <span className="c-support-card__availability">Self-service</span>
                  </div>
      
                </div>
      
              </div>
            </section>
      
            {/*══════════════════════════════════════════════════════════════
                 READY TO START CTA — Figma 30-1941 / 30-1957
                 background #2F80ED, centred content
                 ══════════════════════════════════════════════════════════════*/}
            <section className="c-cta">
              {/*30-1941: decorative gradient overlay*/}
              <div className="c-cta__glow" aria-hidden="true"></div>
      
              {/*30-1957: content col — flex col, center, gap 32px*/}
              <div className="c-cta__content">
                <h2 className="c-cta__title">Ready to Get Started?</h2>
                <p className="c-cta__desc">
                  Join thousands of satisfied customers who trust CarryOn for their
                  delivery needs.
                </p>
                <div className="c-cta__btns">
                  <a href="/book-delivery" className="c-cta__btn c-cta__btn--primary">
                    Book a Delivery
                  </a>
                  <a href="/drivers" className="c-cta__btn c-cta__btn--ghost">
                    Become a Driver
                  </a>
                </div>
              </div>
            </section>
      
          </main>
      
          {/*══════════════════════════════════════════════════════════════
               FOOTER — Figma 30-1992 / 23-1083
               4-col + bottom legal row
               ══════════════════════════════════════════════════════════════*/}
          <footer className="c-footer">
      
            {/*30-1992: flex col, max-width 1280px, padding 80px 32px 48px, gap 64px*/}
            <div className="c-footer__wrap">
      
              <div className="c-footer__grid">
      
                <div className="c-footer__brand">
                  <a href="/" className="c-footer__logo">CarryOn</a>
                  <p className="c-footer__brand-copy">
                    Precision logistics for every mile. Sending anything, anywhere made simple and reliable.
                  </p>
                  <div className="c-footer__social" aria-label="Social media">
                    <a href="#" className="c-footer__social-link" aria-label="Twitter">
                      <img src="/assets/icon-social1.svg" width={20} height={20} alt="" />
                    </a>
                    <a href="#" className="c-footer__social-link" aria-label="LinkedIn">
                      <img src="/assets/icon-social2.svg" width={20} height={20} alt="" />
                    </a>
                    <a href="#" className="c-footer__social-link" aria-label="Facebook">
                      <img src="/assets/icon-social3.svg" width={20} height={20} alt="" />
                    </a>
                  </div>
                </div>
      
                <div className="c-footer__col">
                  <h4 className="c-footer__col-head">Services</h4>
                  <ul className="c-footer__col-list">
                    <li><a href="#">On-Demand Delivery</a></li>
                    <li><a href="#">Scheduled Routes</a></li>
                    <li><a href="#">Enterprise API</a></li>
                    <li><a href="#">Warehousing</a></li>
                    <li><a href="#">Custom Fleet</a></li>
                  </ul>
                </div>
      
                <div className="c-footer__col">
                  <h4 className="c-footer__col-head">Company</h4>
                  <ul className="c-footer__col-list">
                    <li><a href="/about">About Us</a></li>
                    <li><a href="#">Sustainability</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Press Kit</a></li>
                    <li><a href="#">Safety Report</a></li>
                  </ul>
                </div>
      
                <div className="c-footer__col">
                  <h4 className="c-footer__col-head">Support</h4>
                  <ul className="c-footer__col-list">
                    <li><a href="#">Help Center</a></li>
                    <li><a href="/drivers">Partner with Us</a></li>
                    <li><a href="/contact">Contact Support</a></li>
                    <li><a href="#">Fleet Login</a></li>
                  </ul>
                </div>
      
              </div>
      
              <div className="c-footer__bottom">
                <p className="c-footer__copy">© 2024 CarryOn Logistics. All rights reserved.</p>
                <nav className="c-footer__legal" aria-label="Legal">
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
