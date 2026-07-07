import React, { useState } from 'react';
import './about.css';

const STATS = [
  { value: '12+', label: 'Years Experience' },
  { value: '400+', label: 'Events Delivered' },
  { value: '300+', label: 'Happy Clients' },
];

export default function About() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = e.target;
    const text = `Hello Techno Media!\n\nName: ${name.value}\nEmail: ${email.value}\nSubject: ${subject.value}\n\nMessage:\n${message.value}`;
    const waLink = `https://wa.me/923344205073?text=${encodeURIComponent(text)}`;
    window.open(waLink, '_blank');
    setSent(true);
    e.target.reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className="ac" id="contact">
      <div className="ac__inner">

        {/* ── LEFT: About ── */}
        <div className="ac__about">
          <span className="ac__tag">Who We Are</span>
          <h2 className="ac__heading">
            Turning Bold Ideas Into<br />
            <em>Unforgettable Events</em>
          </h2>
          <p className="ac__text">
            At <strong>Techno Media</strong>, we specialise in end-to-end exhibition fabrication,
            conference management, product launches, and interior projects for businesses across Lahore
            and Pakistan. For over a decade we have partnered with leading brands to craft experiences
            that go far beyond the ordinary.
          </p>
          <p className="ac__text">
            Our in-house team of designers, fabricators, and project managers handles every detail —
            from the first sketch to the final spotlight — so you can focus on your brand story.
          </p>

          <div className="ac__stats">
            {STATS.map(({ value, label }) => (
              <div className="ac__stat" key={label}>
                <span className="ac__stat-value">{value}</span>
                <span className="ac__stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Contact Form ── */}
        <div className="ac__form-wrap">
          <span className="ac__tag">Get In Touch</span>
          <h2 className="ac__heading">Send Us a Message</h2>

          <form className="ac__form" onSubmit={handleSubmit}>
            <div className="ac__row">
              <div className="ac__field">
                <input type="text" name="name" placeholder=" " required />
                <label>Your Name</label>
              </div>
              <div className="ac__field">
                <input type="email" name="email" placeholder=" " required />
                <label>Your Email</label>
              </div>
            </div>
            <div className="ac__field">
              <input type="text" name="subject" placeholder=" " required />
              <label>Subject</label>
            </div>
            <div className="ac__field">
              <textarea name="message" rows="5" placeholder=" " required />
              <label>Your Message</label>
            </div>
            <button type="submit" className={`ac__submit${sent ? ' ac__submit--sent' : ''}`}>
              {sent ? '✓ Opening WhatsApp...' : 'Send via WhatsApp'}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
