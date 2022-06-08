import { useState } from "react";
import PropTypes from "prop-types";
import PostIt from "../../components/PostIt/PostIt";
import ConfirmModal from "../../components/ConfirmModal";

const Trash = ({ notes, setNotes }) => {
  const [isTrashModalOpen, setIsTrashModalOpen] = useState(false);
  const [selectedPostItId, setSelectedPostItId] = useState("");
  const trashNotes = notes.filter(({ type }) => type === "trash");

  if (!trashNotes?.length) {
    return (
      <div className="flex flex-col items-center">
        <h2 className="text-shadow mb-8 bg-[#F19336] p-4 text-center text-2xl font-bold text-white md:text-5xl">
          You don&apos;t have any deleted notes yet
        </h2>
      </div>
    );
  }
  return (
    <main className="grid grid-cols-auto-fill gap-5">
      {trashNotes.map(({ id, text, type, color }) => (
        <PostIt
          key={id}
          text={text}
          type={type}
          color={color}
          onRemoveFromTrash={() => {
            setIsTrashModalOpen(true);
            setSelectedPostItId(id);
          }}
          onUndo={() => {
            setNotes((currentNotes) =>
              currentNotes.map((note) => {
                if (note.id === id) {
                  return { ...note, type: "show" };
                }
                return note;
              }),
            );
          }}
        />
      ))}
      <ConfirmModal
        isModalOpen={isTrashModalOpen}
        closeModal={() => {
          setIsTrashModalOpen(false);
        }}
        title="Delete note"
        description="Are you sure you want to delete this note? You won't be able to undo this change"
        onConfirm={() => {
          const updatedNotes = notes.filter((note) => note.id !== selectedPostItId);
          setNotes(updatedNotes);
          setIsTrashModalOpen(false);
        }}
      />
    </main>
  );
};

Trash.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      color: PropTypes.string,
      text: PropTypes.string.isRequired,
      type: PropTypes.oneOf(["edit", "show", "trash"]).isRequired,
    }),
  ).isRequired,
  setNotes: PropTypes.func.isRequired,
};

export default Trash;
