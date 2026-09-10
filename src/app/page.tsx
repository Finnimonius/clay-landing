import Rail from "@/components/Rail";
import Greeting from "@/components/Greeting";
import Subjects from "@/components/Subjects";
import Lesson from "@/components/Lesson";
import Parents from "@/components/Parents";
import Teachers from "@/components/Teachers";
import Quiet from "@/components/Quiet";
import Prices from "@/components/Prices";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.app}>
      <Rail />
      <main className={styles.main}>
        <Greeting />
        <Subjects />
        <Lesson />
        <Parents />
        <Teachers />
        <Quiet />
        <Prices />
        <Visit />
        <Footer />
      </main>
    </div>
  );
}
