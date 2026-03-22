import React from "react";
import Person1 from "../../assets/images/Person1.jpg";
import Person2 from "../../assets/images/Person2.jpg";
import Person3 from "../../assets/images/Person3.jpg";
import StarRating from "./StarRating";
import "./Reviews.css";

function Reviews() {
  const ReviewsData = [
    {
      id: 1,
      img: Person1,
      name: "James Anderson",
      job: "Junior Frontend Developer",
      rating: 5,
      review:
        "The React 19 track was a game-changer. I went from struggling with state management to building a full-scale Task App in weeks. The project-based learning is exactly what I needed!",
    },
    {
      id: 2,
      img: Person2,
      name: "Michael Chen",
      job: "Project Manager",
      rating: 4.8,
      review:
        "The Project Design course helped me bridge the gap between technical teams and stakeholders. The UI/UX modules were especially eye-opening for our product workflow.",
    },
    {
      id: 3,
      img: Person3,
      name: "Sophia Martinez",
      job: "Freelance Designer",
      rating: 4.7,
      review:
        "Learnify didn't just teach me tools; it taught me a professional mindset. I’ve already started using the 'Success Stories' framework for my own client presentations.",
    },
  ];
  
  return (
    <div className="reviews-container">
      <div className="reviews-header-content" data-aos="fade-up" data-aos-duration="600">
        <span data-aos="fade-down" data-aos-delay="100">Success Stories</span>
        <h2 data-aos="zoom-in" data-aos-delay="200">
          Real Stories, Real Success
        </h2>
        <p data-aos="fade-up" data-aos-delay="300">
          At <strong>Learnify</strong>, our community is built on the success
          of our learners. Discover how our students have bridged the gap
          between learning and their dream careers.
        </p>
      </div>
      <div className="review-card-content">
        {ReviewsData.map((review, index) => (
          <div
            key={review.id}
            data-aos="fade-right"
            data-aos-delay={200 * (index + 1)}
            data-aos-duration="600"
          >
            <div className="review-card">
              <div className="review-card-image">
                <img src={review.img} alt={review.name} />
              </div>
              <div className="review-details">
                <h3>{review.name}</h3>
                <span>{review.job}</span>
                <StarRating rating={review.rating} />
                <p>{review.review}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;