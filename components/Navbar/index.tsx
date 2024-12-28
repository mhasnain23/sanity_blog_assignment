import Link from "next/link";
import React from "react";

const Navbar = () => {
  const navMenu = [
    {
      id: 1,
      name: "Home",
      url: "/",
    },
    {
      id: 2,
      name: "About",
      url: "/about",
    },
    {
      id: 3,
      name: "Blog",
      url: "/blog",
    },
  ];

  return (
    <div className="w-full bg-white shadow-md">
      <div className="flex md:flex-row flex-col justify-between items-center max-w-7xl mx-auto p-4">
        <div className="md:p-0 p-4">
          <h1 className="font-extrabold text-3xl tracking-tight text-indigo-600 hover:text-indigo-800 transition-colors cursor-pointer">
            <Link href="/">The Blogiee</Link>
          </h1>
        </div>
        <div className="flex md:p-0 p-4">
          <ul className="flex items-center justify-center gap-10">
            {navMenu.map((menu) => (
              <li key={menu.id}>
                <Link
                  href={menu.url}
                  className="text-black/60 hover:text-indigo-600 font-semibold text-md transition-colors tracking-wide"
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
