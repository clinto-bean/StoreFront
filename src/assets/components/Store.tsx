import React from "react";
import Sidebar from "~/assets/components/Sidebar";
import NewsPanel from "~/assets/components/NewsPanel";
import Showroom from "~/assets/components/Showroom";
import type { Product } from "~/assets/types/Product";

type filter = { name: string; id: number };

type Props = {
  filters: filter[];
  productList: (Product | Partial<Product>)[];
  setCartItems: (newCartItems: Product[] | Partial<Product>[]) => void;
  cartItems: Product[] | Partial<Product>[];
};

const Store = ({ filters, productList, cartItems, setCartItems }: Props) => {
  return (
    <section
      id="store"
      className="wrap relative flex flex-col overflow-hidden bg-sky-100"
    >
      <div className="relative flex w-full bg-sky-50 max-md:flex-col">
        <Sidebar />
        <Showroom
          filters={filters}
          productList={productList}
          setCartItems={setCartItems}
          cartItems={cartItems}
        />
        <NewsPanel />
      </div>
    </section>
  );
};

export default Store;
