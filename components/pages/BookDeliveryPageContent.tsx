/* eslint-disable @next/next/no-img-element */

const CITIES = ["Kuala Lumpur", "Petaling Jaya", "Johor Bahru", "Penang"] as const;

const VEHICLES = [
  { name: "Motorcycle", capacity: "Up to 10kg", active: true },
  { name: "Van", capacity: "Up to 500kg", active: false },
  { name: "Lori Kecil", capacity: "Up to 1.5 Ton", active: false },
] as const;

export function BookDeliveryPageContent() {
  return (
    <main className="bd-main">
      <section className="bd-shell">
        <div className="bd-grid">
          <div className="bd-left">
            <section className="bd-card">
              <h2 className="bd-label">SERVICE CITY</h2>
              <div className="bd-city-grid">
                {CITIES.map((city, index) => (
                  <button
                    key={city}
                    type="button"
                    className={`bd-city-btn ${index === 0 ? "is-active" : ""}`}
                    aria-pressed={index === 0}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </section>

            <section className="bd-card">
              <div className="bd-field-wrap">
                <h2 className="bd-label">PICKUP ADDRESS</h2>
                <div className="bd-field">
                  <span className="bd-field-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 2.75A7.25 7.25 0 0 0 4.75 10c0 5.46 7.25 11.61 7.25 11.61s7.25-6.15 7.25-11.61A7.25 7.25 0 0 0 12 2.75Zm0 9.75a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
                    </svg>
                  </span>
                  <p>Enter pickup location in KL</p>
                </div>
              </div>

              <div className="bd-swap" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M9 6h8.75l-2.3-2.28 1.4-1.41L21.56 7l-4.7 4.69-1.42-1.41L17.77 8H9V6Zm6 12H6.25l2.31 2.28-1.41 1.41L2.44 17l4.7-4.69 1.41 1.41L6.23 16H15v2Z" />
                </svg>
              </div>

              <div className="bd-field-wrap">
                <h2 className="bd-label">DROP-OFF ADDRESS</h2>
                <div className="bd-field">
                  <span className="bd-field-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="m3 11 17.2-7-7 17.2-2.2-7-8-3.2Z" />
                    </svg>
                  </span>
                  <p>Enter destination address</p>
                </div>
              </div>
            </section>

            <section className="bd-card">
              <h2 className="bd-label">VEHICLE TYPE</h2>
              <div className="bd-vehicle-grid">
                {VEHICLES.map((vehicle) => (
                  <button
                    key={vehicle.name}
                    type="button"
                    className={`bd-vehicle ${vehicle.active ? "is-active" : ""}`}
                    aria-pressed={vehicle.active}
                  >
                    <span className="bd-vehicle-icon" aria-hidden="true">
                      <svg viewBox="0 0 64 36">
                        <path d="M15 26h3c.86 0 1.55.68 1.55 1.53v.97c0 1.38 1.12 2.5 2.5 2.5h2.12a2.5 2.5 0 0 0 2.5-2.5v-.97A1.54 1.54 0 0 1 28.2 26h7.25c.85 0 1.54.68 1.54 1.53v.97a2.5 2.5 0 0 0 2.5 2.5h2.08a2.5 2.5 0 0 0 2.5-2.5v-.97c0-.85.7-1.53 1.55-1.53H49a3 3 0 0 0 3-3v-7.87a3 3 0 0 0-2.17-2.88l-8.4-2.3a4.5 4.5 0 0 1-2.59-1.83l-.97-1.42A4.5 4.5 0 0 0 34.13 5H25a6 6 0 0 0-5.66 4.02l-1.8 5.12a4.5 4.5 0 0 1-1.84 2.35l-2.3 1.4A3 3 0 0 0 12 20.46V23a3 3 0 0 0 3 3Zm22-14h7l4.3 1.26a1 1 0 0 1 .7.96V16h-9.5a2.5 2.5 0 0 1-2.5-2.5V12Zm-13.25-.98A3 3 0 0 1 26.6 9h6.64c.98 0 1.9.48 2.46 1.28l.12.17v3.05a2.5 2.5 0 0 1-2.5 2.5H20.75l2.98-4.98Z" />
                      </svg>
                    </span>
                    <span className="bd-vehicle-name">{vehicle.name}</span>
                    <span className="bd-vehicle-capacity">{vehicle.capacity}</span>
                  </button>
                ))}
              </div>
            </section>
          </div>

          <div className="bd-right">
            <section className="bd-map-card">
              <img src="/assets/feature-map.jpg" alt="Delivery route map preview" />
              <div className="bd-map-tint" aria-hidden="true"></div>
              <div className="bd-map-chip">
                <div className="bd-map-distance">
                  <span className="bd-dot" aria-hidden="true"></span>
                  <span>LIVE DISTANCE: 12.4 KM</span>
                </div>
                <span className="bd-map-time">Est. 24 Mins</span>
              </div>
            </section>

            <section className="bd-summary-card">
              <h2>Price Summary</h2>
              <div className="bd-summary-rows">
                <div className="bd-row">
                  <span>Base Fare (Motorcycle)</span>
                  <strong>RM 5.00</strong>
                </div>
                <div className="bd-row">
                  <span>Distance Charge (12.4 km)</span>
                  <strong>RM 12.40</strong>
                </div>
                <div className="bd-row">
                  <span>Peak Hour Surcharge</span>
                  <strong className="is-blue">RM 2.00</strong>
                </div>
              </div>

              <div className="bd-total">
                <div>
                  <p className="bd-total-label">TOTAL ESTIMATE</p>
                  <p className="bd-total-value">RM19.40</p>
                </div>
                <p className="bd-tax-note">Inclusive of SST</p>
              </div>

              <button type="button" className="bd-book-btn">BOOK NOW</button>

              <p className="bd-payment-note">
                <span className="bd-payment-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2.5 4 5.86v6.88c0 4.93 3.42 9.55 8 10.76 4.58-1.21 8-5.83 8-10.76V5.86L12 2.5Zm3.52 8.24-4.1 4.1a1 1 0 0 1-1.42 0l-1.9-1.9 1.42-1.42 1.19 1.2 3.39-3.4 1.42 1.42Z" />
                  </svg>
                </span>
                <span>SECURE PAYMENT VIA LOGIPAY</span>
              </p>
            </section>

            <section className="bd-telemetry">
              <div>
                <p className="bd-telemetry-label">NETWORK</p>
                <p className="bd-telemetry-value is-blue">High Precision</p>
              </div>
              <div className="bd-right-align">
                <p className="bd-telemetry-label">FLEET AVAILABILITY</p>
                <p className="bd-telemetry-value">144 Nearby</p>
              </div>
            </section>
          </div>
        </div>

        <h1 className="bd-title">Book Delivery</h1>
      </section>
    </main>
  );
}
