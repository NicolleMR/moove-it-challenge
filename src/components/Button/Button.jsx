import PropTypes from "prop-types";

const Button = ({ children, className, onClick }) => (
  <button
    className={`border border-white bg-transparent py-1.5 px-5 font-semibold text-white transition-colors duration-500 ${className}`}
    onClick={onClick}
    type="button"
  >
    {children}
  </button>
);

export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: "",
  onClick: () => {},
};
