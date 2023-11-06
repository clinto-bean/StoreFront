import React from "react";
import type { Category } from "../types/Category";

type Props = {
  categories: Category[];
};

const Sidebar = ({ categories }: Props) => {
  return (
    <section
      id="Sidebar"
      className="sticky left-0 top-0 flex h-fit min-w-fit flex-col justify-between p-4"
    >
      <p className="min-w-[320px] p-4 text-xl font-bold">Search Results</p>
      <ul className="flex grow flex-col gap-2 p-4">
        {categories.map((category) => (
          <>
            <li
              key={category.id}
              className="cursor-pointer rounded-r-md border border-sky-50 border-l-sky-200 px-2 font-bold text-sky-700 transition-all hover:border hover:border-sky-500 hover:bg-sky-500 hover:text-sky-100"
            >
              {category.name}
            </li>
            {category.subcategories?.map((subcategory) => (
              <li
                key={subcategory}
                className="mx-4 cursor-pointer rounded-r-md border border-sky-50 border-l-sky-200 px-2 text-sm text-sky-500 transition-all hover:border hover:border-sky-500 hover:bg-sky-500 hover:text-sky-100"
              >
                {subcategory}
              </li>
            ))}
          </>
        ))}
      </ul>
      <button className="flex justify-center rounded-md border border-sky-50 bg-sky-700 p-4 font-semibold text-sky-50 transition-all hover:border-sky-700 hover:bg-sky-50 hover:text-sky-700 active:bg-sky-200">
        Clear Search Filters
      </button>
    </section>
  );
};

export default Sidebar;
