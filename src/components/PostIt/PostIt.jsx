import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import pushPin from "../../assets/images/push-pin.png";
import colors from "../../utils/colors";
import ColorPicker from "../ColorPicker";
import Icon from "../Icon";

const PostIt = ({
  id,
  type,
  text,
  color,
  onClose,
  onRemoveFromTrash,
  onDelete,
  onEdit,
  onCreate,
  onUpdate,
  onUndo,
}) => {
  const [postText, setPostText] = useState(text);
  const [selectedColor, setSelectedColor] = useState(color);
  const trashImageUrl = require(`../../assets/images/crumpled-paper-${selectedColor}.jpg`);

  useEffect(() => {
    setSelectedColor(color);
  }, [color]);

  return (
    <div
      className={`relative flex	h-[17.5rem] w-full flex-col bg-cover px-4 shadow-2xl ${
        type === "edit" ? "pb-[3.43rem]" : "pb-0"
      }`}
      style={{
        background: type === "trash" ? `url(${trashImageUrl})` : colors[selectedColor],
      }}
    >
      {type === "show" && (
        <>
          <img
            className="absolute right-2/4 -top-2 w-12 translate-x-2/4"
            src={pushPin}
            alt="Push Pin"
          />
          <div className="mb-2.5 flex items-center justify-between pt-1">
            <button type="button" onClick={onEdit}>
              <Icon width={17} name="pencil" title="Edit" />
            </button>
            <button type="button" onClick={onDelete}>
              <Icon width={17} name="cancel-circle" title="Delete" />
            </button>
          </div>
          <p className="mb-8 h-full overflow-y-auto">{text}</p>
        </>
      )}

      {type === "edit" && (
        <>
          <div className="mb-2.5 flex items-center justify-between pt-1">
            <ColorPicker
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
            />
            <button
              className="text-[1.06rem] font-bold tracking-widest text-black underline"
              type="button"
              onClick={onClose}
            >
              Close
            </button>
          </div>
          <textarea
            className="h-full w-full resize-none bg-transparent p-2 outline-0"
            placeholder="Start Typing Here..."
            value={postText}
            onChange={(event) => setPostText(event.target.value)}
          />
          <button
            className="absolute	bottom-0 left-0 w-full bg-yellow-400 py-2.5 font-bold tracking-widest text-white outline-none transition-colors duration-300 hover:bg-yellow-500"
            type="button"
            onClick={() => {
              if (id) {
                onUpdate({ id, type: "show", text: postText, color: selectedColor });
              } else {
                onCreate({
                  id: new Date().getMilliseconds(),
                  type: "show",
                  text: postText,
                  color: selectedColor,
                });
              }
              onClose();
            }}
          >
            {id ? "update" : "Create"}
          </button>
        </>
      )}
      {type === "trash" && (
        <>
          <div className="mb-2.5 flex items-center justify-between pt-1">
            <button type="button" onClick={onUndo}>
              <Icon width={17} name="undo" title="Undo" />
            </button>
            <button type="button" onClick={onRemoveFromTrash}>
              <Icon width={17} name="cancel-circle" title="Delete" />
            </button>
          </div>
          <p className="mb-8 h-full overflow-y-auto">{text}</p>
        </>
      )}
    </div>
  );
};

PostIt.propTypes = {
  id: PropTypes.number,
  color: PropTypes.string,
  type: PropTypes.oneOf(["edit", "show", "trash"]),
  text: PropTypes.string,
  onClose: PropTypes.func,
  onRemoveFromTrash: PropTypes.func,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  onCreate: PropTypes.func,
  onUpdate: PropTypes.func,
  onUndo: PropTypes.func,
};

PostIt.defaultProps = {
  id: 0,
  color: "yellow",
  type: "show",
  text: "",
  onClose: () => {},
  onRemoveFromTrash: () => {},
  onDelete: () => {},
  onEdit: () => {},
  onCreate: () => {},
  onUpdate: () => {},
  onUndo: () => {},
};

export default PostIt;
