import React from "react";
import type { Product } from "~/assets/types/Product";

type Props = {
  cartItems: Product[] | PartialProduct[];
  setCartItems: (newCartItems: Product[] | PartialProduct[]) => void;
};

const Cart = (props: Props) => {
  const { cartItems, setCartItems } = props;

  const removeItem = (item: Product) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
  };

  return (
    <main id="cart" className="grid h-full w-full grid-cols-3 bg-sky-50">
      <div id="checkout" className="col-span-2 flex flex-col p-4">
        <p className="text-xl">Checkout</p>
        <div>
          {cartItems.map((item: Product) => (
            <div
              className="flex w-fit items-center justify-between gap-4 p-4"
              key={item.name}
            >
              <div className="flex flex-col gap-2">
                <p className="p text-xl font-bold">{`${item.name}`}</p>
                <p>
                  {item.weight}
                  {item.unit} at {item.price} per {item.unit}: $
                  {(item.weight * item.price).toFixed(2)}
                </p>
              </div>

              <button
                className="flex rounded-md bg-red-200 p-4 text-center text-red-600"
                onClick={() => removeItem(item)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
      <div id="info" className=" flex h-fit flex-col ">
        <div className="p-4 text-xl font-bold">Review Information</div>
        <div>
          <p className="p-4 text-xl font-bold">Billing</p>
          <p className="text-md px-4">John User</p>
          <p className="text-md px-4">42 Wallaby Way, Sydney AUS</p>
          <p className="text-md px-4">+3018396</p>
        </div>
        <div className="flex flex-col gap-2 py-4">
          <p className="px-4 text-xl font-bold">Shipping</p>
          <div className="flex gap-2 px-4">
            <input
              type="checkbox"
              checked={true}
              name="copyAddress"
              id="copyAddress"
            />
            <label htmlFor="copyAddress" className="text-md px-4">
              Use my billing address as my shipping address.
            </label>
          </div>
          <div className="flex flex-col gap-2 p-4">
            <p className="text-xl">Payment Method</p>
            <div
              id="creditcard"
              className="flex aspect-[5/3] w-[400px] flex-col rounded-md border bg-fuchsia-200 bg-gradient-to-br max-md:scale-75"
            >
              <div className="align-start flex h-1/2 w-full justify-start bg-transparent p-2 text-lg font-bold text-sky-950">
                John User
              </div>
              <p className="px-2 pb-4 text-xl font-bold">4001 3927 1958 2223</p>
              <div className="grid grid-cols-2 px-2">
                <p>Exp: 11/27</p>
                <div className="max-w-5 rounded-sm px-2 text-sky-950">392</div>
              </div>
            </div>
            <button className="flex w-[400px] rounded-lg bg-sky-300 p-4 text-xl font-bold">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;
