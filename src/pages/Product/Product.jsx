import React, { useState, useEffect } from 'react';
import Courses from '../../sections/Courses/Courses';
import { BookOpen, Users, Award, Clock, ChevronRight } from 'lucide-react';
import LoadingSpinner from '../../components/LoadingSpinner';
import './Product.css';

function Product() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  
  const features = [
    {
      icon: <BookOpen size={32} />,
      title: "Comprehensive Curriculum",
      description: "Industry-aligned courses designed by experts to ensure you learn relevant skills."
    },
    {
      icon: <Users size={32} />,
      title: "Expert Instructors",
      description: "Learn from professionals with years of real-world experience in their fields."
    },
    {
      icon: <Award size={32} />,
      title: "Certification",
      description: "Earn recognized certificates to showcase your skills to employers."
    },
    {
      icon: <Clock size={32} />,
      title: "Flexible Learning",
      description: "Study at your own pace with lifetime access to all course materials."
    }
  ];

  return (
    <div className="product-page">
      {/* Hero Section */}
      <div className="product-hero">
        <div className="product-hero-content" data-aos="fade-up" data-aos-duration="800">
          <span className="badge" data-aos="fade-down" data-aos-delay="100">Our Products</span>
          <h1 data-aos="zoom-in" data-aos-delay="200">Transform Your Career With Our Learning Solutions</h1>
          <p data-aos="fade-up" data-aos-delay="300">Choose from our comprehensive suite of educational products designed to accelerate your professional growth.</p>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <div className="features-header" data-aos="fade-up" data-aos-duration="600">
          <span>Why Choose Us</span>
          <h2>Everything You Need to Succeed</h2>
          <p>Our platform combines expert knowledge with practical application to deliver real results.</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
              data-aos-duration="600">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <a href="#!" className="feature-link">
                Learn More <ChevronRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Courses Section */}
      <Courses />

      {/* Learning Paths */}
      <div className="learning-paths">
        <div className="paths-header" data-aos="fade-up" data-aos-duration="600">
          <span>Learning Paths</span>
          <h2>Structured Learning Journeys</h2>
          <p>Follow our carefully curated learning paths to master your chosen field.</p>
        </div>
        <div className="paths-grid">
          <div className="path-card" data-aos="flip-left" data-aos-delay="100" data-aos-duration="600">
            <h3>Frontend Development</h3>
            <p>Master React, Vue, and modern JavaScript</p>
            <ul>
              <li>12 Courses</li>
              <li>150+ Hours</li>
              <li>4 Projects</li>
            </ul>
            <a href="#!" className="path-btn">Explore Path</a>
          </div>
          <div className="path-card" data-aos="flip-left" data-aos-delay="200" data-aos-duration="600">
            <h3>UI/UX Design</h3>
            <p>Learn design thinking and prototyping</p>
            <ul>
              <li>8 Courses</li>
              <li>100+ Hours</li>
              <li>3 Projects</li>
            </ul>
            <a href="#!" className="path-btn">Explore Path</a>
          </div>
          <div className="path-card" data-aos="flip-left" data-aos-delay="300" data-aos-duration="600">
            <h3>Data Science</h3>
            <p>Python, Machine Learning, and Analytics</p>
            <ul>
              <li>10 Courses</li>
              <li>130+ Hours</li>
              <li>5 Projects</li>
            </ul>
            <a href="#!" className="path-btn">Explore Path</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;