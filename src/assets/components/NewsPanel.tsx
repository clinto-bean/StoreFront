import React from "react";

const NewsPanel = () => {
  return (
    <section
      id="NewsPanel"
      className="min-w-sm sticky left-0 top-0 flex h-full flex-col justify-between p-4"
    >
      <div className="flex flex-col gap-1">
        <p className="py-4 text-xl font-bold">Storefront News</p>
        <article className="flex gap-4 py-4">
          <div className="aspect-square w-24 bg-gray-200"></div>
          <aside className="flex flex-col gap-1">
            <p className="flex max-w-[30ch] flex-wrap break-words break-all text-sm font-extrabold">
              Exciting news!
            </p>
            <p className="flex max-w-[30ch] flex-wrap break-words text-xs text-gray-700">
              This is where our description will go.
            </p>
          </aside>
        </article>
        <article className="flex gap-4 py-4">
          <div className="aspect-square w-24 bg-gray-200"></div>
          <aside className="flex flex-col gap-1">
            <p className="flex max-w-[30ch] flex-wrap break-words break-all text-sm font-extrabold">
              Exciting news!
            </p>
            <p className="flex max-w-[30ch] flex-wrap break-words text-xs text-gray-700">
              This is where our description will go.
            </p>
          </aside>
        </article>
        <article className="flex gap-4 py-4">
          <div className="aspect-square w-24 bg-gray-200"></div>
          <aside className="flex flex-col gap-1">
            <p className="flex max-w-[30ch] flex-wrap break-words break-all text-sm font-extrabold">
              Exciting news!
            </p>
            <p className="flex max-w-[30ch] flex-wrap break-words text-xs text-gray-700">
              This is where our description will go.
            </p>
          </aside>
        </article>
        <article className="flex gap-4 py-4">
          <div className="aspect-square w-24 bg-gray-200"></div>
          <aside className="flex flex-col gap-1">
            <p className="flex max-w-[30ch] flex-wrap break-words break-all text-sm font-extrabold">
              Exciting news!
            </p>
            <p className="flex max-w-[30ch] flex-wrap break-words text-xs text-gray-700">
              This is where our description will go.
            </p>
          </aside>
        </article>
        <article className="flex gap-4 py-4">
          <div className="aspect-square w-24 bg-gray-200"></div>
          <aside className="flex flex-col gap-1">
            <p className="flex max-w-[30ch] flex-wrap break-words break-all text-sm font-extrabold">
              Exciting news!
            </p>
            <p className="flex max-w-[30ch] flex-wrap break-words text-xs text-gray-700">
              This is where our description will go.
            </p>
          </aside>
        </article>
      </div>
      <div className="flex flex-col gap-1">
        <p className="flex py-4 text-xl">Just For You</p>
        <article className="flex gap-4 py-4">
          <div className="aspect-square w-24 bg-gray-200"></div>
          <aside className="flex flex-col gap-1">
            <p className="flex max-w-[30ch] flex-wrap break-words break-all text-sm font-extrabold">
              Product you will love!
            </p>
            <p className="flex max-w-[30ch] flex-wrap break-words text-xs text-gray-700">
              Click to learn more.
            </p>
          </aside>
        </article>
        <article className="flex gap-4 py-4">
          <div className="aspect-square w-24 bg-gray-200"></div>
          <aside className="flex flex-col gap-1">
            <p className="flex max-w-[30ch] flex-wrap break-words break-all text-sm font-extrabold">
              Product you will love!
            </p>
            <p className="flex max-w-[30ch] flex-wrap break-words text-xs text-gray-700">
              Click to learn more.
            </p>
          </aside>
        </article>
        <article className="flex gap-4 py-4">
          <div className="aspect-square w-24 bg-gray-200"></div>
          <aside className="flex flex-col gap-1">
            <p className="flex max-w-[30ch] flex-wrap break-words break-all text-sm font-extrabold">
              Product you will love!
            </p>
            <p className="flex max-w-[30ch] flex-wrap break-words text-xs text-gray-700">
              Click to learn more.
            </p>
          </aside>
        </article>
      </div>
    </section>
  );
};

export default NewsPanel;
