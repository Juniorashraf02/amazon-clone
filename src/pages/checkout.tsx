import Header from "@/components/Header";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import { selectItems, selectPrice } from "./../Redux/slices/basketSlice";
import { CheckoutProduct } from "./../components/CheckoutProduct";
import { useSession } from "next-auth/react";
import { NumericFormat } from "react-number-format";

const Checkout = () => {
  const items = useSelector(selectItems);
  const totalPrice = useSelector(selectPrice);
  const session = useSession();

  interface ProductProps {
    id: string;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    hasPrime: string;
    rating: string;
    i: number;
  }

  console.log(items);

  return (
    <div className="">
      <Header />

      <main className=" max-w-screen-2xl mx-auto">
        {/* left side */}
        <div className=" ">
          <div className="bg-gray-100 ">
            <div className=" m-5 shadow-sm">
              <Image
                className="w-full"
                src="https://links.papareact.com/ikj"
                width={1020}
                height={250}
                objectFit="contain"
                alt="picure of a banner"
              />
            </div>
            <div>
              <p className="text-3xl border-b m-5 font-semibold">
                {items.length === 0
                  ? `Your basket is empty`
                  : `Your shopping basket`}
              </p>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="md:flex justify-around md:mx-5 w-full px-1">
          <div className="md:w-10/12">
            <div>{items.length === 0 ? "no Items selected" : ""}</div>
            {items.map((items, i) => (
              <CheckoutProduct
                key={i}
                id={items.id}
                price={items.price}
                description={items.description}
                title={items.title}
                hasPrime={items.hasPrime}
                image={items.image}
                category={items.category}
                rating={items.rating}
              />
            ))}
          </div>
          <div className=" bg-gray-50 h-screen md:w-4/12 px-12 py-5 flex flex-col p-10 shadow-md">
            {items.length > 0 && (
              <>
                <h2 className="whitespace-nowrap">
                  Subtotal ({items.length} items) :{" "}
                  <span className="font-bold">
                    <NumericFormat
                      value={totalPrice}
                      // thousandsGroupStyle="lakh"
                      prefix="$"
                      thousandSeparator=","
                      displayType="text"
                      renderText={(value) => <b>{value}</b>}
                    />
                  </span>
                </h2>

                <button
                  disabled={session.status !== "authenticated"}
                  className={`
                button my-5 ${
                  session.status !== "authenticated" &&
                  "from-gray-300 to-gray-500 text-gray-800 border-gray-200 cursor-not-allowed"
                }
                `}
                >
                  {session.status === "authenticated"
                    ? "proceed to checkout"
                    : "sign in to checkout"}
                </button>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
