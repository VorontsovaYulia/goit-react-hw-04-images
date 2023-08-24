import { ModalWindow } from 'components/Modal/Modal';
import { StyledImage } from './ImageGalleryItem.styled';
import { useState } from 'react';

export const ImageGalleryItem = ({ image: { largeImageURL, webformatURL, tags }
    }) => {
  
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);

    const closeModal = () => setIsModalOpen(false);
    
        return (
            <>
                <StyledImage onClick={openModal} src={webformatURL} alt={tags} />
                <ModalWindow
                    closeModal={closeModal}
                    src={largeImageURL}
                    alt={tags}
                    stateModal={isModalOpen} />
            </>        
    )
}