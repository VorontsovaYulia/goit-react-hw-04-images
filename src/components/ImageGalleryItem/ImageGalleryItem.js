import { ModalWindow } from 'components/Modal/Modal';
import { Component } from 'react';


export class ImageGalleryItem extends Component {
    state = {
        isModalOpen: false,
    }

    openModal = () => this.setState({ isModalOpen: true });

    closeModal = () => this.setState({ isModalOpen: false });

    render() {
        const { image:{ largeImageURL, previewURL,tags }
    } = this.props
        return (
            <>
                <img onClick={this.openModal} src={previewURL} alt={tags} />
                <ModalWindow closeModal={this.closeModal} src={largeImageURL} alt={tags} stateModal={this.state.isModalOpen} />
            </>
            
    )
    }
    
}