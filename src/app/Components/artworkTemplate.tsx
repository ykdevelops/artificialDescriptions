import React from "react";
import Image from "next/image";
import galleryStyles from "../gallery.module.css";

interface ArtworkTemplateProps {
  imageUrl: string;
  musicLink: string;
  description: string;
}

const ArtworkTemplate: React.FC<ArtworkTemplateProps> = ({
  imageUrl,
  musicLink,
  description,
}) => {
  const createMarkup = (htmlString: string) => {
    return { __html: htmlString };
  };

  return (
    <div className={galleryStyles.artSection}>
      <div className={galleryStyles.topRow}>
        <div className={galleryStyles.leftHalf}>
          <Image src={imageUrl} alt="Artwork" width={400} height={400} />
        </div>

        <div className={galleryStyles.rightHalf}>
          <div dangerouslySetInnerHTML={createMarkup(description)} />
          <div>described by ....</div>
        </div>
      </div>
      <div className={galleryStyles.soundcloud}>
        <iframe
          width="100%"
          height="166"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={musicLink}
        ></iframe>
      </div>
    </div>
  );
};

export default ArtworkTemplate;
