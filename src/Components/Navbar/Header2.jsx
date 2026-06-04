import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes, FaLinkedinIn, FaFacebookF, FaInstagram, FaEnvelope } from 'react-icons/fa';
import './Nav.css';
import logo from '../../newAssets/logo.png';

const NAV_LINKS = [
  { label: 'Fabrication',   href: '#fabrication'  },
  { label: 'Services',      href: '#services'      },
  { label: 'Conferences',   href: '#conferences'   },
  { label: 'Product Launch',href: '#product'       },
  { label: 'Interior',      href: '#interior'      },
];

const SOCIAL_LINKS = [
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
  { icon: FaFacebookF,  href: 'https://www.facebook.com/profile.php?id=61583501544286&mibextid=wwXIfr', label: 'Facebook' },
  { icon: FaInstagram,  href: 'https://www.instagram.com/technomedia70?igsh=MWdxMGxlNGJ4Y25tdA%3D%3D&utm_source=qr', label: 'Instagram' },
  { icon: FaEnvelope,   href: 'mailto:ansabkhan93@yahoo.com', label: 'Email' },
];

function Header2() {
  const [scrolled,       setScrolled]       = useState(false);
  const [menuOpen,       setMenuOpen]       = useState(false);
  const [activeSection,  setActiveSection]  = useState('');

  // navbar shrink on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // active section via IntersectionObserver
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-35% 0px -60% 0px' }
    );
    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // auto-close drawer when user scrolls
  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    window.addEventListener('scroll', close, { once: true });
    return () => window.removeEventListener('scroll', close);
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
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.slice(1);
              return (
                <li key={href}>
                  <a href={href} className={`nb__link${activeSection === id ? ' nb__link--active' : ''}`}>
                    <span>{label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="nb__socials">
            {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} className="nb__social-icon" aria-label={label}
                target={href.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer">
                <Icon />
              </a>
            ))}
          </div>

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

        <div className="nb__drawer-socials">
          {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} className="nb__social-icon" aria-label={label}
              target={href.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer">
              <Icon />
            </a>
          ))}
        </div>
      </div>

      {menuOpen && <div className="nb__backdrop" onClick={close} />}
    </>
  );
}

export default Header2;
