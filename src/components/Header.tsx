// react imports
import Image from "next/image";

// third party imports
import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineShoppingCart, AiOutlineMenu } from "react-icons/ai";
import { useSession }  from 'next-auth/react';
import {  signIn, signOut } from "next-auth/react"
import { useRouter } from "next/router";






export default function Header() {
  const { data }= useSession();
  const router = useRouter();

  console.log(data?.user?.name)



  return (
    <header>
      {/* top nav */}
      <div className="bg-amazon_blue flex flex-grow items-center p-1">
        <div className="flex items-center flex-grow sm:flex-grow-0 mt-2">
          <Image
            onClick={()=>router.push("/")}
            src="https://links.papareact.com/f90"
            height={40}
            width={150}
            objectFit="contain"
            alt="amazon-logo"
            className="cursor-pointer"
          />
        </div>

        {/* search box */}
        <div className="hidden sm:flex bg-yellow-400 hover:bg-yellow-500 flex flex-grow items-center h-10 rounded-md cursor-pointer mx-4">
          <input className="p-2 h-full flex-grow flex-shrink rounded-l-md focus:outline-none px-4" />
          <BiSearchAlt2 className="mx-1 h-12 w-6" />
        </div>

        {/* right section */}
        <div className="text-white flex gap-5 items-center text-xs space-x-4 mx-6 whitespace-nowrap">
          <div onClick={!data ? ()=> signIn() : ()=>signOut()}  className="link">
            <p >
              {data ? `Hello ${data?.user?.name}!`: 'Sign in'}
            </p>
            <p className="font-extrabold md:text-sm">Accounts & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div className="relative link flex items-center" 
          onClick={()=>router.push("/checkout")}
          >
            <span className="absolute top-0 right-0 md:right-10 bg-yellow-400 h-4 w-4 text-center rounded-full text-black font-bold">
              4
            </span>
            <AiOutlineShoppingCart className="text-4xl" />
            <p className="font-extrabold md:text-sm hidden md:flex">Basket</p>
          </div>
        </div>
      </div>

      {/* bottom nav */}
      <div className="flex bg-amazon_blue-light text-xs text-white space-x-4 py-1">
        <p className="link flex items-center gap-1 mx-1">
          <AiOutlineMenu className="" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Todays&apos; Deals</p>
        <p className="link hidden md:inline-flex">Electronics</p>
        <p className="link hidden md:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex ">Prime</p>
        <p className="link hidden lg:inline-flex ">Buy Again</p>
        <p className="link hidden lg:inline-flex ">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex ">Health & Personal Care</p>
      </div>
    </header>
  );
}
