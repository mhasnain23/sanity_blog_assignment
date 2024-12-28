import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center py-16 bg-white">
      <Image
        src="https://media.istockphoto.com/id/1924137135/photo/online-blog-search-learning-work-internet-freelance-business-post-website-online-homepage.jpg?s=1024x1024&w=is&k=20&c=4dGL31lbpt61qk1sDXCpLm7PtZH7L6UI_2fekqS7GqQ="
        alt="Random Banner"
        priority
        quality={100}
        width={800}
        height={400}
        className="w-full max-w-4xl rounded-lg shadow-lg mb-12 hover:opacity-90 transition-opacity cursor-pointer"
      />

      <div className="max-w-3xl text-center px-4">
        <h1 className="text-4xl font-extrabold mb-6 cursor-pointer text-gray-900 hover:text-indigo-600 transition-colors">
          About Our Blog Platform
        </h1>

        <p className="text-gray-700 mb-8 leading-relaxed">
          Welcome to our modern blogging platform where ideas come to life. We
          provide a space for writers and readers to connect through meaningful
          content.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 hover:text-indigo-600">
              Dynamic Content
            </h3>
            <p className="text-gray-600">
              Real-time updates and interactive elements for engaging reading
            </p>
          </div>

          <div className="p-6 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 hover:text-indigo-600">
              Responsive Design
            </h3>
            <p className="text-gray-600">
              Seamless experience across all devices and screen sizes
            </p>
          </div>

          <div className="p-6 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 hover:text-indigo-600">
              Rich Media Support
            </h3>
            <p className="text-gray-600">
              Enhanced content with images, videos, and interactive elements
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
