import React, { useState, useEffect, useCallback } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import './product.css';

import img1 from '../../newAssets/launch1.jpg';
import img2 from '../../newAssets/launch2.jpg';
import img3 from '../../newAssets/launch3.jpg';
import img4 from '../../newAssets/launch4.jpg';

const PANELS = [
  {
    img: img1,
    num: '01',
    title: 'Corporate Gala',
    sub: 'Grand ballroom setups with 300+ seats, LED production walls, and full AV management.',
  },
  {
    img: img2,
    num: '02',
    title: 'Live Event Stage',
    sub: 'Custom truss rigs, dynamic stage lighting, and LED dance floors for unforgettable nights.',
  },
  {
    img: img3,
    num: '03',
    title: 'Themed Experiences',
    sub: 'Fully immersive environments with neon installs, projection mapping, and branded décor.',
  },
  {
    img: img4,
    num: '04',
    title: 'Product Reveal',
    sub: 'High-drama reveals with spotlighting, draping, and cinematic stage choreography.',
  },
];

export default function ProductLaunch() {
  const [active, setActive]           = useState(0);
  const [lightboxIndex, setLightbox]  = useState(-1);
  const [paused, setPaused]           = useState(false);

  const advance = useCallback(
    () => setActive(a => (a + 1) % PANELS.length),
    []
  );

  useEffect(() => {
    if (paused) return;
    const t = setInterval(advance, 4000);
    return () => clearInterval(t);
  }, [advance, paused]);

  return (
    <section className="pl" id="product">

      {/* ── header ── */}
      <div className="pl__header">
        <span className="pl__tag">Showcase</span>
        <h2 className="pl__heading">Product Launching</h2>
        <p className="pl__sub">
          Bold reveals, immersive stages, and unforgettable moments —
          we bring your product launch to life.
        </p>
      </div>

      {/* ── accordion panels ── */}
      <div
        className="pl__panels"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {PANELS.map((p, i) => (
          <div
            key={i}
            className={`pl__panel${active === i ? ' pl__panel--active' : ''}`}
            onClick={() => setActive(i)}
            style={{ backgroundImage: `url(${p.img})` }}
          >
            {/* inactive: vertical label */}
            <div className="pl__strip-label">
              <span className="pl__strip-num">{p.num}</span>
              <span className="pl__strip-title">{p.title}</span>
            </div>

            {/* active: full content */}
            <div className="pl__content">
              <div className="pl__content-inner">
                <span className="pl__num">{p.num}</span>
                <h3 className="pl__title">{p.title}</h3>
                <p className="pl__desc">{p.sub}</p>
                <button
                  className="pl__expand"
                  onClick={e => { e.stopPropagation(); setLightbox(i); }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                  </svg>
                  View Full
                </button>
              </div>
            </div>

            {/* progress bar on active */}
            {active === i && !paused && (
              <div className="pl__progress" key={`${i}-${active}`} />
            )}
          </div>
        ))}
      </div>

      {/* ── dot nav ── */}
      <div className="pl__dots">
        {PANELS.map((_, i) => (
          <button
            key={i}
            className={`pl__dot${active === i ? ' pl__dot--active' : ''}`}
            onClick={() => setActive(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {lightboxIndex >= 0 && (
        <Lightbox
          open
          close={() => setLightbox(-1)}
          slides={PANELS.map(p => ({ src: p.img }))}
          index={lightboxIndex}
        />
      )}
    </section>
  );
}
