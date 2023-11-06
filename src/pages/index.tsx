import Head from "next/head";
import Link from "next/link";
import Navbar from "~/assets/components/Navbar";
import data from "~/assets/data.json";
import Store from "./Store";
import { Work_Sans } from "next/font/google";
import type { Product } from "~/assets/types/Product";
import Cart from "./Cart";
import { useState } from "react";

const font = Work_Sans({ weight: "400", subsets: ["latin"] });

// Global Types

// Global Props Declaration

const filters = data.store.searchOptions;
const categories = data.categories;
const productList: (Product | Partial<Product>)[] = data.products;

// Component

export default function Home() {
  let count = 0;
  const [cartItems, setCartItems] = useState([
    { name: "Bananas", price: 0.49, unit: "lb", weight: 2 },
    { name: "Organic Chicken Breast", price: 3.19, unit: "lb", weight: 3 },
  ]);

  const [inCheckOut, setInCheckout] = useState(false);

  cartItems.map((i) => count++);
  return (
    <main className={font.className}>
      <Head>
        <title>StoreFront</title>
        <meta
          name="description"
          content="Mock storefront product created by Clinton Clark"
        />
        <Link rel="icon" href={"../../public/favicon.ico"} />
      </Head>
      <section className="relative flex flex-col bg-zinc-100 text-zinc-950">
        <Navbar
          links={data.navigation.links}
          setInCheckout={setInCheckout}
          cartCount={count}
        />
        {inCheckOut ? (
          <Cart cartItems={cartItems} setCartItems={setCartItems} />
        ) : (
          <Store
            categories={categories}
            filters={filters}
            productList={productList}
            setCartItems={setCartItems}
          />
        )}
      </section>
    </main>
  );
}
