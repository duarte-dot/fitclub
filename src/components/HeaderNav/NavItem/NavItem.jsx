import "./NavItem.css";
import PropTypes from "prop-types";

const NavItem = ({ name, href }) => {
  return (
    <li className="nav-item">
      <a href={href} className="nav-link">
        {name}
      </a>

      <hr className="underline" />
    </li>
  );
};

NavItem.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default NavItem;
