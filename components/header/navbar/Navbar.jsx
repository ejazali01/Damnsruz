"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import { useAnimate, stagger } from "framer-motion";
import { RiArrowDropDownLine } from "react-icons/ri";
import NavIcons from "./navItems/NavIcons";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  // menubar
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  // logout bar
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // nav dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  // Close the dropdown when a click occurs outside of it
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };


  useEffect(() => {
    // Add a click event listener to the document body
    document.addEventListener("click", handleClickOutside);

    return () => {
      // Remove the event listener when the component unmounts
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  // side menu bar

  // Close the dropdown when a click occurs outside of it

  // const handleClickAnywhere = (event) => {
  //   if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //     setIsOpen(false);
  //   }
  // };

  // useEffect(() => {
  //   // Add a click event listener to the document body
  //   document.addEventListener("click", handleClickAnywhere);

  //   return () => {
  //     // Remove the event listener when the component unmounts
  //     document.removeEventListener("click", handleClickAnywhere);
  //   };
  // }, []);

  // menu animation
  const scope = useMenuAnimation(isMenuOpen);

  function useMenuAnimation(isMenuOpen) {
    const [scope, animate] = useAnimate();

    useEffect(() => {
      const menuAnimations = isMenuOpen
        ? [
            [
              "nav",
              { transform: "translateX(0%)" },
              { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.7 },
            ],
            [
              "li",
              { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
              { delay: stagger(0.3), at: "-0.1" },
            ],
          ]
        : [
            [
              "li",
              { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
              { delay: stagger(0.2, { from: "last" }), at: "<" },
            ],
            ["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }],
          ];

      animate([
        [
          "path.top",
          { d: isMenuOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
          { at: "<" },
        ],
        ["path.middle", { opacity: isMenuOpen ? 0 : 1 }, { at: "<" }],
        [
          "path.bottom",
          { d: isMenuOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
          { at: "<" },
        ],
        ...menuAnimations,
      ]);
    }, [isMenuOpen]);

    return scope;
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    
    
    <nav className={`${
      isSticky ? 'fixed top-0 left-0  right-0 w-full z-50 bg-white shadow-lg' : ''
    } transition-all ease-in-out duration-300`}
    >
      <div className=" w-full lg:w-10/12 m-auto px-2">
        <div className=" mx-auto flex justify-between items-center">
          <div className=" text-amber-700/75 font-semibold text-lg flex">
            <Link href="/">
              <span>Damnsruz</span>
            </Link>
          </div>

          {/* Mobile menu icon */}
          <div  ref={menuRef}>
            <div ref={scope}>
              <div className="block sm:hidden">
                <button
                  className="text-black text-xl cursor-pointer"
                  onClick={toggleMenu}
                >
                  <HiOutlineMenuAlt3 />
                </button>
              </div>

              {/* Right slide menu */}
              <div
               
                className={`nav fixed top-0 right-0 h-screen w-64 bg-white p-4 transition-transform transform ${
                  isMenuOpen
                    ? "translate-x-0 transition-all duration-500"
                    : "translate-x-full"
                } sm:hidden`}
              >
                <div className="flex items-center justify-between">
                  <span className=" text-amber-700/75 font-semibold text-lg flex">
                    <Link href="/">
                      <span>Damnsruz</span>
                    </Link>
                  </span>
                  <button
                    className="text-black text-xl cursor-pointer absolute top-4 right-4 hover:text-amber-200"
                    onClick={closeMenu}
                  >
                    <IoCloseOutline />
                  </button>
                </div>

                <ul className="flex flex-col pt-12 space-y-4 ">
                  <Link href="/">
                    <li className=" hover:text-amber-800 underline underline-offset-4 ">
                      Home
                    </li>
                  </Link>
                  <Link href="/#build">
                    <li className=" hover:text-amber800 underline underline-offset-4  ">
                      About
                    </li>
                  </Link>

                  <Link href="/contact">
                    <li className=" hover:text-amber-800 underline underline-offset-4  ">
                      Contact
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
          {/* desktop menu */}
          <div className="hidden sm:w-11/12 md:w-3/4  sm:flex justify-between items-center">
            <div className="space-x-6 ">
              <Link href="/new">
                <span className={`py-4 px-2 hover:text-amber-500 `}>New</span>
              </Link>

              <div
                className="relative py-4 px-2 inline-block text-left"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className="relative inline-block text-left"
                  ref={dropdownRef}
                >
                  <div
                    onClick={toggleDropdown}
                    className="flex items-center justify-center cursor-pointer"
                  >
                    <span>Collections</span>
                    <RiArrowDropDownLine className=" text-2xl font-light " />
                  </div>

                  <div className="origin-top-right absolute left-0 mt-4">
                    {isOpen && (
                      <div className="mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        {/* Dropdown content goes here */}
                        <div className="py-2">
                          <Link
                            href="/new"
                            onClick={closeDropdown}
                            className="block px-4 py-2  text-sm text-gray-700 hover:bg-gray-200"
                          >
                            New
                          </Link>
                          <Link
                            href="/shop"
                            onClick={closeDropdown}
                            className="block px-4 py-2  text-sm text-gray-700 hover:bg-gray-200"
                          >
                            Shop
                          </Link>
                          <Link
                            href="collections"
                            onClick={closeDropdown}
                            className="block px-4 py-2  text-sm text-gray-700 hover:bg-gray-200"
                          >
                            Collections
                          </Link>

                          <Link
                            href="/about"
                            onClick={closeDropdown}
                            className="block px-4 py-2  text-sm text-gray-700 hover:bg-gray-200"
                          >
                            Our Story
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <Link href="/shop">
                <span className={`py-4  px-2 hover:text-amber-500 `}>Shop</span>
              </Link>

              <Link href="/about">
                <span className={`py-4  px-2 hover:text-amber-500 `}>About</span>
              </Link>
            </div>

            <NavIcons />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
