import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { client } from "../libs/client";
import React from "react";

// type Props = {
//   data: {
//     title: string;
//     content: string;
//     eyechatch: string;
//     category: string;
//   };
// };

const Home: React.FC<any> = ({ data }) => {
  console.log(typeof data.contents[0].createdAt, "Pro");

  const { title, content, eyechatch, category } = data;

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>タイトルーーー</h1>
        <h1 className={styles.title}>{data.contents[0].title}</h1>
        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>
      </main>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "blogs",
  });

  return {
    props: {
      data,
    },
  };
};
