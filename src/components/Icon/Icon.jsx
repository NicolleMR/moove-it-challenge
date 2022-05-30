import PropTypes from "prop-types";
import SVG from "react-inlinesvg";

const Icon = ({ width, height, name, color, title }) => (
  <SVG
    src={require(`../../assets/icons/${name}.svg`)}
    width={width}
    height={height}
    title={title}
    style={{ fill: color }}
  />
);

Icon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  name: PropTypes.oneOf([
    "arrow-left",
    "cancel-circle",
    "pencil",
    "trash",
    "trash-empty",
    "undo",
  ]).isRequired,
  title: PropTypes.string.isRequired,
};

Icon.defaultProps = {
  width: 30,
  height: 30,
  color: "black",
};

export default Icon;
