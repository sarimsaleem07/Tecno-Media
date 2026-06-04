import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import './splash.css';

function SplashScreen({ onFinish }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 2000);
    const doneTimer = setTimeout(() => onFinish(), 2800);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onFinish]);

  return (
    <div className={`splash-overlay ${fadeOut ? 'splash-fade-out' : ''}`}>
      <div className="splash-logo-wrapper">
        <img src={logo} alt="Techno Media Logo" className="splash-logo" />
      </div>
    </div>
  );
}

export default SplashScreen;
