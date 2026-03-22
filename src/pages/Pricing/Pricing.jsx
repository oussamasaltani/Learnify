import React, { useState, useEffect } from 'react';
import { Check, X } from 'lucide-react';
import JoinUs from '../../sections/JoinUs/JoinUs';
import LoadingSpinner from '../../components/LoadingSpinner';
import './Pricing.css';

function Pricing() {
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
  
  const plans = [
    {
      name: "Basic",
      price: "29",
      description: "Perfect for getting started",
      features: [
        { name: "Access to 50+ courses", included: true },
        { name: "Basic certification", included: true },
        { name: "Community access", included: true },
        { name: "1-on-1 mentoring", included: false },
        { name: "Project reviews", included: false },
        { name: "Priority support", included: false }
      ],
      buttonText: "Start Free Trial",
      popular: false
    },
    {
      name: "Pro",
      price: "79",
      description: "Best for serious learners",
      features: [
        { name: "Access to 200+ courses", included: true },
        { name: "Premium certification", included: true },
        { name: "Community access", included: true },
        { name: "1-on-1 mentoring", included: true },
        { name: "Project reviews", included: true },
        { name: "Priority support", included: true }
      ],
      buttonText: "Choose Pro",
      popular: true
    },
    {
      name: "Enterprise",
      price: "299",
      description: "For teams and organizations",
      features: [
        { name: "Custom learning paths", included: true },
        { name: "Team analytics", included: true },
        { name: "Dedicated account manager", included: true },
        { name: "Custom content", included: true },
        { name: "API access", included: true },
        { name: "24/7 phone support", included: true }
      ],
      buttonText: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="pricing-page">
      {/* Hero Section */}
      <div className="pricing-hero">
        <div className="pricing-hero-content" data-aos="fade-up" data-aos-duration="800">
          <span className="badge" data-aos="fade-down" data-aos-delay="100">Pricing Plans</span>
          <h1 data-aos="zoom-in" data-aos-delay="200">Choose the Perfect Plan for Your Learning Journey</h1>
          <p data-aos="fade-up" data-aos-delay="300">Flexible pricing options designed to fit your goals and budget. All plans include a 14-day money-back guarantee.</p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="pricing-container">
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div className={`pricing-card ${plan.popular ? 'popular' : ''}`}
              key={index}
              data-aos="zoom-in"
              data-aos-delay={150 * (index + 1)}
              data-aos-duration="600">
              {plan.popular && <span className="popular-badge">Most Popular</span>}
              <h3>{plan.name}</h3>
              <p className="plan-description">{plan.description}</p>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">{plan.price}</span>
                <span className="period">/month</span>
              </div>
              <button className={`plan-btn ${plan.popular ? 'popular-btn' : ''}`}>
                {plan.buttonText}
              </button>
              <ul className="features-list">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    {feature.included ? (
                      <Check size={18} color="#2DC071" />
                    ) : (
                      <X size={18} color="#E74040" />
                    )}
                    <span className={!feature.included ? 'not-included' : ''}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h2 data-aos="fade-up" data-aos-duration="600">Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item" data-aos="fade-right" data-aos-delay="100" data-aos-duration="600">
            <h3>Can I switch plans later?</h3>
            <p>Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
          </div>
          <div className="faq-item" data-aos="fade-left" data-aos-delay="200" data-aos-duration="600">
            <h3>Is there a student discount?</h3>
            <p>We offer special pricing for students. Contact our support team with your student ID to get 20% off any plan.</p>
          </div>
          <div className="faq-item" data-aos="fade-right" data-aos-delay="300" data-aos-duration="600">
            <h3>What payment methods do you accept?</h3>
            <p>We accept all major credit cards, PayPal, and bank transfers for enterprise plans.</p>
          </div>
          <div className="faq-item" data-aos="fade-left" data-aos-delay="400" data-aos-duration="600">
            <h3>Can I cancel anytime?</h3>
            <p>Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your billing period.</p>
          </div>
        </div>
      </div>

      <JoinUs />
    </div>
  );
}

export default Pricing;