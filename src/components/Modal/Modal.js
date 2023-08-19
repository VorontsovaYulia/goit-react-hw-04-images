import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const ModalWindow = ({stateModal, closeModal, src, alt}) => {

    return (
         <Modal
        isOpen={stateModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
      <img src={src} alt={alt} />
      </Modal>
    )
}