/* eslint-disable @next/next/no-img-element */

export function DriversPageContent() {
  return (
    <>
      <main>
      
            {/*── HERO — Figma node 311-2830: inline-grid, 12-col, row 419.5px, padding 96px 0 ──*/}
            <section className="d-hero">
              <div className="d-hero__shell">
                <div className="d-hero__grid">
      
                  {/*cols 1–5: copy*/}
                  <div className="d-hero__copy">
                    <h1 className="d-hero__title">
                      Your Fleet.<br />Your Schedule.<br />Your Success.
                    </h1>
                    <p className="d-hero__lead">
                      Join the premier logistics network. Leverage advanced route
                      optimization and precision analytics to maximize your earnings
                      on your own terms.
                    </p>
                    <div className="btn-group d-hero__btns">
                      <button type="button" className="btn btn-primary">Apply to Drive</button>
                      <a href="#" className="d-hero__learn-more">Learn More</a>
                    </div>
                  </div>
      
                  {/*cols 6–12: visual*/}
                  <div className="d-hero__visual">
                    <img
                      src="/assets/driver-hero.jpg"
                      alt="Driver standing with delivery van"
                      width="700"
                      height="420"
                    />
                    <div className="d-hero__badge">
                      <div className="d-hero__badge-icon" aria-hidden="true">
                        <img src="/assets/icon-active-drivers.svg" width={22} height={22} alt="" />
                      </div>
                      <div>
                        <p className="d-hero__badge-label">Active Drivers</p>
                        <p className="d-hero__badge-value">12,400+</p>
                      </div>
                    </div>
                  </div>
      
                </div>
              </div>
            </section>
      
            {/*── STATS — Figma node 311-2855: flex col, padding 80px 0, border-top/bottom ──*/}
            <section className="d-stats">
              <div className="d-stats__inner layout">
                <div className="d-stats__row">
      
                  <article className="d-stat-card">
                    <span className="d-stat-card__kicker">Avg Monthly Earnings</span>
                    <p className="d-stat-card__value">$4,200+</p>
                    <p className="d-stat-card__desc">Average weekly earnings based on active drivers</p>
                    <p className="d-stat-card__sub">Based on top-performing driver partners across major metro hubs.</p>
                  </article>
      
                  <article className="d-stat-card">
                    <span className="d-stat-card__kicker">Incentives</span>
                    <p className="d-stat-card__value">Up to 25%</p>
                    <p className="d-stat-card__desc">Bonus yield calculated per completed delivery phase.</p>
                    <p className="d-stat-card__sub">Performance bonuses for precision delivery and safety milestones.</p>
                  </article>
      
                  <article className="d-stat-card">
                    <span className="d-stat-card__kicker">Flexible Hours</span>
                    <p className="d-stat-card__value">24 / 7</p>
                    <p className="d-stat-card__desc">Maximum flexibility across all regional dispatch hubs.</p>
                    <p className="d-stat-card__sub">You define the shifts. Full control over your logistics lifestyle.</p>
                  </article>
      
                </div>
              </div>
            </section>
      
            {/*══════════════════════════════════════════════════════════*/}
            {/*311-2887: flex col, padding 128px 0, gap 96px, center*/}
            {/*Contains: Precision Onboarding + Designed for Fleet card*/}
            {/*══════════════════════════════════════════════════════════*/}
            <section className="d-features">
              <div className="d-features__shell layout">
      
                {/*311-2888: Precision Onboarding block — flex col, center, gap 16px*/}
                <div className="d-ob-block">
      
                  {/*311-2889/2890: Heading group — centered, title 36px Manrope 800*/}
                  <div className="d-ob-block__header">
                    <h2 className="d-ob-block__title">Precision Onboarding</h2>
                    <div className="d-ob-block__accent" aria-hidden="true"></div>
                  </div>
      
                  {/*311-2892: Steps wrap — width 1024px, flex col, items flex-start*/}
                  <div className="d-ob-steps-wrap">
                    <div className="d-stepper" role="list">
      
                      {/*Step 1 — active (filled blue icon)*/}
                      <div className="d-step d-step--active" role="listitem">
                        <span className="d-step__num">01</span>
                        <div className="d-step__icon">
                          <img src="/assets/icon-step-signup.svg" width={24} height={24} alt="" aria-hidden="true" />
                        </div>
                        <h3 className="d-step__label">Sign up</h3>
                        <p className="d-step__desc">Complete our digital application in under 5 minutes.</p>
                      </div>
      
                      {/*Step 2*/}
                      <div className="d-step" role="listitem">
                        <span className="d-step__num">02</span>
                        <div className="d-step__icon">
                          <img src="/assets/icon-step-verify.svg" width={24} height={24} alt="" aria-hidden="true" />
                        </div>
                        <h3 className="d-step__label">Get verified</h3>
                        <p className="d-step__desc">Automated background checks and vehicle precision audits.</p>
                      </div>
      
                      {/*Step 3*/}
                      <div className="d-step" role="listitem">
                        <span className="d-step__num">03</span>
                        <div className="d-step__icon">
                          <img src="/assets/icon-step-orders.svg" width={24} height={24} alt="" aria-hidden="true" />
                        </div>
                        <h3 className="d-step__label">Accept orders</h3>
                        <p className="d-step__desc">Select high-yield routes directly through the Driver App.</p>
                      </div>
      
                      {/*Step 4*/}
                      <div className="d-step" role="listitem">
                        <span className="d-step__num">04</span>
                        <div className="d-step__icon">
                          <img src="/assets/icon-step-earn.svg" width={24} height={24} alt="" aria-hidden="true" />
                        </div>
                        <h3 className="d-step__label">Earn</h3>
                        <p className="d-step__desc">Instant payout capabilities for every successful delivery.</p>
                      </div>
      
                    </div>{/*/d-stepper*/}
                  </div>{/*/d-ob-steps-wrap*/}
      
                </div>{/*/d-ob-block*/}
      
                {/*311-2945: "Designed for the Modern Fleet" card*/}
                {/*padding:64px, flex col, radius:24px, bg rgba(166,210,243,.2)*/}
                <div className="d-fleet-card">
      
                  {/*311-2946: inline-grid, 2 cols, row 650px, gap 64px*/}
                  <div className="d-fleet-card__grid">
      
                    {/*311-2947: Left copy — flex col, gap 40px, col 1/span 1, justify-self stretch*/}
                    <div className="d-fleet-card__copy">
      
                      {/*Flex child 1: Title*/}
                      <h2 className="d-fleet-card__title">Designed for the<br />Modern Fleet.</h2>
      
                      {/*Flex child 2: Description with left blue border bar*/}
                      <p className="d-fleet-card__quote">
                        We provide a platform for professional growth and logistics efficiency.
                        Our benefits are built around your financial stability and operational success.
                      </p>
      
                      {/*Flex child 3: 2×2 features grid*/}
                      <div className="d-fleet-features">
                        <div className="d-fleet-feat">
                          <div className="d-fleet-feat__icon" aria-hidden="true">
                            <img src="/assets/icon-flexibility.svg" width={18} height={18} alt="" />
                          </div>
                          <div className="d-fleet-feat__text">
                            <h3>Flexibility</h3>
                            <p>Choose shifts that fit your life. No mandatory minimum hours.</p>
                          </div>
                        </div>
                        <div className="d-fleet-feat">
                          <div className="d-fleet-feat__icon" aria-hidden="true">
                            <img src="/assets/icon-payouts.svg" width={18} height={18} alt="" />
                          </div>
                          <div className="d-fleet-feat__text">
                            <h3>Weekly Payouts</h3>
                            <p>Direct deposit processed every Friday morning with transparency.</p>
                          </div>
                        </div>
                        <div className="d-fleet-feat">
                          <div className="d-fleet-feat__icon" aria-hidden="true">
                            <img src="/assets/icon-highvolume.svg" width={18} height={18} alt="" />
                          </div>
                          <div className="d-fleet-feat__text">
                            <h3>High Volume</h3>
                            <p>Access to a dense network of deliveries ensuring zero downtime.</p>
                          </div>
                        </div>
                        <div className="d-fleet-feat">
                          <div className="d-fleet-feat__icon" aria-hidden="true">
                            <img src="/assets/icon-smartrouting.svg" width={18} height={18} alt="" />
                          </div>
                          <div className="d-fleet-feat__text">
                            <h3>Smart Routing</h3>
                            <p>AI-driven route selection to maximize earnings per mile.</p>
                          </div>
                        </div>
                      </div>
      
                      {/*Flex child 4: Link*/}
                      <a href="#" className="d-fleet-card__link">
                        Explore all driver benefits
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                          <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                        </svg>
                      </a>
      
                    </div>{/*/d-fleet-card__copy*/}
      
                    {/*Right col: tilted phone with dark map app*/}
                    <div className="d-fleet-card__phone-col">
                      <div className="d-fleet-card__phone-img">
                        <img
                          src="/assets/driver-app.jpg"
                          alt="Driver app navigation interface"
                          width="560"
                          height="600"
                        />
                      </div>
                    </div>
      
                  </div>{/*/d-fleet-card__grid*/}
                </div>{/*/d-fleet-card*/}
      
              </div>{/*/d-features__shell*/}
            </section>{/*/d-features*/}
      
            {/*══════════════════════════════════════════════════════════════
                 THE PRECISION DRIVER HUB — Figma 311-2991
                 inline-grid, 12-col, row 544px, padding 208px 0 128px 0
                 ══════════════════════════════════════════════════════════════*/}
            <section className="d-hub">
              <div className="d-hub__shell">
                <div className="d-hub__grid layout">
      
                  {/*Left: phone image (cols 1–6, inferred)*/}
                  <div className="d-hub__phone">
                    <img
                      src="/assets/driver-hub.svg"
                      alt="Driver app interface"
                      width={600}
                      height={544}
                    />
                  </div>
      
                  {/*311-2996: Right copy — flex col, gap 48px, col 7/span 6*/}
                  <div className="d-hub__copy">
      
                    {/*311-2999: Title*/}
                    <h2 className="d-hub__title">The Precision Driver Hub</h2>
      
                    {/*311-3001: Description*/}
                    <p className="d-hub__desc">
                      Everything you need to succeed, packed into a powerful mobile experience.
                    </p>
      
                    {/*311-3003: Feature 1 — flex row, gap 24px*/}
                    <div className="d-hub__feat">
                      <div className="d-hub__feat-icon" aria-hidden="true">
                        <img src="/assets/icon-alerts.svg" width={20} height={20} alt="" />
                      </div>
                      <div className="d-hub__feat-text">
                        <h3>Instant Order Alerts</h3>
                        <p>Real-time alerts for nearby high-value shipments with transparent pricing and instant acceptance.</p>
                      </div>
                    </div>

                    {/*311-3012: Feature 2*/}
                    <div className="d-hub__feat">
                      <div className="d-hub__feat-icon" aria-hidden="true">
                        <img src="/assets/icon-fleet-nav.svg" width={20} height={20} alt="" />
                      </div>
                      <div className="d-hub__feat-text">
                        <h3>Fleet Navigation</h3>
                        <p>Turn-by-turn routing optimized for heavy fleet vehicles, including traffic avoidance and dock locations.</p>
                      </div>
                    </div>

                    {/*311-3021: Feature 3*/}
                    <div className="d-hub__feat">
                      <div className="d-hub__feat-icon" aria-hidden="true">
                        <img src="/assets/icon-earnings.svg" width={20} height={20} alt="" />
                      </div>
                      <div className="d-hub__feat-text">
                        <h3>Real-time Earnings</h3>
                        <p>Visual dashboards displaying daily totals, projected income, and detailed fuel efficiency reports.</p>
                      </div>
                    </div>
      
                  </div>{/*/d-hub__copy*/}
                </div>{/*/d-hub__grid*/}
              </div>{/*/d-hub__shell*/}
            </section>{/*/d-hub*/}
      
            {/*══════════════════════════════════════════════════════════════
                 SUPPORT CARDS — Figma 311-3030
                 inline-grid, 2-col, row 334px, padding 80px 0 208px 0, gap 32px
                 ══════════════════════════════════════════════════════════════*/}
            <section className="d-support">
              <div className="d-support__grid layout">
      
                {/*Card 1: 24/7 Priority Support — dark blue*/}
                <article className="d-support__card d-support__card--primary">
                  <div className="d-support__card-icon" aria-hidden="true">
                    <img src="/assets/icon-support247.svg" alt="" />
                  </div>
                  <h3>24/7 Priority Support</h3>
                  <p>A dedicated dispatcher team is always on standby to assist with route issues or delivery complications via phone or in-app chat.</p>
                </article>

                {/*Card 2: Emergency Protection — light blue*/}
                <article className="d-support__card d-support__card--secondary">
                  <div className="d-support__card-icon" aria-hidden="true">
                    <img src="/assets/icon-emergency.svg" alt="" />
                  </div>
                  <h3>Emergency Protection</h3>
                  <p className="d-support__card-desc">Comprehensive insurance coverage and roadside assistance are included for every active partner on the platform for total peace of mind.</p>
                </article>
      
              </div>
            </section>
      
            {/*══════════════════════════════════════════════════════════════
                 TESTIMONIAL — Figma 311-3046
                 card: padding 96px 175px, radius 32px, bg rgba(166,210,243,.2)
                 ══════════════════════════════════════════════════════════════*/}
            <section className="d-testimonial">
              <div className="layout">
      
                {/*311-3046: card container*/}
                <div className="d-testimonial__card">
      
                  {/*311-3047: "99" quote decoration — absolute, top-right, opacity 0.05*/}
                  <div className="d-testimonial__deco" aria-hidden="true">"</div>
      
                  {/*311-3050: main content — flex col, center, gap 16px*/}
                  <div className="d-testimonial__content">
      
                    {/*311-3064: avatar + stars — flex col, center*/}
                    <div className="d-testimonial__top">
                      <img
                        src="/assets/avatar-marcus.jpg"
                        alt="Marcus Chen"
                        width="80"
                        height="80"
                        className="d-testimonial__avatar"
                      />
                      <div className="d-testimonial__stars" aria-label="5 out of 5 stars">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="#F59E0B"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="#F59E0B"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="#F59E0B"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="#F59E0B"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="#F59E0B"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                      </div>
                    </div>
      
                    {/*311-3065: quote — Manrope 500, 30px, #2F80ED, -0.75px*/}
                    <blockquote className="d-testimonial__quote">
                      "CarryOn transformed my logistics business. The route optimization
                      alone saves me two hours a day, which means more time with my
                      family and more money in my pocket."
                    </blockquote>
      
                    {/*311-3066: author info block — flex col, gap 4px*/}
                    <div className="d-testimonial__author-block">
      
                      {/*311-3067: name wrapper — flex col, center*/}
                      <div className="d-testimonial__name-wrap">
                        {/*311-3068: MARCUS CHEN — Manrope 900, 16px, uppercase, 1.6px spacing*/}
                        <span className="d-testimonial__name">Marcus Chen</span>
                      </div>
      
                      {/*311-3070: subtitle — Manrope 600, 14px, #434654*/}
                      <p className="d-testimonial__sub">Austin, TX &bull; Partner since 2021</p>
      
                      {/*311-3071: stats line*/}
                      <p className="d-testimonial__stats">5,000+ Precision Deliveries completed</p>
      
                    </div>
      
                  </div>{/*/d-testimonial__content*/}
                </div>{/*/d-testimonial__card*/}
              </div>
            </section>
      
            {/*══════════════════════════════════════════════════════════════
                 FAQ — Figma 311-3073 to 311-3092
                 Container: 896px max, padding 224px 0 96px 0, gap 64px
                 ══════════════════════════════════════════════════════════════*/}
            <section className="d-faq">
              <div className="d-faq__outer">
      
                {/*311-3073: inner container — 896px, flex col, gap 64px*/}
                <div className="d-faq__container">
      
                  {/*311-3074: header + list block — flex col, center, gap 16px*/}
                  <div className="d-faq__block">
      
                    {/*311-3075: heading group — flex col, center*/}
                    <div className="d-faq__header">
                      {/*311-3076: title — Manrope 800, 36px, #2F80ED, -0.9px*/}
                      <h2 className="d-faq__title">Frequently Asked Questions</h2>
                      {/*311-3077: blue accent bar — 64×4px, radius 12px*/}
                      <div className="d-faq__accent" aria-hidden="true"></div>
                    </div>
      
                    {/*FAQ items list*/}
                    <div className="d-faq__list">
      
                      {/*Item 1: open — 311-3080 question row*/}
                      <details className="d-faq__item" open>
                        <summary className="d-faq__question">
                          {/*311-3081: question text — Manrope 700, 16px, #2F80ED*/}
                          <span className="d-faq__q-text">How do I get paid?</span>
                          <span className="d-faq__icon" aria-hidden="true">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2F80ED" strokeWidth="2.5">
                              <polyline points="6 9 12 15 18 9"/>
                            </svg>
                          </span>
                        </summary>
                        <div className="d-faq__answer">
                          {/*311-3085: answer — Manrope 400, 16px, #000, 26px*/}
                          <p>We process earnings weekly via direct deposit. Every Friday morning, your funds from the previous week's completed deliveries are initiated to your linked bank account. Instant payout options are also available for qualified platinum partners.</p>
                        </div>
                      </details>
      
                      {/*Item 2: closed — 311-3087*/}
                      <details className="d-faq__item">
                        <summary className="d-faq__question">
                          <span className="d-faq__q-text">What documents are required?</span>
                          <span className="d-faq__icon" aria-hidden="true">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2F80ED" strokeWidth="2.5">
                              <polyline points="6 9 12 15 18 9"/>
                            </svg>
                          </span>
                        </summary>
                        <div className="d-faq__answer">
                          <p>You'll need a valid driver's licence, proof of insurance, vehicle registration, and a completed background check consent form. Commercial drivers must also provide their CDL and medical certificate.</p>
                        </div>
                      </details>
      
                      {/*Item 3: closed — 311-3092*/}
                      <details className="d-faq__item">
                        <summary className="d-faq__question">
                          <span className="d-faq__q-text">Can I work part-time?</span>
                          <span className="d-faq__icon" aria-hidden="true">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2F80ED" strokeWidth="2.5">
                              <polyline points="6 9 12 15 18 9"/>
                            </svg>
                          </span>
                        </summary>
                        <div className="d-faq__answer">
                          <p>Yes. CarryOn is fully flexible — there are no minimum hour requirements. You set your availability and accept loads on your own schedule. Many drivers work part-time alongside other commitments.</p>
                        </div>
                      </details>
      
                    </div>{/*/d-faq__list*/}
                  </div>{/*/d-faq__block*/}
                </div>{/*/d-faq__container*/}
              </div>{/*/d-faq__outer*/}
            </section>
      
            {/*── READY TO START DRIVING CTA ──*/}
            <section className="d-cta">
              <div className="layout">
                <div className="d-cta__card">
                  <div className="d-cta__top-bar" aria-hidden="true"></div>
                  <div className="d-cta__body">
                    <h2>Ready to Start Driving?</h2>
                    <p>
                      Join the fleet today and experience the precision of the CarryOn network.
                    </p>
                    <div className="cta-buttons">
                      <button type="button" className="btn btn-primary">Apply Now</button>
                      <button type="button" className="btn btn-outline-demo">Contact Support</button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
      
          </main>
      
          {/*══════════════════════════════════════════════════════════════
               FOOTER — Figma 311-3108 … 311-3160
               Background #A6D2F3, 4-col grid, bottom copyright bar
               ══════════════════════════════════════════════════════════════*/}
          <footer className="d-footer" id="contact">
      
            {/*311-3108: outer footer wrapper — flex col, 1280px, padding 64px 0, gap 64px*/}
            <div className="d-footer__wrap">
      
              {/*311-3109: 4-column grid — repeat(4,1fr), padding 0 48px, gap 48px*/}
              <div className="d-footer__grid">
      
                {/*Col 1: Brand*/}
                <div className="d-footer__brand">
                  <span className="d-footer__logo">CARRYON</span>
                  <p className="d-footer__brand-copy">
                    Precision in every mile. Excellence in every delivery. The future of logistics is here.
                  </p>
                </div>
      
                {/*Col 2: Solutions*/}
                <div className="d-footer__col">
                  <h4 className="d-footer__col-head">Solutions</h4>
                  <ul className="d-footer__col-list">
                    <li><a href="#">Fleet Solutions</a></li>
                    <li><a href="#">Enterprise Hub</a></li>
                    <li><a href="#">Pricing Models</a></li>
                  </ul>
                </div>
      
                {/*Col 3: Careers*/}
                <div className="d-footer__col">
                  <h4 className="d-footer__col-head">Careers</h4>
                  <ul className="d-footer__col-list">
                    <li><a href="/drivers" className="d-footer__link--active">Driver Careers</a></li>
                    <li><a href="#">Corporate Roles</a></li>
                  </ul>
                </div>
      
                {/*Col 4: Support*/}
                <div className="d-footer__col">
                  <h4 className="d-footer__col-head">Support</h4>
                  <ul className="d-footer__col-list">
                    <li><a href="#">Help Center</a></li>
                    <li><a href="/privacy">Privacy Policy</a></li>
                  </ul>
                </div>
      
              </div>{/*/d-footer__grid*/}
      
              {/*311-3141: bottom bar — flex col, center, padding 64px 48px 0, border-top*/}
              <div className="d-footer__bottom">
                {/*311-3142: copyright — Manrope 400, 14px, #000, center, 20px*/}
                <p className="d-footer__copy">© 2024 CarryOn Logistics. Precision in Motion.</p>
              </div>
      
            </div>{/*/d-footer__wrap*/}
      
            {/*311-3160: floating Apply to Drive CTA — absolute, right, shadow*/}
            <a href="#" className="d-footer__fab" aria-label="Apply to Drive">
              <img src="/assets/icon-apply-drive.svg" width={20} height={20} alt="" />
              Apply to Drive
            </a>
      
          </footer>
    </>
  );
}
