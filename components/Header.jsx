import React, { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Avatar from '../components/Avatar'
import HeaderOptions from "./HeaderOptions";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;
    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white ">
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          layout="intrinsic"
          height={40}
          width={120}
          onClick={() => router.push("/")}
          className="cursor-pointer"
        />

        <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-2xl items-center">
          <input
            ref={searchInputRef}
            className="flex-grow focus:outline-none w-full"
            type="text"
            defaultValue={router.query.term}
          />
          <XIcon
            onClick={() => (searchInputRef.current.value = "")}
            className="h-6 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
          />
          <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
          <SearchIcon className="h-6 hidden sm:inline-flex text-blue-500 " />
          <button hidden onClick={search} type="submit">
            Search
          </button>
        </form>
        <Avatar className="ml-auto" url={'https://i.pinimg.com/736x/08/4c/95/084c951c772a87eb599724411b34f2a5.jpg'}/>
      </div>

      {/* HeaderOptions */}
      <HeaderOptions/>
    </header>
  );
}

export default Header;
