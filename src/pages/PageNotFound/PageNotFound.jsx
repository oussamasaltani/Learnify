import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertCircle, ContactRound, Search } from 'lucide-react';
import LoadingSpinner from '../../components/LoadingSpinner';
import './PageNotFound.css';

function PageNotFound() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div className="not-found-page">
      <div className="not-found-container">
        <div className="not-found-content">
          <div className="error-number">404</div>

          <div className="error-icon">
            <AlertCircle size={80} />
          </div>

          <h1>Page Not Found</h1>

          <p className="error-message">
            Oops! The page you're looking for seems to have wandered off.
            It might have been moved, deleted, or never existed.
          </p>

          <div className="suggestions">
            <h3>Here are some helpful links instead:</h3>
            <div className="suggestion-links">
              <Link to="/" className="suggestion-link">
                <Home size={18} />
                <span>Go to Homepage</span>
              </Link>
              <Link to="/product" className="suggestion-link">
                <Search size={18} />
                <span>Browse Courses</span>
              </Link>
              <Link to="/contact" className="suggestion-link">
                <ContactRound size={18} />
                <span>Contact Support</span>
              </Link>
            </div>
          </div>

          <div className="helpful-resources">
            <h3>Popular Destinations:</h3>
            <div className="resources-grid">
              <Link to="/pricing" className="resource-card">
                <h4>View Pricing</h4>
                <p>Find the perfect plan for you</p>
              </Link>
              <Link to="/product" className="resource-card">
                <h4>Our Features</h4>
                <p>Discover what we offer</p>
              </Link>
              <Link to="/" className="resource-card">
                <h4>Success Stories</h4>
                <p>Read student testimonials</p>
              </Link>
            </div>
          </div>

          <div className="search-suggestion">
            <p>Can't find what you're looking for?</p>
            <Link to="/contact" className="contact-support-btn">
              Contact Our Support Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;