/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
function PizzaItem({ item }) {
  return (
    <div className="pizza-card flex flex-col justify-center items-center gap-3">
      <Link to={`/products/${item._id}`}>
        <img src={item.img} className="w-[70%] h-auto" />
      </Link>
      <strong className="text-red-600 text-2xl">{item.title}</strong>
      <div>
        <label className="font-bold text-orange-700">PRICES </label>
        <select className="w-[100px] text-center text-white bg-orange-700 font-bold">
          {item.prices &&
            item.prices.map((el, i) => {
              return (
                <option key={i} value={el}>
                  {el}
                </option>
              );
            })}
        </select>
      </div>
      <p>{item.desc}</p>
    </div>
  );
}

export default PizzaItem;
