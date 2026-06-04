import React from 'react';
import { FaFacebookF, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import logo from '../assets/logo.png';
import './footer.css';

const LINKS = [
  { label: 'Fabrication',      href: '#fabrication' },
  { label: 'Services',         href: '#services' },
  { label: 'Conferences',      href: '#confrences' },
  { label: 'Product Launch',   href: '#product' },
  { label: 'Interior Projects',href: '#interior' },
  { label: 'About Us',         href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="ft" id="footer">
      <div className="ft__top">
        <div className="ft__inner">

          {/* col 1 — brand */}
          <div className="ft__col ft__col--brand">
            <img src={logo} alt="Techno Media" className="ft__logo" />
            <p className="ft__desc">
              Pakistan's leading exhibition fabrication &amp; events production company.
              From dream to delivery — we bring your brand to life.
            </p>
            <div className="ft__socials">
              <a href="https://www.facebook.com/technomedia92/" target="_blank" rel="noopener noreferrer" className="ft__social" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="tel:+923334496258" className="ft__social" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
              <a href="mailto:ansabkhan93@yahoo.com" className="ft__social" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* col 2 — quick links */}
          <div className="ft__col">
            <h4 className="ft__col-head">Quick Links</h4>
            <ul className="ft__list">
              {LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className="ft__link">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* col 3 — contact */}
          <div className="ft__col">
            <h4 className="ft__col-head">Contact Info</h4>
            <ul className="ft__list ft__list--contact">
              <li>
                <FaMapMarkerAlt className="ft__icon" />
                <span>Suite 512, 5th Floor, Aman Business Center,<br />Johar Town, Lahore</span>
              </li>
              <li>
                <FaPhone className="ft__icon" />
                <span>+92 333 449 6258<br />042 3531 0888</span>
              </li>
              <li>
                <FaEnvelope className="ft__icon" />
                <a href="mailto:ansabkhan93@yahoo.com" className="ft__link">ansabkhan93@yahoo.com</a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <div className="ft__bottom">
        <div className="ft__inner">
          <p className="ft__copy">&copy; {new Date().getFullYear()} Techno Media. All rights reserved.</p>
          <p className="ft__copy ft__copy--tag">From Dream to Delivery</p>
        </div>
      </div>
    </footer>
  );
}
