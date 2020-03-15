import React from "react";
import ImageGalleryItem from "./../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ galleryItems, largeImageURL, onOpen }) => (
  <>
    <ul className="ImageGallery">
      {galleryItems.map(item => (
        <ImageGalleryItem
          itemLi={item}
          key={item.id}
          onOpen={onOpen}
          largeImageURL={largeImageURL}
        />
      ))}
    </ul>
  </>
);

export default ImageGallery;