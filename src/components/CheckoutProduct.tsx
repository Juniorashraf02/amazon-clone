import { addToBasket, removeFromBasket } from "@/Redux/slices/basketSlice";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { NumericFormat } from "react-number-format";
import { useDispatch } from "react-redux";

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
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      hasPrime,
      rating,
    }

    // push items to redux store
    dispatch(addToBasket(product));
  };

  const removeItemFromBasket = () => {
    // remove items from store
    dispatch(removeFromBasket({id}));
  }






  return (
    <div className="grid grid-cols-6 md:mx-10 gap-2">
      <Image
        src={image}
        height={100}
        width={100}
        alt="product image"
        objectFit="contain"
      />

      {/* middle section */}
      <div className="md:col-span-3 col-span-4 md:mx-3">
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
      <div className="md:ml-5 w-full">
        <button className="button my-2 w-full" onClick={addItemToBasket}>Add </button>
        <button className="button my-2 w-full" onClick={removeItemFromBasket}>Remove </button>
      </div>
    </div>
  );
};
