import Rating from "react-rating-stars-component";
import React, { useState } from 'react';

const RatingStar = () => {
    const [rating, setRating] = useState(0);
    return ( 
        
        <Rating
              count={5}
              size={30}
              value={rating}
              onChange={(newRating) => setRating(newRating)}
              required
            />
       
     );
}
 
export default RatingStar;