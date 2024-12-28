"use client";

import Image from "next/image";
import { urlFor } from "@/sanity/sanity";
import Link from "next/link";
import { Button } from "../ui/button";

// interface BlogPost {
//   _id: string;
//   title: string;
//   description: string;
//   image: any;
//   slug?: {
//     current?: string;
//   };
// }

const ProductListing = ({ query }: { query: any }) => {
  if (!query || query.length === 0) {
    return <div>No blog posts found</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
      {query.map((item: any) => {
        return (
          <div
            key={item._id}
            className="flex flex-col items-center gap-5 max-w-md hover:shadow-md bg-gray-100 transition-all ease-in duration-200 overflow-hidden rounded-md p-5"
          >
            <Link href={`/blog/${item._id}`}>
              <Image
                src={urlFor(item.image).url()}
                width={200}
                height={200}
                alt={item.title || "Blog post image"}
                className="hover:scale-105 transform transition-transform duration-200"
              />
            </Link>
            <h2 className="text-xl font-semibold capitalize text-gray-800">
              {item.title}
            </h2>
            <p className="text-gray-700 text-lg text-center font-medium">
              {item.description?.slice(0, 40)}...
            </p>
            <div>
              <Button>
                <Link href={`/blog/${item._id}`}>Read More</Link>
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductListing;
