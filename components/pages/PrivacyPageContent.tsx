/* eslint-disable @next/next/no-img-element */

export function PrivacyPageContent() {
  return (
    <div className="l-page">
      <main>

        {/*══════════════════════════════════════════════════════
             HERO — Blue full-width card with badges
             ══════════════════════════════════════════════════════*/}
        <div className="pp-hero">
          <div className="pp-hero__copy">
            <span className="pp-hero__kicker">LAST UPDATED: OCTOBER 24, 2024</span>
            <h1 className="pp-hero__title">Privacy Policy</h1>
            <p className="pp-hero__desc">
              How CarryOn Logistics safeguards your data through the Precision
              Navigator framework—ensuring every byte is treated with the reverence of
              a luxury timepiece.
            </p>
          </div>
          <div className="pp-hero__badges">
            <div className="pp-hero__badge">
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 1.5L2.25 4.5v5.25c0 4.5 2.7 7.35 6.75 8.25 4.05-.9 6.75-3.75 6.75-8.25V4.5L9 1.5z" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
                <span className="pp-hero__badge-value">100% AES-256</span>
              </div>
              <span className="pp-hero__badge-label">Encryption Standard</span>
            </div>
            <div className="pp-hero__badge">
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 1.5L2.25 4.5v5.25c0 4.5 2.7 7.35 6.75 8.25 4.05-.9 6.75-3.75 6.75-8.25V4.5L9 1.5z" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M6 9l2 2 4-4" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="pp-hero__badge-value">GDPR Ready</span>
              </div>
              <span className="pp-hero__badge-label">Global Compliance</span>
            </div>
          </div>
        </div>

        <div className="pp-body">

          {/*══════════════════════════════════════════════════════
               DATA COLLECTION
               ══════════════════════════════════════════════════════*/}
          <section>
            <div className="pp-section-head">
              <div className="pp-section-head__icon">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="11" cy="11" r="9" stroke="#2F80ED" strokeWidth="1.5"/>
                  <path d="M11 7v4l3 2" stroke="#2F80ED" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <h2 className="pp-section-title">Data Collection</h2>
            </div>
            <div className="pp-two-col">
              <div className="pp-data-card">
                <h4>Fleet Telemetry</h4>
                <p>We collect real-time GPS coordinates, engine diagnostics, fuel consumption metrics, and route history to optimize logistics operations and ensure safety compliance.</p>
              </div>
              <div className="pp-data-card">
                <h4>Personnel Data</h4>
                <p>Driver profiles, certification status, hours of service (HOS), and communication logs are stored to manage workforce distribution and regulatory reporting.</p>
              </div>
            </div>
          </section>

          {/*══════════════════════════════════════════════════════
               HOW WE USE DATA
               ══════════════════════════════════════════════════════*/}
          <section>
            <div className="pp-section-head">
              <div className="pp-section-head__icon">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <polyline points="4,16 8,10 12,13 18,6" stroke="#2F80ED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </div>
              <h2 className="pp-section-title">How We Use Data</h2>
            </div>
            <div className="pp-use-grid">
              <div className="pp-use-card">
                <h4>Operational Intelligence</h4>
                <p>Your data powers our predictive routing engines, reducing fuel waste by up to 22% and ensuring on-time delivery across complex supply chains.</p>
                <div className="pp-use-card__tags">
                  <span className="pp-use-card__tag">Routing</span>
                  <span className="pp-use-card__tag">Fuel Efficiency</span>
                </div>
              </div>
              <div className="pp-use-card pp-use-card--blue">
                <div className="pp-use-card__icon" style={{ background: "rgba(255,255,255,0.15)" }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 2L3 5.5v5c0 4 2.5 6.75 7 7.5 4.5-.75 7-3.5 7-7.5v-5L10 2z" stroke="rgba(255,255,255,0.9)" strokeWidth="1.4" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4>Compliance</h4>
                <p>Automated ELD reporting and HOS monitoring for DOT compliance.</p>
              </div>
              <div className="pp-use-card">
                <h4>Support</h4>
                <p>Enhancing customer service response times through historical interaction logs.</p>
              </div>
              <div className="pp-use-card">
                <div className="pp-use-card__icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <polyline points="3,14 7,8 11,11 17,4" stroke="#2F80ED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                </div>
                <h4>Advanced Analytics</h4>
                <p>Anonymized data is aggregated to generate industry benchmarks and global logistics trend reports for our quarterly "Precision Logistics" index.</p>
              </div>
            </div>
          </section>

          {/*══════════════════════════════════════════════════════
               YOUR DATA CHOICES
               ══════════════════════════════════════════════════════*/}
          <section>
            <div className="pp-choices-card">
              <span className="pp-choices-kicker">The Summary</span>
              <h2 className="pp-choices-title">Your Data Choices</h2>
              {/* Decorative sliders icon */}
              <div className="pp-choices-deco" aria-hidden="true">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 14h32M8 24h32M8 34h32" stroke="#2F80ED" strokeWidth="2.5" strokeLinecap="round"/>
                  <circle cx="18" cy="14" r="4" fill="#fff" stroke="#2F80ED" strokeWidth="2"/>
                  <circle cx="30" cy="24" r="4" fill="#fff" stroke="#2F80ED" strokeWidth="2"/>
                  <circle cx="20" cy="34" r="4" fill="#fff" stroke="#2F80ED" strokeWidth="2"/>
                </svg>
              </div>
              <div className="pp-choices-grid">
                <div className="pp-choice-item">
                  <span className="pp-choice-num">1</span>
                  <div className="pp-choice-body">
                    <h5>Visibility Control</h5>
                    <p>Adjust which metrics are shared with third-party partners in the "Integration" tab of your dashboard.</p>
                  </div>
                </div>
                <div className="pp-choice-item">
                  <span className="pp-choice-num">2</span>
                  <div className="pp-choice-body">
                    <h5>Retention Toggles</h5>
                    <p>Define custom data purging schedules for vehicle telemetry after 12, 24, or 36 months.</p>
                  </div>
                </div>
                <div className="pp-choice-item">
                  <span className="pp-choice-num">3</span>
                  <div className="pp-choice-body">
                    <h5>Export Rights</h5>
                    <p>Download a machine-readable archive (JSON/CSV) of all fleet records directly from your profile.</p>
                  </div>
                </div>
                <div className="pp-choice-item">
                  <span className="pp-choice-num">4</span>
                  <div className="pp-choice-body">
                    <h5>Opt-Out Rights</h5>
                    <p>Revoke consent for non-essential analytics processing at any time through our support portal.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/*══════════════════════════════════════════════════════
               SECURITY ARCHITECTURE
               ══════════════════════════════════════════════════════*/}
          <section>
            <div className="pp-section-head">
              <div className="pp-section-head__icon">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="10" width="16" height="10" rx="2" stroke="#2F80ED" strokeWidth="1.5"/>
                  <path d="M7 10V7a4 4 0 018 0v3" stroke="#2F80ED" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <h2 className="pp-section-title">Security Architecture</h2>
            </div>
            <div className="pp-security-img">
              <div className="pp-security-col">
                <span className="pp-security-col__kicker">Encryption</span>
                <p>All data at rest is encrypted using AES-256 standards, while data in transit uses TLS 1.3 protocols.</p>
              </div>
              <div className="pp-security-col">
                <span className="pp-security-col__kicker">Isolation</span>
                <p>Tenant data is logically separated within our Azure-based infrastructure to prevent cross-account access.</p>
              </div>
              <div className="pp-security-col">
                <span className="pp-security-col__kicker">Monitoring</span>
                <p>24/7 SOC monitoring with automated threat detection and incident response playbooks.</p>
              </div>
            </div>
          </section>

          {/*══════════════════════════════════════════════════════
               YOUR RIGHTS
               ══════════════════════════════════════════════════════*/}
          <section>
            <div className="pp-section-head">
              <div className="pp-section-head__icon">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="11" cy="7" r="3.5" stroke="#2F80ED" strokeWidth="1.5"/>
                  <path d="M4 19c0-3.866 3.134-7 7-7h0c3.866 0 7 3.134 7 7" stroke="#2F80ED" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <h2 className="pp-section-title">Your Rights</h2>
            </div>
            <div className="pp-rights-list">
              {[
                { icon: "doc", label: "Right of Access" },
                { icon: "edit", label: "Right to Rectification" },
                { icon: "trash", label: "Right to Erasure" },
                { icon: "transfer", label: "Right to Data Portability" },
              ].map(({ icon, label }) => (
                <div key={label} className="pp-rights-row">
                  <div className="pp-rights-row__left">
                    <div className="pp-rights-row__icon">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="2" width="10" height="12" rx="1.5" stroke="#2F80ED" strokeWidth="1.3"/>
                        <path d="M5.5 6h5M5.5 9h3" stroke="#2F80ED" strokeWidth="1.3" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <span className="pp-rights-row__label">{label}</span>
                  </div>
                  <svg className="pp-rights-row__chevron" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 5l4 4-4 4" stroke="#2F80ED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              ))}
            </div>
          </section>

        </div>

      </main>

      {/*══════════════════════════════════════════════════════
           FOOTER
           ══════════════════════════════════════════════════════*/}
      <footer className="l-footer">
        <a href="/" className="l-footer__brand">CarryOn</a>
        <nav className="l-footer__nav">
          <a href="/privacy" className="l-footer__nav-link is-active">Privacy Policy</a>
          <a href="/terms" className="l-footer__nav-link">Terms of Service</a>
          <a href="/about" className="l-footer__nav-link">Contact</a>
        </nav>
        <span className="l-footer__copy">© 2024 CarryOn Logistics. Precision Logistics Management.</span>
      </footer>
    </div>
  );
}
