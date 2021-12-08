import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import productService from "../../../services/product.service";
import imageService from "../../../services/imageService";
export default function ImageMagnifiers({ linkImage }) {
  const [images, setImages] = useState([]);
  useEffect(() => {
    createImages();
  }, []);
  function createImages() {
    productService
      .getDetailImages(linkImage)
      .then((res) => {
        setImages(mapdata(res.data));
      })
      .catch((e) => {
        console.log(e);
      });
  }
  function mapdata(links) {
    const list = links.map((link) => ({
      original: imageService.get(link),
      thumbnail: imageService.get(link),
    }));
    return list;
  }
  return (
    <ImageGallery items={images} />
  );
}
