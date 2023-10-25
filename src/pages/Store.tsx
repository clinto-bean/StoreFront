import React from "react";
import data from "../assets/data.json";
import Image from "next/image";

type filter = { id: number; name: string };
type subcategory = { id: number; name: string };
type category = { id: number; name: string; subcategories?: subcategory[] };

type Props = { filters: filter[]; categories: category[] };

type Product = {
  id: number;
  name: string;
  organic?: boolean;
  food?: boolean;
  price: number;
  unit: string;
  image?: string;
};

const productList: Product[] = data.products;

const Store = ({ filters, categories }: Props) => {
  return (
    <section
      id="store"
      className="flex h-screen w-screen flex-col flex-wrap overflow-x-hidden bg-sky-100 max-md:min-h-screen"
    >
      <div
        id="storeNav"
        className="h-15 flex w-screen items-center justify-center bg-sky-700 p-4"
      >
        <ul className="flex gap-4">
          {filters.map((filter) => (
            <li
              key={filter.id}
              className="overflow-hidden rounded-md border border-x border-sky-100 px-2 text-sky-100 focus-within:border-sky-500 focus-within:bg-sky-500 hover:border-sky-400 hover:bg-sky-400 hover:text-sky-950 focus:bg-sky-400 active:border-sky-500 active:bg-sky-500 active:text-sky-950"
            >
              <button name={filter.name}>{filter.name}</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="wrap grid w-full grow grid-cols-6 bg-sky-50 max-md:flex max-md:flex-col max-md:items-center">
        <div className="flex flex-col p-4">
          <p className="p-4 text-xl font-bold">Search Results</p>
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
                    key={subcategory.id}
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
        </div>
        <div id="showboard" className="col-span-4 bg-gray-50 p-4 max-md:w-full">
          {productList.map((product) => {
            if (product.organic)
              return (
                <div className="flex max-w-xs flex-col overflow-hidden rounded-md border border-sky-200 bg-sky-50 shadow-md">
                  {product.food && product.organic ? (
                    <div className="align-center border-t-md flex justify-between border-b border-sky-200 bg-sky-200 p-4">
                      <p className="border-tl-md text-lg font-bold">
                        {product.name}
                      </p>
                      <p className="text-md font-bold text-emerald-700">
                        Organic
                      </p>
                    </div>
                  ) : (
                    <div className="align-center border-t-md flex justify-between border-b border-sky-200 bg-sky-200 p-4">
                      <p className="border-tl-md text-lg font-bold">
                        {product.name}
                      </p>
                    </div>
                  )}
                  <div className="relative aspect-square min-w-full max-w-full border-b border-sky-200">
                    <Image
                      src={`/images/products/${product.name}`}
                      alt={product.name}
                      fill={true}
                    />
                    <p className="absolute bottom-0 left-0 z-50 max-h-fit w-full min-w-full bg-sky-200 bg-opacity-80 p-4 text-center text-xl font-bold">
                      ${product.price}/{product.unit}
                    </p>
                  </div>

                  <div className="h-fit"></div>
                  <div className="flex h-fit w-full justify-center gap-4 rounded-b-md p-4">
                    <button className="max-w-16 align-center flex aspect-square max-h-16 justify-center rounded-md border border-sky-200 bg-sky-50 px-8 py-4 text-xl shadow-md transition-all focus-within:bg-sky-600 hover:bg-sky-300 focus:bg-sky-300 active:bg-sky-600 active:text-sky-50">
                      -
                    </button>
                    <div className="flex items-center justify-center text-3xl font-bold">
                      0
                    </div>
                    <button className="max-w-16 align-center flex aspect-square max-h-16 justify-center rounded-md border border-sky-200 bg-sky-50 px-8 py-4 text-xl shadow-md transition-all focus-within:bg-sky-600 hover:bg-sky-300 focus:bg-sky-300 active:bg-sky-600 active:text-sky-50">
                      +
                    </button>
                  </div>
                </div>
              );
          })}
        </div>
        <div className="align-center flex flex-col p-4"></div>
      </div>
    </section>
  );
};

export default Store;
