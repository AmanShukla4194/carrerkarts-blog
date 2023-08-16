import PostPreview from "./post-preview";

export default function MoreStories({ posts }) {
  return (
    <section>
      <h2 className="mx-8 text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex mb-3 mt-20">
      <div className="w-[60%]">
          <ul className="flex flex-col gap-10">
        {posts.map(({ node }) => (
          <PostPreview
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
      {/* Filters & Social Media */}
      <div className="w-[40%] pl-32">
        <div className=" mb-5 text-2xl font-normal leading-6 text-black ">
          Blogs By Filter
        </div>

        <div className="mb-16 grid grid-cols-3 gap-2">
          <button className="border border-collapse bg-[#F2F2F2] px-4 py-2 rounded-3xl text-black font-medium leading-5 text-s">
            Education
          </button>
          <button className="border border-collapse bg-[#F2F2F2] px-4 py-2 rounded-3xl text-black font-medium leading-5 text-s">
            Career
          </button>
          <button className="border border-collapse bg-[#F2F2F2] px-4 py-2 rounded-3xl text-black font-medium leading-5 text-s">
            Future
          </button>
          <button className="border border-collapse bg-[#F2F2F2] px-4 py-2 rounded-3xl text-black font-medium leading-5 text-s">
            Technology
          </button>
          <button className="border border-collapse bg-[#F2F2F2] px-4 py-2 rounded-3xl text-black font-medium leading-5 text-s">
            Artificial Intelligence
          </button>
          <button className="border border-collapse bg-[#F2F2F2] px-4 py-2 rounded-3xl text-black font-medium leading-5 text-s">
            Data Science
          </button>
          <button className="border border-collapse bg-[#F2F2F2] px-4 py-2 rounded-3xl text-black font-medium leading-5 text-s">
            India
          </button>
        </div>
        </div>
      </div>
    </section>
  );
}

