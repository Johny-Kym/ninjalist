import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"></meta>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>
          This is actually the home page of our applications so test it and give
          us feedback about it so that we can know what to add
        </p>
        <p className={styles.text}>
          This is actually the home page of our applications so test it and give
          us feedback about it so that we can know what to add
        </p>
      </div>
    </>
  );
}
