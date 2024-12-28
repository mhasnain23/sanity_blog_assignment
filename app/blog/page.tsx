import ProductListing from "@/components/product-listing";
import { client } from "@/sanity/lib/client";

const BlogPage = async () => {
  const query = await client.fetch(`*[_type == "blog"]`);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="font-bold text-2xl tracking-tight">All Blogs</h1>
      <ProductListing query={query} />
    </div>
  );
};

export default BlogPage;
