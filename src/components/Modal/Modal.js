import Modal from 'react-modal';

const customStyles = {
  content: {
    maxWidth: 'calc(100vw - 48px)',
    maxHeight: 'calc(100vh - 24px)',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    background: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: '1200', 
    width: '100vw',
    height: '100vh',
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