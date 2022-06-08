import PropTypes from "prop-types";

const ColorPicker = ({ selectedColor, setSelectedColor }) => (
  <div className="flex items-center gap-1">
    <div
      className="flex h-4 w-4 items-center justify-center rounded-[50%]"
      style={{ background: "yellow" }}
    >
      <input
        type="radio"
        value="yellow"
        name="yellow"
        checked={selectedColor === "yellow"}
        onChange={(event) => setSelectedColor(event.target.value)}
        className="cursor-pointer"
        style={{ opacity: selectedColor === "yellow" ? 1 : 0 }}
      />
    </div>
    <div
      className="flex h-4 w-4 items-center justify-center rounded-[50%]"
      style={{ background: "green" }}
    >
      <input
        type="radio"
        value="green"
        name="green"
        checked={selectedColor === "green"}
        onChange={(event) => setSelectedColor(event.target.value)}
        className="cursor-pointer"
        style={{ opacity: selectedColor === "green" ? 1 : 0 }}
      />
    </div>
    <div
      className="flex h-4 w-4 items-center justify-center rounded-[50%]"
      style={{ background: "orange" }}
    >
      <input
        type="radio"
        value="orange"
        name="orange"
        checked={selectedColor === "orange"}
        onChange={(event) => setSelectedColor(event.target.value)}
        className="cursor-pointer"
        style={{ opacity: selectedColor === "orange" ? 1 : 0 }}
      />
    </div>
    <div
      className="flex h-4 w-4 items-center justify-center rounded-[50%]"
      style={{ background: "purple" }}
    >
      <input
        type="radio"
        value="purple"
        name="purple"
        checked={selectedColor === "purple"}
        onChange={(event) => setSelectedColor(event.target.value)}
        className="cursor-pointer"
        style={{ opacity: selectedColor === "purple" ? 1 : 0 }}
      />
    </div>
  </div>
);

ColorPicker.propTypes = {
  selectedColor: PropTypes.string.isRequired,
  setSelectedColor: PropTypes.func.isRequired,
};

export default ColorPicker;
