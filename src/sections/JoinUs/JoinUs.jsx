import React from 'react'
import './JoinUs.css'

function JoinUs() {
  return (
    <div className='join-us-container' data-aos="zoom-in-up" data-aos-duration="800">
      <span data-aos="fade-down" data-aos-delay="100">Stay Updated</span>
      <h2 data-aos="fade-up" data-aos-delay="200">
        Join 5,000+ Learners
      </h2>
      <p data-aos="fade-up" data-aos-delay="300">
        Get exclusive career roadmaps and expert tips delivered straight to your inbox.
        Stay ahead of the curve with our weekly professional insights.
      </p>
      <form className="email-subscribe" data-aos="fade-up" data-aos-delay="400">
        <input type="email" className='email' placeholder="Enter your professional email" required />
        <button type="submit" className='btn-subscribe'>Get Free Access</button>
      </form>
    </div>
  )
}

export default JoinUs