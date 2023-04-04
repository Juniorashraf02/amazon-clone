import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { NumericFormat } from "react-number-format";

interface ProductProps {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  hasPrime: string;
  rating: string;
}

export const CheckoutProduct = ({
  id,
  title,
  price,
  description,
  category,
  image,
  hasPrime,
  rating,
}: ProductProps) => {
  return (
    <div className="grid grid-cols-6 md:mx-10">
      <Image
        src={image}
        height={100}
        width={100}
        alt="product image"
        objectFit="contain"
      />

      {/* middle section */}
      <div className="col-span-3 mx-3">
        <p>{title}</p>
        <p className="line-clamp-2 my-2">{description}</p>
        <div className="flex">
          {Array(rating)
            .fill(rating)
            .map((_, i) => (
              <AiFillStar key={i} className="text-yellow-400" />
            ))}
        </div>
        <NumericFormat
          value={price}
          // thousandsGroupStyle="lakh"
          prefix="$"
          thousandSeparator=","
          displayType="text"
          renderText={(value) => <b>{value}</b>}
        />

        <div className="mt-6">

        {hasPrime && (
          <div className="flex items-center space-x-2 -mt-5">
            <img
              className="w-12"
              src="https://links.papareact.com/fdw"
              alt=""
            />
            <p className="text-xs text-gray-500">Free next-day delivery!</p>
          </div>
        )}
        </div>

      </div>


      {/* third secton */}
      <div className="md:ml-5">
        <button className="bg-yellow-400 w-full my-2 rounded-md text-gray-800 font-bold py-2 px-3">Add </button>
        <button className="bg-yellow-400 w-full my-2 rounded-md text-gray-800 font-bold py-2 px-3">Remove </button>
      </div>
    </div>
  );
};
