import React from "react";
import styles from "../page.module.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
export default function intro() {
  return (
    <div className={styles.intro}>
      <div className={styles.description}>
        <p>Welcome to the dj lo2us online gallery!</p>
        <p>
          The mission of this gallery is to allow you to better communicate with
          AI and realize the endless possibilities of its functionality
        </p>
        <p>
          All the artwork in this gallery was generated through A.I. Each piece
          is acompanied by 4 descriptions generated by Midjorney, and a music
          mix that fits the images mood.{" "}
        </p>
        <div className={styles.buttonRow}>
          <button>Click to explore</button>
          <ArrowForwardIosIcon />
        </div>
      </div>
    </div>
  );
}
