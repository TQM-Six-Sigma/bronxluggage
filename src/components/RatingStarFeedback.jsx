import RatingStar from "./RatingStar";
import BLFeedback from "./BLFeedback";
const RatingStarFeedback = () => {
  return (
    <>
      <BLFeedback>
        {(handleShow) => (
          <div onClick={handleShow}>
            <RatingStar />
          </div>
        )}
      </BLFeedback>
    </>
  );
};

export default RatingStarFeedback;
