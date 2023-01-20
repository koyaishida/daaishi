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

type Category = {
  name: string & MicroCMSListContent;
};

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
  data: BlogPreview[];
};

const Home: React.FC<Props> = (props) => {
  const { data } = props;
  console.log(props);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main className={styles.top}>
          <h1>I`m Under160</h1>
          <div className={styles.top__container}>
            <div className={styles.top__card}>
              <div className={styles.top__heading}>
                <SectionTitle title={"Profile"} />
                <AccountBoxRoundedIcon fontSize="large" />
              </div>
              <div className={styles.top__text}>
                <label>名前</label>
                <p>てっちゃん</p>
              </div>
              <div className={styles.top__text}>
                <label>出身地</label>
                <p>愛知県名古屋市</p>
              </div>
              <div className={styles.top__text}>
                <label>居住地</label>
                <p>東京都中野区</p>
              </div>
              <div className={styles.top__text}>
                <label>趣味</label>
                <p>お笑い,ラジオ（ダイアン）</p>
              </div>
            </div>
            <div className={styles.top__card}>
              <div className={styles.top__heading}>
                <SectionTitle title={"Education"} />
                <SchoolIcon fontSize="large" />
              </div>
              <p>2008~2011 愛知高校 普通科 硬式野球部</p>
              <p>2011~2015 愛知大学 経営学部 経営学科</p>
            </div>
            <div className={styles.top__card}>
              <div className={styles.top__heading}>
                <SectionTitle title={"Career"} />
                <WorkIcon fontSize="large" />
              </div>
              <p>2015 株式会社プロトコーポレーション入社</p>
              <p>2015~2021 法人営業（中古車販売店へのメディア営業）</p>
              <p>
                2022~現在
                新規事業開発（既存領域（モビリティ関連）での新規事業開発）
              </p>
            </div>
            <div className={styles.top__card}>
              <div className={styles.top__heading}>
                <SectionTitle title={"Engineering"} />
                <ComputerIcon fontSize="large" />
              </div>
              <p>2015 株式会社プロトコーポレーション入社</p>
              <p>2015~2021 法人営業（中古車販売店へのメディア営業）</p>
              <p>
                2022~現在
                新規事業開発（既存領域（モビリティ関連）での新規事業開発）
              </p>
            </div>
          </div>
          <div>
            <SectionTitle title={"Blogs"} />
            {data &&
              data.map((blog) => (
                <Link href={`./blog/${blog.id}`}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image={blog.eyecatch.url}
                      title="eyecatch"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {blog.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {blog.category.name}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </Link>
              ))}
          </div>
        </main>
      </Layout>
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
      data: data.contents,
    },
  };
};
