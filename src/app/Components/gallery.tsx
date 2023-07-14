import React from "react";
import ArtworkTemplate from "./artworkTemplate";
import galleryData from "../assets/galleryDetails.json";

export default function Gallery() {
  return (
    <div>
      {galleryData.gallery.map((item, index) => (
        <ArtworkTemplate
          key={index}
          imageUrl={item.imageUrl}
          musicLink={item.musicLink}
          description={item.description}
        />
      ))}
    </div>
  );
}
