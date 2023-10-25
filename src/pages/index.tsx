import Head from "next/head";
import Link from "next/link";
import Navbar from "~/assets/components/Navbar";
import data from "~/assets/data.json";
import Store from "./Store";
import { Work_Sans } from "next/font/google";
const font = Work_Sans({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <main className={font.className}>
      <Head>
        <title>StoreFront</title>
        <meta
          name="description"
          content="Mock storefront product created by Clinton Clark"
        />
        <Link rel="icon" href="./favicon.ico" />
      </Head>
      <section className="max-w-screen relative flex h-screen max-h-screen w-screen flex-col bg-zinc-100 text-zinc-950">
        <Navbar links={data.navigation.links} />
        <Store
          categories={data.categories}
          filters={data.store.searchOptions}
        />
      </section>
    </main>
  );
}
