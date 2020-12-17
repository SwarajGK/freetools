import useSwr from 'swr';
import Header from '../src/shared/Header';
import Footer from '../src/shared/Footer';
import styles from '../styles/Home.module.css';

const fetcher = (url) => fetch(url).then((res) => res.json());

function Home() {
  const { data, error } = useSwr('/api/header-footer', fetcher);

  if (error) return <div>Failed to load data</div>;
  if (!data) return <div>Loading...</div>;
  const { header, footer } = data.speedlab;
  return (
    <>
      <Header data={header} />
      <div className={styles.wrapper}>This is the testing</div>
      <Footer data={footer} />
    </>
  );
}

export default Home;
