import ReactModal from "react-modal";
import PropTypes from "prop-types";

ReactModal.setAppElement("#root");

const Modal = ({
  isModalOpen,
  closeModal,
  children,
  label,
  className,
  overlayClassName,
}) => (
  <ReactModal
    isOpen={isModalOpen}
    onRequestClose={closeModal}
    contentLabel={label}
    className={`w-full max-w-[25rem] ${className}`}
    overlayClassName={`z-20 fixed top-0 left-0 right-0 bottom-0 bg-overlay flex justify-center items-center ${overlayClassName}`}
  >
    {children}
  </ReactModal>
);

Modal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  overlayClassName: PropTypes.string,
};

Modal.defaultProps = {
  className: "",
  overlayClassName: "",
};

export default Modal;
