import React from "react";
import { Star, StarHalf } from "lucide-react";

const StarRating = ({ rating }) => {

  return (
    <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        const isHalfStar = rating > index && rating < starValue;

        return (
          <div
            key={index}
            style={{ position: "relative", display: "inline-flex" }}
          >
            <Star size={18} color="#cbd5e1" />

            <div style={{ position: "absolute", top: 0, left: 0 }}>
              {rating >= starValue ? (
                <Star size={18} fill="#facc15" color="#facc15" />
              ) : isHalfStar ? (
                <StarHalf size={18} fill="#facc15" color="#facc15" />
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;
