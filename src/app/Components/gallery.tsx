import React from "react";
import Image from "next/image";
import galleryStyles from "../gallery.module.css";
export default function Gallery() {
  return (
    <div>
      <div className={galleryStyles.artSection}>
        <div className={galleryStyles.topRow}>
          <div className={galleryStyles.leftHalf}>
            <Image
              src="https://artdescriptions.s3.us-east-2.amazonaws.com/17.png"
              alt="Artwork"
              width={400}
              height={400}
            />
          </div>

          <div className={galleryStyles.rightHalf}>
            <p>
              &quot; a colorful painting of a man wearing sunglasses and flying
              against clouds, in the style of hip-hop style, vibrant color
              gradients, intricate, mushroomcore, grandiose portraits, neo-op,
              bryce 3d &quot;
            </p>
            <p>
              &quot; an illustration of a man in sunglasses standing above
              clouds, in the style of bold and colorful portraits, hip hop
              influenced, colorful explosions, hard edge painter, mushroomcore,
              intricate, dramatic use of shadows &quot;
            </p>
            <p>
              &quot; the color me iz crazy lp kwam, in the style of tristan
              eaton, colorful gradients, detailed skies, dramatic use of
              shadows, hyper-realistic representation, smokey background,
              colorful portraiture &quot;
            </p>
            <p>
              &quot; black eyed peas album cover, in the style of sam spratt,
              colorful abstract landscapes, energy-filled illustrations, thomas
              blackshear, colorful explosions, ethereal cloudscapes, saturated
              color field &quot;
            </p>
          </div>
        </div>
        <div className={galleryStyles.soundcloud}>
          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1553856661&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
