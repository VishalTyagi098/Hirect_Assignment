import React from "react";
import Link from 'next/link';

const Navbar = () => {
  const menuItems = [
    {
      item: "Product",
      link: "/",
    },
    {
      item: "Download",
      link: "/",
    },
    {
      item: "Pricing",
      link: "/",
    },
  ];

  return (
    <div className="m-auto flex w-[80%] h-[10vh] justify-between items-center">
      <div className="text-xl font-bold">YourChallenge</div>
      <div className="flex justify-between">
        {menuItems.map((el, i) => (
          <div className="mx-4 border-b-0 hover:border-b-2 border-[#e16259]">
            <Link
              className=""
              href={el.link}
            >
              {el.item}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
