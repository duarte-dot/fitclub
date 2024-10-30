import "./Card.css";
import { IoArrowForward } from "react-icons/io5";

export const Card = ({ title, description, icon }) => {
  return (
    <div className="card">
      <div className="card-icon">{icon}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <button className="join-button">
        Join now <IoArrowForward />
      </button>
    </div>
  );
};

import PropTypes from "prop-types";

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.element,
};
