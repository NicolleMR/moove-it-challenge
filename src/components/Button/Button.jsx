import PropTypes from "prop-types";

const Button = ({ children, className, onClick }) => (
  <button
    className={`rounded-[0.31rem] border border-white bg-transparent px-2.5  py-1	font-semibold text-white outline-none transition-colors duration-500 hover:bg-white hover:text-[#C08C4A] md:py-1.5 md:px-5 ${className}`}
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
