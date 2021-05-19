import React from "react";
import { Layout, Container, Cards } from "../components";
import { getContentList } from "../lib/content";

/**
 * Article page `/articles`
 */

const Articles = ({ articles }) => {
  return (
    <Layout
      pathname={"/articles"}
      pageTitle="Articles"
      pageDescription="Articles and Essays about Frontend Web Development and software engineering"
    >
      <Container>
        <p className="page-intro">
          More long form articles and essays about new things I'm exploring and
          learning about...
        </p>

        <blockquote>
          I am working on this part. It is not ready yet. 📝
        </blockquote>
        {/* <Cards data={articles} basePath="articles" /> */}
      </Container>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const articles = getContentList("articles");
  return {
    props: { articles },
  };
};

export default Articles;
