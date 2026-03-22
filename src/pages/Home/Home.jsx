import React, { useState, useEffect } from 'react';
import { BookOpen, ChartLine, GraduationCap } from 'lucide-react';
import Courses from '../../sections/Courses/Courses';
import Reviews from '../../sections/Reviews/Reviews';
import JoinUs from '../../sections/JoinUs/JoinUs';
import LoadingSpinner from '../../components/LoadingSpinner';
import './Home.css';
import { Link } from "react-router-dom";

function Home() {
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

  const HomeData = [
    {
      id: 1,
      icon: <BookOpen />,
      title: "Digital Library",
      description: "Access thousands of e-books, research papers, and study guides anytime, anywhere.",
      color: "#E74040"
    },
    {
      id: 2,
      icon: <ChartLine />,
      title: "Career Growth",
      description: "Track your progress and gain industry-recognized certifications to boost your resume.",
      color: "#2DC071"
    },
    {
      id: 3,
      icon: <GraduationCap />,
      title: "Expert Mentors",
      description: "Learn from industry professionals who bring real-world experience to your screen.",
      color: "#23A6F0"
    }
  ]

  return (
    <div className='home-page'>
      <div className='home-container'>
        <div className="home-header-content" data-aos="fade-up" data-aos-duration="800">
          <span data-aos="fade-down" data-aos-delay="100">
            Welcome to Learnify
          </span>
          <h1 data-aos="zoom-in" data-aos-delay="200">
            Your Bridge to a Brighter Future
          </h1>
          <p data-aos="fade-up" data-aos-delay="300">
            Discover top-rated online courses and expert-led training designed to help you master new skills and reach your career goals.
          </p>
          <div className="btn-quote-learn" data-aos="fade-up" data-aos-delay="400">
            <div className="btn-quote-learn" data-aos="fade-up" data-aos-delay="400">
              <Link to="/product" className="btn-quote">Start Learning</Link>
              <Link to="/pricing" className="btn-learn">View Courses</Link>
            </div>

          </div>
        </div>
        <div className="home-card-content">
          {HomeData.map((card, index) => (
            <div key={card.id} data-aos="fade-up" data-aos-delay={150 * (index + 1)}>
              <div className="home-card">
                <span className="icon" style={{ color: card.color }}>
                  {card.icon}
                </span>
                <h3>{card.title}</h3>
                <span className="red-line"></span>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Courses />
      <Reviews />
      <JoinUs />
    </div>
  );
}

export default Home;