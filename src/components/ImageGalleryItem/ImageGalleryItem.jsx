import { GalleryCardImg, ImageGalleryCard } from "./ImageGalleryItem.styled"
import PropTypes from "prop-types";

export const ImageGalleryItem = ({pictures, onClickImg}) => {
    return pictures.map((picture, index) => {
        return (
            <ImageGalleryCard key={index}>
      <GalleryCardImg src={picture.webformatURL} alt={picture.tags}
      onClick ={() => {
        onClickImg(picture.largeImageURL)
    }}
      />
    </ImageGalleryCard>
    )
    });

};

ImageGalleryItem.propTypes = {
    pictures: PropTypes.array.isRequired,
    onClickImg: PropTypes.func.isRequired,
  };
