import { FaStar, FaStarHalf, FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import "./MemberSection.css";
import { BiSolidQuoteAltRight } from "react-icons/bi";

const MemberSection = () => {
  return (
    <div className="container">
      <BiSolidQuoteAltRight className="quote" />
      <div>
        <h2 className="title-member">Member Review</h2>
        <p className="subtitle-member">
          What truly sets this gym apart is their expert team of trainers. The
          trainers are knowledgeable, approachable, and genuinely invested in
          helping members achieve their fitness goals. They take the time to
          understand individual needs and create personalized workout plans,
          ensuring maximum results and safety.
        </p>
        <div className="stars">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalf />
        </div>
        <div className="userInfo">
          <img src="member.jpg" alt="User" className="userImage" />
          <div className="userText">
            <h4 className="userName">Jane Cooper</h4>
            <p className="userJob">Software Developer</p>
          </div>
        </div>
        <div className="arrows-members">
          <FaArrowLeft className="arrow" />
          <FaArrowRight className="arrow" />
        </div>
      </div>
    </div>
  );
};

export default MemberSection;
