import React from "react";
import Link from "next/link";
import logo from "../images/logo.png";
import Image from "next/image";
import Icon from "@mdi/react";
import { mdilCart, mdilAccount, mdilHome } from "@mdi/light-js";

type IconMap = Record<string, string>;

const iconMap: IconMap = {
  mdilHome,
  mdilAccount,
  mdilCart,
};

type Link = {
  id: number;
  name: string;
  href: string;
  icon: string;
};

type Props = { links: Link[] };

function Navbar({ links }: Props) {
  return (
    <nav className="sticky top-0 flex h-fit w-screen justify-between gap-4 bg-slate-950 bg-opacity-90 p-4 text-sky-50 shadow-md">
      <button
        type="button"
        name="StoreFront Logo"
        id="logoWrapper"
        className="border-gray-5 flex h-16 w-24 items-center justify-center text-sky-50 transition-all hover:scale-125 hover:bg-transparent active:scale-105"
      >
        <Image src={logo} alt="StoreFront" />
      </button>
      <div
        id="searchWrapper"
        className="align-center flex grow justify-start px-4"
      >
        <input
          placeholder="Search..."
          className="max-w-xl rounded-md bg-transparent px-2 text-lg text-sky-50 transition-all placeholder:text-sky-50 focus-within:bg-sky-600 hover:bg-sky-800 focus:bg-sky-600 active:bg-sky-600"
        />
      </div>
      <ul
        id="navList"
        className="flex max-w-md justify-between gap-4 p-4 text-sky-950"
      >
        {links.map((link) => (
          <Link className="hover:scale-125" href={link.href} key={link.id}>
            <Icon
              path={iconMap[link.icon] ?? ""}
              size={1.25}
              className="h-12 w-12 fill-sky-50 text-sky-50 hover:text-sky-300"
            />
          </Link>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
