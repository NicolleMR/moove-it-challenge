import PropTypes from "prop-types";
import PostIt from "../PostIt";
import Modal from "../Modal";

const PostItModal = ({ isModalOpen, closeModal, setNotes, selectedNote }) => (
  <Modal isModalOpen={isModalOpen} closeModal={closeModal} label="Post It Modal">
    <PostIt
      id={selectedNote?.id}
      onClose={closeModal}
      onCreate={(note) => {
        setNotes((currentNotes) => [...currentNotes, note]);
      }}
      onUpdate={(note) => {
        setNotes((currentNotes) => {
          const updatedNotes = currentNotes.map((currentNote) => {
            if (currentNote.id === note.id) {
              return note;
            }
            return currentNote;
          });
          return updatedNotes;
        });
      }}
      type="edit"
      text={selectedNote?.text || ""}
      color={selectedNote?.color || "yellow"}
    />
  </Modal>
);

export default PostItModal;

PostItModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  setNotes: PropTypes.func.isRequired,
  selectedNote: PropTypes.shape({
    id: PropTypes.number,
    color: PropTypes.string,
    text: PropTypes.string,
    type: PropTypes.oneOf(["edit", "show", "trash"]),
  }),
};

PostItModal.defaultProps = {
  selectedNote: {},
};
