import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/sanity";
import Image from "next/image";
import React from "react";

// Updated Blog type to match Sanity schema
type Blog = {
  _id: string;
  title: string;
  description: string;
  image: {
    // Changed from mainImage to image
    asset: {
      _ref: string;
    };
  };
  slug: {
    current: string;
  };
};

interface Props {
  params: {
    id: string;
  };
}

const BlogDetailsPage = async ({ params: { id } }: Props) => {
  const query = `*[_type == "blog" && _id == $id][0]`;
  const blog: Blog = await client.fetch(query, { id });

  return (
    <main className="min-h-screen py-8">
      <article className="max-w-7xl mx-auto">
        {/* Image container */}
        <div className="w-full h-[400px] md:h-[600px] relative mb-8 md:px-0 px-5">
          <Image
            src={urlFor(blog.image).url()} // Changed from mainImage to image
            alt={blog.title}
            fill // Added fill prop
            className="w-full h-full object-cover rounded-lg"
            priority // Added priority for better loading
          />
        </div>

        {/* Content */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            {blog.title}
          </h1>
          <div className="prose max-w-none">
            <p className="text-gray-600 text-lg">{blog.description}</p>
          </div>
        </div>
      </article>
    </main>
  );
};

export default BlogDetailsPage;
