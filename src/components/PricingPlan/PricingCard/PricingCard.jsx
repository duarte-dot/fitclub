import "./PricingCard.css";
import { FaRegCheckCircle } from "react-icons/fa";
import PropTypes from "prop-types";

const PricingCard = ({ title, price, benefits }) => {
  return (
    <div className="card-pricing">
      <h2 className="title-pricing-card">{title}</h2>
      <p className="price">{price}</p>
      <hr />
      <div className="benefits">
        {benefits.map((benefit, index) => (
          <div className="icon-and-benefit" key={index}>
            <div className="icon-benefit">
              <FaRegCheckCircle />
            </div>
            <p className="benefit">{benefit}</p>
          </div>
        ))}
      </div>
      <button className="join-button-pricing">Join Now</button>
    </div>
  );
};

PricingCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  benefits: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PricingCard;
