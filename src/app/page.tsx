import Rail from '@/components/Rail';
import Greeting from '@/components/Greeting';
import Subjects from '@/components/Subjects';
import Quiet from '@/components/Quiet';
import Parents from '@/components/Parents';
import Progress from '@/components/Progress';
import Signup from '@/components/Signup';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.app}>
      <Rail />
      <main className={styles.main}>
        <Greeting />
        <Subjects />
        <Quiet />
        <Parents />
        <Progress />
        <Signup />
        <Footer />
      </main>
    </div>
  );
}
