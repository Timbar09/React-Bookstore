import styles from '../styles/NotMatch.module.css';

const NotMatch = () => (
  <div className={styles.notMatch}>
    <div>
      <h1 className={styles.title}>404</h1>
      <p className={styles.description}>Not found!</p>
    </div>
  </div>
);

export default NotMatch;
