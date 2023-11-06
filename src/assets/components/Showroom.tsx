import React from "react";
import Card from "./Card";
import type { Product } from "../types/Product";

type filter = { id: number; name: string };

type Props = {
  filters: filter[];
  productList: (Product | Partial<Product>)[];
};

const Showroom = ({ filters, productList }: Props) => {
  return (
    <section
      id="showboard"
      className="flex grow flex-wrap items-center justify-center gap-4 p-4"
    >
      <div
        id="storeNav"
        className="h-15 col-span-4 flex max-h-fit  w-full items-center justify-center rounded-md bg-sky-700 p-4"
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
      {productList.map((product) => (
        <Card product={product} key={product.id} />
      ))}
    </section>
  );
};

export default Showroom;
