import React, { useEffect, useState } from "react";
import Image from "next/image";

import { AiFillStar } from "react-icons/ai";
import Currency from "react-currency-formatter";

export const Product = ({ id, title, price, description, category, image }) => {
  let maxRating = 5;
  let minRating = 1;
  let finalRating = Math.floor(
    Math.random() * (maxRating - minRating + 1) + minRating
  );
  let finalHasPrime = Math.random() < 0.5;

  const [rating, setRating] = useState(0);
  const [hasPrime, setHasPrime] = useState(true);
  useEffect(() => {
    setRating(finalRating);
    setHasPrime(finalHasPrime);
  }, [finalRating, finalHasPrime]);

  return (
    <div className="relative flex flex-col bg-white m-5 p-10 z-30">
      <p className="absolute top-2 right-2 text-gray-400 italic">{category}</p>
      <Image
      className="mx-auto"
        src={image}
        height={200}
        width={200}
        alt="image of product"
      />
      <h4 className="my-3 font-bold">{title}</h4>
      <p className="my-2 text-xs line-clamp-2">{description}</p>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <AiFillStar key={id} className="text-yellow-400" />
          ))}
      </div>
      <div className="mb-5">
      <Currency currency="EUR" quantity={price} />
      </div>
      {/* {hasPrime && <p>has prime delivery</p>} */}
      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
          <p className="text-xs text-gray-500">Free next-day delivery!</p>
        </div>
      )}
      <button className="mt-auto button">Add to Basket</button>
    </div>
  );
};