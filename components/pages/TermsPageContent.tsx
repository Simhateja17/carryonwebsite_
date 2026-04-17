/* eslint-disable @next/next/no-img-element */

export function TermsPageContent() {
  return (
    <div className="ts-page">

      {/* ── HEADER ── */}
      <header className="ts-header">
        <div className="ts-header__inner">
          <div className="ts-header__left">
            <span className="ts-kicker">COMPLIANCE DOCUMENTATION</span>
            <h1 className="ts-title">Terms of Service</h1>
            <div className="ts-date">
              <img src="/assets/ts-icon-calendar.svg" width={10} height={12} alt="" />
              Last Updated: October 24, 2024
            </div>
          </div>
          <a href="#" className="ts-download">
            <img src="/assets/ts-icon-download.svg" width={16} height={16} alt="" />
            Download PDF
          </a>
        </div>
      </header>

      {/* ── CONTENT ── */}
      <div className="ts-body">
        <div className="ts-content">

          {/* 1. Acceptance of Terms */}
          <div className="ts-card ts-card--sky">
            <div className="ts-card__heading">
              <div className="ts-card__accent" />
              <h2 className="ts-h2">1. Acceptance of Terms</h2>
            </div>
            <div className="ts-card__body ts-card__body--lg">
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

          {/* 2. User Obligations */}
          <div className="ts-section">
            <h2 className="ts-h2">2. User Obligations</h2>
            <div className="ts-oblig-grid">
              <div className="ts-oblig-card">
                <span className="ts-oblig-kicker">ACCOUNT SECURITY</span>
                <p>Users are responsible for maintaining the confidentiality of their credentials and all activities that occur under their specific fleet sub-accounts.</p>
              </div>
              <div className="ts-oblig-card">
                <span className="ts-oblig-kicker">DATA INTEGRITY</span>
                <p>Users must provide accurate, current, and complete telemetry information. Failure to do so may result in routing inaccuracies and contract termination.</p>
              </div>
            </div>
            <p className="ts-warrant">
              In using the service, you represent and warrant that you possess the legal authority to create a binding legal
              obligation. You will use this website in accordance with these terms and will only use this website to make
              legitimate fleet management operations for you or for another person for whom you are legally authorized to act.
            </p>
          </div>

          {/* 3. Service Limitations */}
          <div className="ts-card ts-card--blue">
            <h2 className="ts-h2 ts-h2--white">3. Service Limitations</h2>
            <div className="ts-limits-grid">
              <div className="ts-limit">
                <span className="ts-limit__label">UPTIME</span>
                <p>While we strive for 99.9% availability, CarryOn Logistics does not guarantee uninterrupted access during critical weather events or satellite outages.</p>
              </div>
              <div className="ts-limit">
                <span className="ts-limit__label">ACCURACY</span>
                <p>GPS data and traffic predictions are provided as-is. Real-world conditions may deviate from digital estimates provided by the terminal.</p>
              </div>
              <div className="ts-limit">
                <span className="ts-limit__label">REGIONAL</span>
                <p>Certain terminal features may be restricted or unavailable based on local jurisdictional laws or carrier regulations.</p>
              </div>
            </div>
          </div>

          {/* 4. Liability & Indemnity */}
          <div className="ts-card ts-card--sky">
            <div className="ts-card__heading">
              <div className="ts-card__accent" />
              <h2 className="ts-h2">4. Liability &amp; Indemnity</h2>
            </div>
            <div className="ts-card__body">
              <p>
                To the maximum extent permitted by applicable law, in no event shall CarryOn Logistics or its suppliers be
                liable for any damages (including, without limitation, damages for loss of data or profit, or due to business
                interruption) arising out of the use or inability to use the materials on CarryOn Logistics&apos;s website.
              </p>
              <blockquote className="ts-blockquote">
                This applies even if CarryOn Logistics or a CarryOn Logistics authorized representative has been notified
                orally or in writing of the possibility of such damage.
              </blockquote>
            </div>
          </div>

          {/* 5. Termination of Service */}
          <div className="ts-section">
            <h2 className="ts-h2">5. Termination of Service</h2>
            <p className="ts-body-text">
              We may terminate or suspend access to our service immediately, without prior notice or liability, for any reason
              whatsoever, including without limitation if you breach the Terms.
            </p>
            <ul className="ts-checklist">
              <li>
                <img src="/assets/ts-icon-check.svg" width={20} height={20} alt="" />
                All provisions of the Terms which by their nature should survive termination shall survive termination.
              </li>
              <li>
                <img src="/assets/ts-icon-check.svg" width={20} height={20} alt="" />
                Ownership provisions, warranty disclaimers, indemnity and limitations of liability.
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer className="ts-footer">
        <a href="/" className="ts-footer__brand">FLEETNAVIGATOR</a>
        <nav className="ts-footer__nav">
          <a href="/privacy" className="ts-footer__link ts-footer__link--active">PRIVACY POLICY</a>
          <a href="/terms" className="ts-footer__link">TERMS OF SERVICE</a>
          <a href="#" className="ts-footer__link">COMPLIANCE</a>
          <a href="/about" className="ts-footer__link">CONTACT</a>
        </nav>
        <span className="ts-footer__copy">© 2024 FleetNavigator. Precision Logistics Management.</span>
      </footer>

    </div>
  );
}
