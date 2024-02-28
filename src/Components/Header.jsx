import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";
import links from "../../public/assets/JSON/NavbarList.json";
function Header() {
  return (
    <div className="  w-[100%] h-[15dvh]  flex items-center gap-6 p-11">
      <FontAwesomeIcon
        className="text-[3rem] font-bold  text-white "
        icon={faPhoneFlip}
      />

      <div>
        <h4 className="text-sm mb-1  text-white ">ORDER NOW!</h4>
        <h2 className="text-xl font-bold  text-white ">012 345 678</h2>
      </div>
      {
        <ul className="flex font-bold text-white items-center ml-auto mr-5 gap-6">
          <li>
            <FontAwesomeIcon
              className="text-[3rem] font-bold  text-white ml-auto"
              icon={faPizzaSlice}
            />
          </li>
          {links.map((el, i) => (
            <li key={i}>{el.title}</li>
          ))}
        </ul>
      }
    </div>
  );
}

export default Header;
