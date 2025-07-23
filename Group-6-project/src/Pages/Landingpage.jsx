import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Landingpage() {
  return (
   <div className="home-container">
      <section className="hero">
        <h1>🔎 Lost & Found Board</h1>
        <p className="subtitle">
          Bridging the gap between lost and found. A faster, easier way to return what matters.
        </p>
      </section>

      <section className="features">
        <h2>How It Works</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Post an Item</h3>
            <p>Share details and images of what you’ve lost or found, including time, place, and contact info.</p>
          </div>
          <div className="feature-card">
            <h3>Browse Listings</h3>
            <p>Explore items by type, location, or date to find matches in your community or school.</p>
          </div>
          <div className="feature-card">
            <h3>Connect & Recover</h3>
            <p>Get in touch directly with the finder or owner via provided contact info—no middleman involved.</p>
          </div>
          <div className="feature-card">
            <h3>Add a Reward</h3>
            <p>Optionally offer a reward for your lost item to increase chances of recovery.</p>
          </div>
        </div>
      </section>

      <section className="call-to-action">
        <p>Join the community and help reunite items with their rightful owners.</p>
        <p><strong>Ready to get started?</strong> <span><Link className='land-link' to={`/Add-Item`}>Post</Link> or <Link className='land-link' to={`/Item-List`}>Search</Link> for an item now.</span></p>
      </section>
    </div>
  );
}

export default Landingpage;
