import React from "react";
import ArtworkTemplate from "../components/artworkTemplate";
import galleryData from "../assets/galleryDetails.json";
import Image from "next/image";
import styles from "../styles/gallery.module.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import AppsIcon from "@mui/icons-material/Apps";
import TableRowsIcon from "@mui/icons-material/TableRows";
export default function Gallery() {
  return (
    <div className={styles.galleryPage}>
      <div className={styles.topRow}>
        <ArrowBackIosIcon className={styles.backIcon} />
        <div className={styles.title}></div>
        <div className={styles.sortIconsRow}>
          <AppsIcon />
          <TableRowsIcon />
        </div>
      </div>
      {galleryData.gallery.map((item, index) => (
        <div key={index} className={styles.artworkContainer}>
          <Image
            src={item.imageUrl}
            alt="My Image"
            width={500}
            height={500}
            key={index}
            className={styles.artworkImage}
          />
        </div>
      ))}
    </div>
  );
}
