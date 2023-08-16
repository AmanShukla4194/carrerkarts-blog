import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "../../components/container";
import HeroPost from "../../components/hero-post";
import Layout from "../../components/layout";
import { getAllPostsForHome, getPostsByCategory } from "../../lib/api"; // Import the necessary functions
import { CMS_NAME } from "../../lib/constants";

export default function Index({ categoryPosts, preview }) {
  const heroPost = categoryPosts[0]?.node;
  const morePosts = categoryPosts.slice(1);

  return (
    <Layout preview={preview}>
      <Head>
        <title>{CMS_NAME}</title>
      </Head>
      <Container>
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
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const categorySlug = "Education"; // Replace with your chosen category slug
  const categoryPosts = await getPostsByCategory(categorySlug);

  return {
    props: { categoryPosts, preview },
    revalidate: 10,
  };
};
