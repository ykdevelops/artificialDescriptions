import React from "react";
import Image from "next/image";
import galleryStyles from "../gallery.module.css";
import galleryData from "../assets/galleryDetails.json";

interface GalleryItem {
  imageUrl: string;
  musicLink: string;
  description: string;
}

interface GalleryData {
  gallery: GalleryItem[];
}

export default function ArtworkTemplate() {
  const createMarkup = (htmlString: string) => {
    return { __html: htmlString };
  };

  return (
    <div className={galleryStyles.artSection}>
      <div className={galleryStyles.topRow}>
        <div className={galleryStyles.leftHalf}>
          <Image
            src={galleryData.gallery[0].imageUrl}
            alt="Artwork"
            width={400}
            height={400}
          />
        </div>

        <div className={galleryStyles.rightHalf}>
          <div
            dangerouslySetInnerHTML={createMarkup(
              galleryData.gallery[0].description
            )}
          />
        </div>
      </div>
      <div className={galleryStyles.soundcloud}>
        <iframe
          width="100%"
          height="166"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={galleryData.gallery[0].musicLink}
        ></iframe>
      </div>
    </div>
  );
}
