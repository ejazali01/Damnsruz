"use client";

import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import Link from "next/link";
import Container from "@/components/Container";
import { useSession } from "next-auth/react";
import Dropdown from "@/components/Dropdown";
// import { signOut } from "next-auth/react";

const NavIcons = () => {
  const session = useSession();
  const user = session?.data?.user;
  const classProperty = {
    styles: "text-xl p-2 rounded-full hover:bg-gray-200/75",
  };
  return (
    <div>
      <Container>
        <div className="flex gap-4 items-center cursor-pointer">
          <div className={classProperty.styles}>
            <Link href="/cart">
              <IoCartOutline />
            </Link>
          </div>
          <div className={classProperty.styles}>
            <BiSearch />
          </div>
          {session.status === "authenticated" ? (
            <div className="flex gap-4 items-center">
              <Dropdown user={user} />
            </div>
          ) : (
            <Link href="/login">
              <div>
                <span className="bg-orange-300 font-lg text-xl   hover:bg-orange-400 py-3 px-4 text-md text-zinc-800  text-center">Login</span>
              </div>
            </Link>
          )}
        </div>
      </Container>
    </div>
  );
};

export default NavIcons;
