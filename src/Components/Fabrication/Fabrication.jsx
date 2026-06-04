import React, { useEffect, useState } from 'react';
import './fab.css';
import importImagesFromFolder from '../../utils/importImages';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

export default function Fabrication() {
  const [images, setImages]           = useState([]);
  const [lightboxIndex, setLightbox]  = useState(-1);

  useEffect(() => {
    importImagesFromFolder('fabrication').then((imported) => {
      setImages(Object.values(imported));
    });
  }, []);

  if (!images.length) return null;

  const mid  = Math.ceil(images.length / 2);
  const row1 = images.slice(0, mid);
  const row2 = images.slice(mid);

  return (
    <section className="fb" id="fabrication">

      {/* ── header ── */}
      <div className="fb__header">
        <div className="fb__header-left">
          <span className="fb__tag">Portfolio</span>
          <h2 className="fb__heading">Stall Fabrication</h2>
          <p className="fb__sub">
            Custom-engineered exhibition stands that turn heads and drive footfall —
            built to your brand, delivered on time.
          </p>
        </div>
        <div className="fb__header-right">
          <span className="fb__count">{images.length}+</span>
          <span className="fb__count-label">Projects Delivered</span>
        </div>
      </div>

      {/* ── marquee area (constrained + edge fade) ── */}
      <div className="fb__marquee">

      {/* ── row 1: scroll left ── */}
      <div
        className="fb__track-wrap"
        onMouseEnter={e => e.currentTarget.querySelector('.fb__track').style.animationPlayState = 'paused'}
        onMouseLeave={e => e.currentTarget.querySelector('.fb__track').style.animationPlayState = 'running'}
      >
        <div className="fb__track fb__track--left">
          {[...row1, ...row1].map((img, i) => (
            <div
              key={i}
              className="fb__item"
              onClick={() => setLightbox(i % row1.length)}
            >
              <img src={img} alt={`Stall ${i + 1}`} />
              <div className="fb__item-overlay">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── row 2: scroll right ── */}
      <div
        className="fb__track-wrap"
        onMouseEnter={e => e.currentTarget.querySelector('.fb__track').style.animationPlayState = 'paused'}
        onMouseLeave={e => e.currentTarget.querySelector('.fb__track').style.animationPlayState = 'running'}
      >
        <div className="fb__track fb__track--right">
          {[...row2, ...row2].map((img, i) => (
            <div
              key={i}
              className="fb__item"
              onClick={() => setLightbox(mid + (i % row2.length))}
            >
              <img src={img} alt={`Stall ${mid + i + 1}`} />
              <div className="fb__item-overlay">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      </div>{/* end fb__marquee */}

      {lightboxIndex >= 0 && (
        <Lightbox
          open
          close={() => setLightbox(-1)}
          slides={images.map(img => ({ src: img }))}
          index={lightboxIndex}
        />
      )}
    </section>
  );
}
