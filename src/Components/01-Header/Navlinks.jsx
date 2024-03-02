import links from "../../../public/assets/JSON/NavbarList.json";
import { Link } from "react-router-dom";
function Navlinks() {
  return (
    <>
      {links.map((el, i) => (
        <Link key={i} to={el.link}>
          <li>{el.title}</li>
        </Link>
      ))}
    </>
  );
}

export default Navlinks;
