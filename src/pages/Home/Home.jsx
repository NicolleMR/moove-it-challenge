import { useState } from "react";
import PropTypes from "prop-types";
import PostIt from "../../components/PostIt";
import Button from "../../components/Button";
import PostItModal from "../../components/PostItModal";

const Home = ({ notes, setNotes }) => {
  const [isPostItModalOpen, setIsPostItModalOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);
  const homeNotes = notes.filter(({ type }) => type === "show");

  if (!homeNotes?.length) {
    return (
      <div className="flex flex-col items-center">
        <h2 className="text-shadow mb-8 bg-[#F19336] p-4 text-center text-xl font-bold text-white md:text-5xl">
          You&apos;ve not created any note yet
        </h2>
        <Button
          onClick={() => {
            setIsPostItModalOpen(true);
          }}
          className="bg-white px-2.5 py-1.5 text-lg text-[#C08C4A]	hover:bg-transparent hover:text-white md:py-0 md:px-5 md:text-2xl"
        >
          Create It
        </Button>
        <PostItModal
          closeModal={() => {
            setIsPostItModalOpen(false);
          }}
          setNotes={setNotes}
          isModalOpen={isPostItModalOpen}
        />
      </div>
    );
  }
  return (
    <main className="grid grid-cols-auto-fill gap-5">
      {homeNotes.map(({ id, text, type }) => (
        <PostIt
          key={id}
          text={text}
          type={type}
          onDelete={() => {
            const updatedNotes = notes.map((note) => {
              if (note.id === id) {
                return { ...note, type: "trash" };
              }
              return note;
            });
            setNotes(updatedNotes);
          }}
          onEdit={() => {
            setIsPostItModalOpen(true);
            setSelectedNote({ id, text, type });
          }}
        />
      ))}
      <PostItModal
        closeModal={() => {
          setSelectedNote(null);
          setIsPostItModalOpen(false);
        }}
        selectedNote={selectedNote}
        isModalOpen={isPostItModalOpen}
        notes={notes}
        setNotes={setNotes}
      />
    </main>
  );
};

Home.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string.isRequired,
      type: PropTypes.oneOf(["edit", "show", "trash"]).isRequired,
    }),
  ).isRequired,
  setNotes: PropTypes.func.isRequired,
};

export default Home;
