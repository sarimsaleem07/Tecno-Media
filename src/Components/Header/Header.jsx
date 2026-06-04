import React, { useState, useEffect, useCallback } from 'react';
import './header.css';
import carousel1 from './../../newAssets/carousel1.jpg';
import carousel2 from './../../newAssets/carousel2.jpg';
import carousel3 from './../../newAssets/carousel3.jpg';

const SLIDES = [
  {
    img: carousel3,
    tag: 'Exhibition Fabrication',
    heading: 'Crafting Extraordinary\nExhibition Experiences',
    sub: 'From concept to completion — we build stands that command attention.',
  },
  {
    img: carousel2,
    tag: 'Booth Design',
    heading: 'Turning Bold Visions\nInto Stunning Realities',
    sub: 'World-class craftsmanship delivered on time, every time.',
  },
  {
    img: carousel1,
    tag: 'Event Solutions',
    heading: 'From Dream\nTo Delivery',
    sub: 'Pakistan\'s leading exhibition & events production company.',
  },
];

export default function Header() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback((index) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 600);
  }, [animating]);

  const prev = () => goTo((current - 1 + SLIDES.length) % SLIDES.length);
  const next = useCallback(() => goTo((current + 1) % SLIDES.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="hero" id="home">

      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className={`hero__slide ${i === current ? 'hero__slide--active' : ''}`}
          style={{ backgroundImage: `url(${slide.img})` }}
        />
      ))}

      <div className="hero__overlay" />

      <div className={`hero__content ${animating ? 'hero__content--exit' : 'hero__content--enter'}`}>
        <span className="hero__tag">{SLIDES[current].tag}</span>
        <h1 className="hero__heading">
          {SLIDES[current].heading.split('\n').map((line, i) => (
            <span key={i}>{line}<br /></span>
          ))}
        </h1>
        <p className="hero__sub">{SLIDES[current].sub}</p>
        <div className="hero__actions">
          <a href="#fabrication" className="hero__btn hero__btn--primary">View Our Work</a>
          <a href="#contact" className="hero__btn hero__btn--outline">Get In Touch</a>
        </div>
      </div>

      <button className="hero__arrow hero__arrow--left" onClick={prev} aria-label="Previous">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button className="hero__arrow hero__arrow--right" onClick={next} aria-label="Next">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      <div className="hero__dots">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`hero__dot ${i === current ? 'hero__dot--active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="hero__counter">
        <span className="hero__counter-cur">{String(current + 1).padStart(2, '0')}</span>
        <span className="hero__counter-sep" />
        <span className="hero__counter-total">{String(SLIDES.length).padStart(2, '0')}</span>
      </div>

    </section>
  );
}
