import ProductListing from "@/components/product-listing";
import { client } from "@/sanity/lib/client";

export default async function Home() {
  const query = await client.fetch(`*[_type == "blog"]`);

  console.log(query);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="font-bold text-2xl tracking-tight">Most Recent Blogs</h1>
      <ProductListing query={query} />
    </div>
  );
}
