import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { ImageGalleryWrapper } from "./ImageGallery.styled"
import PropTypes from "prop-types";

export const ImageGallery = ({pictures, onClick}) => {
    return (
        <ImageGalleryWrapper>
 <ImageGalleryItem onClickImg={onClick} pictures={pictures}/>
</ImageGalleryWrapper>
    )
};

ImageGallery.propTypes = {
    pictures: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
  };