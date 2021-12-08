import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import productService from "../../../services/product.service";
export default function ImageMagnifiers({ linkImage }) {
  const [images, setImages] = useState([]);
  useEffect(() => {
    setImages(createImages());
    console.log(images)
  }, []);
  function createImages() {
    productService
    .getDetailImages(linkImage)
    .then((res) => {
      
      res.data.map((link) => (
        setImages(images.concat({
          original: process.env.PUBLIC_URL +"/"+ link,
          thumbnail: process.env.PUBLIC_URL+"/" + link,
        }))
        ));console.log(images);
    })
    .catch((e) => {
      console.log(e);
    });
  }

  return (
    <ImageGallery items={images} />
  );
}
