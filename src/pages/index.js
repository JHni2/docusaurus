import clsx from 'clsx';
import Layout from '@theme/Layout';
import HomePageInfo from '../components/HomePageInfo';
import styles from './index.module.css';

const text = 'ACRA Point V3.0.11 사용자 운용 설명서';

function HomepageTitle() {
  return (
    <div className={styles.heroBanner}>
      <div className={clsx('container', styles.titleContainer)}>
        <div className={styles.title}>{text}</div>
        <p className="hero__subtitle">V3.0.11 (2023-12-11)</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Layout title={text} description={text}>
      <main>
        <div className={styles.mainPage}>
          <HomepageTitle />
          <HomePageInfo />
        </div>
      </main>
    </Layout>
  );
}
