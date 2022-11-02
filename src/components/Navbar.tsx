import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full h-[60px] flex justify-between items-center relative px-1 py-0 font-mont">
      <a href="/" className="text-xl">
        SHRINKURL
      </a>
      <button
        className="block md:hidden h-[40px] w-[40px] absolute top-[50%] right-[0px] -translate-y-1/2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div>
        {isOpen && (
          <ul className="flex md:hidden absolute top-[60px] left-0 flex-col items-center w-full h-[90vh] border-t border-t-white bg-black">
            <li className="list-none py-6">
              <a href="/" className="text-sm block w-full">
                _HOME
              </a>
            </li>
            <li className="list-none py-6">
              <a href="/" className="text-sm block w-full">
                _ABOUT
              </a>
            </li>
            <li className="list-none py-6">
              <a href="/" className="text-sm block w-full">
                _CONTACT
              </a>
            </li>
          </ul>
        )}
        <ul className="hidden md:flex items-center w-full gap-4">
          <li className="list-none">
            <a href="/" className="text-sm block w-full">
              _HOME
            </a>
          </li>
          <li className="list-none">
            <a href="/" className="text-sm block w-full">
              _ABOUT
            </a>
          </li>
          <li className="list-none">
            <a href="/" className="text-sm block w-full">
              _CONTACT
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
