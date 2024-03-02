import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navlinks from "./Navlinks";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);
  return (
    <>
      <div>
        <div>
          <ul className=" hidden md:flex items-center ml-auto mr-5 gap-6 font-bold text-white">
            <li>
              <FontAwesomeIcon
                className="text-[3rem] font-bold  text-white ml-auto"
                icon={faPizzaSlice}
              />
            </li>
            <Navlinks />
          </ul>
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavbar}>
            {isOpen ? (
              <X className="text-white " size={50} />
            ) : (
              <Menu className="text-white " size={50} />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className=" flex flex-col list-none md:hidden items-center basis-full font-bold text-white">
          <Navlinks />
        </div>
      )}
    </>
  );
}

export default Navbar;
