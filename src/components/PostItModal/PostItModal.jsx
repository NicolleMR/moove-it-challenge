import PropTypes from "prop-types";
import PostIt from "../PostIt";
import Modal from "../Modal";

const PostItModal = ({ isModalOpen, closeModal, postItId }) => (
  <Modal isModalOpen={isModalOpen} closeModal={closeModal} label="Post It Modal">
    <PostIt id={postItId} onClose={closeModal} type="edit" />
  </Modal>
);

export default PostItModal;

PostItModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  postItId: PropTypes.string,
};

PostItModal.defaultProps = {
  postItId: "",
};
