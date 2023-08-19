import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { StyledUl, StyledLi } from "./ImageGallery.styled"

export const ImageGallery = ({images}) => {
    return (
        <StyledUl>
            {images.map(image => (
                <StyledLi key={image.id}>
                    <ImageGalleryItem image={image} />
                </StyledLi>
            ))}   
        </StyledUl>
    )
}