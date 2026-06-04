import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Nav.css';
import logo from '../../newAssets/logo.png';

const NAV_LINKS = [
  { label: 'Fabrication', href: '#fabrication' },
  { label: 'Services', href: '#services' },
  { label: 'Conferences', href: '#confrences' },
  { label: 'Product Launch', href: '#product' },
  { label: 'Interior', href: '#interior' },
];

function Header2() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <nav className={`nb${scrolled ? ' nb--scrolled' : ''}`}>
        <div className="nb__inner">

          <a href="#" className="nb__logo">
            <img src={logo} alt="Techno Media" />
          </a>

          <ul className="nb__links">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className="nb__link">
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="nb__cta">Get In Touch</a>

          <button
            className={`nb__burger${menuOpen ? ' nb__burger--open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </nav>

      <div className={`nb__drawer${menuOpen ? ' nb__drawer--open' : ''}`}>
        <div className="nb__drawer-logo">
          <img src={logo} alt="Techno Media" />
        </div>
        <ul className="nb__drawer-links">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a href={href} onClick={close}>{label}</a>
            </li>
          ))}
          <li>
            <a href="#contact" className="nb__drawer-cta" onClick={close}>Get In Touch</a>
          </li>
        </ul>
      </div>

      {menuOpen && <div className="nb__backdrop" onClick={close} />}
    </>
  );
}

export default Header2;
