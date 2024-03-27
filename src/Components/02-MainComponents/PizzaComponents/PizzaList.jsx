import { useEffect } from "react";
import PizzaItem from "./PizzaItem";
import { usePizzas, usePizzasDispatch } from "../../../Contexts/PizzaContext";
import axios from "axios";
import "react-loading-skeleton/dist/skeleton.css";
import PizzaSkeleton from "./PizzaSkeleton";

function PizzaList() {
  const pizzaListArr = usePizzas();
  const dispatch = usePizzasDispatch();

  useEffect(() => {
    const getPizzas = () => {
      axios
        .get(import.meta.env.VITE_API_BASE_URL)
        .then((response) => {
          dispatch({ type: "FETCH_SUCCESS", payLoad: response });
        })
        .catch(() => {
          dispatch({ type: "FETCH_ERROR" });
        });
    };
    getPizzas();
  }, [dispatch]);
  // console.log("dada");
  if (pizzaListArr && pizzaListArr.loading) {
    return (
      <div className="flex justify-center items-center gap-16">
        <PizzaSkeleton />
        <PizzaSkeleton />
      </div>
    );
  }

  if (pizzaListArr) {
    console.log(pizzaListArr);
    return (
      <div className="flex justify-center items-center  mt-[40px]">
        {pizzaListArr &&
          pizzaListArr.data.data.map((el, i) => (
            <PizzaItem key={i} item={el} />
          ))}
      </div>
    );
  }
}

export default PizzaList;
