import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons";

import Navbar from "./Navbar";
function Header() {
  return (
    <div className="bg-orange-700 flex flex-wrap md:flex-nowrap items-center p-2 sticky top-0 z-10">
      <div className="  w-[100%] h-[12dvh]  flex items-center gap-6 ">
        <FontAwesomeIcon
          className="text-[3rem] font-bold hidden md:flex text-white "
          icon={faPhoneFlip}
        />

        <div>
          <h4 className="text-sm mb-1  text-white ">ORDER NOW!</h4>
          <h2 className="text-xl font-bold  text-white ">012 345 678</h2>
        </div>
      </div>

      <Navbar />
    </div>
  );
}

export default Header;
