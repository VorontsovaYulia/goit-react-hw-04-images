import { ModalWindow } from 'components/Modal/Modal';
import { Component } from 'react';
import { StyledImage } from './ImageGalleryItem.styled';


export class ImageGalleryItem extends Component {
    state = {
        isModalOpen: false,
    }

    openModal = () => this.setState({ isModalOpen: true });

    closeModal = () => this.setState({ isModalOpen: false });
    
    render() {
        const { image:{ largeImageURL, webformatURL,tags }
    } = this.props
        return (
            <>
                <StyledImage onClick={this.openModal} src={webformatURL} alt={tags} />
                <ModalWindow
                    closeModal={this.closeModal}
                    src={largeImageURL}
                    alt={tags}
                    stateModal={this.state.isModalOpen} />
            </>        
    )
    }
    
}