"use client";

import { useState, useEffect } from "react";

const TIMELINE_STEPS = [
  { label: "Order Placed", time: "Today, 09:15 AM", location: "Petaling Jaya", status: "completed" as const },
  { label: "Driver Assigned", time: "Today, 09:40 AM", location: "Hub A-12", status: "completed" as const },
  { label: "Arrived at Pickup", time: "Today, 10:20 AM", location: "PJ Sect 14", status: "completed" as const },
  { label: "In Transit", time: "Started 10:45 AM - Moving toward KL Sentral", location: "", status: "active" as const, est: "Est. Delivery: 12:30 PM" },
  { label: "Delivered", time: "Pending arrival at destination", location: "", status: "pending" as const },
];

export function TrackPageContent() {
  const [coords, setCoords] = useState({ lat: 3.139, lng: 101.6869 });
  const [speed, setSpeed] = useState(64);
  const [fuel, setFuel] = useState(78);

  useEffect(() => {
    const interval = setInterval(() => {
      setCoords((prev) => ({
        lat: +(prev.lat + (Math.random() - 0.5) * 0.0002).toFixed(4),
        lng: +(prev.lng + (Math.random() - 0.5) * 0.0002).toFixed(4),
      }));
      setSpeed((prev) => Math.max(0, Math.min(120, prev + Math.round((Math.random() - 0.5) * 6))));
      setFuel((prev) => Math.max(0, Math.min(100, prev + (Math.random() - 0.5) * 0.3)));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="track-page">
      <div className="track-layout">
        {/* MAP AREA */}
        <div className="track-map-area">
          <div className="track-map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.19891800898!2d101.4980!3d3.1390!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc362ab0b5b68d%3A0x4a4b0e2e3b0e3b0e!2sKuala%20Lumpur!5e0!3m2!1sen!2smy!4v1700000000000!5m2!1sen!2smy"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Live tracking map"
            />
          </div>

          {/* Map overlay: live coordinates bar */}
          <div className="track-map-overlay">
            <div className="track-coords-bar">
              <div className="track-coords__left">
                <div className="track-coords__icon">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="3" fill="#2f80ed" />
                    <circle cx="8" cy="8" r="6" stroke="#2f80ed" strokeWidth="1.5" fill="none" />
                    <circle cx="8" cy="8" r="7.5" stroke="#2f80ed" strokeWidth="0.5" fill="none" opacity="0.3" />
                  </svg>
                </div>
                <div className="track-coords__info">
                  <span className="track-coords__label">LIVE COORDINATES</span>
                  <span className="track-coords__value">
                    {coords.lat.toFixed(4)} deg N, {coords.lng.toFixed(4)} deg E (Kuala Lumpur)
                  </span>
                </div>
              </div>
              <div className="track-coords__metrics">
                <div className="track-metric">
                  <span className="track-metric__label">VEHICLE SPEED</span>
                  <span className="track-metric__value">{speed} km/h</span>
                </div>
                <div className="track-metric">
                  <span className="track-metric__label">EST. FUEL</span>
                  <span className="track-metric__value">{fuel.toFixed(0)}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="track-sidebar">
          {/* Tracking ID header */}
          <div className="track-header">
            <div className="track-header__top">
              <div>
                <h1 className="track-id">TRK-8829-KL</h1>
                <p className="track-type">Standard Express - 4.2kg</p>
              </div>
              <span className="track-status-badge">IN TRANSIT</span>
            </div>
          </div>

          {/* Driver card */}
          <div className="track-driver-card">
            <div className="track-driver__info">
              <div className="track-driver__avatar">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <rect width="40" height="40" rx="12" fill="#a6d2f3" />
                  <circle cx="20" cy="15" r="7" fill="#2f80ed" />
                  <ellipse cx="20" cy="34" rx="12" ry="10" fill="#2f80ed" />
                </svg>
              </div>
              <div className="track-driver__details">
                <div className="track-driver__name-row">
                  <span className="track-driver__name">Siti Aminah</span>
                  <span className="track-driver__rating">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 1l1.5 3 3.3.5-2.4 2.3.6 3.2L6 8.5 3 10l.6-3.2L1.2 4.5 4.5 4z" fill="#f59e0b" />
                    </svg>
                    4.9
                  </span>
                </div>
                <span className="track-driver__vehicle">Hino 300 Series (BQC 4402)</span>
              </div>
            </div>
            <div className="track-driver__actions">
              <button className="track-driver__btn" type="button">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2.5 3.5c0-.8.7-1.5 1.5-1.5h1.5l1 3-1.5 1c1 2 2.5 3.5 4.5 4.5l1-1.5 3 1V12c0 .8-.7 1.5-1.5 1.5C6 13.5 2.5 10 2.5 3.5z" fill="#2f80ed" />
                </svg>
                Call
              </button>
              <button className="track-driver__btn" type="button">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 4a2 2 0 012-2h8a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V4z" stroke="#2f80ed" strokeWidth="1.5" fill="none" />
                  <path d="M2 5h12" stroke="#2f80ed" strokeWidth="1.5" />
                </svg>
                Message
              </button>
            </div>
          </div>

          {/* Delivery timeline */}
          <div className="track-timeline">
            <h2 className="track-timeline__title">DELIVERY TIMELINE</h2>
            <ol className="track-timeline__steps">
              {TIMELINE_STEPS.map((step, i) => (
                <li key={i} className={`track-step track-step--${step.status}`}>
                  <div className="track-step__connector">
                    {i < TIMELINE_STEPS.length - 1 && (
                      <div className={`track-step__line ${step.status === "completed" ? "track-step__line--done" : ""}`} />
                    )}
                  </div>
                  <div className="track-step__dot">
                    {step.status === "completed" && (
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4l3 3 5-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                    {step.status === "active" && <div className="track-step__pulse" />}
                  </div>
                  <div className="track-step__content">
                    <span className="track-step__label">{step.label}</span>
                    <span className="track-step__time">{step.time}</span>
                    {step.location && <span className="track-step__location">{step.location}</span>}
                    {step.est && <span className="track-step__est">{step.est}</span>}
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Share button */}
          <button className="track-share-btn" type="button">
            Share Live Tracking
          </button>
        </aside>
      </div>
    </main>
  );
}


