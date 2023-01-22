import Head from "next/head";
// import styles from "styles/Home.module.scss";
import styles from "styles/top.module.scss";
import client from "lib/cms";
import React from "react";
import { Layout } from "components/Layout";
import { SectionTitle } from "components/UIkit";
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import ComputerIcon from "@mui/icons-material/Computer";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import type { MicroCMSListContent } from "microcms-js-sdk";
import type { GetStaticProps, NextPage } from "next/types";
import HTMLReactParser from "html-react-parser";

type Category = {
  name: string & MicroCMSListContent;
};

type Params = { id: string };

type Blog = {
  title: string;
  content: string;
  eyecatch: {
    url: string;
    height: number;
    width: number;
  };
  category: Category;
};

type BlogPreview = Blog & MicroCMSListContent;

type Props = {
  blog: BlogPreview;
};

const Home: React.FC<Props> = (props) => {
  const { blog } = props;

  //ブラウザバックの際にカクツク
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main className={styles.top}>
          <Link href={`../`}>
            <button>戻る</button>
          </Link>
          <h2>{blog.title}</h2>
          <p>{HTMLReactParser(blog.content)}</p>
        </main>
      </Layout>
    </div>
  );
};

export default Home;

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blogs" });

  const paths = data.contents.map(
    (content: BlogPreview) => `/blog/${content.id}`
  );
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blogs", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};
