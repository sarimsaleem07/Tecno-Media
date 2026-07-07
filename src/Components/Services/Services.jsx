import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import './services.css';

import img1 from '../../newAssets/services1.jpg';
import img2 from '../../newAssets/services2.jpg';
import img3 from '../../newAssets/services3.jpg';
import img4 from '../../newAssets/services4.jpg';
import img5 from '../../newAssets/services5.jpg';
import img6 from '../../newAssets/services6.jpg';
import img7 from '../../newAssets/services7.jpg';
import img8 from '../../newAssets/services8.jpg';
import img9 from '../../newAssets/services9.jpg';

const SERVICES = [
  {
    img: img1,
    title: 'Exhibition Fabrication',
    desc: 'Custom-built exhibition stands using premium materials, precise engineering, and bold branding.',
  },
  {
    img: img2,
    title: 'Ambiance & Décor',
    desc: 'Transformative event atmospheres through curated lighting, draping, floral, and themed décor.',
  },
  {
    img: img3,
    title: 'Conference & Corporate',
    desc: 'End-to-end management for conferences, seminars, and high-profile corporate gatherings.',
  },
  {
    img: img4,
    title: 'Float Designing',
    desc: 'Eye-catching branded parade floats that create unforgettable on-road brand impressions.',
  },
  {
    img: img5,
    title: 'Furniture Supply',
    desc: 'Bespoke and rental furniture solutions tailored for exhibitions, offices, and events.',
  },
  {
    img: img6,
    title: 'Interior Designing',
    desc: 'Commercial and corporate space transformation from concept to finished installation.',
  },
  {
    img: img7,
    title: 'Mall Kiosk',
    desc: 'High-impact retail kiosks designed for maximum footfall engagement and brand visibility.',
  },
  {
    img: img8,
    title: 'Media Solutions',
    desc: 'LED video walls, AV systems, digital signage, and full media production for any event.',
  },
  {
    img: img9,
    title: 'Product Launching',
    desc: 'Experiential product launch events that generate buzz, media coverage, and brand recall.',
  },
];

export default function Services() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  return (
    <section className="sv" id="services">
      <div className="sv__inner">

        <div className="sv__header">
          <span className="sv__tag">What We Do</span>
          <h2 className="sv__heading">Exhibition Fabrication & Event Services in Pakistan</h2>
          <p className="sv__sub">
            A full spectrum of exhibition fabrication, booth design, conference management,
            product launch events, and interior transformation services for brands across Pakistan.
          </p>
        </div>

        <div className="sv__grid">
          {SERVICES.map((s, i) => (
            <div
              className="sv__card"
              key={i}
              onClick={() => setLightboxIndex(i)}
            >
              <div className="sv__img-wrap">
                <img src={s.img} alt={s.title} className="sv__img" loading="lazy" />
                <div className="sv__num">{String(i + 1).padStart(2, '0')}</div>
              </div>

              <div className="sv__body">
                <div className="sv__bar" />
                <h3 className="sv__title">{s.title}</h3>
                <p className="sv__desc">{s.desc}</p>
                <span className="sv__cta">
                  View Gallery
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {lightboxIndex >= 0 && (
        <Lightbox
          open
          close={() => setLightboxIndex(-1)}
          slides={SERVICES.map(s => ({ src: s.img }))}
          index={lightboxIndex}
        />
      )}
    </section>
  );
}
