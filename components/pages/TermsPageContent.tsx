/* eslint-disable @next/next/no-img-element */

export function TermsPageContent() {
  return (
    <div className="l-page">
      <main>

        {/*══════════════════════════════════════════════════════
             HERO — Title + date + download button
             ══════════════════════════════════════════════════════*/}
        <section className="tos-hero">
          <div className="tos-hero__inner">
            <span className="l-kicker">COMPLIANCE DOCUMENTATION</span>
            <h1 className="tos-hero__title">Terms of Service</h1>
            <div className="tos-hero__date-row">
              <div className="tos-hero__date">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1" y="2" width="12" height="11" rx="2" stroke="#434654" strokeWidth="1.3"/>
                  <path d="M1 5h12" stroke="#434654" strokeWidth="1.3"/>
                  <path d="M4 1v2M10 1v2" stroke="#434654" strokeWidth="1.3" strokeLinecap="round"/>
                </svg>
                Last Updated: October 24, 2024
              </div>
              <a href="#" className="tos-hero__download">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 2v8M5 7l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                Download PDF
              </a>
            </div>
          </div>
        </section>

        <div className="tos-body">

          {/*══════════════════════════════════════════════════════
               1. Acceptance of Terms
               ══════════════════════════════════════════════════════*/}
          <div className="tos-section tos-card--sky">
            <h2 className="tos-section__title">1. Acceptance of Terms</h2>
            <div className="tos-section__body">
              <p>
                By accessing or using the <strong>FleetNavigator</strong> platform, operated by CarryOn Logistics, you agree to
                be bound by these Terms of Service and all applicable laws and regulations. If you do not agree
                with any of these terms, you are prohibited from using or accessing this site.
              </p>
              <p>
                The materials contained in this website are protected by applicable copyright and trademark law.
                CarryOn Logistics reserves the right to update these terms at any time without prior notice, with
                the latest version always being accessible via our legal portal.
              </p>
            </div>
          </div>

          {/*══════════════════════════════════════════════════════
               2. User Obligations
               ══════════════════════════════════════════════════════*/}
          <div className="tos-section">
            <h2 className="tos-section__title">2. User Obligations</h2>
            <div className="tos-obligation-grid">
              <div className="tos-obligation-card">
                <span className="tos-obligation-card__kicker">Account Security</span>
                <p>
                  Users are responsible for maintaining the confidentiality of their credentials and all
                  activities that occur under their specific fleet sub-accounts.
                </p>
              </div>
              <div className="tos-obligation-card">
                <span className="tos-obligation-card__kicker">Data Integrity</span>
                <p>
                  Users must provide accurate, current, and complete telemetry information. Failure to do
                  so may result in routing inaccuracies and contract termination.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/*Legal warrant paragraph — full width, centered*/}
        <div style={{ display: "flex", justifyContent: "center", padding: "0 32px", marginTop: "-32px", marginBottom: "56px" }}>
          <p className="tos-warrant">
            In using the service, you represent and warrant that you possess the legal authority to create a binding legal
            obligation. You will use this website in accordance with these terms and will only use this website to make
            legitimate fleet management operations for you or for another person for whom you are legally authorized to act.
          </p>
        </div>

        <div className="tos-body" style={{ paddingTop: 0 }}>

          {/*══════════════════════════════════════════════════════
               3. Service Limitations (blue card)
               ══════════════════════════════════════════════════════*/}
          <div className="tos-section tos-card--blue">
            <h2 className="tos-section__title">3. Service Limitations</h2>
            <div className="tos-limitations-grid">
              <div className="tos-limitation">
                <span className="tos-limitation__kicker">Uptime</span>
                <p>While we strive for 99.9% availability, CarryOn Logistics does not guarantee uninterrupted access during critical weather events or satellite outages.</p>
              </div>
              <div className="tos-limitation">
                <span className="tos-limitation__kicker">Accuracy</span>
                <p>GPS data and traffic predictions are provided as-is. Real-world conditions may deviate from digital estimates provided by the terminal.</p>
              </div>
              <div className="tos-limitation">
                <span className="tos-limitation__kicker">Regional</span>
                <p>Certain terminal features may be restricted or unavailable based on local jurisdictional laws or carrier regulations.</p>
              </div>
            </div>
          </div>

          {/*══════════════════════════════════════════════════════
               4. Liability & Indemnity
               ══════════════════════════════════════════════════════*/}
          <div className="tos-section tos-card--sky-plain">
            <h2 className="tos-section__title">4. Liability &amp; Indemnity</h2>
            <div className="tos-section__body">
              <p>
                To the maximum extent permitted by applicable law, in no event shall CarryOn Logistics or its suppliers be
                liable for any damages (including, without limitation, damages for loss of data or profit, or due to business
                interruption) arising out of the use or inability to use the materials on CarryOn Logistics's website.
              </p>
              <blockquote className="tos-blockquote">
                This applies even if CarryOn Logistics or a CarryOn Logistics authorized representative has been notified
                orally or in writing of the possibility of such damage.
              </blockquote>
            </div>
          </div>

          {/*══════════════════════════════════════════════════════
               5. Termination of Service
               ══════════════════════════════════════════════════════*/}
          <div className="tos-section">
            <h2 className="tos-section__title">5. Termination of Service</h2>
            <div className="tos-section__body">
              <p>
                We may terminate or suspend access to our service immediately, without prior notice or liability, for any reason
                whatsoever, including without limitation if you breach the Terms.
              </p>
            </div>
            <ul className="tos-checklist">
              <li>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="9" stroke="#2F80ED" strokeWidth="1.5"/>
                  <path d="M6 10.2l2.5 2.5 5.5-5.5" stroke="#2F80ED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                All provisions of the Terms which by their nature should survive termination shall survive termination.
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="9" stroke="#2F80ED" strokeWidth="1.5"/>
                  <path d="M6 10.2l2.5 2.5 5.5-5.5" stroke="#2F80ED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Ownership provisions, warranty disclaimers, indemnity and limitations of liability.
              </li>
            </ul>
          </div>

        </div>

      </main>

      {/*══════════════════════════════════════════════════════
           FOOTER
           ══════════════════════════════════════════════════════*/}
      <footer className="l-footer">
        <a href="/" className="l-footer__brand">FleetNavigator</a>
        <nav className="l-footer__nav">
          <a href="/privacy" className="l-footer__link is-active">Privacy Policy</a>
          <a href="/terms" className="l-footer__link">Terms of Service</a>
          <a href="/about" className="l-footer__link">Contact</a>
        </nav>
        <span className="l-footer__copy">© 2024 CarryOn Logistics. Precision Logistics Management.</span>
      </footer>
    </div>
  );
}
