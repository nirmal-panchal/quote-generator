import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { BsSunFill } from "react-icons/bs";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="bg-gray-800 p-4 px-6">
      <div className="container h-[32px] mx-auto flex items-center justify-between">
        <Link href="/" className="text-white text-lg font-semibold">
          QuoTell
        </Link>
        <div className="flex items-center justify-center">
          <BsSunFill
            className="text-[#FDB813] hover:text-[#fdb713b0] ml-4 cursor-pointer"
            size={20}
          />
          <Link
            href="/"
            className={`${
              router.route === "/" ? "text-white" : "text-gray-400 "
            } ml-4 hover:text-white`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`${
              router.route === "/about" ? "text-white" : "text-gray-400 "
            } ml-4 hover:text-white`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`${
              router.route === "/contact" ? "text-white" : "text-gray-400 "
            } ml-4 hover:text-white`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
