import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
export default function ImageMagnifiers({ linkImage }) {
  const [images, setImages] = useState([]);
  useEffect(() => {
    setImages(createImages());
    console.log(images)
  }, []);
  function createImages() {
    const list = linkImage.map((link) => ({
      original: process.env.PUBLIC_URL + link,
      thumbnail: process.env.PUBLIC_URL + link,
    }));
    return list;
  }

  return (
    // <div>
    //   <SideBySideMagnifier
    //     imageSrc={process.env.PUBLIC_URL + linkImage}
    //     imageAlt="Example"
    //     largeImageSrc={process.env.PUBLIC_URL + linkImage}
    //     fillAvailableSpace={false}
    //     fillAlignTop={false}
    //     overlayOpacity={0.5}
    //     fillGapRight={50}
    //   />
    // </div>
    <ImageGallery items={images} />
  );
}
