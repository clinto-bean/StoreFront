import Head from "next/head";
import Navbar from "~/assets/components/Navbar";
import data from "~/assets/data.json";
import Store from "../assets/components/Store";
import { Work_Sans } from "next/font/google";
import type { Product } from "~/assets/types/Product";
import Cart from "../assets/components/Cart";
import { useState } from "react";

const font = Work_Sans({ weight: "400", subsets: ["latin"] });

// Global Types

// Global Props Declaration

const filters = data.store.searchOptions;
const productList: (Product | Partial<Product>)[] = data.products;

// Component

export default function Home() {
  type CartItem = Product | Partial<Product>;

  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, weight: 0 },
    { id: 2, weight: 5 },
    { id: 3, weight: 5 },
    { id: 4, weight: 5 },
  ]);

  const count = cartItems.filter((item) => item.weight).length;

  const [inCheckOut, setInCheckout] = useState(false);

  return (
    <main className={font.className}>
      <Head>
        <title>StoreFront</title>
        <meta
          name="description"
          content="Mock storefront product created by Clinton Clark"
        />
        <link
          rel="icon"
          type="image/x-icon"
          href={"../../public/favicon.ico"}
        />
      </Head>
      <section className="relative flex flex-col bg-zinc-100 text-zinc-950">
        <Navbar
          links={data.navigation.links}
          setInCheckout={setInCheckout}
          cartCount={count}
        />
        {inCheckOut ? (
          <Cart
            productList={productList}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        ) : (
          <Store
            filters={filters}
            productList={productList}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        )}
      </section>
    </main>
  );
}
