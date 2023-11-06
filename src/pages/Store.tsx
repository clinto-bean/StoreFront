import React from "react";
import Sidebar from "~/assets/components/Sidebar";
import NewsPanel from "~/assets/components/NewsPanel";
import Showroom from "~/assets/components/Showroom";
import type { Product } from "~/assets/types/Product";
import type { Category } from "~/assets/types/Category";

type filter = { name: string; id: number };

type Props = {
  filters: filter[];
  categories: Category[];
  productList: (Product | Partial<Product>)[];
};

const Store = ({ filters, categories, productList, setCartItems }: Props) => {
  return (
    <section
      id="store"
      className="wrap relative flex flex-col overflow-hidden bg-sky-100"
    >
      <div className="relative flex w-full bg-sky-50 max-md:flex-col">
        <Sidebar categories={categories} />
        <Showroom
          filters={filters}
          productList={productList}
          setCartItems={setCartItems}
        />
        <NewsPanel />
      </div>
    </section>
  );
};

export default Store;
