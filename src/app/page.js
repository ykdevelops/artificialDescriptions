import Image from "next/image";
import styles from "./page.module.css";
import Gallery from "./pages/gallery"
import Intro from "./components/intro"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export default function Home() {
  return (
    <main className={styles.main}>
      <Gallery />
    </main>
  );
}
