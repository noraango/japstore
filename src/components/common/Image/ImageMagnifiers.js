import React from "react";
import { SideBySideMagnifier } from "react-image-magnifiers";

export default function ImageMagnifiers({ linkImage }) {
  return (
    <div>
      <SideBySideMagnifier
        imageSrc={process.env.PUBLIC_URL + linkImage}
        imageAlt="Example"
        largeImageSrc={process.env.PUBLIC_URL + linkImage}
        fillAvailableSpace={false}
        fillAlignTop={false}
        overlayOpacity={0.5}
        fillGapRight={50}
      />
    </div>
  );
}
