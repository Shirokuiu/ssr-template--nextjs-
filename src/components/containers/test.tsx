import styles from 'src/components/containers/test.module.scss';

function Test() {
  return <h1 className={`${styles.test} ${styles['test--red']}`}>Hello</h1>;
}

export default Test;
