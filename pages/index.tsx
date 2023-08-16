import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import { CMS_NAME } from "../lib/constants";

export default function Index({ allPosts: { edges }, preview }) {
  const latestPosts = edges.slice(0, 3); // Get the first 3 posts
  const heroPost = latestPosts[0]?.node;
  const morePosts = latestPosts.slice(1);

  // Get all the remaining posts for the MoreStories component
  const remainingPosts = edges.slice(3);

  return (
    <Layout preview={preview}>
      <Head>
        <title>{` ${CMS_NAME}`}</title>
      </Head>
      <Container>
        <Intro />
        {heroPost && (
          <div className="max-w-7xl mx-auto">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-10">
              <HeroPost
                title={heroPost.title}
                coverImage={heroPost.featuredImage}
                date={heroPost.date}
                author={heroPost.author}
                slug={heroPost.slug}
                excerpt={heroPost.excerpt}
              />

              {morePosts.map(({ node }) => (
                <HeroPost
                  key={node.slug}
                  title={node.title}
                  coverImage={node.featuredImage}
                  date={node.date}
                  author={node.author}
                  slug={node.slug}
                  excerpt={node.excerpt}
                />
              ))}
            </ul>
          </div>
        )}
        {remainingPosts.length > 0 && <MoreStories posts={remainingPosts} />}
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts, preview },
    revalidate: 10,
  };
};
