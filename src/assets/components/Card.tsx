import React, { useState } from "react";
import Icon from "@mdi/react";
import { mdilCart } from "@mdi/light-js";
import type { Product } from "~/assets/types/Product";

const Card = ({ product }: { product: Product }) => {
  const [itemCount, setItemCount] = useState(0);
  return (
    <div
      className="!max-h-md !min-h-md box-border flex h-fit w-fit !max-w-xs grow-0 flex-col overflow-hidden rounded-md border border-sky-200 bg-sky-50 shadow-md"
      key={product.id}
    >
      <div className="align-center border-t-md relative flex flex-wrap justify-between border-b border-sky-200 bg-sky-200 p-4">
        <p className="border-tl-md text-lg font-bold">{product.name}</p>
        {product.organic ? (
          <p className="text-md font-bold text-emerald-700">Organic</p>
        ) : null}
      </div>
      <div className="relative aspect-square w-full border-b border-sky-200">
        {product.buyLimit ? (
          <div className="absolute right-0 top-0 rounded-bl-md bg-red-600 bg-opacity-90 px-2 text-sm text-sky-50">
            Limit {product.buyLimit}
          </div>
        ) : null}
        <p className="absolute bottom-0 left-0 max-h-fit w-full bg-sky-200 bg-opacity-80 p-4 text-center text-xl font-bold">
          {!product.unit
            ? `$${product.price}`
            : `$${product.price} per ${product.unit}`}
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 rounded-b-md p-4">
        <button
          onClick={() => {
            while (itemCount > 0) return setItemCount(itemCount - 1);
          }}
          className="max-w-16 align-center flex aspect-square max-h-16 justify-center rounded-md border border-sky-200 bg-sky-50 px-8 py-4 text-xl shadow-md transition-all focus-within:bg-sky-600 hover:bg-sky-300 focus:bg-sky-300 active:bg-sky-600 active:text-sky-50"
        >
          -
        </button>
        <div className="flex items-center justify-center text-3xl font-bold">
          {itemCount}
        </div>
        <button
          onClick={() => {
            itemCount === product.buyLimit && product.buyLimit
              ? null
              : setItemCount(itemCount + 1);
          }}
          className="max-w-16 align-center flex aspect-square max-h-16 justify-center rounded-md border border-sky-200 bg-sky-50 px-8 py-4 text-xl shadow-md transition-all focus-within:bg-sky-600 hover:bg-sky-300 focus:bg-sky-300 active:bg-sky-600 active:text-sky-50"
        >
          +
        </button>
        <button
          onClick={() => {
            setItemCount(0);
          }}
          className="flex w-full items-center justify-center gap-8 rounded-md border border-emerald-600 bg-emerald-500 py-4 text-emerald-50 shadow-sm transition-all hover:bg-opacity-50 hover:text-emerald-950 active:scale-105 active:text-emerald-950"
        >
          <Icon path={mdilCart} size={1.25} className="text-emerald-100" />
          <p>Add to Cart</p>
          <p>{`$${product.price * itemCount}`}</p>
        </button>
      </div>
    </div>
  );
};

export default Card;
