import clsx from 'clsx';
import styles from './index.module.css';

export default function HomePageInfo() {
  return (
    <section>
      <div className={clsx('container', styles.homeInfoContainer)}>
        <p className={styles.homInfoCompanyTitle}>펜타시스템테크놀러지(주)</p>
        <p>서울특별시 영등포구 여의도공원로 115 세우빌딩 10층</p>
        <p>Tel : 02-769-9700</p>
        <p>Fax: 02-784-5550</p>
      </div>
    </section>
  );
}
