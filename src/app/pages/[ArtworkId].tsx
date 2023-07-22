import React from "react";
import ArtworkTemplate from "../components/artworkTemplate";
import styles from "../styles/artwork.module.css";
export default function artwork() {
  return (
    <div>
      <div className={styles.exitRow}>
        <div>x</div>
      </div>
      <ArtworkTemplate />
    </div>
  );
}
