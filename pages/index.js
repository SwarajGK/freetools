import Header from '../src/shared/Header';
import Footer from '../src/shared/Footer';
import styles from '../styles/Home.module.css';

function Home({ data }) {
  const { header, footer } = data.speedlab;
  return (
    <>
      <Header data={header} />
      <div className={styles.wrapper}>This is the testing</div>
      <Footer data={footer} />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/header-footer');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default Home;
