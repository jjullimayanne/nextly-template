"use client";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";

export const Navbar = () => {
  const navigation = [
    { name: "Home", href: "#templates" },
    { name: "Sobre Nós", href: "#about" },
    { name: "Preços", href: "#pricing" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <div className="w-full bg-white dark:bg-gray-900">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-1">
        {/* Logo */}
        <Link href="/">
          <span className="flex items-center space-x-2 text-2xl font-medium text-[#68b2f8]">
            <span>
              {/* <Image
                src="/img/logo.svg"
                width="32"
                alt=""
                height="32"
                className="w-8"
              /> */}
            </span>
            <span>BusinessEmail </span>
          </span>
        </Link>

        {/* Right Section */}
        <div className="flex items-center gap-3 ml-auto lg:ml-0 lg:order-2">
          <ThemeChanger />
          <div className="hidden lg:flex">
            <Link
              href="https://forms.gle/FFcAePxLQRBh5sPe6"
              className="px-6 py-2 text-white bg-[#68b2f8] rounded-md hover:bg-[#569de0] focus:outline-none focus:ring focus:ring-[#8fc5f9]"
            >
              Fale Conosco
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                aria-label="Toggle Menu"
                className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-[#68b2f8] focus:text-[#68b2f8] focus:bg-gray-100 dark:focus:bg-gray-800 dark:text-gray-300"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  {open ? (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
                    />
                  )}
                </svg>
              </Disclosure.Button>

              <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                <>
                  {navigation.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-[#68b2f8] focus:text-[#68b2f8] focus:bg-gray-100 dark:focus:bg-gray-800 focus:outline-none"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    href="#contact"
                    className="w-full px-6 py-2 mt-3 text-center text-white bg-[#68b2f8] rounded-md hover:bg-[#569de0] focus:outline-none focus:ring focus:ring-[#8fc5f9]"
                  >
                    Fale Conosco
                  </Link>
                </>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* Desktop Menu */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="flex items-center justify-end flex-1 list-none">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link
                  href={menu.href}
                  className="inline-block px-4 py-2 text-lg font-normal text-gray-800 rounded-md dark:text-gray-200 hover:text-[#68b2f8] focus:text-[#68b2f8] focus:bg-gray-100 dark:focus:bg-gray-800 focus:outline-none"
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};
