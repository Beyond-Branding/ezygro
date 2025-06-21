// src/components/BigThinkersSection.jsx
import React from 'react';
import './BigThinkersSection.css'; // Import the CSS file

const BigThinkersSection = () => {
  return (
    <section className="big-thinkers-section">
      <div className="big-thinkers-content">
        <div className="big-thinkers-header">
          <span className="the">THE</span> <span className="big-thinkers-text">BIG THINKERS</span>
        </div>
        <h1 className="big-thinkers-title">
          ‘Joy Matters’: How One Company Brings Delight to Digital Transformation
        </h1>
        <div className="big-thinkers-author">
          <hr className="author-divider" />
          <p className="author-name">Kellie Romack</p>
          <p className="author-title">Chief Digital Information Officer, ServiceNow</p>
        </div>
        <button className="learn-more-button">LEARN MORE</button>
      </div>
      <div className="big-thinkers-image-container">
        <div className="person-image-placeholder">
          {/* This div will be styled with a background image in CSS */}
        </div>
      </div>
    </section>
  );
};

export default BigThinkersSection;