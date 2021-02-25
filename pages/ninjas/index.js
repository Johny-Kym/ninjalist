import React from "react";
import Link from "next/link";
import axios from "axios";
import styles from "../../styles/ninjas.module.css";

export const getStaticProps = async () => {
  console.log("nextjs about to fetch data from the server");
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  return {
    props: { ninjas: data },
  };
};
function index({ ninjas }) {
  console.log(ninjas);
  return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas.map((ninja) => (
        <div key={ninja.id}>
          <Link href={`ninjas/${ninja.id}`}>
            <a className={styles.single}>
              <h3>{ninja.name}</h3>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default index;
