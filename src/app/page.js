import Image from "next/image";
import styles from "./page.module.css";
import Gallery from "./components/gallery"
export default function Home() {
  return (
    <main className={styles.main}>
      <Gallery />
      <div className={styles.description}>
        <p>
          Welcome to our AI Art Expo, a fascinating blend of AI-generated
          artwork paired with AI-rendered descriptions.
        </p>
        <p>
          Our exhibition aims to enrich your interaction with AI, by offering
          you an insight into the language utilized in the artworks. As you
          explore, you&apos;ll uncover patterns, discover new artistic styles,
          and gather abundant inspiration.
        </p>
        <p>
          Leveraging the powers of Midjourney and DALL-E, we&apos;ve created a
          collection inspired by the auditory waves from the SoundCloud page
          &quot;djlo2us&quot;. Get ready to immerse yourself in a unique journey
          where art and AI coalesce in the most intriguing ways.
        </p>
      </div>
    </main>
  );
}
