import React from 'react';

export default function App(){ 
  return (
    <div className="hero">
      <header className="topbar">
        <div className="logo">XETFLIX</div>
        <div className="controls">
          <button className="lang">English ▾</button>
          <button className="signin">Sign In</button>
        </div>
      </header>

      <div className="hero-content">
        <h1 className="headline">Unlimited movies, TV shows and more</h1>
        <p className="sub">Watch anywhere. Cancel anytime.</p>
        <p className="sub2">Ready to watch? Enter your email to create or restart your membership.</p>

        <div className="email-row">
          <input type="email" placeholder="Email Address" className="email-input" />
          <button className="cta">Get Started ▸</button>
        </div>
      </div>

      <div className="hero-overlay" />
    </div>
  );
}
