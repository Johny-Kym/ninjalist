import React from "react";
import axios from "axios";

export const getStaticPaths = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  return {
    props: {
      ninja: data,
    },
  };
};
function Details({ ninja }) {
  return (
    <div>
      <h1>details page</h1>
      <p>{ninja.name}</p>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
    </div>
  );
}

export default Details;
