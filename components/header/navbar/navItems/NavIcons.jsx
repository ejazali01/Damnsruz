"use client";

import React, { useRef,useState, useEffect } from "react";
import { IoCartOutline } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";
import Container from "@/components/Container";
import { useSession } from "next-auth/react";
import Dropdown from "@/components/Dropdown";


const NavIcons = () => {
  const session = useSession();
  const user = session?.data?.user;

  // searchbar
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchExpanded(false);
      }
    };

    if (isSearchExpanded) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isSearchExpanded]);

  const toggleSearchBar = () => {
    setIsSearchExpanded(!isSearchExpanded);
  };

  const classProperty = {
    styles: "text-xl p-2 rounded-full hover:bg-gray-200/75",
  };
  return (
    <div>
      <Container>
        <div className="flex gap-4 items-center cursor-pointer">
          {/* search and button */}

          <div className={`flex items-center space-x-10`} ref={searchRef}>
            <input
              type="text"
              placeholder="Search"
              className={`  placeholder-gray-700 bg-gray-300 focus:outline outline-blue-600 focus:shadow-outline ${
                isSearchExpanded
                  ? "w-64 px-3 py-1.5 outline outline-1 outline-gray-300"
                  : "w-0"
              } transition-all duration-500`}
            />

            <AiOutlineSearch
              onClick={toggleSearchBar}
              className=" text-xl cursor-pointer "
            >
              {isSearchExpanded ? "Close" : "Search"}
            </AiOutlineSearch>
          </div>

          <div className={classProperty.styles}>
            <Link href="/cart">
              <IoCartOutline />
            </Link>
          </div>
          {session.status === "authenticated" ? (
            <div className="flex gap-4 items-center">
              <Dropdown user={user} />
            </div>
          ) : (
            <Link href="/login">
              <div>
                <span className="bg-orange-300 font-lg text-md   hover:bg-orange-400 py-2 px-4 text-md text-zinc-800  text-center">
                  Login
                </span>
              </div>
            </Link>
          )}
        </div>
      </Container>
    </div>
  );
};

export default NavIcons;
