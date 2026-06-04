import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import './confrences.css';

import img1 from '../../newAssets/confrence1.jpg';
import img2 from '../../newAssets/confrence2.jpg';
import img3 from '../../newAssets/confrence3.jpg';
import img4 from '../../newAssets/confrence4.jpg';
import img5 from '../../newAssets/confrence5.jpg';
import img6 from '../../newAssets/confrence6.jpg';

const IMAGES = [
  { src: img1, label: 'Corporate Seminar' },
  { src: img2, label: 'Award Ceremony' },
  { src: img3, label: 'Industry Conference' },
  { src: img4, label: 'Gala Dinner' },
  { src: img5, label: 'Panel Discussion' },
  { src: img6, label: 'Summit Event' },
];

export default function Conferences() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  return (
    <section className="cf" id="conferences">
      <div className="cf__inner">

        {/* ── Left: text panel ── */}
        <div className="cf__panel">
          <span className="cf__tag">Events</span>
          <h2 className="cf__heading">
            Conferences &<br />
            <em>Corporate Events</em>
          </h2>
          <p className="cf__text">
            From intimate seminars to grand-scale international conferences, we manage
            every detail — venue setup, AV production, stage design, branding, and
            hospitality — so your event runs flawlessly.
          </p>
          <ul className="cf__list">
            <li>Full AV &amp; LED stage production</li>
            <li>Branded seating &amp; décor</li>
            <li>Gala dinners &amp; award ceremonies</li>
            <li>Corporate summits &amp; panel events</li>
          </ul>
          <a href="#contact" className="cf__btn">Discuss Your Event</a>
        </div>

        {/* ── Right: photo collage ── */}
        <div className="cf__collage">
          {IMAGES.map((img, i) => (
            <div
              key={i}
              className={`cf__photo cf__photo--${i}`}
              onClick={() => setLightboxIndex(i)}
            >
              <img src={img.src} alt={img.label} />
              <div className="cf__photo-overlay">
                <span className="cf__photo-label">{img.label}</span>
                <svg className="cf__zoom" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="11" y1="8" x2="11" y2="14" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
              </div>
            </div>
          ))}
        </div>

      </div>

      {lightboxIndex >= 0 && (
        <Lightbox
          open
          close={() => setLightboxIndex(-1)}
          slides={IMAGES.map(img => ({ src: img.src }))}
          index={lightboxIndex}
        />
      )}
    </section>
  );
}
