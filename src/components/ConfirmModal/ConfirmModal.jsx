import PropTypes from "prop-types";
import Button from "../Button";
import Modal from "../Modal";

const ConfirmModal = ({ isModalOpen, closeModal, title, description, onConfirm }) => (
  <Modal isModalOpen={isModalOpen} closeModal={closeModal} label="Confirm Modal">
    <div className="text-center">
      <h2 className="text-shadow text-3xl text-white">{title}</h2>
      <p className=" text-shadow text-lg text-white">{description}</p>
      <div className="pt-7">
        <Button
          className="mr-8 bg-white text-[#C08C4A] hover:bg-white"
          onClick={onConfirm}
        >
          Confirm
        </Button>
        <Button className="hover:bg-transparent hover:text-white" onClick={closeModal}>
          Cancel
        </Button>
      </div>
    </div>
  </Modal>
);

export default ConfirmModal;

ConfirmModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
};
