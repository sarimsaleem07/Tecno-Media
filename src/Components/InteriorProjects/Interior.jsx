import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import './interior.css';

import img1 from '../../newAssets/projects1.jpg';
import img2 from '../../newAssets/projects2.jpg';
import img3 from '../../newAssets/projects3.jpg';
import img4 from '../../newAssets/projects4.jpg';
import img5 from '../../newAssets/projects5.jpg';
import img6 from '../../newAssets/projects6.jpg';

const PROJECTS = [
  {
    img: img1,
    category: 'Restaurant Interior',
    title: 'Day Night Pizza',
    desc: 'Vibrant branded dine-in space with custom seating, backlit signage, and dynamic accent lighting.',
    featured: true,
  },
  {
    img: img4,
    category: 'Residential',
    title: 'Luxury Living Room',
    desc: 'Contemporary dark-themed lounge with marble flooring and premium furnishings.',
    featured: false,
  },
  {
    img: img2,
    category: 'Medical Facility',
    title: 'A Lab Medical Center',
    desc: 'Clean, professional medical interior with geometric wall art and modern reception.',
    featured: false,
  },
  {
    img: img5,
    category: 'Corporate Office',
    title: 'Modern Workspace',
    desc: 'Open-plan office with industrial pendant lighting, green walls, and glass facades.',
    featured: false,
  },
  {
    img: img3,
    category: 'Office Lounge',
    title: 'Kardiya Office',
    desc: 'Minimalist corporate waiting lounge with branded neon signage and soft furnishings.',
    featured: false,
  },
  // {
  //   img: img6,
  //   category: 'Executive Suite',
  //   title: 'Glass Partition Office',
  //   desc: 'Full-floor executive office with frosted glass partitions, strip lighting, and wood flooring.',
  //   featured: false,
  // },
];

export default function Interior() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  return (
    <section className="ip" id="interior">
      <div className="ip__inner">

        {/* Header */}
        <div className="ip__header">
          <span className="ip__tag">Our Portfolio</span>
          <h2 className="ip__heading">Interior Projects</h2>
          <p className="ip__sub">
            From restaurants to corporate offices — we design and build spaces
            that reflect your brand and impress your audience.
          </p>
        </div>

        {/* Grid */}
        <div className="ip__grid">
          {PROJECTS.map((p, i) => (
            <div
              key={i}
              className={`ip__card${p.featured ? ' ip__card--featured' : ''}`}
              onClick={() => setLightboxIndex(i)}
            >
              <img src={p.img} alt={p.title} className="ip__img" />

              <div className="ip__overlay">
                <span className="ip__cat">{p.category}</span>
                <h3 className="ip__title">{p.title}</h3>
                <p className="ip__desc">{p.desc}</p>
                <span className="ip__arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                  View Project
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
          slides={PROJECTS.map(p => ({ src: p.img }))}
          index={lightboxIndex}
        />
      )}
    </section>
  );
}
