import PropTypes from "prop-types";
import pushPin from "../../assets/images/push-pin.png";
import Icon from "../Icon";

const PostIt = ({ type, text, onClose }) => {
  const isEditType = type === "edit";
  const isShowType = type === "show";
  const isTrashType = type === "trash";

  return (
    <div
      className={`relative flex	h-[17.5rem] w-full flex-col bg-cover ${
        isTrashType ? "bg-crumpled-paper-yellow" : "bg-[#FFFD54]"
      } px-4 shadow-2xl ${isEditType ? "pb-[3.43rem]" : "pb-0"}`}
    >
      {isShowType && (
        <>
          <img
            className="absolute right-2/4 -top-2 w-12 translate-x-2/4"
            src={pushPin}
            alt="Push Pin"
          />
          <div className="mb-2.5 flex items-center justify-between pt-1">
            <button type="button" onClick={() => {}}>
              <Icon width={17} name="pencil" title="Edit" />
            </button>
            <button type="button" onClick={() => {}}>
              <Icon width={17} name="cancel-circle" title="Delete" />
            </button>
          </div>
          <p className="mb-8 h-full overflow-y-auto">{text}</p>
        </>
      )}

      {isEditType && (
        <>
          <div className="mb-2.5 flex items-center justify-between pt-1">
            <div className="flex gap-1.5">
              <input className="cursor-pointer accent-[#FFFD54]" type="radio" checked />
              <input className="cursor-pointer accent-[#F19336]" type="radio" checked />
              <input className="cursor-pointer accent-[#F2AAE4]" type="radio" checked />
              <input className="cursor-pointer accent-[#85FA66]" type="radio" checked />
            </div>
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
            value={text}
          />
          <button
            className="absolute	bottom-0 left-0 w-full bg-yellow-400 py-2.5 font-bold tracking-widest text-white outline-none transition-colors duration-300 hover:bg-yellow-500"
            type="button"
          >
            Add
          </button>
        </>
      )}
      {isTrashType && (
        <>
          <div className="mb-2.5 flex items-center justify-between pt-1">
            <button type="button" onClick={() => {}}>
              <Icon width={17} name="undo" title="Undo" />
            </button>
            <button type="button" onClick={() => {}}>
              <Icon width={17} name="cancel-circle" title="Delete" />
            </button>
          </div>
          <p className="mb-8 h-full overflow-y-auto">{text}</p>
        </>
      )}
    </div>
  );
};

export default PostIt;

PostIt.propTypes = {
  type: PropTypes.oneOf(["edit", "show", "trash"]),
  text: PropTypes.string,
  onClose: PropTypes.func,
};

PostIt.defaultProps = {
  type: "show",
  text: "",
  onClose: () => {},
};
