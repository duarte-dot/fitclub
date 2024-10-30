import "./JoinUs.css";
import { RiUserStarFill } from "react-icons/ri";
import { IoVideocamSharp } from "react-icons/io5";
import { PiBuildingOfficeFill } from "react-icons/pi";

const JoinUs = () => {
  return (
    <div className="join-us-container">
      <h1 className="joinus-title">WHY JOIN US?</h1>
      <h2 className="joinus-subtitle">
        Our diverse membership base creates a friendly and supportive
        atmosphere, where you can make friends and stay motivated.
      </h2>
      <div className="image-container">
        <img src="join.jpg" alt="Join Us" className="join-image" />
        <div className="info-container">
          <div className="icon-and-info">
            <div className="icon-box">
              <RiUserStarFill />
            </div>
            <div className="info-box">
              <h3>Personal Trainer</h3>
              <p>Unlock your potential with our expert Personal Trainers.</p>
            </div>
          </div>

          <div className="icon-and-info">
            <div className="icon-box">
              <IoVideocamSharp />
            </div>
            <div className="info-box">
              <h3>Practice Sessions</h3>
              <p>Elevate your fitness with practice sessions.</p>
            </div>
          </div>

          <div className="icon-and-info">
            <div className="icon-box">
              <PiBuildingOfficeFill />
            </div>
            <div className="info-box">
              <h3>Good Management</h3>
              <p>Supportive management, for your fitness success.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
