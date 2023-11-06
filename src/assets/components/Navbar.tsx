import React from "react";
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
  onClick: boolean;
};

type Props = {
  links: Link[];
  setInCheckout: (value: boolean) => void;
  cartCount: number;
};

function Navbar({ links, setInCheckout, cartCount }: Props) {
  const itemCount = cartCount;
  return (
    <nav className="sticky top-0 z-50 flex h-fit w-full justify-between gap-4 bg-slate-950 bg-opacity-[75%] p-4 text-sky-50 shadow-md backdrop-brightness-50 transition-all hover:bg-opacity-100 focus:bg-opacity-80">
      <button
        type="button"
        name="StoreFront Logo"
        id="logoWrapper"
        className="border-gray-5 flex h-16 w-24 items-center justify-center text-sky-50 transition-all hover:scale-125 hover:bg-transparent active:scale-105"
      >
        <Image
          src={logo}
          alt="StoreFront"
          onClick={() => setInCheckout(false)}
        />
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
          <button
            className="relative transition-all hover:scale-125"
            key={link.id}
            onClick={() => setInCheckout(link.onClick)}
          >
            <Icon
              path={iconMap[link.icon] ?? ""}
              size={1.25}
              className="h-12 w-12 fill-sky-50 text-sky-50 hover:text-sky-300"
            />
            {link.icon === "mdilCart" && itemCount > 0 && (
              <div className="absolute right-0 top-0 -mr-1 -mt-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-emerald-500 font-sans text-sm text-white">
                {itemCount < 10 ? itemCount : "..."}
              </div>
            )}
          </button>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
